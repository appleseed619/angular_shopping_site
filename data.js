module.exports = function(){
    return {
        products: [
            {id: 1, name:"Iphone 5S", price: 1000, imageUrl:'1.jpg', description: 'Good phone', category: 'Phone'},
            {id: 2, name:"Iphone 6S", price: 2000, imageUrl:'2.jpg', description: 'Good phone', category: 'Phone'},
            {id: 3, name:"Iphone 7S", price: 3000, imageUrl:'3.jpg', description: 'Good phone', category: 'Phone'},
            {id: 4, name:"Iphone 8", price: 4000, imageUrl:'4.jpg', description: 'Good phone', category: 'Phone'},
            {id: 5, name:"Iphone 9", price: 5000, imageUrl:'5.jpg', description: 'Good phone', category: 'Phone'},
            {id: 6, name:"Iphone 10", price: 6000, imageUrl:'6.jpg', description: 'Good phone', category: 'Computer'},
            {id: 7, name:"Iphone 11", price: 7000, imageUrl:'7.jpg', description: 'Good phone', category: 'Computer'},
        ],
        categories: [
            {id: 1, name: 'Phone'},
            {id: 2, name: 'Computer'},
            {id: 3, name: 'Electronics'},
        ],
        orders: []
    }
}