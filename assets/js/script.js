/**
 * Projeto 1: Contador Infinito
 *
 * Contardor simples que conta de até 'infinito'
 */
var currentNumberWrapper1 = document.getElementById('currentNumber1')

var currentNumber1 = 0

function infinityIncrement() {
  currentNumber1 += 1
  currentNumberWrapper1.innerHTML = currentNumber1
}

function infinityDecrement() {
  currentNumber1 -= 1
  currentNumberWrapper1.innerHTML = currentNumber1
}

/**
 * Desafio 2: Contador de 0 a 10
 *
 * Crie CONDICIONAIS para limitar o CurrentNumber de 0 à 10
 */
var currentNumberWrapper2 = document.getElementById('currentNumber2')
var currentNumber2 = 0

var buttonIncrement = document.getElementById('adicionar')
var buttonDecrement = document.getElementById('subtrair')
buttonDecrement.disabled = true

function limitedIncrement() {
  currentNumber2 += 1
  currentNumberWrapper2.innerHTML = currentNumber2

  if (currentNumber2 >= 10) {
    buttonIncrement.disabled = true
  }
  if (currentNumber2 > 0) {
    buttonDecrement.disabled = false
  }
}

function limitedDecrement() {
  currentNumber2 -= 1
  currentNumberWrapper2.innerHTML = currentNumber2

  if (currentNumber2 <= 0) {
    buttonDecrement.disabled = true
  }
  if (currentNumber2 < 10) {
    buttonIncrement.disabled = false
  }
}

/**
 * Desafio 3: Contador
 *
 * Mude o CurrentNumber para vermelho SE for negativo
 */
var currentNumberWrapper3 = document.getElementById('currentNumber3')

var currentNumber3 = 0

function infinityIncrementV2() {
  currentNumber3 += 1
  currentNumberWrapper3.innerHTML = currentNumber3
  if (currentNumber3 >= 0) {
    currentNumberWrapper3.style.color = 'black'
  }
}

function infinityDecrementV2() {
  currentNumber3 -= 1
  currentNumberWrapper3.innerHTML = currentNumber3
  if (currentNumber3 < 0) {
    currentNumberWrapper3.style.color = 'red'
  }
}
