if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./singup.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}

function showLoginDialog() {
    document.getElementById("login-dialog").show();
  }
  function closeLoginDialog() {
    // Obtém o elemento `login-dialog`
    const loginDialog = document.getElementById("login-dialog");
  
    // Fecha o elemento `login-dialog`
    loginDialog.close();
  }
  
  