
export default interface OcorrenciaAlertaMongo{
    idEstacao:string,
    idAlerta:number,
    idTipoParametro:number,
    nomeEstacao:string,
    nomeAlerta:string,
    nomeTipoParametro:string,
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
