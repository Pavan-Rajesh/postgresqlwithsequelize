const express = require("express");

const userRoute = require("./routes/User");
const app = express();
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000);
