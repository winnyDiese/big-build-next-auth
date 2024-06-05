
import mongoose,{Schema} from "mongoose"

const userSchema = new Schema({
    names: String,
    email: String,
    password: String
},{ timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User

