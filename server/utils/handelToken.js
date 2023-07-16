import jwt from "jsonwebtoken";

export const getToken = async (userId) => {
  return jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: `5d`,
  });
};

export const setCookie = async (res, token, allUserData) => {
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, options);
  res.status(200).json({
    success: true,
    message: "Logged Successfully :)",
    allUserData: allUserData,
  });
};
