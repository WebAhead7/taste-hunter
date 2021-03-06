const express = require("express");
const { handleErrors } = require("./middleware/err");
const dishes = require("./handlers/dishes");
const users = require("./handlers/users");
const middleWare = require("./middleware/auth");
const cookersRouter = require("./routers/cookers");
const dishesRouter = require("./routers/dishes");
const usersRouter = require("./routers/users");

// Server set-up
const PORT = process.env.PORT || 4000;
const app = express();
const server = app.listen(PORT, () => {
  console.log("Listening at http://localhost:4000");
});

// Uses go here
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Routes set-up
app.use("/cookers", cookersRouter);

app.use("/dishes", dishesRouter);

app.use("/users", usersRouter);

// Handeling Errors
app.use(handleErrors);
