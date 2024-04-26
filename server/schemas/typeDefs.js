const typeDefs = `
    type User {
        _id: ID
        username: String
        password: String
        email: String
        admin: Boolean
        shoppingCart: [Chocolate]
        favorites: [Chocolate]
        wishlist: [Chocolate]
        preferences: Preferences
    }

    type Chocolateer {
        _id: ID
        name: String
        chocolates: [Chocolate]
    }

    type Chocolate {
        _id: ID
        name: String
        brand: String
        type: String
        sweetness: Int
        ingredients: Ingredients
        price: Int
        recipeBy: Chocolateer
        psychoactive: Boolean
    }

    type Ingredients {
        base: [String]
        liquors: [String]
        extracts: [String]
        oils: [String]
        accents: [String]
    }

    type Preferences {
        type: [String]
        sweetness: [Int]
        extracts: [String]
        liquors: [String]
        oils: [String]
        price: [Int]
        accents: [String]
        recipeBy: [Chocolateer]
        psychoactive: Boolean  
    }
`;


module.exports = typeDefs;