const express = require('express');
const app = express();

// Functions

const {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
} = require('./petHandlers')

// Middleware to parse JSON
app.use(express.json());

// Middleware to log time of each request
app.use((req, res, next) => {
    console.log('----------------------------------');
    console.log("Time:", new Date().toLocaleString('FI'));
    console.log("Request:", req.method, req.url);
    console.log('----------------------------------');

    next();
  });
  

// Routes

// GET /pets
app.get('/pets', getAllPets);

// POST /pets
app.post('/pets', createPet);

// GET /pets/:petId
app.get('/pets/:petId', getPetById);

// PUT /pets/:petId
app.put('/pets/:petId', updatePet);

// DELETE /pets/:petId
app.delete('/pets/:petId', deletePet);

const PORT = 4000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});