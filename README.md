# Personal Landing - Landing Page de Personal Trainer# 💪 Personal Landing - Landing Page de Personal Trainer

Uma landing page moderna e responsiva desenvolvida para personal trainers, com foco em conversão de leads e apresentação profissional de serviços de treinamento personalizado.Uma landing page moderna e responsiva desenvolvida para personal trainers, com foco em conversão de leads e apresentação profissional de serviços de treinamento personalizado.



## Demo ao Vivo## � Demo ao Vivo

Ver projeto em produção: https://personal-landing-lilac.vercel.app/**[Ver Projeto em Produção →](https://personal-landing-lilac.vercel.app/)**



## Sobre o ProjetoAcesse o link acima para visualizar o projeto funcionando em tempo real no Vercel.



Este projeto é uma landing page completa para personal trainers que desejam apresentar seus serviços de forma profissional e atrair novos alunos. A página inclui seções de hero, sobre, programas de treino, depoimentos de alunos e formulário de contato.---



##  Sobre o Projeto

- Hero Section: Apresentação visual com call-to-action destacadoEste projeto é uma landing page completa para personal trainers que desejam apresentar seus serviços de forma profissional e atrair novos alunos. A página inclui seções de hero, sobre, programas de treino, depoimentos de alunos e formulário de contato.

- Seção Sobre: Apresentação do personal trainer com foto e descrição profissional

- Programas de Treino: Exibição dos diferentes programas oferecidos (hipertrofia, emagrecimento, etc.)### ✨ Funcionalidades

- Carrossel de Depoimentos: Depoimentos de alunos com navegação por setas

- Formulário de Contato: Captura de leads com validação- **Hero Section Impactante**: Apresentação visual com call-to-action destacado

- Design Responsivo: Totalmente adaptado para desktop, tablet e mobile- **Seção Sobre**: Apresentação do personal trainer com foto e descrição profissional

- Navegação Suave: Scroll suave entre seções- **Programas de Treino**: Exibição dos diferentes programas oferecidos (hipertrofia, emagrecimento, etc.)

- Efeitos de Scroll: Navbar que muda de estilo ao rolar a página- **Carrossel de Depoimentos**: Depoimentos de alunos com navegação por setas

- **Formulário de Contato**: Captura de leads com validação

## Tecnologias Utilizadas- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile

- **Navegação Suave**: Scroll suave entre seções

- React 19.2.0 - Biblioteca JavaScript para construção de interfaces- **Efeitos de Scroll**: Navbar que muda de estilo ao rolar a página
- Vite (Rolldown) - Build tool ultrarrápida para desenvolvimento
- CSS3 - Estilização moderna com gradientes e animações## 🚀 Tecnologias Utilizadas
- ESLint - Linter para qualidade de código
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
## Instalação- **Vite (Rolldown)** - Build tool ultrarrápida para desenvolvimento

- **CSS3** - Estilização moderna com gradientes e animações

Pré-requisitos:- **ESLint** - Linter para qualidade de código

- Node.js (versão 16 ou superior)
- npm ou yarn## 📦 Instalação



Passos para instalação:### Pré-requisitos



1. Clone o repositório:- Node.js (versão 16 ou superior)

```bash- npm ou yarn

git clone https://github.com/victorleafar/personal-landing.git

cd personal-landing### Passos para instalação

```

1. Clone o repositório:

2. Instale as dependências:```bash

```bashgit clone https://github.com/victorleafar/personal-landing.git

npm installcd personal-landing

``````



3. Inicie o servidor de desenvolvimento:2. Instale as dependências:

```bash```bash

npm run devnpm install

``````



4. Abra o navegador em http://localhost:51733. Inicie o servidor de desenvolvimento:

```bash

## Scripts Disponíveisnpm run dev

```

- npm run dev - Inicia o servidor de desenvolvimento

- npm run build - Cria a build de produção4. Abra o navegador em `http://localhost:5173`

- npm run preview - Visualiza a build de produção localmente

- npm run lint - Executa o ESLint para verificar qualidade do código## 🛠️ Scripts Disponíveis



## Estrutura do Projeto- `npm run dev` - Inicia o servidor de desenvolvimento

- `npm run build` - Cria a build de produção

```- `npm run preview` - Visualiza a build de produção localmente

personal-landing/- `npm run lint` - Executa o ESLint para verificar qualidade do código

├── public/

│   └── vite.svg## 📁 Estrutura do Projeto

├── src/

│   ├── assets/```

│   │   ├── react.svgpersonal-landing/

│   │   ├── retrato.jpg├── public/

│   │   └── trainer.jpg│   └── vite.svg          # Favicon

│   ├── App.jsx├── src/

│   ├── App.css│   ├── assets/           # Imagens e recursos

│   ├── main.jsx│   │   ├── react.svg

│   └── index.css│   │   ├── retrato.jpg   # Foto do personal trainer

├── index.html│   │   └── trainer.jpg   # Imagens adicionais

├── package.json│   ├── App.jsx           # Componente principal

├── vite.config.js│   ├── App.css           # Estilos principais

└── eslint.config.js│   ├── main.jsx          # Ponto de entrada

```│   └── index.css         # Estilos globais

├── index.html            # HTML base

## Personalização├── package.json          # Dependências e scripts

├── vite.config.js        # Configuração do Vite

### Alterar Informações do Personal Trainer└── eslint.config.js      # Configuração do ESLint

```

1. Foto e Descrição: Edite o conteúdo na seção "Sobre" em src/App.jsx

2. Programas de Treino: Personalize os cards de programas na seção "Serviços"## 🎨 Personalização

3. Depoimentos: Modifique o array testimonials no início do arquivo App.jsx

4. Cores e Estilo: Ajuste as variáveis CSS e estilos em src/App.css### Alterar Informações do Personal Trainer



### Configurar Formulário de Contato1. **Foto e Descrição**: Edite o conteúdo na seção "Sobre" em `src/App.jsx`

2. **Programas de Treino**: Personalize os cards de programas na seção "Serviços"

O formulário atualmente simula o envio. Para integrar com um backend real, localize a função handleSubmit em src/App.jsx e substitua o setTimeout por uma chamada API real:3. **Depoimentos**: Modifique o array `testimonials` no início do arquivo `src/App.jsx`

4. **Cores e Estilo**: Ajuste as variáveis CSS e estilos em `src/App.css`

```javascript

const handleSubmit = async (e) => {### Configurar Formulário de Contato

  e.preventDefault()

  try {O formulário atualmente simula o envio. Para integrar com um backend real:

    const response = await fetch('SUA_API_URL', {

      method: 'POST',1. Localize a função `handleSubmit` em `src/App.jsx`

      headers: { 'Content-Type': 'application/json' },2. Substitua o `setTimeout` por uma chamada API real:

      body: JSON.stringify(form)

    })```javascript

    if (response.ok) {const handleSubmit = async (e) => {

      setSent(true)  e.preventDefault()

      setForm({ name: '', email: '', phone: '', message: '' })  try {

    }    const response = await fetch('SUA_API_URL', {

  } catch (error) {      method: 'POST',

    console.error('Erro ao enviar formulário:', error)      headers: { 'Content-Type': 'application/json' },

  }      body: JSON.stringify(form)

}    })

```    if (response.ok) {

      setSent(true)

## Deploy      setForm({ name: '', email: '', phone: '', message: '' })

    }

### Vercel (Recomendado)  } catch (error) {

    console.error('Erro ao enviar formulário:', error)

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
