import { motion } from 'framer-motion'
import { Star, Check, MapPin, Clock, Users, ChevronDown } from 'lucide-react'
import { HERO, MEMBERSHIPS, TESTIMONIALS, FAQS, LOCATION } from '../lib/data'

export default function Home() {
  const phoneNumber = '5076XXXXXXX'
  
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-playa.jpg"
            alt="Surf Shack"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-coral-400 font-medium tracking-widest text-sm mb-4 uppercase"
          >
            Club de Playa • Playa Caracol
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            SURF SHACK
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            Piscina • Pump Track • Restaurante • Surf
          </motion.p>
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20"
          >
            <p className="text-white/60 text-sm mb-2">Membresía desde</p>
            <p className="text-5xl md:text-6xl font-bold mb-2">
              $25<span className="text-2xl text-white/60">/mes</span>
            </p>
            <p className="text-white/80 mb-6">2 personas • Acceso ilimitado</p>
            
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('¡Hola! Quiero la membresía de Surf Shack')}`}
              className="inline-flex items-center gap-3 bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.478-17.514A13.978 13.978 0 0012.051 0C5.405 0 .027 5.378.027 12.024a12.01 12.01 0 001.609 6.04L0 24l6.088-1.597a13.95 13.95 0 006.648 1.683h.005c7.614 0 13.988-5.388 13.988-12.026 0-3.213-1.26-6.231-3.547-8.492z"/>
              </svg>
              Quiero mi Membresía
            </a>
          </motion.div>
          
          {/* Trust */}
          <div className="flex items-center justify-center gap-6 mt-8 text-white/70 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-white">5.0</span>
              <span>({HERO.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>75km de Panamá</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8AM - 10PM</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>
      
      {/* ===== MEMBRESÍAS ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-sand-50 to-white" id="membresias">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-coral-500 font-semibold mb-2 uppercase tracking-widest text-sm">Membresías</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-500 mb-4">Tu Escape, Sin Límites</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Acceso ilimitado a piscina, playa, restaurante y más. Ahorra desde la primera semana.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MEMBERSHIPS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 md:p-10 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-coral-500 to-coral-600 text-white shadow-2xl scale-105' 
                    : 'bg-white border-2 border-gray-100 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ocean-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className={`${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    {plan.peopleDetail}
                  </p>
                  <div className="mt-4">
                    <span className="text-6xl font-bold">${plan.price}</span>
                    <span className={`${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>/mes</span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-gray-700'}>{b}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={`text-center mb-6 p-3 rounded-xl ${plan.popular ? 'bg-white/20' : 'bg-green-50'}`}>
                  <p className={`font-semibold ${plan.popular ? 'text-white' : 'text-green-700'}`}>
                    💰 Ahorras {plan.savings}/mes
                  </p>
                  <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-green-600'}`}>
                    {plan.savingsDetail}
                  </p>
                </div>
                
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`¡Hola! Quiero la membresía ${plan.name} de Surf Shack`)}`}
                  className={`block text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-white text-coral-600 hover:bg-gray-100' 
                      : 'bg-ocean-500 text-white hover:bg-ocean-600'
                  }`}
                >
                  Obtener {plan.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== BENEFICIOS ===== */}
      <section className="py-24 px-6 bg-ocean-500 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-coral-400 font-semibold mb-2 uppercase tracking-widest text-sm">Beneficios</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Todo Incluido</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏊', title: 'Acceso Ilimitado', items: ['Piscina con vista al mar', 'Pump track', 'Playa privada', 'Ranchos*'] },
              { icon: '💰', title: 'Descuentos', items: ['10% restaurante', '15% clases surf', '10% en Caracol'] },
              { icon: '🎁', title: 'Extras', items: ['Estacionamiento', 'Duchas', 'Eventos gratis', 'Clase cumpleaños*'] },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <ul className="space-y-2 text-ocean-100">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-ocean-200 text-sm">
            *Sujeccionos a disponibilidad. Familiar incluye extras adicionales.
          </p>
        </div>
      </section>
      
      {/* ===== GALERÍA ===== */}
      <section className="py-24 px-6 bg-white" id="galeria">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-coral-500 font-semibold mb-2 uppercase tracking-widest text-sm">Galería</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-500">Conoce el Club</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/hero-playa.jpg', alt: 'Playa' },
              { src: '/images/piscina.jpg', alt: 'Piscina' },
              { src: '/images/area-social.jpg', alt: 'Área Social' },
              { src: '/images/actividades.jpg', alt: 'Actividades' },
              { src: '/images/comunidad.jpg', alt: 'Comunidad' },
              { src: '/images/atardecer.jpg', alt: 'Atardecer' },
            ].map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== TESTIMONIALES ===== */}
      <section className="py-24 px-6 bg-sand-50" id="testimoniales">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-coral-500 font-semibold mb-2 uppercase tracking-widest text-sm">Testimoniales</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-500 mb-4">Lo que dicen</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">5.0 en Google</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-ocean-500">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.membership} • {t.since}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== FAQ ===== */}
      <section className="py-24 px-6 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-coral-500 font-semibold mb-2 uppercase tracking-widest text-sm">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-500">Preguntas Frecuentes</h2>
          </motion.div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <summary className="p-6 font-semibold text-ocean-500 cursor-pointer flex justify-between items-center list-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== CTA FINAL ===== */}
      <section className="py-24 px-6 bg-gradient-to-br from-ocean-600 to-ocean-700 text-white" id="contacto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🌊 ¿Listo para tu membresía?
            </h2>
            <p className="text-xl text-ocean-200 mb-8">
              Tu escape a Playa Caracol te espera
            </p>
            
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('¡Hola! Quiero la membresía de Surf Shack')}`}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.478-17.514A13.978 13.978 0 0012.051 0C5.405 0 .027 5.378.027 12.024a12.01 12.01 0 001.609 6.04L0 24l6.088-1.597a13.95 13.95 0 006.648 1.683h.005c7.614 0 13.988-5.388 13.988-12.026 0-3.213-1.26-6.231-3.547-8.492z"/>
              </svg>
              Obtener Mi Membresía
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-ocean-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{LOCATION.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{LOCATION.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2-5 personas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}