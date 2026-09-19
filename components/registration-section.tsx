const steps = [
  {
    num: '1',
    title: 'Регистрация',
    text: 'Укажите email и пароль на Азино777 официальный сайт. Процесс занимает меньше минуты.',
  },
  {
    num: '2',
    title: 'Пополнение счёта',
    text: 'Выберите удобный способ оплаты и внесите депозит. Минимальная сумма — от 100 рублей.',
  },
  {
    num: '3',
    title: 'Получение бонуса',
    text: 'Активируйте приветственный бонус и начните игру с увеличенным банкроллом на Азино казино.',
  },
  {
    num: '4',
    title: 'Игра и вывод',
    text: 'Выбирайте из 500+ игр, выигрывайте и выводите средства. Выплаты на Азино777 — быстро.',
  },
]

export function RegistrationSection() {
  return (
    <section
      id="registration"
      className="border-b border-[#1a1a1a] bg-[#0c0c0c] py-16 md:py-24"
      aria-label="Регистрация"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Как начать играть на <span className="text-gold">Азино777</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#b0b0b0]">
            Регистрация на Азино777 официальный сайт — это просто. Четыре шага отделяют вас от
            мира азартных игр на Азино мобайл.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl border border-[#222] bg-[#141414] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full gold-gradient font-heading text-lg font-bold text-[#0a0a0a]">
                {step.num}
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="gold-gradient inline-block rounded-xl px-10 py-4 text-lg font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
          >
            Зарегистрироваться на Азино777
          </a>
        </div>
      </div>
    </section>
  )
}
