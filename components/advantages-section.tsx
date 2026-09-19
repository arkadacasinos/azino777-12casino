const advantages = [
  {
    title: 'Официальный сайт',
    text: 'Азино777 официальный сайт работает по лицензии. Честная игра, прозрачные правила и гарантия выплат.',
  },
  {
    title: 'Быстрые выплаты',
    text: 'Вывод средств на Азино777 обрабатывается быстро. Минимальная комиссия и множество платёжных методов.',
  },
  {
    title: 'Безопасность',
    text: 'SSL-шифрование защищает ваши данные и транзакции. Азино777 официальный сайт гарантирует конфиденциальность.',
  },
  {
    title: 'Поддержка 24/7',
    text: 'Служба поддержки Азино казино работает круглосуточно. Ответим на любой вопрос в чате или по email.',
  },
  {
    title: 'Бонусы и акции',
    text: 'Приветственный бонус, кешбэк, турниры и программа лояльности для активных игроков на Азино777.',
  },
  {
    title: 'Мобильная версия',
    text: 'Азино мобайл работает на любом устройстве без установки приложения. Играйте в дороге и дома.',
  },
]

export function AdvantagesSection() {
  return (
    <section
      className="border-b border-[#1a1a1a] py-16 md:py-24"
      aria-label="Преимущества Азино777"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Почему выбирают <span className="text-gold">Azino777</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#b0b0b0]">
            Azino777 официальный сайт сочетает в себе надёжность, разнообразие игр и выгодные
            условия для каждого игрока.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="card-glow rounded-xl border border-[#222] bg-[#141414] p-6 transition-all"
            >
              <h3 className="font-heading text-xl font-semibold text-gold">{adv.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8a8a8a]">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
