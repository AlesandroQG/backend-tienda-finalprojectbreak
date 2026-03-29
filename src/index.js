const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db.js");
const productRouter = require("./routes/productRoutes.js");
const authRouter = require("./routes/authRoutes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));

connectDB();
app.use("/products", productRouter);
app.use("/admin", authRouter);

app.use((req, res) => {
    res.status(404).json({error: "Página no encontrada"});
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));