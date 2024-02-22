import { Schema, model } from 'mongoose';

const crochetSchema = new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    price: Number,
    color: String,
    deliverDate: String,
    status: Number
}, {
    timestamps: true,
    versionKey: false
})


export default model('crochet', crochetSchema);