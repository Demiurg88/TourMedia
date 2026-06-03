// ─── TourMedia — Mock Artist Data ───────────────────────────────────────────
// Replace image URLs and social links with real data when ready.

export interface Artist {
  id: number;
  slug: string;
  name: string;
  genre: string;
  subGenre?: string;
  tag: string;
  bio: string;
  bioFull: string;
  image: string;
  coverImage: string;
  soundcloud?: string;
  spotify?: string;
  instagram?: string;
  available: boolean;
}

export const artists: Artist[] = [
  {
    id: 1,
    slug: "novatek",
    name: "NOVATEK",
    genre: "Techno / Industrial",
    subGenre: "Dark Techno",
    tag: "Резидент",
    bio: "Мастер тёмного техно с резиденциями в ведущих клубах Европы.",
    bioFull: `NOVATEK — один из пионеров тёмного индустриального техно в России. Начав карьеру в берлинских клубах, он принёс домой бескомпромиссный звук, сформированный годами резидентства в Berghain и De School. Его сеты — это всегда путешествие: от гипнотических вступлений к сокрушительным пикам, которые удерживают танцпол в едином трансе на протяжении нескольких часов.

Сотрудничал с ведущими лейблами: Ostgut Ton, Token Records, Perc Trax. В 2023 году стал резидентом TourMedia, выпустив дебютный EP "Ferrum" — семь треков, которые мгновенно вошли в чарты Resident Advisor.`,
    image:
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&q=85&fit=crop",
    soundcloud: "https://soundcloud.com",
    spotify: "https://open.spotify.com",
    instagram: "https://instagram.com",
    available: true,
  },
  {
    id: 2,
    slug: "aura",
    name: "AURA",
    genre: "Melodic House & Techno",
    subGenre: "Progressive",
    tag: "Новый артист",
    bio: "Создаёт атмосферные сеты на стыке мелодичного хауса и прогрессива.",
    bioFull: `AURA — проект московского продюсера и диджея Алины Васильевой, чьё имя стремительно стало синонимом атмосферного, эмоционального звука. Её музыкальный язык — это плавные мелодии, тонкие вокальные текстуры и глубокие басовые линии, которые создают ощущение полного погружения.

В 2022 году дебютировала на Arma 17 с трёхчасовым сетом, который собрал более миллиона прослушиваний в записи. С тех пор выступала на крупнейших фестивалях: Outline, Signal, Bosco Fresh Fest. TourMedia подписал AURA в 2024 году — её первый релиз на лейбле, EP "Horizons", достиг топ-20 Beatport в категории Melodic House & Techno.`,
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1400&q=85&fit=crop",
    soundcloud: "https://soundcloud.com",
    spotify: "https://open.spotify.com",
    instagram: "https://instagram.com",
    available: true,
  },
  {
    id: 3,
    slug: "spektr",
    name: "SPEKTR",
    genre: "Minimal / Deep Tech",
    subGenre: "Underground",
    tag: "Топ-букинг",
    bio: "Гипнотические грувы и глубокие басовые линии. Звучит на лучших андеграунд-площадках.",
    bioFull: `SPEKTR — мастер минимализма и гипнотического грува, чьё имя давно стало легендой московского андеграунда. За десять лет карьеры он выработал безупречное чувство танцпола: его сеты никогда не торопятся, но неизменно ведут слушателя к катарсису.

Его подход к диджеингу — максимальная функциональность и минимум лишнего. Только бит, бас и атмосфера. Регулярно выступает в Gazgolder Club, Rodnya и на закрытых лофт-вечеринках. Из дискографии: несколько EP на Drumcode и собственный лейбл "Depth Series", где выходят его самые экспериментальные работы.`,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=1400&q=85&fit=crop",
    soundcloud: "https://soundcloud.com",
    spotify: "https://open.spotify.com",
    instagram: "https://instagram.com",
    available: true,
  },
  {
    id: 4,
    slug: "cipher",
    name: "CIPHER",
    genre: "Hard Techno / Acid",
    subGenre: "Rave",
    tag: "Резидент",
    bio: "Жёсткий саунд, энергия рейва 90-х в современной обработке.",
    bioFull: `CIPHER не оставляет танцполу ни единого шанса на передышку. Его звук — это сырая энергия рейвов 90-х, переработанная через призму современного хард-техно и кислотных линий TB-303. Если вы ищете артиста, который гарантированно разогреет даже самую холодную публику — вы нашли его.

Начал карьеру в Санкт-Петербурге, где быстро занял место среди резидентов легендарного TunnelClub. Сейчас базируется в Москве, является резидентом TourMedia и регулярно гастролирует по Европе. Его трек "Acid Protocol" набрал более 500 тысяч прослушиваний на SoundCloud.`,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1415886944956-c5a90073caef?w=1400&q=85&fit=crop",
    soundcloud: "https://soundcloud.com",
    spotify: "https://open.spotify.com",
    instagram: "https://instagram.com",
    available: false,
  },
  {
    id: 5,
    slug: "luna-v",
    name: "LUNA.V",
    genre: "Afro House / Organic",
    subGenre: "World Beats",
    tag: "Эксклюзив",
    bio: "Органические текстуры и африканские ритмы в электронной музыке.",
    bioFull: `LUNA.V — уникальный голос в современной электронной музыке, соединяющий органические текстуры, африканские перкуссионные ритмы и глубокий хаус. Её сеты — это ритуал, медитация и танцевальный транс одновременно.

Выросла в семье музыкантов, изучала этномузыкологию в Московской консерватории, прежде чем открыть для себя мир электронной музыки. Сейчас её имя стоит рядом с такими артистами, как Nora En Pure и Yokoo. Эксклюзивный артист TourMedia с 2023 года, выступала на Outline Festival и в клубах Берлина, Амстердама и Лиссабона.`,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1400&q=85&fit=crop",
    soundcloud: "https://soundcloud.com",
    spotify: "https://open.spotify.com",
    instagram: "https://instagram.com",
    available: true,
  },
  {
    id: 6,
    slug: "phantom",
    name: "PHANTOM",
    genre: "Trance / Progressive",
    subGenre: "Psychedelic",
    tag: "Топ-букинг",
    bio: "Эпические прогрессив-сеты, от мелодики до мощных пиков.",
    bioFull: `PHANTOM строит свои сеты как симфонии: медленное нарастание напряжения, кульминация, которая разрывает реальность, и мягкое возвращение — будто после сна. Его музыкальный язык находится на стыке классического прогрессив-транса и современного психоделика.

За плечами — более 15 лет на сцене, выступления на Tranceform, A State of Trance и собственные туры по СНГ и Европе. В каталоге TourMedia у PHANTOM — три полноформатных альбома и десятки ремиксов для крупнейших лейблов жанра. Его последний альбом "Cosmogony" был признан лучшим трансовым релизом 2024 года по версии Trance Podium.`,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1400&q=85&fit=crop",
    soundcloud: "https://soundcloud.com",
    spotify: "https://open.spotify.com",
    instagram: "https://instagram.com",
    available: true,
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return artists.map((a) => a.slug);
}


// ─── TourMedia — Professional Acoustics Data ─────────────────────────────────

export interface EquipmentSpecs {
  power: string;         // Мощность (RMS)
  frequency: string;     // Частотный диапазон
  spl: string;           // Максимальное звуковое давление (SPL)
  weight: string;        // Вес
  dimensions?: string;   // Размеры
  dispersion?: string;   // Угол раскрытия (дисперсия)
}

export interface EquipmentItem {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  specs: EquipmentSpecs;
  accent: "primary" | "secondary" | "gold";
}

export const equipment: EquipmentItem[] = [
  {
    id: 1,
    slug: "line-array-x1",
    name: "TourMedia Line Array X1",
    category: "Линейный массив",
    shortDescription: "Флагманский трехполосный элемент линейного массива для стадионных шоу и масштабных арен.",
    fullDescription: "TourMedia Line Array X1 — это вершина наших акустических разработок. Разработанный для масштабных концертных туров и стадионных площадок, X1 обеспечивает беспрецедентно точную направленность, кристальную детализацию и плотный звуковой поток на расстоянии более 100 метров. Корпус выполнен из балтийской березы премиального сорта с полимочевинным защитным покрытием, устойчивым к суровым погодным условиям.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80&fit=crop",
    accent: "gold",
    specs: {
      power: "2200 W RMS",
      frequency: "48 Hz — 19 kHz (±3 dB)",
      spl: "145 dB Peak",
      weight: "58 кг",
      dimensions: "1100 × 360 × 480 мм",
      dispersion: "90° по горизонтали × 10° по вертикали",
    },
  },
  {
    id: 2,
    slug: "sub-bass-pro",
    name: "TourMedia Sub-Bass Pro",
    category: "Сабвуфер",
    shortDescription: "Двойной 18-дюймовый сабвуфер кардиоидной направленности с невероятным суб-басовым давлением.",
    fullDescription: "TourMedia Sub-Bass Pro разработан для воспроизведения самых низких частот с абсолютной точностью и высокой динамикой. Уникальная кардиоидная геометрия фазоинвертора позволяет эффективно направлять энергию баса в сторону зрителей, значительно уменьшая нежелательное излучение за кулисы. Идеальное решение для требовательных электронных инсталляций и фестивалей.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80&fit=crop",
    accent: "primary",
    specs: {
      power: "3200 W RMS",
      frequency: "24 Hz — 120 Hz (±3 dB)",
      spl: "142 dB Continuous",
      weight: "92 кг",
      dimensions: "1150 × 580 × 850 мм",
      dispersion: "Кардиоидная диаграмма",
    },
  },
  {
    id: 3,
    slug: "club-monitor-15",
    name: "TourMedia Club Monitor 15",
    category: "Монитор",
    shortDescription: "Сценический коаксиальный монитор ближнего поля премиум-класса с точным фазовым согласованием.",
    fullDescription: "Высокоэффективный коаксиальный монитор, созданный специально по запросам диджеев и выступающих артистов. Коаксиальное расположение динамиков обеспечивает идеальный точечный источник звука и фазовую стабильность, исключая искажения при перемещении артиста на сцене. Компактный низкопрофильный корпус минимизирует перекрытие обзора.",
    image: "https://images.unsplash.com/photo-1484755560693-a4074577af3a?w=800&q=80&fit=crop",
    accent: "secondary",
    specs: {
      power: "1200 W RMS",
      frequency: "50 Hz — 20 kHz",
      spl: "136 dB Peak",
      weight: "24.5 кг",
      dimensions: "580 × 390 × 470 мм",
      dispersion: "60° коническая",
    },
  },
];

export function getEquipmentBySlug(slug: string): EquipmentItem | undefined {
  return equipment.find((e) => e.slug === slug);
}

export function getAllEquipmentSlugs(): string[] {
  return equipment.map((e) => e.slug);
}
