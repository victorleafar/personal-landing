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
        <div className="container footer-content">
          <div className="footer-brand">
            <h4>Personal Trainer</h4>
            <p>Transformando vidas através do movimento.</p>
          </div>
          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">WhatsApp</a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Personal Trainer. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App