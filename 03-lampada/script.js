let poweronoff = document.querySelector('#poweronoff')
let lampada = document.querySelector('#lampada')
let ligaDesliga = false

poweronoff.addEventListener('click', ()=>{
  if(ligaDesliga==false) {
    lampada.src="lampada-on.jpg"
    ligaDesliga = true
    poweronoff.innerHTML = 'Desligar'
  }
  else if(ligaDesliga==true) {
    lampada.src="lampada-apagada.jpg"
    ligaDesliga = false
    poweronoff.innerHTML = 'Ligar'
  }
})