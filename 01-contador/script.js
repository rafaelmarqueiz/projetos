let valor = document.querySelector('#valor')
let botaoDecrementar = document.querySelector('#decrementar')
let botaoResetar = document.querySelector('#resetar')
let botaoIncrementar = document.querySelector('#incrementar')
contador = 0

botaoDecrementar.addEventListener('click', () => {
  contador--
  valor.innerHTML = contador
  if (contador<=0){
    contador = 0
    valor.innerHTML = contador
  }
})

botaoResetar.addEventListener('click', () => {
  contador = 0
  valor.innerHTML = contador
})

botaoIncrementar.addEventListener('click', () => {
  contador++
  valor.innerHTML = contador
})