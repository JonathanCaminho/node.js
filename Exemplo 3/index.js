let express = require('express')
let bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.json())

class aluno {
    constructor(id, nome, idade) {
        this.id = id
        this.nome = nome
        this.idade = idade
    }
}

let alunos = []

let alunoteste = new aluno(1, "Marcos", 30)
alunos.push(alunoteste)

app.listen(8080, function (err) {
    if (err) throw err
    console.log('Servidor Ligado  :::::::: http://localhost:8080')
})

app.get('/aluno/:id', function (req, res) {
    let id = Number.parseInt(req.params.id)
    res.json(alunos.find(alunos => alunos.id == id))
})

app.get('/aluno/', function (req, res) {
    res.json(alunos)
})

app.post('/aluno', (req, res) => {
    try{
    if (alunos.findIndex(alunos => alunos.id == req.body.id) == -1) {
        let aluno1 = new aluno(req.body.id, req.body.nome, req.body.idade)
        alunos.push(aluno1)
        res.json({ sucess: true })
    } 
    else throw Error()
}
catch {
    res
        .status(400)
        .json({ sucess: false,message: 'Estrutura mal-formada'})
}

})
