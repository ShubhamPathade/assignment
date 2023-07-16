import express from "express";
import { getLogged, login, signUp } from "../controllers/userController.js";
import isAuthUser from "../middleware/isAuth.js";

const route = express.Router();

route.post("/signUp", signUp);
route.post("/login", login);
route.get("/logged", isAuthUser,getLogged);


export default route;
