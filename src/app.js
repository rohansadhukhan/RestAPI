const express = require('express');
require('./db/conn.js');
const studentRouter = require('./routers/student');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`Listening at port number ${port}`);
});