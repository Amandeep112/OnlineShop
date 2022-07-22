import express from "express"
import Products from "./data/products.js"
const app = express()

app.get("/api/products", (req, res) => {
    res.json(Products)
})

app.get("/", (req, res) => {
    res.send("app is running")
})
app.listen(5000, () => {
    console.log('server  is listning on 5000')
})