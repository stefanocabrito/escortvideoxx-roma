export default function Profiles() {
  const profiles = [
    {
      id: 1,
      name: 'Amica Pro',
      category: 'Escort Classica',
      phone: '3791825509',
      image: 'images/amicaprogen3.jpg',
      description: 'Elegante e raffinata, perfetta per cene e compagnia esclusiva'
    },
    {
      id: 2,
      name: 'Caracol',
      category: 'Escort Classica',
      phone: '3317827756',
      image: 'images/caracol1.jpg',
      description: 'Affascinante e disponibile, specialista in servizi premium'
    },
    {
      id: 3,
      name: 'Colle',
      category: 'Mistress',
      phone: '3791825509',
      image: 'images/colle-nov-1.jpg',
      description: 'Dominatrice affascinante, perfetta per esperienze intense'
    },
    {
      id: 4,
      name: 'Kiara',
      category: 'MILF',
      phone: '3317827756',
      image: 'images/kiara1.jpg',
      description: 'Donna matura e sensuale, esperta in piacere e discrezione'
    },
    {
      id: 5,
      name: 'Matura',
      category: 'Escort Classica',
      phone: '3791825509',
      image: 'images/MATURA2.jpg',
      description: 'Giovane e vivace, perfetta per compagnia e divertimento'
    },
    {
      id: 6,
      name: 'Rosa Otto',
      category: 'Dominatrice',
      phone: '3317827756',
      image: 'images/ROSAOTTO1.jpg',
      description: 'Specialista in giochi di potere, discreta e professionale'
    }
  ]

  return (
    <section id="modelle" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Le Nostre Modelle Star</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <a
              key={profile.id}
              href="https://escortvideoxx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-escort overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={`${import.meta.env.BASE_URL}${profile.image.replace(/^\//, '')}`}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="badge-category mb-3">{profile.category}</div>
                <h3 className="text-2xl font-bold text-dark mb-2">{profile.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{profile.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-primary font-bold">{profile.phone}</span>
                  <span className="text-secondary font-semibold">⭐ 5.0</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
