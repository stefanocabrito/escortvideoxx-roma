export default function Header() {
  return (
    <header className="bg-dark text-white sticky top-0 z-40 shadow-lg">
      <div className="container-custom py-4 flex items-center justify-between">
        <a href="https://escortvideoxx.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition">
          <img src="/images/logoevx.jpg" alt="escortvideoxx" className="h-12 w-auto" />
        </a>
        
        <nav className="hidden md:flex gap-6">
          <a href="#categorie" className="hover:text-primary transition">Categorie</a>
          <a href="#modelle" className="hover:text-primary transition">Modelle</a>
          <a href="#perche" className="hover:text-primary transition">Perché Noi</a>
        </nav>

        <a
          href="https://escortvideoxx.com/search?category=11"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Contattaci
        </a>
      </div>
    </header>
  )
}
