const mongoose = require ('mongoose')

const servicesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: 'name is Required'
            //trim: true
        },
        province: {
            type: String
            //,required: 'province is Required'
        },
        mail: {
            type: String
            //,required: 'mail is Required'
        }
    }
)

//module.exports = mongoose.model(name: 'Services', servicesSchema)
module.exports = mongoose.model('Service', servicesSchema)