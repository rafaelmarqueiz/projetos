let email = document.querySelector('#email') 
let password = document.querySelector('#password')
let submit = document.querySelector('#submit')
let criarConta = document.querySelector('#criarConta')

submit.addEventListener('click', ()=>{
  if (email.value == false || password.value == false) {
    alert('Por favor, preencha todos os campos acima!')
  }
  else {
    alert('Está tudo OK!')
  }
})

criarConta.addEventListener('click', ()=>{
  alert('Não é possível criar novas contas. Servidor está fora do ar!')
})

