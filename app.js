const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path')

const { router } = require("./routes/emproute");
const { userRouter } = require("./routes/userroute");
const { dbConnection } = require("./config/db");

dotenv.config({path:path.join(__dirname,'config','config.env')})

dbConnection();

app.use(cors());
app.use(express.json());
app.use("/api/view/", router);       // localhost:8000/api/view/emp
app.use("/api/view/", userRouter);    // localhost:8000/api/reg/reg

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}...`);
});
