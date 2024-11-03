let nextId = 4;

let cardsArr = [
  {
    id: 1,
    color: "red",
    text: "Example text 1"
  },
  {
    id: 2,
    color: "blue",
    text: "Example text 2"
  },
  {
    id: 3,
    color: "green",
    text: "Example text 3"
  }
];

const db = {
  nextId,
  cardsArr
};

module.exports = db;