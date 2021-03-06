const typeDefinitions = `
type User {
  email: String,
  password: String,
  username: String,
  mobile: String,
  isAdmin: Boolean,
  favourites: [String],
  basket: [String]
}
type Clothing {
  _id: String,
  name: String,
  price: Int,
  filter: String,
  topic: String,
  images: [String],
  sizes: [Int]
}
type Login {
  token: String,
  message: String,
  username: String,
  isAdmin: Boolean,
  favourites: [String],
  basket: [String]
}
type Mutation {
  checkUser(email: String, password: String): Login
  addUser(email: String, password: String, username: String, mobile: String): User
  addClothing(name: String, price: Int, filter: String, topic: String, images: [String], sizes: [Int]): Clothing
  checkClothing(id: String): Clothing
  getClothings(something: String): [Clothing]
  removeClothing(id: String): String
  updateFavourites(email: String, id: String): String
  updateBasket(email: String, id: String): String
}
type Query {
  email: String
}
schema {
  query: Query,
  mutation: Mutation
}
`;

module.exports = [typeDefinitions];
