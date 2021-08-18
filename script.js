const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];


let myGridView = new GridView();
myGridView.header = 'Заголовок';
myGridView.headerClass = ['header','site-header'];
myGridView.attribute = {
  company: {
    label: "Компания",
    src: "html",
  },
  chef: {
    label: "Директор",
  },
  country: {
    label: "Страна",
    value: (data) => {
      if (data["country"] === "Germany") {
        return data["country"] + " map";
      }
      return data["country"];
    },
  },
};
myGridView.data = dataExample;
myGridView.render();