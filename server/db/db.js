import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;
const DB_NAME = "todos";

const connectDB = async () => {
  try {
    await mongoose.connect(`${DB_URL}/${DB_NAME}`);

    console.log("db connected succesfully");
  } catch (error) {
    console.error("unable to connect with database");
  }
};

export default connectDB;
