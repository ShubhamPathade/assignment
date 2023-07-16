import jwt from "jsonwebtoken"
import userModel from "../model/userModel.js";


const isAuthUser = async (req, res, next) => {
  try {


    //Get Token From Cookies
    if (req.cookies.token) {
      //Verify Token
      const { userId } = jwt.verify(
        req.cookies.token,
        process.env.JWT_SECRET_KEY
      );
      //Get User From Token
      req.user = await userModel.findById(userId).select("-password");
      next();
    } else {
    res.status(400).json({
        error:null
    })
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
        error:error.message
    })
  
  }
};


export default isAuthUser