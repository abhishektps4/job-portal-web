import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    //origin:'http://localhost:5173',
    origin: 'https://job-portal-web-frontend.onrender.com',
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials:true
} 

 

app.use(cors(corsOptions));

 app.get('/' , (req,res) => {
     res.send("API WORKING")
})

const PORT = process.env.PORT || 4000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})















// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const corsOptions = {
//     origin: 'https://job-portal-web-frontend.onrender.com',
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true
// };
// app.use(cors(corsOptions));

// // Test route
// app.get('/', (req, res) => {
//     res.send("API WORKING");
// });

// // Fallback route
// app.use((req, res, next) => {
//     res.status(404).json({ message: "API route not found" });
// });

// // API routes
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// });

