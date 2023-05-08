function verificaValidadeDoValor(chute) {
    const numero = +chute

    if(numeroForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor inválido.</div>"
    }

    if (numeroDentroDoRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. O valor precisa ser maior que ${menorValor} e menor que ${maiorValor}.</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O valor secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O valor secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroDentroDoRange(numero) {
    return numero > maiorValor || numero < menorValor
}

recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente')
    window.location.reload()
})
