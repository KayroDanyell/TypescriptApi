import { Request, Response } from "express";
import PetType from "../types/PetType";
import SpeciesEnum from "../enums/SpeciesEnum";

let listaPets : Array<PetType> = []

class PetController{
    index(req:Request, res:Response): Response{
        return res.status(201).json(listaPets);
    }
    
    storePet(req:Request,res:Response) : Response<PetType> {
        const {id,name,species,age,adopted} = req.body as PetType;
        if(!Object.values(SpeciesEnum).includes(species)){
            return res.status(400).json("Invalid species");
        }
        listaPets.push({id,name,species,age,adopted})
        
        return res.status(201).json(listaPets)
    }

    updatePet(req:Request,res:Response):Response<PetType>{
        const {id} = req.params;
        let pet = listaPets.find((pet => pet.id === Number(id)))
        if (!pet) {
            return res.status(404).json("pet not Found")
        }
        const {name,age,species,adopted} = req.body as PetType;
        pet.name = name;
        pet.age = age;
        pet.species = species;
        pet.adopted = adopted;
        return res.status(200).json(pet);
    }

    deletePet(req:Request,res:Response) :Response<PetType>{
        const {id} = req.params;
        let pet = listaPets.filter((pet) => pet.id !== Number(id));
        if (pet.length === listaPets.length) {
            return res.status(404).json("pet not Found")
        }
        listaPets = pet;
        return res.status(200).json(pet);
    }


}

export default PetController