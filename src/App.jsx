import { useState, useEffect } from 'react'
import './App.css'

// Dados simulados para o Carrossel de Depoimentos
const testimonials = [
  {
    id: 1,
    name: "Ricardo Silva",
    result: "-15kg em 6 meses",
    text: "O Victor mudou minha mentalidade. O treino é intenso, mas adaptado ao meu limite. Nunca tive resultados tão rápidos!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Ana Clara",
    result: "Ganho de massa muscular",
    text: "Profissional incrível! A periodização dos treinos fez eu sair do platô que estava há anos. Recomendo demais.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Marcos Paulo",
    result: "Reabilitação de joelho",
    text: "Cheguei com dores no joelho e medo de treinar. O Victor fez um trabalho de fortalecimento impecável. Hoje corro sem dor.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  }
]

function App() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  // Efeito para mudar o navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de envio
    setTimeout(() => {
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setSent(false), 5000)
    }, 1000)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="app">
      {/* --- Navbar --- */}
      <header className={`top-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="brand">
            <span className="brand-highlight">Personal</span>Trainer
          </div>
          <nav className="nav">
            <a href="#home">Início</a>
            <a href="#about">Sobre</a>
            <a href="#services">Programas</a>
            <a href="#testimonials">Depoimentos</a>
            <a href="#contact" className="nav-cta">Começar Agora</a>
          </nav>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="hero">
          {/* Removemos a imagem de fundo total e o overlay antigo */}
          
          <div className="container hero-grid">
            {/* Lado Esquerdo - Texto */}
            <div className="hero-text-side">
              <span className="hero-tag">PERSONAL TRAINER & CONSULTORIA</span>
              <h1 className="hero-title">
                TRANSFORME SEU CORPO,<br />
                <span className="text-gradient">DOMINE SUA MENTE.</span>
              </h1>
              <p className="hero-subtitle">
                Metodologia exclusiva focada em <strong>hipertrofia</strong>, <strong>emagrecimento</strong> e <strong>longevidade</strong>. 
                Pare de perder tempo com treinos genéricos.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Agendar Avaliação</a>
                <a href="#services" className="btn btn-outline">Ver Planos</a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <strong>8+</strong>
                  <span>Anos XP</span>
                </div>
                <div className="stat-item">
                  <strong>500+</strong>
                  <span>Alunos</span>
                </div>
                <div className="stat-item">
                  <strong>CREF</strong>
                  <span>12345-G</span>
                </div>
              </div>
            </div>

            {/* Lado Direito - Foto do Personal */}
            <div className="hero-image-side">
              {/* ATENÇÃO: Substitua este link pela sua foto real.
                  Fica ótimo se for uma foto estilo "recorte" (fundo transparente)
                  ou um retrato muito bem iluminado na academia. */}
              <img 
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=987&auto=format&fit=crop" 
                alt="Victor Martinez Personal Trainer" 
                className="trainer-portrait"
              />
              {/* Um elemento decorativo atrás da foto */}
              <div className="image-glow"></div>
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="section-padding about">
          <div className="container about-grid">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Victor Martinez treinando aluno" 
                className="about-img"
              />
              <div className="experience-badge">
                <span className="exp-number">8</span>
                <span className="exp-text">Anos de<br/>Excelência</span>
              </div>
            </div>
            
            <div className="about-text">
              <h2 className="section-title">Muito além de "levantar peso"</h2>
              <p>
                Olá, sou <strong>Victor Martinez</strong>. Como personal trainer licenciado, meu objetivo não é apenas te cansar, mas te fazer evoluir.
              </p>
              <p>
                Utilizo uma abordagem baseada em ciência e biomecânica para garantir que cada repetição conte. Seja presencialmente ou online, você terá um planejamento estruturado para alcançar sua melhor versão.
              </p>
              
              <ul className="check-list">
                <li>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   Avaliação física completa e anamnese
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Periodização para evitar estagnação
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Suporte direto via WhatsApp
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="section-padding services bg-dark">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Programas de Treinamento</h2>
              <p className="section-desc">Escolha a modalidade ideal para sua rotina e objetivos.</p>
            </div>

            <div className="services-grid">
              {/* Card 1 */}
              <div className="service-card">
                <div className="icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 10c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-3z"></path><path d="M6 10V5c0-1.7 1.3-3 3-3h1"></path><path d="M17.5 10c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-3z"></path><path d="M18 10V5c0-1.7-1.3-3-3-3h-1"></path></svg>
                </div>
                <h3>Consultoria Online</h3>
                <p>Treine onde quiser com meu app. Ficha personalizada, vídeos explicativos e correção de movimento por vídeo.</p>
                <ul className="service-price-list">
                  <li>Plano Mensal: <strong>R$ 149</strong></li>
                  <li>Plano Trimestral: <strong>R$ 399</strong></li>
                </ul>
                <a href="#contact" className="link-arrow">Começar agora &rarr;</a>
              </div>

              {/* Card 2 */}
              <div className="service-card featured">
                <div className="badge-best">MAIS PROCURADO</div>
                <div className="icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Personal Presencial</h3>
                <p>Acompanhamento lado a lado na academia. Correção em tempo real e motivação máxima.</p>
                <ul className="service-price-list">
                  <li>Planos a partir de</li>
                  <li className="big-price">R$ 800 <small>/mês</small></li>
                </ul>
                <a href="#contact" className="btn btn-primary full-width">Consultar Horários</a>
              </div>

              {/* Card 3 */}
              <div className="service-card">
                <div className="icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.8 2.3A.3.3 0 0 0 5 2h14a.3.3 0 0 0 .2.3l-8.2 6a2 2 0 0 0-.2.3v9a2 2 0 0 0 .6 1.6l1.2 1.2a.3.3 0 0 1-.2.5H11.4a.3.3 0 0 1-.2-.5l1.2-1.2A2 2 0 0 0 13 17.3V8.6a2 2 0 0 0-.2-.3z"></path></svg>
                </div>
                <h3>Emagrecimento 30D</h3>
                <p>Desafio de 30 dias focado em queima de gordura com treinos metabólicos e guia nutricional.</p>
                <ul className="service-price-list">
                  <li>Grupo Exclusivo</li>
                  <li>Início Imediato</li>
                </ul>
                <a href="#contact" className="link-arrow">Saber mais &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials Carousel --- */}
        <section id="testimonials" className="section-padding testimonials">
          <div className="container">
            <h2 className="section-title text-center">Resultados Reais</h2>
            
            <div className="carousel-wrapper">
              <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Anterior">
                &#10094;
              </button>
              
              <div className="testimonial-card">
                <div className="testi-img-wrapper">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                </div>
                <div className="testi-content">
                  <p className="testi-text">"{testimonials[currentTestimonial].text}"</p>
                  <div className="testi-author">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <span className="testi-result">{testimonials[currentTestimonial].result}</span>
                  </div>
                </div>
              </div>

              <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Próximo">
                &#10095;
              </button>
            </div>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="section-padding contact">
          <div className="container contact-wrapper">
            <div className="contact-info">
              <h2 className="section-title">Vamos começar?</h2>
              <p>Preencha o formulário ou entre em contato direto pelo WhatsApp. Respondo em até 24h.</p>
              
              <div className="info-items">
                <div className="item">
                  <div className="icon">📍</div>
                  <div>
                    <strong>Localização</strong>
                    <p>Atendimentos na Zona Sul & Online</p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">📱</div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>+55 11 99999-9999</p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">📧</div>
                  <div>
                    <strong>Email</strong>
                    <p>contato@victormartinez.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {!sent ? (
                <form onSubmit={handleSubmit} className="modern-form">
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Celular / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Objetivo Principal</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ex: Quero perder peso, hipertrofia, ou preparar para uma prova..."
                      rows={4}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary full-width">
                    Enviar Mensagem
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Mensagem Enviada!</h3>
                  <p>Obrigado pelo contato. Retornarei em breve para agendarmos sua avaliação.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Coluna 1: Sobre */}
            <div className="footer-column">
              <div className="footer-brand">
                <h4><span className="brand-highlight">Personal</span>Trainer</h4>
                <p>Transformando vidas através do movimento, ciência e dedicação.</p>
              </div>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="footer-column">
              <h5>Links Rápidos</h5>
              <ul className="footer-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#about">Sobre Mim</a></li>
                <li><a href="#services">Programas</a></li>
                <li><a href="#testimonials">Depoimentos</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>

            {/* Coluna 3: Programas */}
            <div className="footer-column">
              <h5>Programas</h5>
              <ul className="footer-links">
                <li><a href="#services">Hipertrofia</a></li>
                <li><a href="#services">Emagrecimento</a></li>
                <li><a href="#services">Força & Condicionamento</a></li>
                <li><a href="#services">Reabilitação</a></li>
                <li><a href="#services">Consultoria Online</a></li>
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div className="footer-column">
              <h5>Contato</h5>
              <ul className="footer-contact">
                <li>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  <span>(11) 99999-9999</span>
                </li>
                <li>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>contato@personal.com</span>
                </li>
                <li>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>São Paulo, SP</span>
                </li>
                <li>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span>Seg-Sex: 6h-21h</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha de Copyright */}
          <div className="footer-bottom">
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} <span className="brand-highlight">Personal</span>Trainer. Todos os direitos reservados.
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Política de Privacidade</a>
              <span>•</span>
              <a href="#terms">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App