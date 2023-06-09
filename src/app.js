const express = require("express");
const {config} = require("./config/config");
const handlebars = require("express-handlebars");
const {userRouter} = require("./routes/user.routes")
const {viewRouter} = require("./routes/view.router")
const path = require("path");
const {connectDB} = require("./config/connectDB");

const app = express();
const port = config.server.port;

app.listen(port, () => console.log(`Server listening on port ${port}`));
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuracion del motor de plantillas
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use(viewRouter);
app.use("/api", userRouter);