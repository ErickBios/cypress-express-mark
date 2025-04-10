📌 Cypress Express Mark
Projeto de automação de testes com Cypress aplicado em um gerenciador de tarefas fictício: Mark L.
Este projeto foi desenvolvido como parte de um curso prático de testes automatizados para aplicações web.

🚀 Sobre o Projeto
Este repositório contém testes E2E (end-to-end) automatizados com Cypress, aplicando boas práticas de automação para garantir qualidade e estabilidade de uma aplicação frontend simulada.

O objetivo é demonstrar o uso do Cypress na prática — desde a configuração do ambiente até a execução de testes e geração de relatórios com evidências (prints e vídeos).

🛠️ Tecnologias Utilizadas
Cypress

Node.js

Yarn

Express.js (backend fictício da aplicação)

⚙️ Como Rodar o Projeto
1. Clone o repositório:
bash
Copiar
Editar
git clone https://github.com/ErickBios/cypress-express-mark.git
cd cypress-express-mark
2. Instale as dependências:
bash
Copiar
Editar
yarn install
3. Inicie a aplicação:
bash
Copiar
Editar
yarn start
A aplicação estará disponível em: http://localhost:3000

4. Rode os testes com o Cypress:
bash
Copiar
Editar
yarn cypress:open
Ou, para rodar em modo headless:

bash
Copiar
Editar
yarn cypress:run
🧪 Estrutura dos Testes
Testes automatizados simulando ações do usuário na interface

Validação de comportamento esperado

Geração de evidências: prints e vídeos

Separação de cenários e dados de teste

📂 Estrutura do Projeto
bash
Copiar
Editar
cypress-express-mark/
├── cypress/
│   ├── e2e/               # Cenários de teste
│   ├── fixtures/          # Massa de dados
│   ├── screenshots/       # Evidências de testes
│   └── videos/            # Gravações dos testes
├── cypress.config.js      # Configuração do Cypress
├── package.json
└── README.md
📸 Evidências de Testes
Ao final de cada execução, são geradas evidências automáticas:

🖼️ Screenshots de falhas

📽️ Vídeos dos testes executados

👨‍💻 Autor
Feito com 💻 por Erick Bispo
LinkedIn | GitHub

📃 Licença
Este projeto é apenas para fins educacionais.

# cypress-express-mark
