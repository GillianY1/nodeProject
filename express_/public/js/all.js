const send = document.getElementById('send')
const content = document.getElementById('content')

send.addEventListener('click', (e) => {
  e.preventDefault()

  const str = content.value
  // the following console.log() will on client console
  console.log(str)
  const xhr = new XMLHttpRequest()
  xhr.open('post', '/searchAJAX')
  // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhr.setRequestHeader('Content-type', 'application/json')
  // ...?contnet=213&option2=8989
  const data = JSON.stringify({ "content" : str , "list" : ['apple', 'banana', 'cake','crep' ] })
  xhr.send(data)
  xhr.onload = () => {
    console.log(xhr.responseText) // get the response , will get the response from search.ejs:  hello world on client console
  }
})
