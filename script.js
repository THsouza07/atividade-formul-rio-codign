const form = document.getElementById('form-cadastro');

const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmarInput = document.getElementById('confirmar-senha');

// Funções auxiliares para exibir e limpar erros
function mostrarErro(input, mensagem) {
  const spanErro = input.nextElementSibling;
  spanErro.textContent = mensagem;
  input.classList.add('invalido');
}

function limparErro(input) {
  const spanErro = input.nextElementSibling;
  spanErro.textContent = '';
  input.classList.remove('invalido');
}

// Evento input: limpa o erro enquanto o usuário digita
const campos = [nomeInput, emailInput, senhaInput, confirmarInput];

campos.forEach((campo) => {
  campo.addEventListener('input', () => {
    limparErro(campo);
  });
});

// Evento submit: valida todos os campos antes de enviar
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formularioValido = true;

  // 1. Validação do Nome (3 letras ou mais)
  if (nomeInput.value.trim().length < 3) {
    mostrarErro(nomeInput, 'O nome deve ter 3 letras ou mais.');
    formularioValido = false;
  }

  // 2. Validação do E-mail (deve conter @)
  if (!emailInput.value.includes('@')) {
    mostrarErro(emailInput, 'Digite um e-mail válido contendo @.');
    formularioValido = false;
  }

  // 3. Validação da Senha (8 caracteres ou mais)
  if (senhaInput.value.length < 8) {
    mostrarErro(senhaInput, 'A senha deve ter 8 caracteres ou mais.');
    formularioValido = false;
  }

  // 4. Validação da Confirmação (igual à senha)
  if (confirmarInput.value !== senhaInput.value || confirmarInput.value === '') {
    mostrarErro(confirmarInput, 'As senhas não coincidem.');
    formularioValido = false;
  }

  // Se tudo estiver certo
  if (formularioValido) {
    alert('Cadastro realizado com sucesso!');
    form.reset();
  }
});