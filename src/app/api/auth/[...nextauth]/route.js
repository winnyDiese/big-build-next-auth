

import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../../../models/user"

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "credentails",
            pages: {signIn:"/login"},
            credentials:{
                username: {label:"name",type:"text",placeholder:"Pascosco"},
                password: {label:"password",type:"password"},
                email: {label:"email",type:"email"}
            },
            async authorize(credentials){
                // check to see if email and password is valid
                if(!credentials.email || !credentials.password) return  

                // check to see if user exist
                const user = await User.find({email:credentials.email})
                if(!user) return null 

                // check to see if password match
                const passWordMatch = await User.find({password:credentials.password})
                if(!passWordMatch) return null 

                // return user if user object is valid
                return user
            }
        })  
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user.token
                token.data = user
            }

            return token
        },
        async session({session,token,user}){
            const userInfo = token?.data?.data
            session.user = userInfo
            session.token = userInfo.token
            return session
        }
    },
    session:{strategy:'jwt'},
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'developpement'
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

