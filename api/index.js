import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js" // for file add.js
import usersRoute from "./routes/users.js" 
import hotelsRoute from "./routes/hotels.js" 
import roomsRoute from "./routes/rooms.js" 

dotenv.config()
const app = express()

const connect = async ()=>{ //since await 
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb")
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})

// middlewares

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

// mongoose.connection.on("connected",()=>{
//     console.log("mongoDB connected!")
// })

// app.get("/",(req,res)=>{
//     res.send("Hello first request")
// })

app.listen(8800, ()=>{
    connect()
    console.log("Connnected to backend...")
})