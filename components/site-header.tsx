export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="Азино777 — на главную">
          <span className="font-heading text-2xl font-bold gold-text-gradient">Azino777</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Основная навигация">
          <a href="#bonus" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
            Бонусы
          </a>
          <a href="#games" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
            Игры
          </a>
          <a href="#mobile" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
            Мобильная версия
          </a>
          <a href="#faq" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
            Вопросы
          </a>
        </nav>
        <a
          href="#registration"
          className="gold-gradient rounded-lg px-5 py-2 text-sm font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
        >
          Регистрация
        </a>
      </div>
    </header>
  )
}
