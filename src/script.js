var btn = document.getElementById("run")
btn.addEventListener("click", inserir)

function inserir () {

    //Muda  estilo da página

    let estilo = document.getElementById("estilo")
    estilo.setAttribute("href", "css/main.css")

    // Troca o botão para reset

    let header = document.getElementById("header")
    header.innerHTML = `<input id="reset" type="button" value="Reset">`

    // ocultar página 1 e exibir página 2

    let pag1 = document.getElementById("page1")
    let pag2 = document.getElementById("page2")    

    pag1.style.display = "none"
    pag2.style.display = "flex"

    //inserir código em HTML

    let codeHtml = document.getElementById("codeHtml").value
    pag2.innerHTML = codeHtml

    //inserir código em JavaScript

    let codeJs = document.getElementById("codeJs").value
    document.getElementById("jsUser").innerHTML = codeJs


    //Botão de reset

    var btn2 = document.getElementById("reset")
    btn2.addEventListener("click", reset)

    function reset () {

        // ocultar página 1 e exibir página 2

        let estilo = document.getElementById("estilo")
        estilo.setAttribute("href", "css/style.css")

        let pag1 = document.getElementById("page1")
        let pag2 = document.getElementById("page2")    
    
        pag1.style.display = "flex"
        pag2.style.display = "none"

        //Retorna o botão run

        let header = document.getElementById("header")
        header.innerHTML = `<input id="run" type="button" value="CARREGAR">`

        var btn = document.getElementById("run")
        btn.addEventListener("click", inserir)

}
}

/*
    let codeJs =document.getElementById("codeJs").value

    var tagScript = document.createTextNode(codeJs)

    tagScript.appendChild(textScript)
    document.body.appendChild(tagScript)
*/