import Image from 'next/image'

const games = [
  {
    title: 'Слоты',
    description:
      'Более 500 слотов от ведущих провайдеров. Классические и видео-слоты с бонусными раундами, фриспинами и джекпотами.',
    icon: 'slots',
  },
  {
    title: 'Рулетка',
    description:
      'Европейская, американская и французская рулетка. Реалистичная графика и плавный игровой процесс на Азино777.',
    icon: 'roulette',
  },
  {
    title: 'Карточные игры',
    description:
      'Блэкджек, покер, баккара и другие карточные игры. Играйте против дилера или других игроков на Азино казино.',
    icon: 'cards',
  },
  {
    title: 'Live-казино',
    description:
      'Игры с живыми дилерами в реальном времени. Ощутите атмосферу настоящего казино не выходя из дома.',
    icon: 'live',
  },
]

export function GamesSection() {
  return (
    <section id="games" className="border-b border-[#1a1a1a] py-16 md:py-24" aria-label="Игры">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Игры на <span className="text-gold">Азино777 казино</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#b0b0b0]">
            Азино777 официальный сайт предлагает широкий выбор азартных игр. От классических слотов
            до live-казино с живыми дилерами — каждый найдет развлечение по душе.
          </p>
        </div>

        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-2xl border border-[#222]">
          <Image
            src="/images/az7-slots.png"
            alt="Слоты и игровые автоматы на Азино777 официальный сайт"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.title}
              className="card-glow rounded-xl border border-[#222] bg-[#141414] p-6 transition-all"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gold-gradient">
                <span className="font-heading text-xl font-bold text-[#0a0a0a]">
                  {game.title.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">{game.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
