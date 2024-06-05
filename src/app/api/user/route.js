
import { NextResponse } from "next/server"
import {connectMongoDb} from "../../../../libs/connectDb"
import User from "../../../../models/user"
import mongoose from "mongoose"

// try{
//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("Connected to mongodb")
// }catch(error){
//     console.log(error)
// }

await connectMongoDb()

export async function GET(){
    const users = await User.find()
    return NextResponse.json({message:"Users",users},{status:201})
}

export async function POST(request){
    const {names,email,password} = await request.json()
    const user = await User.create({names,email,password})

    return NextResponse.json({message:"User added !",user},{status:201})
}

