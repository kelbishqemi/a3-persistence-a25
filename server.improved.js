require('dotenv').config()


// server
const express = require('express'),
    cookie = require( 'cookie-session' ),
    app = express();

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( cookie({ name: 'session', keys: [process.env.USER_SECRET_1, process.env.USER_SECRET_2]}))

const file = ['/login.html', '/login', '/signup', '/logout']

app.use ((req, res, next) => {

if (req.session.login || file.includes(req.path)) {
        next()
    } else {
        res.redirect('/login.html')
    }
})

app.use( express.static( 'public' ) )

const uri = `mongodb+srv://${process.env.USERN}:${process.env.PASS}@${process.env.HOST}/?retryWrites=true&w=majority&appName=myCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let collection = null
let colUsers = null

async function run() {
  try {
    await client.connect()  
    collection = client.db("appdata").collection("ideas")
    colUsers = client.db("appdata").collection("users")

    // Send a ping to confirm a successful connection
    await client.db("appdata").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

 } catch (err) {
    console.log("err:", err)
    client.close()
 }
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await colUsers.findOne({username})

    if (user && user.password === password) {
        req.session.login = true
        req.session.username = username
        res.redirect('/index.html')
    } else {
        res.sendFile( __dirname + '/public/login.html' )
    }
  } catch (err) {
    console.error(err)
  }

})

app.post('/signup', async (req, res) => {
    const { username, password } = req.body

    try {
        const exists = await colUsers.findOne({username})
        if (exists) {
            return res.status(400).send('That name has been taken :(')
        }
        await colUsers.insertOne({username, password})

        req.session.login = true
        req.session.username = username

        res.redirect('/index.html')
    } catch (err) {
        console.error(err)
    }
})

app.use( (req,res,next) => {
    if( collection !== null ) {
        next()
    } else {
        res.status( 503 ).send()
    }
})

app.get("/docs", async (req, res) => {
    if (!req.session.login) {
        return res.redirect('/login.html')
    }

    const docs = await collection.find({
        username: req.session.username
    }).toArray()

        res.json( docs )
})

/*app.post( '/submit', ( req, res ) => {
  // our request object now has a 'json' field in it from our previous middleware
  res.writeHead( 200, { 'Content-Type': 'application/json'})
  res.end( req.json )
}) */

app.post( '/submit', async (req,res) => {
    if (!req.session.login) {
        return res.redirect('/login.html')
    }

    const idea = {
        username: req.session.username,
        idea: req.body.idea,
        reason: req.body.reason,
        desire: req.body.desire
    }

    const result = await collection.insertOne( idea )
    res.json( result )
})

app.post( '/delete', async (req,res) => {
    if (!req.session.login) {
        return res.redirect('/login.html')
    }

    const result = await collection.deleteOne({ 
        _id: new ObjectId( req.body._id ),
        username: req.session.username
    })
  
    res.json( result )
})

app.post( '/update', async (req,res) => {
    if (!req.session.login) {
        return res.redirect('/login.html')
    }

    const result = await collection.updateOne(
        { _id: new ObjectId( req.body._id ), username: req.session.username},
        { $set:{ idea:req.body.idea } }
    )

    res.json( result )
})

app.get('/logout', (req, res) => {
    req.session = null
    res.redirect('/login.html')
})

app.get('/currentUser', (req, res) => {
    if (req.session && req.session.login) {
        res.json({username: req.session.username})
    }
})

run().catch(console.dir);

const listener = app.listen( process.env.PORT || 3000 )