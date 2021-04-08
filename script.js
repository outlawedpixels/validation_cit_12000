//username: coolStudent123
//password: coolStudent123

// attempt for date subscript was achived

// FORM VARIABLES
var username = document.getElementById('username')
var password = document.getElementById('password')
var form = document.getElementById('form')
var errorElement = document.getElementById('error')

//NAVPAGE VARIABLES
var nav = document.getElementById('nav')
var display = document.getElementById('display')
var info = document.getElementById('info')
var logoutButton = document.getElementById('logout')

//NOTE VARIABLES
var noteForm = document.getElementById('noteForm')
var noteButt = document.getElementById('noteButt')

//DEFAULT VISIBILITY
function defaultVis()
{
  nav.style.visibility = "hidden"
  display.style.visibility = "hidden"
  info.style.visibility = "hidden"
  noteForm.style.visibility = "hidden"
  noteButt.style.visibility = "hidden"
  logoutButton.style.visibility = "hidden"

  form.style.visibility = "visible"
}

defaultVis()

// NAV PAGE CREATION
function navPage()
  {
    nav.style.visibility = "visible"
    display.style.visibility = "visible"
    info.style.visibility = "visible"
    logout.style.visibility = "visible"

    form.style.visibility = "hidden"
  }

function homePage()
  {
    noteForm.style.visibility = "hidden"
    noteButt.style.visibility = "hidden"
  }

function aboutPage()
  {
    noteForm.style.visibility = "hidden"
    noteButt.style.visibility = "hidden"
  }

function notePage()
  {
    noteForm.style.visibility = "visible"
    noteButt.style.visibility = "visible"
  }
     
  var pages =
    [
      {
        name: "Home",
        content: "Home",
        info: "Welcome to my GitHub page. Nothing to see here."
      },
      {
        name: "About",
        content: "About me",
        info: "My name is Coleman M... I've said too much."
      },
      {
        name: "Notes",
        content: "Notes",
        info: "Insert any arrangement of letters here. Make sure your arrangement is more than one character long."
      }
    ]

    for(var i = 0; i < pages.length; i++)
      {
        createPage(pages[i])
      }
    function createPage(pg)
        {
          var button = document.createElement("button")
          button.addEventListener("click", function()
        {
          contentWrite(pg.content, pg.info, pg.name)
        })
            button.innerHTML = pg.name
            nav.appendChild(button)
          }
    function contentWrite(wd, inf, pg)
        { 
          display.innerHTML = wd
          info.innerHTML = inf
 
          if (pg == "Home")
            {
              homePage()
            }
          if (pg == "About")
            {
              aboutPage()
            } 
          if (pg == "Notes")
            {
              notePage()
            }
          }  

// NOTE PAGE
var list = []
// var dList = []

function render()
  {
    for(var i = 0; i < list.length; i++)
     {
      var ele = document.createElement('div')
      ele.innerHTML = list[i]
      document.body.querySelector(".noteList").appendChild(ele)
      // var dEle = document.createElement('div')
      // dEle.innerHTML = dList[i]
      // document.body.querySelector(".noteDate").appendChild(dEle)
     }
  }

function noteSubmit()
 {
  var noteInput = document.body.querySelector(".noteInput").value
  var noteList = document.body.querySelector(".noteList")
  var noteError = document.body.querySelector(".noteError")
  var noteImpInput = document.body.querySelector(".importance").value
  // var noteDate = document.body.querySelector(".noteDate")
  // var date = new Date()
  
  if (noteInput.length > 1)
    {
      noteError.innerHTML = ""
      noteList.innerHTML = ""
      // noteDate.innerHTML = ""
      list.push(noteImpInput+ " " +noteInput)
      // dList.push(date)
    }
     else
    {
      noteError.innerHTML = "Note must be more than one character long."
      noteList.innerHTML = ""
    }
   render()
 }

noteButt.addEventListener("click", function()
  {
    noteSubmit()
  })

logout.addEventListener('click', function()
  {
    defaultVis()
  })

// FORM VALIDATION
form.addEventListener('submit', (e) => 
  {
    let messages = []
    if (username.value !== "coolStudent123")
      {
        messages.push('Valid username required')
      }
    if (password.value !== "coolStudent123")
      {
        messages.push('Valid password required')
      }
    if (username.value == "coolStudent123" && password.value == "coolStudent123")
      {
        errorElement.innerText = ""
        username.value = ""
        password.value = ""
        navPage()
        e.preventDefault()
      }
  
  if (messages.length > 0)
      {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
      }
})

// coleman maxwell
// I tried to make it so that the date would appear below the note but there was formatting issues. It was getting late and I decided to call it quits.

//username: coolStudent123
//password: coolStudent123