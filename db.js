const Car = require("./data/Car.json");
const users = require("./data/users.json");
const hotel = require("./data/hotel.json");
const image = require("./data/image.json");
const form = require("./data/form.json");
const login = require("./data/login.json");

module.exports = {
  Car,
  users,
  hotel,
  image,
  form,
  login,
};

// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
