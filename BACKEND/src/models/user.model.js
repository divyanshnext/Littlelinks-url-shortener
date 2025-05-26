// make a user model
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ShortUrl' }]
});

const User = mongoose.model('User', userSchema);
export default User;
