# Tasks Help

### Visão Geral
Este projeto é uma plataforma de pedido de tarefas e execução delas, mediante a pagamento. Permitindo um sistema freelance através de contratos inteligentes.

### Objetivo
O objetivo do projeto é conectar e, por consequência, e integrar pessoas que tem necessidades específicas com pessoas que tem as habilidades necessárias para executa-las. Dessa forma, constituindo-se de uma ferramenta que contribui para facilitar o dia a dia e uma possível fonte de renda para o usário.

### Tecnologias Utilizadas

- **Vite**: Framework de desenvolvimento web para o front-end em React.
- **Solidity**: Linguagem de programação para contratos inteligentes na Ethereum.
- **Wagmi**: Biblioteca para trabalhar com contratos inteligentes e interagir com a blockchain.
- **RainbowKit**: Conjunto de ferramentas para integração de carteiras.
- **Vercel**: Plataforma para estruturação e conexão do banco de dados.
- **Supabase**: Banco de dados usado no projeto.
- **Template Ethereum 2024**: Template para facilitar o uso e a conexão do hardhat e do frontend (desenvolvido em React).

### Funcionalidades

- **Pedido de tarefas:** Permite que os usuários enviem as suas necessidades e sejam respondidos por pessoas com habilidade para tal.
- **Resolução de tarefas:** Permite que os usuários resolvam tarefas mediante a um pagamento.
- **Integração com Carteiras:** Usa o RainbowKit para conectar carteiras de criptomoedas.
- **Interação com Contratos:** Usa o Wagmi para facilitar a interação com contratos inteligentes.

### Link de Deploy
[Tasks Help](https://hackhathon-interno-template.vercel.app/)

### Instalação e Execução Local

1. Clone este repositório:
    ```bash
    git clone https://github.com/kiyochii/hackhathonInternoTemplate.git

    cd hackhathonInternoTemplate//
    ```
2. Instale as dependências na pasta do projeto:
    ```bash
    cd hardhat
    npm i

    cd ..

    cd frontend
    npm i
   ```
3. Inicie o servidor localmente:
   ```bash
   npm run dev

   http://localhost:5173/
   ```