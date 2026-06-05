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



