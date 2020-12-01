import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './Routes/posts-routes.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://outletadmin:outletadmin@cluster0.oh3t9.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Sweet! Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
