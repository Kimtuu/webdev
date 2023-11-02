// create empty pets array
const pets = [];

let nextPetId = 1;

function getNewPetId() {
  const newPetId = nextPetId;
  nextPetId++;
  return newPetId;
}

// Handlers

// GET //pets
const getAllPets = (req, res) => {
  console.log(pets);
  res.json(pets);
};

// POST /pets
const createPet = (req, res) => {
  const { name, species, age, color, weight } = req.body;
  console.log(name, species, age, color, weight);
  const newPet = {
    petId: getNewPetId(),
    name,
    species,
    age,
    color,
    weight,
  };
  pets.push(newPet);
  res.json(newPet);
};

// GET /pets/:petId
const getPetById = (req, res) => {
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  console.log(pet);
  res.json(pet);
};

// PUT /pets/:petId update pet by id
const updatePet = (req, res) => {
  const { name, species, age, color, weight } = req.body;
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  pet.name = name;
  pet.species = species;
  pet.age = age;
  pet.color = color;
  pet.weight = weight;
  res.json(pet);
};

// DELETE /pets/:petId delete pet by id
const deletePet = (req, res) => {
  const petId = req.params.petId;
  const petIdx = pets.findIndex((pet) => pet.petId == petId);
  pets.splice(petIdx, 1);
  res.json({ message: "success" });
};

module.exports = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
};