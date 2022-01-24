const path = require('path');
const express = require('express');
const dotenv = require('dotenv');


const web_routes = require('./routes/webRoutes');

dotenv.config({path: './config/.env'});

const app = express();
const PORT = process.env.PORT;




app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/public")));

app.use("/", web_routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});