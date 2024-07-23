import SpeciesEnum from "../enums/SpeciesEnum";

type PetType={
    id:number;
    name:string;
    species:SpeciesEnum;
    age:number;
    adopted:boolean;
}

export default PetType;
