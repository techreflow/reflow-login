import  mongoose  from "mongoose";

type connectionObject ={
  isConnected?: number;
}

const connection: connectionObject = {};

async function dbConnect():Promise<void>{
  if(connection.isConnected){
    console.log("Using existing connection");
    return;
  }
 try{
  const db = await mongoose.connect("mongodb://localhost:27017" ,{
    dbName: "reFlow",
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("New connection");
}
catch(err){
  console.log(err);}
  
}

export default dbConnect;