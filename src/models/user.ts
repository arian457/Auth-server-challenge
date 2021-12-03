import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: 'Username is required',
  },
  email: {
    type: String,
    required: 'Email is required',
  },
  password: {
    type: String,
    required: 'Password is required',
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
