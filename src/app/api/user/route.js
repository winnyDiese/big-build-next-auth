
import { NextResponse } from "next/server"
import connectDb from "../../../../libs/mongoose"
import User from "../../../../models/user"

await connectDb()

export async function GET(){
    const users = await User.find()
    return NextResponse.json({message:"Users",users},{status:201})
}

export async function POST(request){
    const {names,email,password} = await request.json()
    const user = await User.create({names,email,password})

    return NextResponse.json({message:"User added !",user},{status:201})
}

