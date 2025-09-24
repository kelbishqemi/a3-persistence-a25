// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  
 /* const input = document.querySelector( "#idea" ),
        json = { "idea": input.value },
        body = JSON.stringify( json ) */

  const idea = document.getElementById("idea").value
  const reason = document.getElementById("reason").value
  const desire = document.getElementById("desire").value

  const newSubmission = { idea, reason, desire }

  const response = await fetch("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSubmission)
  })

  const fin = await response.json()
  const _id = fin.insertedId

  const table = document.querySelector(".sectionFour table")
  addRow(_id, idea, reason, desire, table)

  document.getElementById("idea").value = ""
}

function addRow(_id, idea, reason, desire, table) {
  const tr = document.createElement("tr")

  const tdIdea = document.createElement("td")
  tdIdea.innerText = idea
  tr.appendChild(tdIdea)

  const tdReason = document.createElement("td")
  tdReason.innerText = reason
  tr.appendChild(tdReason)

  const tdDesire = document.createElement("td")
  tdDesire.innerText = desire
  tr.appendChild(tdDesire)

  const tdPriority = document.createElement("td")
  tdPriority.innerText = makePriority(reason, desire)
  tr.appendChild(tdPriority)

  const tdButtons = document.createElement("td")

  const delButton = document.createElement("button")
  delButton.innerText = "remove"
  delButton.onclick = function () {
    fetch("/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id })
    }).then(() => tr.remove())
  }

  const editButton = document.createElement("button")
  editButton.innerText = "edit"
  editButton.onclick = function () {
    const newIdea = prompt("new idea:", idea)
    if (!newIdea) return

    fetch("/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, idea: newIdea })
    }).then(() => {
      tdIdea.innerText = newIdea
    })
  }

  tdButtons.appendChild(editButton)
  tdButtons.appendChild(delButton)
  tr.appendChild(tdButtons)

  table.appendChild(tr)
}

function makePriority(reason, desire) {
  if (reason === "class") {

    return "high"

  } else if (reason === "portfolio") {

    if (desire === "large") {
      return "high"
    } else {
      return "medium"
    }

  } else {

    if (desire === "large") {
      return "medium"
    } else {
      return "low"
    }

  }
}
async function loadUp() {
  const response = await fetch("/docs")
  const ideas = await response.json()

  const table = document.querySelector(".sectionFour table")

  ideas.forEach(({ _id, idea, reason, desire }) => {
    addRow(_id, idea, reason, desire, table)
  })
}

window.onload = function () {
  document.querySelector("#submit").onclick = submit
  loadUp()

  async function showUser () {
  const currentusername = document.getElementById('showUsername')
  if (currentusername) {
    try {
      const response = await fetch ('/currentUser')
      const data = await response.json()
      if (data.username) {
        currentusername.innerText = `${data.username}`
      }
    } catch (err) {
      console.error(err)
    }
  }
}
showUser()

    document.getElementById('logoutButton').onclick = function() {
    window.location.href = '/logout'
  }
}