import express from "express";
// import mongoose from "mongoose";
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import ProgressBar from "progress";

const app = express()
const port = 3000

const bar = new ProgressBar(':bar', {total: 10})

const timer = setInterval(() => {
    bar.tick()

    if(bar.complete) {
        clearInterval(timer)
    }
}, 100)

// const nums = [1, 2, 3, 4]

// console.log('this is port %d', port)
console.log(chalk.green("this is red text"))

// const writeHello = () => console.log("hello")

// const measureTime = () => {
// console.time("Write Hello") // label must be identical

// writeHello()

// console.timeEnd("Write Hello") // label must be identical
// }

// measureTime()


// try {
//     const file = path.resolve('dist')
//     const openDir = fs.readdirSync(file)
//     console.log(openDir)
// } catch (error) {
//     console.log(error)
// }


// app.get('/', (req, res) => {
//     res.status(200).json({msg: "worked"})
// })

// main().catch((err) => {
//     console.log(err)
// })

// async function main() {
//     mongoose.connect()
//     console.log(`connected to database`)
// }

// app.listen(port, () => {
//     console.log("listening on port 3000")
// })