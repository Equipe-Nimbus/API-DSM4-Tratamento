import { ObjectId } from "mongodb";

export default interface MedicaoMongo{
    _id:ObjectId,
    idPlacaEstacao:string,
    unix:number,
    bateria:number,
    medicoes:any

}
