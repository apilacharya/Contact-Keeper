import mongoose from 'mongoose';

const connectDB = async () => {
  // Since no value is utilized from promise thus it is not stored in any variable
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Connected to mongodb database');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
