Assignment 3 - Persistence: Two-tier Web Application with Database, Express server, and CSS template
===
## CS4241 Assignment 3 -- Drawing Ideas List

https://a3-kelseybishqemi.onrender.com


My project is a an app where you can add, delete, and edit drawing ideas. The user writes in their idea, selects what it's for and their desire to do it, and it will be added to the list with an additional "priority" section. My largest challenges were not really for actually building the application itself, but rather implementing the client-server communication and the login feature. Figuring out how those worked was a nightmare that I never want to relive.

It's got a server written in with express now instead of exclusively node, a results page that shows a user's data, forms that can be assed, deleted, and modified, and data stored on mongodb, all of which are associated with particular users (login/signup and logout functions are provided)

For the authentication strategy I went off of the example given in the "using.cookies" file in the class guides github to use dummy accounts to login. I went with this option because I really needed a starting off point and it made sense to me. I decided to avoid OAuth like the plague because it looked unbelievably difficult and I didn't want to put myself through that.

I used Bootstrap as my CSS framework as I have used it very briefly in the past. I didn't really remember anything about it but knowing the name was good enoigh for me. I completely cut out the reference of my CSS file, opting to refer to style only in the html file (I did not override any of the framework's CSS).

I got at least a 91% on all my lighthouse tests. I had gotten a perfect 100 on all tests on my main html file but unfortunately the login page is causing issues and not giving me a full score :(

I used the following middleware packages:

- express.json() - parses the request bodies
- express.urlencoded({ extended: true }) - gets data or GET requests
- express.static('public') - delivers static files

- custom function (server.improved.js ln 17) - this checks that the person accessing the site is logged into an account before allowing them to see the main page. If they're not logged in, they are redirected to the login page.
- custom function (server.improved.js ln 96) - this checks that the database connetion exists by using the name of the database (collection)

WARNING: I stored the usernames and passwords directly into my database because I was lazy and it was the easiest way to implement a signup feature. I'm sure it goes without saying but I really want to reiterate, like please don't use a username/password you use for actual sites, it's just a terrible idea

Also I am writing this so very late at night I really hope I didn't forget to write something in


### Design/Evaluation Achievements
- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative:

- Provide informative, unique page titles
- Use headings to convey meaning and structure
- Keep content clear and concise
- Provide sufficient contrast between foreground and background
- Ensure that interactive elements are easy to identify
- Ensure that form elements include clearly associated labels
- Use headings and spacing to group related content
- Associate a label with every form control
- Identify page language and language changes
- Ensure that all interactive elements are keyboard accessible
- Create designs for different viewport sizes
- Provide clear instructions

- **Design Achievement 2**: My site follows the CRAP principles by:

- Contrast: As compared to my previous submission, I kept the colors as simple but different as possible to provide an ample contrast between them. I kept the background a simple white, while making text black and blue, which is easy to read against the bright background. I also added a light highlight color to add some extra contrast between the colors already being used, and since yellow is on the opposite end of the color wheel to blue, it's easier to differentiate. In addition, I added a light gray on the cells of the table for the user to more easily identify the difference between the table and the background. Together it brings a look that I believe shows contrast but also isn’t too hard on the eyes.

- Repetition: I tried keeping different aspects of my project as consistent as possible. I kept the color options as minimal as I could specifically so that the few colors I did use popped out and were consistently used. The headers providing specific instructions on both the login and main page are blue. Buttons not immediately associated with editing the existing information in the table for the results section are black. Otherwise, the rest of the text is a dark gray. I kept the font the same everywhere for a unified look, and kept the default font as it was a sans serif font, which makes it easier for people with dyslexia to read. It was a little difficult to keep repeating things since my project is so barebones, but hopefully the repetition comes across.

- Alignment: I made sure all information (except for user inputted text/ username display and logout button) is centered. It was important to me that the table in particular was aligned correctly, so it was easy for the user to see what item belonged to what category. I also used alignment to move attention away from the login button by putting it in the corner. I did this because I wanted the main focus of the app to be the app itself, not the fact that the user has an account. I felt that it was a solid decision as it’s not distracting but since the button is a very bold color it isn’t hidden on the page. With the app having very little information to display, there was no need to think of clever ways to align the text to emphasize specific information, so I got to focus on alignment to make it look nice/easy to read. 

- Proximity: I used proximity to properly space out the information on my pages. I used page breaks to space things out nicely and make them easy to read, but I also tried to keep related information close together. Particularly with buttons, I added page breaks so they were not basically glued to the text it was close to. I also made it so the results are a little farther down the page than the form inputs. This was so that there was a visual separation/differentiation between the user input and the page generation. There’s also the proximity of the username display and the logout button. Them being right next to each other helps show quickly that the user is logged in. While that could be assumed by just having only one of these elements, them being right next to each other shows the user this information quickly and makes it so they don’t have to look in multiple spots of the page to get this information.