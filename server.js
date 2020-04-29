const express = require("express"),
      app = express();

require("dotenv").config();

app.use(express.static("public"));

app.listen(process.env.PORT, () => console.log("server up!"));