var btn = document.getElementById('envio')
btn.addEventListener('click', inserir)

function inserir(){

<<<<<<< HEAD
  let p1 =document.getElementById('page1')
  let p2 = document.getElementById('page2')

  p1.style.display = "none"
  p2.style.display = "flex"

  let codeHtml = document.getElementById('codeHtml').value
  p2.innerHTML = codeHtml

  let codeJs = document.getElementById('codeJs').value
  document.getElementById('js/script.js').innerHTML = codeJs
=======
    head.innerHTML += `    <link rel="stylesheet" href="css/main.css">`'

    var corpo = document.getElementById("corpo")
>>>>>>> 43e19cfd86b8bd082e00c303bba38f4f49f8e436

}