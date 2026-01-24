interface DisclaimerProps {
  onAccept: () => void
}

export default function Disclaimer({ onAccept }: DisclaimerProps) {
  const handleReject = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <h2 className="text-2xl font-bold text-dark mb-4">⚠️ Avviso Importante</h2>
        
        <div className="text-sm text-dark space-y-3 mb-6">
          <p>
            <strong>Questo sito contiene contenuti per adulti.</strong>
          </p>
          <p>
            Accedendo a questo sito, dichiari di avere almeno 18 anni e accetti i nostri termini di servizio.
          </p>
          <p>
            Se non hai 18 anni, sei pregato di uscire immediatamente.
          </p>
          <p>
            I servizi descritti sono esclusivamente per adulti consapevoli e responsabili.
          </p>
        </div>

        <div className="disclaimer-buttons">
          <button
            onClick={handleReject}
            className="btn-outline"
          >
            RIFIUTA
          </button>
          <button
            onClick={onAccept}
            className="btn-primary"
          >
            ENTRA NEL SITO
          </button>
        </div>
      </div>
    </div>
  )
}
