import mongoose from "mongoose"

const numberSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    }
})

export const RandomNumber = mongoose.model('RandomNumber', numberSchema)