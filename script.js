function mostrarSenha() {
    
    const senhaInput = document.getElementById("senha");
    const icone = document.querySelector(".toggle-olho");
    const senhaEscondida = icone.classList.contains('fa-eye-slash');
  
    if (senhaEscondida) {
        senhaInput.type = 'password';
        icone.classList.remove('fa-eye-slash');
        icone.classList.add('fa-eye');
    } else {
        senhaInput.type = 'text';
        icone.classList.remove('fa-eye');
        icone.classList.add('fa-eye-slash');
    }
}
  