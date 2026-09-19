import Image from 'next/image'

export function BonusSection() {
  return (
    <section id="bonus" className="border-b border-[#1a1a1a] py-16 md:py-24" aria-label="Бонусы">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#222]">
            <Image
              src="/images/az7-bonus.png"
              alt="Бонус при регистрации на Азино777 официальный сайт"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Бонусы и промо на <span className="text-gold">Азино777</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#b0b0b0]">
              Азино777 официальный сайт заботится о каждом игроке. При регистрации вы получаете
              приветственный бонус, который позволит начать игру без риска для собственных средств.
              Регулярные акции, турниры и программа лояльности делают игру на Азино777 ещё выгоднее.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-gold">&#10003;</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Приветственный бонус
                  </h3>
                  <p className="text-sm text-[#8a8a8a]">
                    Получите бонус на первый депозит и начните играть с увеличенным банкроллом.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-gold">&#10003;</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Еженедельный кешбэк
                  </h3>
                  <p className="text-sm text-[#8a8a8a]">
                    Возвращайте часть проигранных средств каждый понедельник на Азино777.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-gold">&#10003;</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Бонус за активность
                  </h3>
                  <p className="text-sm text-[#8a8a8a]">
                    Чем больше играете — тем больше бонусов получаете на Азино мобайл.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
