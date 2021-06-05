const express = require("express");
const path = require("path");
const indexRoute = require("./server/routes/indexRouter");
const apiRoute = require("./server/routes/apiRouter");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

/* Connect to DB */
mongoose.connect(
  process.env.DB_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected")
);

/* Middleware */
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* Routes */
app.use("/", indexRoute);
app.use("/api", apiRoute);

/* Server */
app.listen(PORT, () => console.log("port running"));
