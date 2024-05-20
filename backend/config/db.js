import mongoose from "mongoose"

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:MG6542.mg@cluster0.asyjdp1.mongodb.net/food-del')
     .then(()=>console.log("DB Connected"));
}

// import mongoose from "mongoose";

// export const  connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://greatstack:MG6542.mg@cluster0.asyjdp1.mongodb.net/food-del').then(()=>console.log("DB Connected"))
// }