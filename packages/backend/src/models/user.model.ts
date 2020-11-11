import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  emailSecondary: String,
  age: { type: Number, default: 0 }
})

const model = mongoose.model('user', UserSchema)

export default model
