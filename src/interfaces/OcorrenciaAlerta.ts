
export default interface OcorrenciaAlertaMongo{
    idEstacao:string,
    idAlerta:number,
    idParametro:number,
    nomeEstacao:string,
    nomeAlerta:string,
    nomeParametro:string,
    dia:string,
    mes:string,
    ano:string,
    medicao:number,
    condicaoAlerta:string,
    valorAlerta:number,
    estadoEstacao:string,
    cidadeEstacao:string,
    latitudeEstacao:number,
    longitudeEstacao:number
}
