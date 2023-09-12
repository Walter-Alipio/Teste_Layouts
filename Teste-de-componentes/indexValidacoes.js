function validarCPF() {
    var telefone = document.getElementById("cpf").value;
    var btnEnviar = document.getElementById("ConsultaDados");
    var regex = /^[0-9]{11}$/; // Expressão regular para validar o CPF

    if (regex.test(telefone)) {
        // O número de telefone é válido
        document.getElementById("cpfValido").style.display = "block";
        document.getElementById("cpfInvalido").style.display = "none";
        btnEnviar.disabled = false;
    } else {
        // O número de telefone é inválido
        document.getElementById("cpfValido").style.display = "none";
        document.getElementById("cpfInvalido").style.display = "block";
        btnEnviar.disabled = true;
    }
}

function validarTelefone() {
    var telefone = document.getElementById("Telefone").value;
    var btnEnviar = document.getElementById("ConsultaDados");
    var regex = /^[1-9]{2}[0-9]{9}$/; // Expressão regular para validar o telefone celular

    if (regex.test(telefone)) {
        // O número de telefone é válido
        document.getElementById("telefoneValido").style.display = "block";
        document.getElementById("telefoneInvalido").style.display = "none";
        btnEnviar.disabled = false;
    } else {
        // O número de telefone é inválido
        document.getElementById("telefoneValido").style.display = "none";
        document.getElementById("telefoneInvalido").style.display = "block";
        btnEnviar.disabled = true;
    }
}