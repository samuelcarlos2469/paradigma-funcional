let media = 0
const mediaMeses = async () => {
    try{
        const response = await fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/7777?start_date=20230806&end_date=20240807')
        const data = await response.json();
        media = await data.forEach(element => {
            media += Number(element.high)
            
        });
        

    }
    catch(error){
        console.log(error)
    }
}

mediaMeses()