import UserModel, { IUser } from "@/models/user.model.js";

class UserRepository {
  // Create
  async create(user: IUser) {
    const newUser = new UserModel(user);
    return await newUser.save();
  }
  // Find by id
  async findById(id: string) {
    return await UserModel.findById(id).exec();
  }
  // Find by Email
  async findByEmail(email: string) {
    return await UserModel.findOne({ email }).exec();
  }
  // Update By Email
  async udpateByEmail(user: IUser) {
    const { email, ...updates } = user;

    return await UserModel.findOneAndUpdate(
      { email },
      { $set: updates, $currentDate: { updatedAt: true } },
      { new: true, runValidators: true }
    );
  }
  // Update By Username
  async udpateByUsername(user: IUser) {
    const { username, ...updates } = user;

    return await UserModel.findOneAndUpdate(
      { username },
      { $set: updates, $currentDate: { updatedAt: true } },
      { new: true, runValidators: true }
    );
  }
  // Delete
  async delete(email: string) {
    return await UserModel.findOneAndUpdate(
      { email },
      { $set: { isActive: true }, $currentDate: { updatedAt: true } }
    );
  }
}
export default UserRepository;
