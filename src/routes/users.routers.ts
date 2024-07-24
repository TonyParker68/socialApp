import { Router } from "express";
import router from ".";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Welcome to the user homepage!");
});

export default usersRouter;
