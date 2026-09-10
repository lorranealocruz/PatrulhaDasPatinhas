
// DENÚNCIA DE MAUS TRATOS

const formMausTratos =
    document.getElementById("formMausTratos");

if (formMausTratos) {

    formMausTratos.addEventListener("submit", function(event) {

        event.preventDefault();

        const protocolo =
            "PAT-MT-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(1000 + Math.random() * 9000);

        const mensagem =
            document.getElementById("mensagem");

        mensagem.textContent =
            "Denúncia registrada com sucesso! " +
            "Seu protocolo é: " +
            protocolo;

        formMausTratos.reset();

    });
}


// DENÚNCIA DE ABANDONO

const formAbandono =
    document.getElementById("formAbandono");

if (formAbandono) {

    formAbandono.addEventListener("submit", function(event) {

        event.preventDefault();

        const protocolo =
            "PAT-AB-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(1000 + Math.random() * 9000);

        const mensagem =
            document.getElementById("mensagem");

        mensagem.textContent =
            "Denúncia registrada com sucesso! " +
            "Seu protocolo é: " +
            protocolo;

        formAbandono.reset();

    });
}


// ACOMPANHAR MAUS TRATOS

const formConsultaMausTratos =
    document.getElementById("formConsultaMausTratos");

if (formConsultaMausTratos) {

    formConsultaMausTratos.addEventListener("submit", function(event) {

        event.preventDefault();

        const protocolo =
            document.getElementById("protocolo").value;

        const resultado =
            document.getElementById("resultado");

        resultado.textContent =
            "Consulta realizada para o protocolo " +
            protocolo +
            ".";
    });
}


// ACOMPANHAR ABANDONO

const formConsultaAbandono =
    document.getElementById("formConsultaAbandono");

if (formConsultaAbandono) {

    formConsultaAbandono.addEventListener("submit", function(event) {

        event.preventDefault();

        const protocolo =
            document.getElementById("protocolo").value;

        const resultado =
            document.getElementById("resultado");

        resultado.textContent =
            "Consulta realizada para o protocolo " +
            protocolo +
            ".";
    });
}