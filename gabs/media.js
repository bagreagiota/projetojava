//Cria referência ao form e elementos de resposta do programa

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um ouvinte

form.addEventListener("subimit",(e) =>{ 
    e.preventDefault() //evita o envio do form

    const nome = form.inNone.value    //obtem o nome
    const nota1 = Number(form.inNota1.value)   //obtem a primeira nota
    const nota2 = Number(form.inNota2.value)    //obtem a segunda nota
    const media = (nota1 + nota2)/2  //media das notas
    resp1.innerText =  `Media das Notas ${media.toFixed(2)}`

    //cria as condicionais

    if(media >=7) {
        resp2.innerText =`Parabéns ${nome}! Voce foi aprovado(a)`
        resp2
    }
})