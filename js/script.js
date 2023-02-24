var envio = document.getElementById("envio")
envio.addEventListener("click", janela)

function janela(){
    var head = document.getElementById("head")

    head.innerHTML += `    <link rel="stylesheet" href="css/main.css">`'

    var corpo = document.getElementById("corpo")

    corpo.innerHTML =`    <!-- Instruções basicas: Copie e cole os elementos do seu codigo para este em seus respectivos locais.
    ADENDO: copie seu codigo da forma solicitada nos exemplos para a formatação permanecer correta
    Dica: Copie ELEMENTO por ELEMENTO para que possa facilitar sua tranferencia sem erros -->
<main id="principal">
  <section class="titulo">
    <!-- Cole ou insira abaixo o enunciado do exercicio. ex: 
            <h1>Nome do exercicio</h1><br>
            <p><b>Exercício nº:</b> o usuário insere duas notas...</p> -->
    <h1>Atribuição e Operadores Aritméticos</h1>
    <br />
    <p>
      <b>Exercício 01:</b> o usuário insere duas notas, uma em cada campo
      abaixo, e ao <b>clicar</b> no botão calcular, a média entre as duas
      notas deve ser exibida.
    </p>
    <br />
  </section>
  <section class="inputOutput">
    <div class="Input">
      <!-- Cole ou insira abaixo os inputs do exercicio. ex:
                <label for="n1">N1</label>
                <input type="text" id="n1" value="">
                <label for="n2">N2</label>
                <input type="text" id="n2" value="">
                  <p>:</p>-->
      <label for="n1">N1</label>
      <input type="text" id="n1" value="">
      <label for="n2">N2</label>
      <input type="text" id="n2" value=""> 
      <p>:</p>
    </div>
    <div class="output">
      <!-- Insira aqui os elementos do output. ex: 
      <span id="result">0</span> -->
      <span id="result">0 </span>
    </div>
    <div class="buttons">
      <!-- Cole ou insira a baixo os botões do exercicio
                <input type="button" id="btnCalcular" value="Calcular"> 
                <input type="button" id="btnCalcular2" value="Calcular2"> -->
      <input type="button" id="btnCalcular" value="Calcular" />
    </div>
  </section>
</main>`
}