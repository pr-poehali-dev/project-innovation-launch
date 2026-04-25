import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled ? "max-w-4xl px-2 border-white/20 shadow-lg" : "max-w-6xl px-4 border-transparent shadow-none"
        } py-2`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          background: isScrolled ? "rgba(10, 15, 26, 0.85)" : "transparent",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${isScrolled ? "ml-4" : ""}`} href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">TopSeller</span>
          </div>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white/70 md:flex md:space-x-2">
          <button onClick={() => scrollTo("services")} className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="relative z-20">Услуги</span>
          </button>
          <button onClick={() => scrollTo("about")} className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="relative z-20">О нас</span>
          </button>
          <button onClick={() => scrollTo("pricing")} className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="relative z-20">Тарифы</span>
          </button>
          <button onClick={() => scrollTo("cases")} className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="relative z-20">Доверие</span>
          </button>
          <button onClick={() => scrollTo("contact")} className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="relative z-20">Контакты</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-lg font-medium cursor-pointer hover:-translate-y-0.5 transition-all duration-200 px-4 py-2 text-sm text-white border border-white/10"
            style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}
          >
            Оставить заявку
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled ? "border-white/20 shadow-lg" : "border-transparent shadow-none"
        }`}
        style={{
          background: isScrolled ? "rgba(10, 15, 26, 0.85)" : "transparent",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center gap-2" href="/">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-white font-bold">TopSeller</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm md:hidden">
          <div className="absolute top-24 left-4 right-4 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6" style={{ background: "rgba(10,15,26,0.95)" }}>
            <nav className="flex flex-col space-y-2">
              {[["services", "Услуги"], ["about", "О нас"], ["pricing", "Тарифы"], ["cases", "Доверие"], ["contact", "Контакты"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                  {label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-4 mt-2">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full px-4 py-3 text-lg font-bold text-center rounded-lg text-white"
                  style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}
                >
                  Оставить заявку
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}