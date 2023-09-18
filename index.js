import  Express   from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'
const app = Express();

//  middleware for parsing req body
app.use(Express.json())

// database connection
mongoose.connect(mongoDBURL)
.then(() => {
    console.log("successfully connected to mongodb");
})
.catch((error) => {
    console.log(error)
})





// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// middleware for routes
app.use('/books', bookRoutes);



app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});




//  server listen
app.listen(PORT , () => {
    console.log(`server started at  port ${PORT}`)
})
