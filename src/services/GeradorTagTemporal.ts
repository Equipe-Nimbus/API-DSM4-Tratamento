class GeradorTagTemporal{

    gerar(unixtime:number):string{
        const data = new Date(unixtime * 1000);
        const listaMeses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        const mes = listaMeses[data.getMonth()]
        const ano = data.getFullYear()
        return `${mes} ${ano}`
    }

}

export default new GeradorTagTemporal()