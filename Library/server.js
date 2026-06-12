const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const methodOverride = require("method-override");

const testRoutes = require("./routes/testRoutes");
const calculationRoutes = require("./routes/calculationRoutes");
const libraryRoutes = require("./routes/libraryRoutes");
const pagesRoutes = require("./routes/pagesRoutes");
const studentRoutes = require("./routes/studentRoutes");
const apiRoutes = require("./routes/apiRoutes");
const birthdayRoutes = require("./routes/birthdayRoutes");
const whiteboardRoutes = require("./routes/whiteboardRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", calculationRoutes);
app.use("/", libraryRoutes);
app.use("/", pagesRoutes);
app.use("/", studentRoutes);
app.use("/", birthdayRoutes);

app.use("/api", apiRoutes);
app.use("/api", whiteboardRoutes);

app.use("/tests", testRoutes);

// Export app instead of listen
module.exports = app;