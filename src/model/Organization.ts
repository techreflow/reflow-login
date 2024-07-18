import mongoose, { Document, Schema } from 'mongoose';

export interface IOrganization extends Document {
  name: string;
  rootUserId: mongoose.Types.ObjectId;
  users: mongoose.Types.ObjectId[];
}

const OrganizationSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  rootUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

export default mongoose.models.Organization || mongoose.model<IOrganization>('Organization', OrganizationSchema,);
