const getInitialData = () => [
  {
    id: 1,
    title: "Гарри Поттер",
    body: "Одиннадцатилетний мальчик-сирота Гарри Поттер живет в семье своей тетки и даже не подозревает, что он – настоящий волшебник. Но однажды прилетает сова с письмом для него, и жизнь Гарри Поттера изменяется навсегда. Он узнает, что зачислен в Школу Чародейства и Волшебства, выясняет правду о загадочной смерти своих родителей, а в результате ему удается раскрыть секрет философского камня. Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха.Книга, сделавшая Джоан Роулинг самым читаемым писателем современности.Книга, ставшая культовой уже для нескольких поколений. «Гарри Поттер и Философский камень» – история начинается",
    createdAt: "2023-12-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Я ем тишину ложками",
    body: "Книга, которую вы держите в руках, это реальная, никак не дополненная и не измененная история настоящего отшельника. Написанная с глубоким уважением к выбору человека, который создал свой собственный невероятный мир и был в нём по-настоящему счастлив.",
    createdAt: "2023-12-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Преступление и наказание",
    body: "Включенный во все школьные и вузовские программы, неоднократно экранизированный, роман Достоевского «Преступление и наказание» не перестал от этого быть одним из самых ярких и «краеугольных» произведений русской и мировой литературы. Этот роман говорит не только о преступлении и наказании, но и о жертве, любви и сострадании.",
    createdAt: "2023-12-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "The Room",
    body: "The Room is a 2003 American independent romantic drama film written, directed, and produced by Tommy Wiseau, who also stars in the film alongside Juliette Danielle and Greg Sestero. Set in San Francisco, the film is centred around a melodramatic love triangle between amiable banker Johnny (Wiseau), his deceptive fiancée Lisa (Danielle) and his conflicted best friend Mark (Sestero). The work was reportedly intended to be semi-autobiographical in nature; according to Wiseau, the title alludes to the potential of a room to be the site of both good and bad events. The stage play from which the film is derived was called so due to its events taking place entirely in a single room.",
    createdAt: "2023-12-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "化物語",
    body: "『化物語』（バケモノガタリ）は、西尾維新によるファンタジー小説。〈物語〉シリーズ第1弾（通巻1、2巻目）として講談社BOX（講談社）より上巻が2006年11月に、下巻が2006年12月に刊行された。イラストはVOFANが担当している。2009年にテレビアニメ化、2012年には『化物語 ポータブル』としてゲーム化、2018年に漫画化された。",
    createdAt: "2023-12-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Title6",
    body: "Sample Text6",
    createdAt: "2023-12-01T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export { getInitialData, showFormattedDate };
