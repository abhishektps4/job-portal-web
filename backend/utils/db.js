import mongoose from "mongoose";







const connectDB = async () => {
        try {
            await mongoose.connect('mongodb+srv://nayan21100:mdJteEvJxMUCqD9O@jobportal.lroullh.mongodb.net');
            console.log('mongodb connected successfully');
        } catch (error) {
            console.log(error);
        }
    }
    export default connectDB;
