import express from "express";


const app = express()
const PORT = 5000;



app.get ('/', function(req, res) {
    res.status(200).json('Server working...')
})



app.listen(PORT, ()=> (console.log(`SERVER STARTED ON PORT ${PORT}`)))




