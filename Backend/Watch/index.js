const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/AjouterWatch", require("./Watch"));




const PORT = 5005;
app.listen(PORT, () => {
    console.log('App listening on port 5005!');
});