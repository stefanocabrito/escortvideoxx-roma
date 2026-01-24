export default function Header() {
  return (
    <header className="bg-dark text-white sticky top-0 z-40 shadow-lg">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logoevx.png" alt="escortvideoxx" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">Escort Roma</h1>
        </div>
        
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
