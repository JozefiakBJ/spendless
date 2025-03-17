
import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

// Testimonial data should come from translations or be language-independent
const testimonials = [
  {
    name: "Alex Carter",
    role: "Small Business Owner",
    content: "SPENDLESS has transformed how I manage both personal and business finances. The ability to import statements from multiple sources and get AI insights has saved me hours each month.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
  },
  {
    name: "Samantha Lee",
    role: "Financial Advisor",
    content: "I recommend SPENDLESS to all my clients. The collaborative budget sharing feature is perfect for couples and families trying to align their financial goals. Exceptional tool!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
  },
  {
    name: "Michael Johnson",
    role: "Recent Graduate",
    content: "As someone just starting to build good money habits, SPENDLESS made the process simple and even enjoyable. The AI recommendations helped me cut unnecessary expenses I didn't even notice.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <div 
      className="glass-card p-8 animate-fade-in opacity-0"
      style={{ animationDelay: `${index * 300}ms` }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100"
          loading="lazy"
        />
        <div>
          <h4 className="font-display font-bold text-lg">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const cards = document.querySelectorAll('.glass-card');
          cards.forEach((card) => {
            card.classList.add('opacity-100');
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Design Elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
            {t('testimonials.title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {t('testimonials.subtitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('testimonials.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-primary-50 text-primary-700 rounded-full font-medium">
            <span className="font-bold">4.9/5</span> {t('testimonials.rating')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
