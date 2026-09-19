export function SiteFooter() {
  return (
    <footer className="bg-[#080808] py-12" aria-label="Подвал сайта">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="font-heading text-2xl font-bold gold-text-gradient">Azino777</span>
            <p className="mt-3 text-sm leading-relaxed text-[#8a8a8a]">
              Азино777 официальный сайт онлайн казино. Азино мобайл — играйте в слоты, рулетку и
              карточные игры на любом устройстве.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#bonus" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
                  Бонусы
                </a>
              </li>
              <li>
                <a href="#games" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
                  Игры
                </a>
              </li>
              <li>
                <a href="#mobile" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
                  Азино мобайл
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-[#8a8a8a] transition-colors hover:text-gold">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Информация
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-[#8a8a8a]">Азино777 официальный сайт</li>
              <li className="text-sm text-[#8a8a8a]">Azino777 — онлайн казино</li>
              <li className="text-sm text-[#8a8a8a]">Азино казино — слоты и рулетка</li>
              <li className="text-sm text-[#8a8a8a]">Азино мобайл — мобильная версия</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#1a1a1a] pt-6 text-center">
          <p className="text-xs text-[#666]">
            &copy; {new Date().getFullYear()} Азино777 официальный сайт. Azino777 — онлайн казино.
            Азино мобайл. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
