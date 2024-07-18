import mongoose, { Schema, Document } from "mongoose";

export interface Product extends Document {
  name: string;
  description: string;
  code: string;
}

const ProductSchema: Schema<Product> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
});

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  activationCode: string;
  activationCodeExpiry: Date;
  isActivated: boolean;
  organizationId?: mongoose.Types.ObjectId;
  products: Product[];
}

const UserSchema: Schema<User> = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isAdmin: { type: Boolean, required: false },
  activationCode: {
    type: String,
    required: [true, "Activation code is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: false, 
  },
  isVerified: { type: Boolean, required: true, default: false },
  activationCodeExpiry: {
    type: Date,
    required: false,
    default: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
  isActivated: { type: Boolean, required: false, default: false },
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
  products: [ProductSchema],
});

const UserModel =
  (mongoose.models?.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema,);

export default UserModel;
