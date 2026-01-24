export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logoevx.png" alt="escortvideoxx" className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-400">
              Il portale leader per escort e servizi per adulti in Italia.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://escortvideoxx.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Home</a></li>
              <li><a href="https://escortvideoxx.com/search?category=11" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Tutte le Escort</a></li>
              <li><a href="https://escortvideoxx.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contatti</h4>
            <p className="text-sm text-gray-400">
              📧 info@escortvideoxx.com<br/>
              📱 +39 XXX XXXX XXX<br/>
              🕐 Disponibili 24/7
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 escortvideoxx.com - Tutti i diritti riservati</p>
          <p className="mt-2">
            Questo sito è riservato a persone maggiorenni (18+). 
            Accedendo dichiari di aver compreso e accettato i nostri termini di servizio.
          </p>
        </div>
      </div>
    </footer>
  )
}
