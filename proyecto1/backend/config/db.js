import mongoose from "mongoose";


const connectionMongo = async () => {

    await mongoose.connect(process.env.CONEXION_DB,{})
    try{console.log("conexion exitosa");}catch(error){console.error("error de conexion: ", error.message)}
}

export default connectionMongo;

