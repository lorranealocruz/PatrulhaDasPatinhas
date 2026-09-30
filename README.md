# 🐾 Patrulha das Patinhas

Projeto desenvolvido para conscientização e apoio à denúncia de **maus-tratos e abandono de animais**.

A aplicação apresenta uma interface web para registro de denúncias e acompanhamento de protocolos, simulando o funcionamento de um sistema de atendimento e fiscalização.

> **Observação:** este projeto é um protótipo frontend. As denúncias e consultas são simuladas e não possuem integração com banco de dados ou sistema real de fiscalização.

---

## 📌 Sobre o projeto

O **Patrulha das Patinhas** foi desenvolvido com o objetivo de criar uma interface simples e intuitiva para que o usuário possa:

* 🐶 Registrar denúncias de maus-tratos;
* 🐱 Registrar denúncias de abandono;
* 🔎 Consultar o andamento de uma denúncia por meio de um protocolo;
* 📍 Informar o local da ocorrência;
* 📮 Consultar automaticamente informações de endereço através do CEP;
* 📷 Enviar foto ou vídeo relacionado à denúncia;
* 🔔 Receber uma confirmação após o envio da denúncia.

---

## 🚀 Funcionalidades

### 🐾 Denúncia de Maus-Tratos

O usuário pode preencher um formulário contendo:

* Local da ocorrência;
* CEP;
* Logradouro;
* Bairro;
* Cidade;
* Tipo de animal;
* Descrição dos maus-tratos;
* Foto ou vídeo.

Após o envio, o sistema gera um protocolo simulado no formato:

```text
PAT-MT-2026-1234
```

---

### 🐕 Denúncia de Abandono

O usuário pode registrar uma denúncia de abandono informando:

* Local da ocorrência;
* CEP;
* Logradouro;
* Bairro;
* Cidade;
* Tipo de animal;
* Descrição da situação;
* Foto ou vídeo.

Após o envio, é gerado um protocolo simulado no formato:

```text
PAT-AB-2026-1234
```

---

### 🔎 Acompanhamento de denúncia

O projeto possui duas páginas para acompanhamento:

* **Acompanhar Denúncia de Maus-Tratos**
* **Acompanhar Denúncia de Abandono**

O usuário informa o número do protocolo e recebe uma tela de retorno simulada contendo:

* Número do protocolo;
* Status da denúncia;
* Data da consulta;
* Observação sobre a vistoria.

Exemplo:

```text
Status da Denúncia

Protocolo: PAT-MT-2026-1234

Status atual:
Em Andamento / Vistoria Agendada

Data da consulta: 30/09/2026
```

---

## 🌐 Consulta de CEP

O projeto utiliza a **API ViaCEP** para buscar automaticamente informações de endereço a partir do CEP informado pelo usuário.

A consulta preenche automaticamente:

* Logradouro;
* Bairro;
* Cidade.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* API ViaCEP
* Git
* GitHub

---

## 📁 Estrutura do projeto

```text
Patrulha-das-patinhas/
│
├── Assets/
│   ├── imagens
│   ├── ícone
│   └── arquivos de áudio
│
├── Home.html
├── Maus-tratos.html
├── Abandono.html
├── Acompanhar-maus-tratos.html
├── Acompanhar-abandono.html
├── Script.js
├── Style.css
└── README.md
```

---

## ▶️ Como executar o projeto

Como o projeto utiliza HTML, CSS e JavaScript, não é necessário instalar um servidor ou banco de dados para executar a versão atual.

### 1. Clone o repositório

```bash
git clone https://github.com/lorranealocruz/PatrulhaDasPatinhas.git
```

### 2. Entre na pasta

```bash
cd Patrulha-das-patinhas
```

### 3. Abra o projeto

Abra o arquivo:

```text
Home.html
```

em um navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code para executar o projeto localmente.

---

## 💡 Funcionamento atual

Este projeto é uma **simulação de frontend**.

Os protocolos são gerados utilizando JavaScript e as informações apresentadas na tela de acompanhamento são simuladas.

Atualmente não existe:

* Banco de dados;
* Backend;
* Sistema real de autenticação;
* Armazenamento permanente das denúncias;
* Integração com órgãos públicos;
* Consulta real do andamento das denúncias.

Em uma versão futura, essas funcionalidades poderiam ser implementadas utilizando uma API/backend e banco de dados.

---

## 🎯 Objetivo acadêmico

O projeto foi desenvolvido como atividade acadêmica com foco em:

* Desenvolvimento de interfaces web;
* HTML semântico;
* Estilização com CSS;
* Manipulação do DOM com JavaScript;
* Formulários;
* Validação de dados;
* Consumo de API;
* Organização de arquivos;
* Versionamento com Git e GitHub;
* Experiência e usabilidade do usuário.

---

## 👩‍💻 Projeto

**Patrulha das Patinhas**

Projeto acadêmico desenvolvido para a disciplina de MVP Frontend, do curso de Análise e Desenvolvimento de Sistemas da UNIFESO.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
