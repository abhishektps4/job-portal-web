// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false,
//             })
//         }
//         const decode = await jwt.verify(token, "nayan");
//         if(!decode){
//             return res.status(401).json({
//                 message:"Invalid token",
//                 success:false
//             })
//         };
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default isAuthenticated;



import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        // Get token from cookies
        const token = req.cookies.token;
        
        // Check if the token is missing
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify token
        const decode = await jwt.verify(token, "nayan");

        // If the token is invalid or expired, it will throw an error
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        // Attach user ID to the request object
        req.id = decode.userId;
        console.log(`User ID ${decode.userId} is authenticated`);

        // Continue with the next middleware
        next();

    } catch (error) {
        // If token is expired, handle TokenExpiredError
        if (error.name === "TokenExpiredError") {
            console.log("Token has expired", error);
            return res.status(401).json({
                message: "Token has expired",
                success: false,
            });
        }
        
        // Log any other errors
        console.log("Authentication error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export default isAuthenticated;














// import jwt from "jsonwebtoken";

// // login a user
//  const login = async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         if (!email || !password || !role) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         };

//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             })
//         }

//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             })
//         };

//         // check role is correct or not
//         if (role !== user.role) {
//             return res.status(400).json({
//                 message: "Account doesn't exist with current role.",
//                 success: false
//             })
//         };

//         const tokenData = {
//             userId: user._id // payload with the user id
//         };

//         // Generate the JWT token
//         const token = jwt.sign(tokenData, "nayan", { expiresIn: '1d' });  // Token expires in 1 day

//         // Send token back to the client (cookie or response body)
//         return res.status(200).cookie("token", token, {
//             maxAge: 1 * 24 * 60 * 60 * 1000,  // Cookie expiry time (1 day)
//             httpOnly: true,  // Ensures the cookie can't be accessed via JavaScript
//             sameSite: 'strict' // Prevents cross-site requests
//         }).json({
//             message: `Welcome back ${user.fullname}`,
//             user: {
//                 _id: user._id,
//                 fullname: user.fullname,
//                 email: user.email,
//                 phoneNumber: user.phoneNumber,
//                 role: user.role,
//                 profile: user.profile
//             },
//             success: true
//         });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Server error", success: false });
//     }
// }
// export default login
