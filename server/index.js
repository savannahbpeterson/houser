const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');


const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log(err);
})

app.get(`/api/houselist`, controller.getHouseList)
// console.log(controller)
app.post(`/api/property`, controller.addNewProperty)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
    console.log(`Someone is eaves dropping on port ${PORT}`)
})