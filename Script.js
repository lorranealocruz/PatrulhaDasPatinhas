
// DENÚNCIA DE MAUS TRATOS

const formMausTratos =
    document.getElementById("formMausTratos");

if (formMausTratos) {

    formMausTratos.addEventListener("submit", function(event) {

        event.preventDefault();

        // Toca o som de miado ao enviar com sucesso
        const somMiado = new Audio('Assets/miado.mp3.mp3'); 

        somMiado.play().catch(error => {
            console.log("Áudio aguardando interação do usuário", error);
        });

        const protocolo =
            "PAT-MT-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(1000 + Math.random() * 9000);

        // Exibe mensagem de sucesso
        alert(
            "Denúncia registrada com sucesso!\n\n" +
            "Seu protocolo é: " + protocolo
        );

        formMausTratos.reset();

    });
}


// DENÚNCIA DE ABANDONO

const formAbandono =
    document.getElementById("formAbandono");

if (formAbandono) {

    formAbandono.addEventListener("submit", function(event) {

        event.preventDefault();

        // Toca o som de latido ao enviar com sucesso
        const audioLatido = new Audio('Assets/latido.mp3.mp3');

        audioLatido.play().catch(error => {
            console.log("Áudio aguardando interação do usuário", error);
        });

        const protocolo =
            "PAT-AB-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(1000 + Math.random() * 9000);

        // Exibe mensagem de sucesso
        alert(
            "Denúncia registrada com sucesso!\n\n" +
            "Seu protocolo é: " + protocolo
        );

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
            document.getElementById("protocolo").value.trim();

        const resultado =
            document.getElementById("resultado");

        if (!protocolo) {

            resultado.innerHTML =
                "<span style='color: red;'>Por favor, insira o número do protocolo.</span>";

            return;
        }

        resultado.innerHTML = `
            <div style="
                background-color: #f9f9f9;
                border: 2px solid #ff7f50;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                text-align: left;
            ">

                <h3 style="
                    color: #ff7f50;
                    margin-bottom: 10px;
                ">
                    Status da Denúncia
                </h3>

                <p>
                    <strong>Protocolo:</strong> ${protocolo}
                </p>

                <p>
                    <strong>Status atual:</strong>
                    <span style="
                        color: green;
                        font-weight: bold;
                    ">
                        Em Andamento / Vistoria Agendada
                    </span>
                </p>

                <p>
                    <strong>Data da consulta:</strong>
                    ${new Date().toLocaleDateString('pt-BR')}
                </p>

                <p>
                    <strong>Observação:</strong>
                    O caso foi cadastrado com sucesso no sistema da
                    Patrulha das Patinhas e a fiscalização irá até o local
                    averiguar a denúncia de maus-tratos.
                </p>

            </div>
        `;

        formConsultaMausTratos.reset();

    });
}


// ACOMPANHAR ABANDONO
const formConsultaAbandono = document.getElementById("formConsultaAbandono");

if (formConsultaAbandono) {
    formConsultaAbandono.addEventListener("submit", function(event) {
        event.preventDefault();

        const protocolo = document.getElementById("protocolo").value;
        const resultado = document.getElementById("resultado");

        if (!protocolo.trim()) {
            resultado.innerHTML = "<span style='color: red;'>Por favor, insira o número do protocolo.</span>";
            return;
        }

        // Exibindo a tela mockada com o retorno simulado
        resultado.innerHTML = `
            <div style="background-color: #f9f9f9; border: 2px solid #ff7f50; padding: 20px; border-radius: 8px; margin-top: 20px; text-align: left;">
                <h3 style="color: #ff7f50; margin-bottom: 10px;">Status da Denúncia</h3>
                <p><strong>Protocolo:</strong> ${protocolo}</p>
                <p><strong>Status atual:</strong> <span style="color: green; font-weight: bold;">Em Andamento / Vistoria Agendada</span></p>
                <p><strong>Data da consulta:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                <p><strong>Observação:</strong> O caso foi cadastrado com sucesso no sistema da Patrulha das Patinhas e a fiscalização irá até o local averiguar a denúncia de abandono.</p>
            </div>
        `;
    });
}
// Função para buscar o CEP na API do ViaCEP
function consultarCep(cep) {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
            } else {
                alert("CEP não encontrado.");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP:", error));
}

// Função para tocar o som de latido ao enviar
function enviarComSom() {
    const audioLatido = new Audio('Assets/latido.mp3.mp3');
    audioLatido.play().catch(e => console.log("Áudio aguardando interação", e));

    alert("Denúncia registrada com sucesso!");
}