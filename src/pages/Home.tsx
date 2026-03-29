import { motion } from 'framer-motion'
import { 
  MapPin, Clock, Star, Check, ChevronDown, Phone, Users, Gift
} from 'lucide-react'
import { 
  HERO, BENEFITS, MEMBERSHIPS, PRICING_PERIODS, TESTIMONIALS, FAQS, 
  GALLERY, LOCATION, ACTIVITIES 
} from '../lib/data'

export default function Home() {
  const phoneNumber = '5076XXXXXXX' // TODO: Reemplazar
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/90 to-ocean-500/70 z-10" />
          <img
            src="https://drive.google.com/uc?export=view&id=1lzO6Dx5XfbAaxc_7KOLHcchGH7u-tJFS"
            alt="Surf Shack - Playa Caracol"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {HERO.title}
            </h1>
            <p className="text-xl md:text-2xl text-ocean-100 mb-2">
              {HERO.subtitle}
            </p>
            <p className="text-lg text-ocean-200 mb-8">
              {HERO.description}
            </p>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-ocean-200 text-sm">MEMBRESÍA PERSONAL</p>
                  <p className="text-4xl font-bold text-white">${MEMBERSHIPS[0].price}<span className="text-lg">/mes</span></p>
                  <p className="text-ocean-200">2 personas • Acceso ilimitado</p>
                </div>
                <div className="text-right">
                  <p className="text-coral-400 font-semibold">💰 Ahorras $30/mes</p>
                  <p className="text-ocean-200 text-sm">vs 2 pasadías</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('¡Hola! Quiero la membresía Personal de Surf Shack')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.478-17.514A13.978 13.978 0 0012.051 0C5.405 0 .027 5.378.027 12.024a12.01 12.01 0 001.609 6.04L0 24l6.088-1.597a13.95 13.95 0 006.648 1.683h.005c7.614 0 13.988-5.388 13.988-12.026 0-3.213-1.26-6.231-3.547-8.492z"/>
                </svg>
                {HERO.cta}
              </a>
            </motion.div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-ocean-100">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{HERO.rating}</span>
                <span className="text-sm">({HERO.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{HERO.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>{HERO.hours}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-sand-50" id="beneficios">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-500 mb-4">
              ¿Qué incluye tu membresía?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas para disfrutar de Playa Caracol al máximo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading text-xl font-bold text-ocean-500 mb-4">
                  {benefit.category}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" id="membresias">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-500 mb-4">
              Elige tu membresía
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ahorra dinero con cada visita. Tu membresía se paga sola desde la primera semana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {MEMBERSHIPS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-2 ring-coral-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-coral-500 text-white px-4 py-1 text-sm font-semibold">
                    ⭐ MÁS POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-ocean-500 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-ocean-500">${plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="w-6 h-6 text-coral-500" />
                    <div>
                      <p className="font-semibold text-gray-800">{plan.people}</p>
                      <p className="text-sm text-gray-500">{plan.peopleDetail}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Gift className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-700">Ahorras {plan.savings}</span>
                    </div>
                    <p className="text-sm text-green-600">{plan.savingsDetail}</p>
                  </div>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`¡Hola! Quiero la membresía ${plan.name} de Surf Shack (${plan.people})`)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-coral-500 hover:bg-coral-600 text-white'
                        : 'bg-ocean-500 hover:bg-ocean-600 text-white'
                    }`}
                  >
                    Obtener {plan.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing periods table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <h3 className="font-heading text-xl font-bold text-ocean-500 mb-4 text-center">
              Ahorra más con períodos más largos
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-ocean-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Período</th>
                    <th className="px-4 py-3 text-center">Personal</th>
                    <th className="px-4 py-3 text-center">Familiar</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_PERIODS.personal.map((row, index) => (
                    <tr key={row.period} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium">{row.period}</td>
                      <td className="px-4 py-3 text-center">
                        ${row.price}
                        {row.discount && (
                          <span className="text-green-600 text-sm ml-1">({row.discount} off)</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        ${PRICING_PERIODS.familiar[index].price}
                        {PRICING_PERIODS.familiar[index].discount && (
                          <span className="text-green-600 text-sm ml-1">
                            ({PRICING_PERIODS.familiar[index].discount} off)
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-sand-50" id="testimoniales">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-500 mb-4">
              Lo que dicen nuestros miembros
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">5.0 en Google Reviews</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-ocean-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    Miembro {testimonial.membership} desde {testimonial.since}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Club Section */}
      <section className="section" id="club">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-500 mb-4">
              Conoce Surf Shack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tu escape a 1 hora de Panamá. Piscina, playa, restaurante y más.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {GALLERY.map((img, index) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-ocean-500 text-white rounded-xl p-6"
            >
              <MapPin className="w-8 h-8 mb-4 text-coral-400" />
              <h3 className="font-heading text-lg font-bold mb-2">Ubicación</h3>
              <p className="text-ocean-100">{LOCATION.address}</p>
              <p className="text-ocean-200 text-sm">{LOCATION.distance}</p>
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-coral-400 hover:text-coral-300 font-medium"
              >
                Ver en Google Maps →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <Clock className="w-8 h-8 mb-4 text-coral-500" />
              <h3 className="font-heading text-lg font-bold text-ocean-500 mb-2">Horario</h3>
              <p className="text-gray-600">{LOCATION.hours}</p>
              <p className="text-green-600 font-medium mt-2">Abierto ahora</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <Gift className="w-8 h-8 mb-4 text-coral-500" />
              <h3 className="font-heading text-lg font-bold text-ocean-500 mb-2">Actividades</h3>
              <ul className="space-y-1">
                {ACTIVITIES.slice(0, 4).map((activity) => (
                  <li key={activity} className="text-gray-600 text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-sand-50" id="faq">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-500 mb-4">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-ocean-500 list-none flex justify-between items-center">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              🌊 Listo para tu membresía?
            </h2>
            <p className="text-ocean-100 mb-8 max-w-xl mx-auto">
              Tu escape a Playa Caracol te espera. Piscina, playa, buenas vibras.
            </p>
            
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('¡Hola! Quiero obtener mi membresía de Surf Shack')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.478-17.514A13.978 13.978 0 0012.051 0C5.405 0 .027 5.378.027 12.024a12.01 12.01 0 001.609 6.04L0 24l6.088-1.597a13.95 13.95 0 006.648 1.683h.005c7.614 0 13.988-5.388 13.988-12.026 0-3.213-1.26-6.231-3.547-8.492z"/>
              </svg>
              Obtener Mi Membresía
            </a>
            
            <p className="text-ocean-200 mt-4">
              O paga online: Tarjeta • Yappy • Transferencia
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-ocean-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+507 6XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{LOCATION.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{HERO.hours}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}