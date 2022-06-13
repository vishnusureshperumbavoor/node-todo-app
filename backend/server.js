const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const UserRoutes = require("./routes/UserRoutes")

const app = express();
dotenv.config();
connectDB();
app.use(express.json())

// app.get("/", (req, res) => {
//   res.send("api is running");
// });
// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });
app.use('/api/users',UserRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
