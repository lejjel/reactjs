const express = require('express')
const app = express()
const port = 5000



const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://eunjin:55ACeKqSvB5B5Np@clusterboilerplate.ubp33.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex : true,
useFindAndModify : false}).then(()=>console.log("connected!")).catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('React js 첫날~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})