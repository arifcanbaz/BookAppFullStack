"use strict";
/* -------------------------------------------------------
          BOOK ASSIGMENT
------------------------------------------------------- */


const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json())

require('express-async-errors')

app.use(require('./app/routes/book.router'))



app.use(require('./app/errorHandler'))
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));