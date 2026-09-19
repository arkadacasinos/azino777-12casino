import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Главный раздел">
      <div className="absolute inset-0">
        <Image
          src="/images/az7-hero.png"
          alt="Азино777 официальный сайт казино — слоты, рулетка и карточные игры"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-32 md:px-6">
        <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold md:text-sm">
          Азино777 официальный сайт
        </span>
        <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
          Азино777 — <span className="gold-text-gradient">официальное</span> онлайн казино
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#b0b0b0] md:text-lg">
          Азино777 официальный сайт приглашает вас в мир азартных развлечений. Играйте в слоты,
          рулетку и карточные игры. Азино мобайл доступен на любом устройстве. Получите бонус при
          регистрации и начните играть прямо сейчас.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#registration"
            className="gold-gradient rounded-xl px-8 py-3.5 text-base font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
          >
            Играть на Азино777
          </a>
          <a
            href="#bonus"
            className="rounded-xl border border-[#333] bg-[#141414] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold/50"
          >
            Получить бонус
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#8a8a8a]">
          <span className="flex items-center gap-2">
            <span className="text-gold">&#9733;</span> Более 500 игр
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">&#9733;</span> Выплаты 24/7
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">&#9733;</span> Мобильная версия
          </span>
        </div>
      </div>
    </section>
  )
}
