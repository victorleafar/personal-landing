# Personal Landing# Personal Landing - Landing Page de Personal Trainer# 💪 Personal Landing - Landing Page de Personal Trainer



Landing page moderna e responsiva para personal trainers, focada em conversão de leads e apresentação profissional de serviços.Uma landing page moderna e responsiva desenvolvida para personal trainers, com foco em conversão de leads e apresentação profissional de serviços de treinamento personalizado.Uma landing page moderna e responsiva desenvolvida para personal trainers, com foco em conversão de leads e apresentação profissional de serviços de treinamento personalizado.



## Demo



https://personal-landing-lilac.vercel.app/## Demo ao Vivo## � Demo ao Vivo



## SobreVer projeto em produção: https://personal-landing-lilac.vercel.app/**[Ver Projeto em Produção →](https://personal-landing-lilac.vercel.app/)**



Landing page completa para personal trainers apresentarem seus serviços de forma profissional. Inclui seções de apresentação, sobre, programas de treino, depoimentos e formulário de contato.



## Funcionalidades## Sobre o ProjetoAcesse o link acima para visualizar o projeto funcionando em tempo real no Vercel.



- Hero section com call-to-action

- Apresentação do personal trainer

- Exibição de programas de treinoEste projeto é uma landing page completa para personal trainers que desejam apresentar seus serviços de forma profissional e atrair novos alunos. A página inclui seções de hero, sobre, programas de treino, depoimentos de alunos e formulário de contato.---

- Carrossel de depoimentos

- Formulário de contato

- Design responsivo

- Navegação suave entre seções##  Sobre o Projeto

- Navbar com efeito ao scroll

- Hero Section: Apresentação visual com call-to-action destacadoEste projeto é uma landing page completa para personal trainers que desejam apresentar seus serviços de forma profissional e atrair novos alunos. A página inclui seções de hero, sobre, programas de treino, depoimentos de alunos e formulário de contato.

## Tecnologias

- Seção Sobre: Apresentação do personal trainer com foto e descrição profissional

- React 19.2.0

- Vite (Rolldown)- Programas de Treino: Exibição dos diferentes programas oferecidos (hipertrofia, emagrecimento, etc.)### ✨ Funcionalidades

- CSS3

- ESLint- Carrossel de Depoimentos: Depoimentos de alunos com navegação por setas



## Instalação- Formulário de Contato: Captura de leads com validação- **Hero Section Impactante**: Apresentação visual com call-to-action destacado



Pré-requisitos: Node.js 16+ e npm/yarn- Design Responsivo: Totalmente adaptado para desktop, tablet e mobile- **Seção Sobre**: Apresentação do personal trainer com foto e descrição profissional



Clone o repositório:- Navegação Suave: Scroll suave entre seções- **Programas de Treino**: Exibição dos diferentes programas oferecidos (hipertrofia, emagrecimento, etc.)



```bash- Efeitos de Scroll: Navbar que muda de estilo ao rolar a página- **Carrossel de Depoimentos**: Depoimentos de alunos com navegação por setas

git clone https://github.com/victorleafar/personal-landing.git

cd personal-landing- **Formulário de Contato**: Captura de leads com validação

```

## Tecnologias Utilizadas- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile

Instale as dependências:

- **Navegação Suave**: Scroll suave entre seções

```bash

npm install- React 19.2.0 - Biblioteca JavaScript para construção de interfaces- **Efeitos de Scroll**: Navbar que muda de estilo ao rolar a página

```- Vite (Rolldown) - Build tool ultrarrápida para desenvolvimento

- CSS3 - Estilização moderna com gradientes e animações## 🚀 Tecnologias Utilizadas

Inicie o servidor de desenvolvimento:- ESLint - Linter para qualidade de código

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces

```bash## Instalação- **Vite (Rolldown)** - Build tool ultrarrápida para desenvolvimento

npm run dev

```- **CSS3** - Estilização moderna com gradientes e animações



Acesse http://localhost:5173 no navegador.Pré-requisitos:- **ESLint** - Linter para qualidade de código



## Scripts- Node.js (versão 16 ou superior)

- npm ou yarn## 📦 Instalação

```bash

npm run dev      # Inicia servidor de desenvolvimento

npm run build    # Cria build de produção

npm run preview  # Visualiza build localmentePassos para instalação:### Pré-requisitos

npm run lint     # Executa ESLint

```

1. Clone o repositório:- Node.js (versão 16 ou superior)

## Estrutura

```bash- npm ou yarn

```

personal-landing/git clone https://github.com/victorleafar/personal-landing.git

├── public/

│   └── vite.svgcd personal-landing### Passos para instalação

├── src/

│   ├── assets/```

│   │   ├── react.svg

│   │   ├── retrato.jpg1. Clone o repositório:

│   │   └── trainer.jpg

│   ├── App.jsx2. Instale as dependências:```bash

│   ├── App.css

│   ├── main.jsx```bashgit clone https://github.com/victorleafar/personal-landing.git

│   └── index.css

├── index.htmlnpm installcd personal-landing

├── package.json

├── vite.config.js``````

└── eslint.config.js

```



## Personalização3. Inicie o servidor de desenvolvimento:2. Instale as dependências:



Para personalizar o conteúdo:```bash```bash



1. Edite informações do personal em src/App.jsxnpm run devnpm install

2. Modifique o array testimonials para alterar depoimentos

3. Ajuste variáveis CSS em src/App.css para cores e estilos``````

4. Substitua imagens em src/assets/



Para integrar o formulário com backend real, edite a função handleSubmit em src/App.jsx:

4. Abra o navegador em http://localhost:51733. Inicie o servidor de desenvolvimento:

```javascript

const handleSubmit = async (e) => {```bash

  e.preventDefault()

  try {## Scripts Disponíveisnpm run dev

    const response = await fetch('SUA_API_URL', {

      method: 'POST',```

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(form)- npm run dev - Inicia o servidor de desenvolvimento

    })

    if (response.ok) {- npm run build - Cria a build de produção4. Abra o navegador em `http://localhost:5173`

      setSent(true)

      setForm({ name: '', email: '', phone: '', message: '' })- npm run preview - Visualiza a build de produção localmente

    }

  } catch (error) {- npm run lint - Executa o ESLint para verificar qualidade do código## 🛠️ Scripts Disponíveis

    console.error('Erro ao enviar formulário:', error)

  }```

}

```1. Foto e Descrição: Edite o conteúdo na seção "Sobre" em src/App.jsx



## Deploy2. Programas de Treino: Personalize os cards de programas na seção "Serviços"## 🎨 Personalização



Vercel:3. Depoimentos: Modifique o array testimonials no início do arquivo App.jsx

```bash

npm i -g vercel4. Cores e Estilo: Ajuste as variáveis CSS e estilos em src/App.css### Alterar Informações do Personal Trainer

vercel

```



Netlify:### Configurar Formulário de Contato1. **Foto e Descrição**: Edite o conteúdo na seção "Sobre" em `src/App.jsx`

```bash

npm run build2. **Programas de Treino**: Personalize os cards de programas na seção "Serviços"

# Arraste a pasta dist para o Netlify Drop

```O formulário atualmente simula o envio. Para integrar com um backend real, localize a função handleSubmit em src/App.jsx e substitua o setTimeout por uma chamada API real:3. **Depoimentos**: Modifique o array `testimonials` no início do arquivo `src/App.jsx`



GitHub Pages:4. **Cores e Estilo**: Ajuste as variáveis CSS e estilos em `src/App.css`

```bash

npm install --save-dev gh-pages```javascript

```

const handleSubmit = async (e) => {### Configurar Formulário de Contato

Adicione ao package.json:

```json  e.preventDefault()

"homepage": "https://seuusuario.github.io/personal-landing",

"scripts": {  try {O formulário atualmente simula o envio. Para integrar com um backend real:

  "predeploy": "npm run build",

  "deploy": "gh-pages -d dist"    const response = await fetch('SUA_API_URL', {

}

```      method: 'POST',1. Localize a função `handleSubmit` em `src/App.jsx`



Execute:      headers: { 'Content-Type': 'application/json' },2. Substitua o `setTimeout` por uma chamada API real:

```bash

npm run deploy      body: JSON.stringify(form)

```

    })```javascript

## Responsividade

    if (response.ok) {const handleSubmit = async (e) => {

Testado em:

- Desktop (1920px+)      setSent(true)  e.preventDefault()

- Laptop (1366px - 1920px)

- Tablet (768px - 1365px)      setForm({ name: '', email: '', phone: '', message: '' })  try {

- Mobile (320px - 767px)

    }    const response = await fetch('SUA_API_URL', {

## Contribuição

  } catch (error) {      method: 'POST',

Contribuições são bem-vindas. Para contribuir:

    console.error('Erro ao enviar formulário:', error)      headers: { 'Content-Type': 'application/json' },

1. Fork o projeto

2. Crie uma branch (git checkout -b feature/NovaFeature)  }      body: JSON.stringify(form)

3. Commit suas mudanças (git commit -m 'Adiciona nova feature')

4. Push para a branch (git push origin feature/NovaFeature)}    })

5. Abra um Pull Request

```    if (response.ok) {

## Licença

      setSent(true)

Projeto de uso livre para fins educacionais e comerciais.

## Deploy      setForm({ name: '', email: '', phone: '', message: '' })

## Autor

    }

Victor Leafar - @victorleafar

### Vercel (Recomendado)  } catch (error) {

## Créditos

    console.error('Erro ao enviar formulário:', error)

Imagens: Unsplash

1. Instale o Vercel CLI: npm i -g vercel  }

2. Execute: vercel}

3. Siga as instruções```



### Netlify## 🌐 Deploy



1. Execute: npm run build### Vercel (Recomendado)

2. Arraste a pasta dist para o Netlify Drop

1. Instale o Vercel CLI: `npm i -g vercel`

### GitHub Pages2. Execute: `vercel`

3. Siga as instruções

1. Instale: npm install --save-dev gh-pages

2. Adicione no package.json:### Netlify

```json

"homepage": "https://seuusuario.github.io/personal-landing",1. Execute: `npm run build`

"scripts": {2. Arraste a pasta `dist` para o Netlify Drop

  "predeploy": "npm run build",

  "deploy": "gh-pages -d dist"### GitHub Pages

}

```1. Instale: `npm install --save-dev gh-pages`

3. Execute: npm run deploy2. Adicione no `package.json`:

```json

## Responsividade"homepage": "https://seuusuario.github.io/personal-landing",

"scripts": {

O projeto é totalmente responsivo e foi testado em:  "predeploy": "npm run build",

- Desktop (1920px+)  "deploy": "gh-pages -d dist"

- Laptop (1366px - 1920px)}

- Tablet (768px - 1365px)```

- Mobile (320px - 767px)3. Execute: `npm run deploy`



## Contribuindo## 📱 Responsividade



Contribuições são bem-vindas. Para contribuir:O projeto é totalmente responsivo e foi testado em:

- Desktop (1920px+)

1. Fork o projeto- Laptop (1366px - 1920px)

2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)- Tablet (768px - 1365px)

3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')- Mobile (320px - 767px)

4. Push para a branch (git push origin feature/AmazingFeature)

5. Abra um Pull Request## 🤝 Contribuindo



## LicençaContribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.



Este projeto é de uso livre para fins educacionais e comerciais.1. Fork o projeto

2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)

## Autor3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)

4. Push para a branch (`git push origin feature/AmazingFeature`)

Victor Leafar5. Abra um Pull Request

- GitHub: @victorleafar

## 📄 Licença

## Agradecimentos

Este projeto é de uso livre para fins educacionais e comerciais.

- Imagens de exemplo do Unsplash

- Ícones e inspiração da comunidade React## 👤 Autor


**Victor Leafar**
- GitHub: [@victorleafar](https://github.com/victorleafar)

## 🙏 Agradecimentos

- Imagens de exemplo do [Unsplash](https://unsplash.com)
- Ícones e inspiração da comunidade React

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
