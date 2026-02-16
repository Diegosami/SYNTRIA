'use client';
import './Testimonials.css';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            quote: "Trabajar con Syntria fue como tener un equipo interno de primera. No solo entendieron el proyecto, se enamoraron de él tanto como nosotros.",
            author: "Marcela",
            role: "Co-Founder",
            company: "Awake Coffee"
        },
        {
            quote: "Por fin encontramos gente que habla nuestro idioma. Nada de jerga técnica innecesaria, solo soluciones que funcionan y un equipo que de verdad escucha.",
            author: "Nicolas Farah",
            role: "CEO",
            company: "Best4U"
        },
        {
            quote: "Entendieron perfectamente la esencia de nuestra marca. La transformación digital que lograron respetó nuestra tradición chocolatera pero nos llevó al siguiente nivel.",
            author: "Daniel Conto",
            role: "Fundador",
            company: "Dawla Chocolatería"
        }
    ];

    return (
        <section className="testimonials section-lg">
            <div className="container">
                <div className="testimonials-header" data-aos="fade-up">
                    <span className="badge badge-accent">Confiaron en nosotros</span>
                    <h2>
                        Escucha a quienes ya
                        <br />
                        <span className="text-accent">recorrieron este camino</span>
                    </h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFB800">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="testimonial-quote">
                                <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p>{testimonial.quote}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <p className="author-name">{testimonial.author}</p>
                                    <p className="author-role">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
