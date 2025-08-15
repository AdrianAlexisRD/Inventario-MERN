import mongoose from 'mongoose';
//conecxion a base de datos usando la libreria mongoose 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error de conexión:', error.message);
    process.exit(1);
  }
};

export default connectDB;