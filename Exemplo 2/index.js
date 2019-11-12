let express = require('express')
let bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.json())

let cache = 'Arroz com farofa'

app.listen(8080,function (err){
    if (err) throw err
    console.log('Servidor Ligado  :::::::: http://localhost:8080')
})

app.get('/cache', function (req, res) {
    res.json({value:cache})
})

app.post('/cache', (req, res) =>{
    try{
        if(req.body.value){
        cache = req.body.value
        res.json({sucess: true})    
    } else throw Error()
}
catch {
    res
        .status(400)
        .json({sucess:false,message: 'Estrtutura mal-formada'})

    }
})
