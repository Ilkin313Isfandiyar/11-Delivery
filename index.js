const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

const bcrypt = require('bcrypt')
const saltRounds = 10

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    // database: "test12"
})

const db_2 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    // database: "loginsystem"
})

app.use(express.json())

app.use(cors())

// app.use(cors({
//     origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST'],
//     credentials: true,

// }))

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 *24
    }
}))

app.get('/orders', (req,res)=>{
    const q = 'SELECT * FROM test12.orders';
    db.query(q,(err,data)=>{
        if(err) return res.json(err) 
        return res.json(data)
    })
})

app.get("/", (req,res)=>{
    res.send("Hello this is my server")
})

app.post("/orders", (req,res)=>{
    const q = "INSERT INTO test12.orders (title, Description, Location, Price) VALUES (?)"
    const values = [
        req.body.title,
        req.body.Description,
        req.body.Location,
        req.body.Price
    ] 

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Order is added succesfully!")
    }) 
})

app.post("/admin", (req,res)=>{
    const q = "INSERT INTO sign.users (ad, parol) VALUES (?,? )"
    const ad = req.body.ad;
    const parol = req.body.parol;

    bcrypt.hash(parol, saltRounds, (err, hash)=>{

        if(err){
            console.log(err)
        }
        db.query(q,[ad, hash], (err,data)=>{
            if(err) return res.json(err)
            return res.json("Order is added succesfully!")
        }) 
    })

    
})

app.post('/login', (req,res)=>{
    const ad = req.body.ad;
    const parol = req.body.parol
   
    db.query("SELECT * FROM sign.users WHERE ad = ?;",
            ad,(err,result)=>{
                if(err) {
                    res.send({err: err})
                }

                if (result.length > 0) {
                    bcrypt.compare(parol, result[0].parol, (err,response)=>{
                        if(response){
                            req.session.user = result
                            console.log(req.session.user)
                            res.send(result)
                        }
                        else {
                            res.send({message: "Wrong password or username"})
                        }
                    })
                }
                else{
                    res.send({message: "User doesnt exist"})
                }
            })

    // db.query(q,[values], (err,data)=>{
    //     if(err){
    //         res.send({err: err})
    //     } 
    //    {
    //         if(data){
    //             res.send(data)
    //         } else {
    //             res.send({message: 'Incorrect password or username'})
    //         }
    //     }
            
        
    // }) 
})

app.get("/login", (req,res)=>{
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.delete("/orders/:id", (req,res)=>{
    const orderId = req.params.id;
    const q = "DELETE FROM test12.orders WHERE idOrders = ?"

    db.query(q,[orderId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Order is deleted succesfully!")
    }) 
})

app.put("/orders/:id", (req,res)=>{
    const orderId = req.params.id;
    const q = "UPDATE test12.orders SET `title` = ?, `Description` = ?, `Location` = ?, `Price` = ? WHERE idOrders = ?"

    const values = [
        req.body.title,
        req.body.Description,
        req.body.Location,
        req.body.Price
    ]

    db.query(q,[...values,orderId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Order is updated succesfully!")
    }) 
})

app.listen(8800, ()=>{
    console.log("Server is running!")
})