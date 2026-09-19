import Image from 'next/image'

export function MobileSection() {
  return (
    <section
      id="mobile"
      className="border-b border-[#1a1a1a] bg-[#0c0c0c] py-16 md:py-24"
      aria-label="Мобильная версия"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Азино <span className="text-gold">мобайл</span> — играйте где угодно
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#b0b0b0]">
              Азино мобайл — это мобильная версия казино, оптимизированная для смартфонов и
              планшетов. Вам не нужно скачивать приложение — просто откройте Азино777 официальный
              сайт в браузере вашего устройства. Мобильная версия поддерживает все функции: регистрацию,
              пополнение счёта, вывод средств и запуск любых игр.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#b0b0b0]">
                <span className="text-gold">&#10003;</span>
                Работает на iOS и Android без установки приложения
              </li>
              <li className="flex items-center gap-3 text-sm text-[#b0b0b0]">
                <span className="text-gold">&#10003;</span>
                Адаптивный интерфейс под любой экран
              </li>
              <li className="flex items-center gap-3 text-sm text-[#b0b0b0]">
                <span className="text-gold">&#10003;</span>
                Полный доступ к слотам, рулетке и live-играм
              </li>
              <li className="flex items-center gap-3 text-sm text-[#b0b0b0]">
                <span className="text-gold">&#10003;</span>
                Безопасные платежи через мобильную версию
              </li>
            </ul>
            <a
              href="#registration"
              className="mt-8 inline-block gold-gradient rounded-xl px-8 py-3.5 text-base font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
            >
              Открыть Азино мобайл
            </a>
          </div>
          <div className="order-1 mx-auto max-w-sm md:order-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#222]">
              <Image
                src="/images/az7-mobile.png"
                alt="Азино мобайл — мобильная версия казино на смартфоне"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
