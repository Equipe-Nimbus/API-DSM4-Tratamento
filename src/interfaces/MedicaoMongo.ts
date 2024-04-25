import { ObjectId } from "mongodb";

export default interface MedicaoMongo{
    _id:ObjectId,
    uuid:string,
    unix:number,
    bateria:number,
    medicoes:any

}
