const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

// instantiate the app
const app = express();


const authors = [
    {id: 1, name: "J. K. Rowling"},
    {id: 2, name: "J. R. Tolkien"},
    {id: 3, name: "Brent Weeks"}
]

const books = [
    {id: 1, name: "Harry Potter and Chambers of secret", author_id: 1},
    {id: 3, name: "Harry Potter and the prisoner of Azkabaijan", author_id: 1},
    {id: 4, name: "Harry Potter and the Goblet of fire", author_id: 1},
    {id: 5, name: "The Fellowship of the Ring", author_id: 2},
    {id: 6, name: "The two tower", author_id: 2},
    {id: 7, name: "The Return of the Kings", author_id: 2},
    {id: 8, name: "The way of Shadow", author_id: 3},
    {id: 9, name: "Beyond the shadow", author_id: 3}
]

// Create Author
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represent an Author of a Book',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => books.author_id === author.id)
            }
        }
    })
})

// Create BookType
const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represent a book written by an author',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        author_id: { type: GraphQLNonNull(GraphQLInt)},
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.author_id)
            }
        }
    })
})

// Create a root query Scope...
const RootQueryType = new GraphQLObjectType ({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        book: {
            type: BookType,
            description: "Returns a Single BOok with passed ID",
            args: {
                id: { type: GraphQLInt}
            },
            resolve: (parent, args) => books.find(book => book.id === args.id)
        },
        books: {
            type: new GraphQLList(BookType),
            description: "List of all Books",
            resolve: () => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: "List of all Authors",
            resolve: () => authors
        },
        author: {
            type: AuthorType,
            description: " Single Authors",
            args: { id: { type: GraphQLInt } },
            resolve: (parent, args) => authors.find(author => author.id === args.id)
        }
    })
})

// Using mutation is a way of using (POST, PUT, GET, DELETE) on GraphQL
const RootMutationType = new  GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a Book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                author_id: {type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const book = {id: books.length + 1, name: args.name, author_id: args.author_id}
                books.push(book)
                return book
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an Author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const author = {id: authors.length + 1, name: args.name}
                authors.push(author)
                return author
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

//// Creating our New Schema
// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => "Hello World"
//             }
//         })
//     })
// })

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log('Server Running!!'));





// {
//     book (id: 1) {
//         name
//     }
// }