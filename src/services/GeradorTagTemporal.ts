class GeradorTagTemporal{

    gerar(unixtime):number{
        const data = new Date(unixtime * 1000)
        data.setDate(1);
        data.setHours(0, 0, 0, 0);
        return Math.floor(data.getTime() / 1000);
    }

}

export default new GeradorTagTemporal()