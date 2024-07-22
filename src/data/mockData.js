const mockData = [
  {
    id: 1,
    name: "Appetizers",
    dishes: [
      {
        id: 1,
        name: "Thai Spring Rolls",
        image: "https://via.placeholder.com/400x300",
        ingredients: [
          { id: 1, name: "Rice Paper", info: "Thin and translucent, used to wrap the rolls." },
          { id: 2, name: "Shrimp", info: "Fresh and succulent, adds protein." },
          { id: 3, name: "Mint", info: "Adds a fresh and aromatic flavor." },
          { id: 4, name: "Lettuce", info: "Provides a crisp texture." },
        ],
      },
      {
        id: 2,
        name: "Satay Chicken Skewers",
        image: "https://via.placeholder.com/400x300",
        ingredients: [
          { id: 5, name: "Chicken", info: "Marinated in a mixture of spices." },
          { id: 6, name: "Peanut Sauce", info: "Creamy and nutty, served on the side." },
          { id: 7, name: "Coconut Milk", info: "Used in the marinade for added richness." },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Main Course",
    dishes: [
      {
        id: 3,
        name: "Pad Thai",
        image: "https://via.placeholder.com/400x300",
        ingredients: [
          { id: 8, name: "Rice Noodles", info: "The base of this classic dish." },
          { id: 9, name: "Tamarind Sauce", info: "Gives a tangy flavor." },
          { id: 10, name: "Bean Sprouts", info: "Adds crunch and freshness." },
          { id: 11, name: "Egg", info: "Scrambled and mixed in." },
          { id: 12, name: "Crushed Peanuts", info: "Sprinkled on top for texture." },
        ],
      },
      {
        id: 4,
        name: "Green Curry",
        image: "https://via.placeholder.com/400x300",
        ingredients: [
          { id: 13, name: "Green Curry Paste", info: "Made from fresh green chilies and herbs." },
          { id: 14, name: "Coconut Milk", info: "Adds creaminess to the curry." },
          { id: 15, name: "Chicken", info: "Cooked until tender in the curry sauce." },
          { id: 16, name: "Thai Basil", info: "Adds a unique flavor." },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Drinks",
    dishes: [
      {
        id: 5,
        name: "Thai Iced Tea",
        image: "https://via.placeholder.com/400x300",
        ingredients: [
          { id: 17, name: "Black Tea", info: "Strongly brewed for a rich flavor." },
          { id: 18, name: "Condensed Milk", info: "Sweetens and thickens the tea." },
          { id: 19, name: "Ice", info: "Keeps the drink chilled." },
        ],
      },
      {
        id: 6,
        name: "Coconut Water",
        image: "https://via.placeholder.com/400x300",
        ingredients: [
          { id: 20, name: "Fresh Coconut Water", info: "Naturally sweet and refreshing." },
          { id: 21, name: "Coconut Pulp", info: "Adds a chewy texture." },
        ],
      },
    ],
  },
];

export default mockData;
