import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// cloudinary.config({
//     cloud_name:'dkbzasxal',
//     api_key:'767296491471398',
//     api_secret: 'lRANyG82ohR8PsVC3Z255lt3YE0'
// });


cloudinary.config({
    cloud_name:'dy5tlkw8j',
    api_key:'618382416197395',
    api_secret: 'QW8_RrFflYsubAgRCtkBR9Utw4I'
});
export default cloudinary;

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET_KEY
// });
//export default cloudinary;
