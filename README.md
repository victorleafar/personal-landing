# 💪 Personal Landing - Landing Page de Personal Trainer

Uma landing page moderna e responsiva desenvolvida para personal trainers, com foco em conversão de leads e apresentação profissional de serviços de treinamento personalizado.

## 📋 Sobre o Projeto

Este projeto é uma landing page completa para personal trainers que desejam apresentar seus serviços de forma profissional e atrair novos alunos. A página inclui seções de hero, sobre, programas de treino, depoimentos de alunos e formulário de contato.

### ✨ Funcionalidades

- **Hero Section Impactante**: Apresentação visual com call-to-action destacado
- **Seção Sobre**: Apresentação do personal trainer com foto e descrição profissional
- **Programas de Treino**: Exibição dos diferentes programas oferecidos (hipertrofia, emagrecimento, etc.)
- **Carrossel de Depoimentos**: Depoimentos de alunos com navegação por setas
- **Formulário de Contato**: Captura de leads com validação
- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Efeitos de Scroll**: Navbar que muda de estilo ao rolar a página

## 🚀 Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite (Rolldown)** - Build tool ultrarrápida para desenvolvimento
- **CSS3** - Estilização moderna com gradientes e animações
- **ESLint** - Linter para qualidade de código

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/victorleafar/personal-landing.git
cd personal-landing
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o ESLint para verificar qualidade do código

## 📁 Estrutura do Projeto

```
personal-landing/
├── public/
│   └── vite.svg          # Favicon
├── src/
│   ├── assets/           # Imagens e recursos
│   │   ├── react.svg
│   │   ├── retrato.jpg   # Foto do personal trainer
│   │   └── trainer.jpg   # Imagens adicionais
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos principais
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── index.html            # HTML base
├── package.json          # Dependências e scripts
├── vite.config.js        # Configuração do Vite
└── eslint.config.js      # Configuração do ESLint
```

## 🎨 Personalização

### Alterar Informações do Personal Trainer

1. **Foto e Descrição**: Edite o conteúdo na seção "Sobre" em `src/App.jsx`
2. **Programas de Treino**: Personalize os cards de programas na seção "Serviços"
3. **Depoimentos**: Modifique o array `testimonials` no início do arquivo `src/App.jsx`
4. **Cores e Estilo**: Ajuste as variáveis CSS e estilos em `src/App.css`

### Configurar Formulário de Contato

O formulário atualmente simula o envio. Para integrar com um backend real:

1. Localize a função `handleSubmit` em `src/App.jsx`
2. Substitua o `setTimeout` por uma chamada API real:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('SUA_API_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (response.ok) {
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
  }
}
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Instale o Vercel CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

### Netlify

1. Execute: `npm run build`
2. Arraste a pasta `dist` para o Netlify Drop

### GitHub Pages

1. Instale: `npm install --save-dev gh-pages`
2. Adicione no `package.json`:
```json
"homepage": "https://seuusuario.github.io/personal-landing",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Execute: `npm run deploy`

## 📱 Responsividade

O projeto é totalmente responsivo e foi testado em:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1365px)
- Mobile (320px - 767px)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 👤 Autor

**Victor Leafar**
- GitHub: [@victorleafar](https://github.com/victorleafar)

## 🙏 Agradecimentos

- Imagens de exemplo do [Unsplash](https://unsplash.com)
- Ícones e inspiração da comunidade React

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
