const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('port', process.env.PORT || 3000);

const router = require("../routes/router");
app.use("/", router);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})