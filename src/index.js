const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db.js");
const productRouter = require("./routes/productRoutes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));

connectDB();
app.use("/", productRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));