const mongoose = require('mongoose')

const taskSkema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: 'Name is Required',
            trim: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        priority: Number
    }
)
modules.exports = mongoose.model(name:'Task', taskSchema)