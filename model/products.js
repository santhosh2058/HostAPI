import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true,"price must be provided."]
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating :{
    type: Number,
    default: 4.9
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ["apple","samsung","dell","mi"],
      message: (props)=>`${props.value} is not supported.`
    }
  }
});

export const user = mongoose.model("Product",userSchema);