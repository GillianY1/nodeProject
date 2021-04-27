const send = document.getElementById('send')
const content = document.getElementById('content')

send.addEventListener('click', (e) => {
  e.preventDefault()

  const str = content.value
  console.log(str)
  const xhr = new XMLHttpRequest()
  xhr.open('post', '/searchAJAX')
  xhr.setRequestHeader('Content-type', 'applicaiton/x-www-form-urlencoded')
  // ...?contnet=213&option2=8989
  const data = 'content=' + str
  xhr.send(data)
  xhr.onload = () => {
    console.log(xhr.responseText) // get the response , will get the response from search.ejs:  hello world on console 
  }
})
