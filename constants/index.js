export const categories = [
  {  id: 1,
    name: 'Pizza',
    image: require('../assets/images/pizza.png'),
  },
  {
    id: 2,
    name: 'Burgers',
    image: require('../assets/images/pizza.png'),
  },
  {
    id: 3,
    name: 'Sushi',
    image: require('../assets/images/pizza.png'),
  },
  {
    id: 4,
    name: 'Desserts',
    image: require('../assets/images/pizza.png'),
  },
  {
    id: 5,
    name: 'Salads',
    image: require('../assets/images/pizza.png'),
  },
  {
    id: 6,
    name: 'Drinks',
    image: require('../assets/images/pizza.png'),
  }
]

export const featured = 
    {
        id: 1,
        title: 'Hot and Spicy',
        description: 'soft and tender chicken',
        restaurants:[
            {
                id: 1,
                name: 'Papa Johns',
                image: require('../assets/images/hotandspicy.jpg'),
                description: 'Italian, Pizza',
                lng: -0.1277583,
                lat: 51.5073509,
                address: '4th Ave, New York, NY 10003, USA',
                stars:4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes:[
                    {
                        id: 1,
                        name: 'Chicken Burger',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 5.99,
                        description: "cheezy garlic pizza"
                    },
                    {
                        id: 2,
                        name: 'Chicken Pizza',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 9.99,
                        description: "cheezy garlic pizza"
                    },
                    {
                        id: 3,
                        name: 'Chicken Wings',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 7.99,
                        description: "cheezy garlic pizza"
                    }
                ]
            },
            {
                id: 2,
                name: 'Dominos',
                image: require('../assets/images/hotandspicy.jpg'),
                description: 'Italian, Pizza',
                lng: -0.1277583,
                lat: 51.5073509,
                address: '4th Ave, New York, NY 10003, USA',
                stars:4,
                reviews: '4.4k',
                category:'Fast Food',
                dishes:[
                    {
                        id: 1,
                        name: 'Chicken Burger',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 5.99,
                        description: "cheezy garlic pizza"
                    },
                    {
                        id: 2,
                        name: 'Chicken Pizza',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 9.99,
                        description: "cheezy garlic pizza"
                    },
                    {
                        id: 3,
                        name: 'Chicken Wings',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 7.99,
                        description: "cheezy garlic pizza"
                    }
                ]
            },
            {
                id: 3,
                name: 'Pizza Hut',
                image: require('../assets/images/hotandspicy.jpg'),
                description: 'Italian, Pizza',
                lng: -0.1277583,
                lat: 51.5073509,
                address: '4th Ave, New York, NY 10003, USA',
                stars:4,
                reviews: '4.4k',
                dishes:[
                    {
                        id: 1,
                        name: 'Chicken Burger',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 5.99,
                        description: "cheezy garlic pizza"
                    },
                    {
                        id: 2,
                        name: 'Chicken Pizza',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 9.99,
                        description: "cheezy garlic pizza"
                    },
                    {
                        id: 3,
                        name: 'Chicken Wings',
                        image: require('../assets/images/italianpizza.jpeg'),
                        price: 7.99,
                        description: "cheezy garlic pizza"
                    }
                ]
            }
            
        ]
    }
