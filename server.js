const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRouter);

app.listen(4000, () => {
    console.log("SERVIDOR ONLINE => CRUD!");
})