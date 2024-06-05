

import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "credentails",
            credentials:{
                username: {label:"name",type:"text",placeholder:"Pascosco"},
                password: {label:"password",type:"password"},
                email: {label:"email",type:"email"}
            },
            async authorize(credentials){
                // 
            }
        })  
    ],
    session:{strategy:'jwt'},
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'developpement'
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

