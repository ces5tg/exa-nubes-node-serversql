const express = require('express')

const cors = require('cors');
const sql = require('mysql2/promise')
    //import express from 'express'
    //import cors from 'cors'
    //import sql from 'mysql2/promise'
const a = express()
a.use(cors());
const dbConfig = {
    host: '127.0.0.1', // nombre del servicio
    port: 3313, // se pone el puerto interno de sql
    user: 'root',
    password: '123',
    database: 'db2',
   
};
const conexion = async() => {
    return await sql.createConnection(dbConfig);
};


a.get('/', async(req, res) => {
    console.log("se a entrado a la ruta de inicio")
    const db = await conexion()
    const [rows] = await db.query("SELECT * FROM datos")
    console.log(rows)
    res.json(rows)
        //res.send("hola estas en el servidor de cesar")
        //res.send('holassaasass')
})

a.get('/ping', async(req, res) => {
    const db = await conexion()
    const a = await db.query("SELECT now()")
    console.log(a)
    res.json(a[0])
        //res.send("hola estas en el servidor de cesar")
})

a.listen(3000)
console.log("se esta ejecutando el servidor ")