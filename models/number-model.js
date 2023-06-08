const mongoose = require('mongoose')

const numberSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    }
})

export const Number = mongoose.model('Number', numberSchema)