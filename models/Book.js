const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    release_year: Number,
    genre: String,
    created_date: Date,
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book