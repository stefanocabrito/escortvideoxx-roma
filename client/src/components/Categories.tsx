export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Escort Classiche',
      description: 'Ragazze eleganti e raffinate per compagnia esclusiva',
      icon: '👗'
    },
    {
      id: 2,
      name: 'MILF',
      description: 'Donne mature e affascinanti con esperienza',
      icon: '💃'
    },
    {
      id: 3,
      name: 'Mistress',
      description: 'Dominatrici affascinanti per esperienze intense',
      icon: '👑'
    },
    {
      id: 4,
      name: 'Dominatrice',
      description: 'Specialiste in giochi di potere e controllo',
      icon: '🔥'
    }
  ]

  return (
    <section id="categorie" className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <h2 className="section-title">Le Nostre Categorie</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="https://escortvideoxx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-escort p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
