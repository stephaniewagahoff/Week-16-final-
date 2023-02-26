class ItemAPI {
    constructor() {
        this.nextID = 10; // Next ID to use for a new product

        // Test Data
        this.TEST_ITEMS = [
            {
                id: 1,
                title: "Fresh Fruits",
                price: 30.00,
                image: "",
                category: "Fruit"
            },

            {
                id: 2,
                title: "Citrus Fruits",
                price: 15.00,
                image: "",
                category: "Fruit"
            },

            {
                id: 3,
                title: "Exotic Fruits",
                price: 50.00,
                image: "",
                category: "Fruit"
            },
        
            {
                id: 4,
                title: "Mixed Nuts",
                price: 40.00,
                image: "",
                category: "Nuts"
            },
        
            {
                id: 5,
                title: "Dark Chocolate Supreme",
                price: 45.00,
                image: "",
                category: "Cakes"
            },
        
            {
                id: 6,
                title: "Fancy Chocolate Chip",
                price: 45.00,
                image: "",
                category: "Cookies"
            },
        
            {
                id: 7,
                title: "Strawberry Lolipops",
                price: 47.00,
                image: "",
                category: "Candy"
            },
        
            {
                id: 8,
                title: "Adventerous Chocolate and Fruits",
                price: 50.00,
                image: "",
                category: "Assortments"
            },
        
            {
                id: 9,
                title: "March Special",
                price: 50.00,
                image: "",
                category: "Specials"
            }
        ]
    }

    // Returns all items
    getAllItems = () => {
        return this.TEST_ITEMS;
    }

    // Add a new item to the test data
    newItem = (item) => {
            this.TEST_ITEMS.push({...item, id: this.nextID++}); // Spread the item and add an ID to it
    }

    // Deletes an item from the test data if found
    deleteItem = (itemID) => {
        let index = this.TEST_ITEMS.findIndex(obj => obj.id === itemID); // Search for item

        if (index !== -1)
            this.TEST_ITEMS.splice(index, 1); // Delete if found
    }
}

export const itemAPI = new ItemAPI();