import userModel from "../model/userModel.js";
import { getToken, setCookie } from "../utils/handelToken.js";

export const signUp = async (req, res) => {
  try {
    const { email, userName } = req.body;

    const isUserNameExit = await userModel.findOne({ userName });
    const isEmailIsExit = await userModel.findOne({ email });

  
    if (isUserNameExit) {
      res.status(400).json({
        success: false,
        message: "User Name Already Exit..!!",
      });
    } else if (isEmailIsExit) {
      res.status(400).json({
        success: false,
        message: "Email Already Exit..!!",
      });
    } else {
      await userModel.create(req.body);
      res.status(201).json({
        success: true,
        message: "Sign Up Successfully :)",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: "failed",
      message: error.message,
    });
  }
};


export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.status(400).json({
        success: false,
        message: "All Fields Are Required !!",
      });
    } else {
      const isUserExit = await userModel.findOne({
        $and: [{ userName, password }],
      });
      if (isUserExit) {
        const allUser = await userModel.find();
        const token = await getToken(isUserExit._id);
        await setCookie(res, token, allUser);
      } else {
        res.status(400).json({
          success: false,
          message: "Invalid Username OR Password !!",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to login",
    });
  }
};


export const getLogged = async(req,res)=>{
  try {
    res.status(200).json({
    
      message:'User Is Authinticated !!'
    })
  } catch (error) {
    res.statsu(400).json({
      message:error?.message
    })
  }

}