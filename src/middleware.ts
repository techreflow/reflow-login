export { auth as middleware } from "@/auth";
// import {NextRequest, NextResponse } from 'next/server'
// import {getToken} from "next-auth/jwt";

 
// // This function can be marked `async` if using `await` inside
// async function auth(request: NextRequest) {
//   //@ts-ignore
//   const session = await auth((req:NextRequest, res:NextResponse)=>{
//     const url= request.nextUrl;
//     //@ts-ignore
//     if(!(session)&&(
//      ( url.pathname.startsWith('/loginned'))
//     )){
//       return NextResponse.json({error:"You are already logged in"})
      
//     }
//     //@ts-ignore
//     if((session)&&(
//       ( url.pathname.startsWith('/login'))
//     )){
//       return NextResponse.redirect('/loginned')
//     }
//     return NextResponse.json({message:"all good"})

//   })
 
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/login','/dashboard/:path*','/loginned'],
// }

