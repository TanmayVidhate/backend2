import express from 'express';
import cors from 'cors';
import { getHealth } from './controllers/Health.js';
import { getStudent, getStudentById, postStudent, deleteStudentById, patchStudentById } from "./controllers/Student.js"
const app = express();

app.use(cors());
app.use(express.json());


app.get("/health", getHealth);


app.get("/students", getStudent)

app.get("/students/:id", getStudentById)

app.post("/students", postStudent)


app.delete("/students/:id", deleteStudentById)


app.patch("/students/name/:id", patchStudentById);


const PORT = 5003;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});