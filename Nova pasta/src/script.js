var btn = document.getElementById("btn")
btn.addEventListener('click', gerar)

var estado = 0


function gerar() {

    //Verifica o estado atual e se for zero imprime o valor
    if (estado == 0) {

        //recebe o html e script e os armazena
        let html = document.getElementById("html").value
        let js = document.getElementById("js").value

        //imprime o novo html
        document.getElementById("code").innerHTML = html
        //imprime o novo script
        let script = document.getElementById("userJs")
        script.innerHTML = js

        //coloca o estado em 1
        estado = 1
    }


    // se o estado for 1 reseta a página
    else {
        document.getElementById("code").innerHTML = `    <div>
            <h1>HTML</h1>
            <p>Insira o corpo de seu HTML aqui.</p>
            <textarea id="html" cols="30" rows="20"></textarea>
        </div>
        <div>
            <h1>HTML</h1>
            <p>Insira o corpo de seu HTML aqui.</p>
            <textarea id="js" cols="30" rows="20"></textarea>
        </div>`

        estado = 0

        let script = document.getElementById("userJs")
        script.innerHTML = ``
    }


}
