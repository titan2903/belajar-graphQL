const mongoose = require('mongoose')

// connection mongodb
mongoose.connect('mongodb://localhost:27017/bwa-graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})