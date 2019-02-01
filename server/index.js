const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');


const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database is connected')
}).catch(err => {
    console.log(err);
})

app.get(`/api/houselist`, controller.getHouseList)
// console.log(controller)
app.post(`/api/property`, controller.addNewProperty)
app.delete(`/api/property:id`, controller.deleteProperty)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
    console.log(`Someone is eaves dropping on port ${PORT}`)
})