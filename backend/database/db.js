import mongoose from "mongoose";
const connection = async () => {
  const url1 = `mongodb+srv://Admin:Aniket193@cybertipline.l3zt1fy.mongodb.net/?retryWrites=true&w=majority`;
  const url = `mongodb+srv://admin-shubham:Gupta210$@cluster1.4vahlva.mongodb.net/?retryWrites=true&w=majority`;
  // admin-shubham@admin
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("error while connedcting", error);
  }
};
export default connection;
