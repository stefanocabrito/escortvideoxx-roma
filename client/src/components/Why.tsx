export default function Why() {
  const reasons = [
    { icon: '✓', title: 'Ragazze Verificate', desc: 'Tutti i profili sono verificati e autentici' },
    { icon: '🔒', title: 'Massima Discrezione', desc: 'Riservatezza garantita in ogni transazione' },
    { icon: '⭐', title: 'Servizi Premium', desc: 'Qualità e professionalità in ogni servizio' },
    { icon: '💬', title: 'Supporto 24/7', desc: 'Assistenza sempre disponibile per te' },
    { icon: '🚀', title: 'Prenotazione Facile', desc: 'Prenota in pochi click, senza complicazioni' },
    { icon: '🎁', title: 'Offerte Esclusive', desc: 'Sconti e promozioni per i nostri clienti' },
    { icon: '📱', title: 'App Mobile', desc: 'Accedi da qualsiasi dispositivo, ovunque' },
    { icon: '💳', title: 'Pagamenti Sicuri', desc: 'Transazioni protette e garantite' }
  ]

  return (
    <section id="perche" className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <h2 className="section-title">Perché Scegliere escortvideoxx.com</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="card-escort p-6 text-center">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-dark mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
