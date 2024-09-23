import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';
import farmerRoutes from './routes/farmerRoute.js';
import shopRoute from './routes/shop_productRoute.js';
import imageHandler from './routes/imageHandlerRoute.js';//DL
import DLFormRoutes from './routes/DLFormRoutes.js';//DL
import driverRoutes from './routes/DLDriverRoutes.js';//DL
import { fileURLToPath } from 'url'; //DL
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import DLEmailRoutes from './routes/DLEmailRoutes.js'; //DL
import dotenv from 'dotenv';  //DL
import oRoutes from './routes/DLORoutes.js'; // DL
import { checkForAvailableDrivers } from './controllers/DLDeliveryController.js'; //DL THIS IS CHECKING ALL ODRS AND ASSIGN DRIVERS
import deliveryRoutes from './routes/DLDeliveryRoute.js'; //DL

//import deliveryRoute from './routes/DLDeliveryRoute.js'; // Importing delivery routes
dotenv.config();





checkForAvailableDrivers(); //DL





// Load environment variables
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url); //DL
const __dirname = path.dirname(__filename);//DL

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));//DL


// Routes
app.get('/', (_req, res) => {
    res.send('FarmCart API is Running...');
});

app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.use('/api/farmers', farmerRoutes);
app.use('/api/shops', shopRoute);
app.use('/api/images', imageHandler);//DL
app.use('/api/d_forms', DLFormRoutes);//DL
app.use('/api/drivers', driverRoutes); // Added driver routes
app.use('/api/email', DLEmailRoutes); // Use the email routes
app.use('/api/od', oRoutes);//dl
app.use('/api/delivery', deliveryRoutes); // Use the delivery routes

//app.use('/api/delivery', deliveryRoute);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server currently is running on port ${PORT}`);
}).on('error', (error) => {
    console.error(`Error starting server: ${error.message}`);
});
