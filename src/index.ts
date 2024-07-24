import express from "express";
import router from "./routes/index";
import usersRouter from "./routes/users.routers";
const app = express();
const port = 3000;

// middleware
app.use(
  "/",
  (req, res, next) => {
    console.log("middleware1");
  },
  router,
);

app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
