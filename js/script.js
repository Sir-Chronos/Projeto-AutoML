var btn = document.getElementById('envio')
btn.addEventListener('click', inserir)

function inserir(){

  let p1 =document.getElementById('page1')
  let p2 = document.getElementById('page2')

  p1.style.display = "none"
  p2.style.display = "flex"

  let codeHtml = document.getElementById('codeHtml').value
  p2.innerHTML = codeHtml

  let codeJs = document.getElementById('codeJs').value
  document.getElementById('js/script.js').innerHTML = codeJs

}