import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
 "mongodb+srv://ranjithmahesh1997:NKFuFnG3znlT4bCE@cluster0.woxrnit.mongodb.net/?retryWrites=true&w=majority"    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase
