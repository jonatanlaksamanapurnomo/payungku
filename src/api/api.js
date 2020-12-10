import axios from "axios";
import XMLParser from "react-xml-parser";

const getJawaBarat = () => {
   return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}
const getBali = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bali.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getBangkaBelitung = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-BangkaBelitung.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getBanten = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Banten.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}
const getBengkulu = () => {
    return  axios.get(" https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bengkulu.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}
const getYogyakarta = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-DIYogyakarta.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })

}

const getJakarta = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-DKIJakarta.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}
const getGorontalo = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Gorontalo.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}
const getJambi = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Jambi.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })

}
const getRiau = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Riau.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSulBar = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSulSel = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiSelatan.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSulTengah = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiTengah.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSulTenggara = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiTenggara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSulUt = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSumBar = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSumSel = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraSelatan.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getSumUt = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getIndonesia = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getMaluku = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Maluku.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getJawaTengah = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaTengah.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}



const getJawaTimur = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getKalimantanBarat = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getKalimantanSelatan = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanSelatan.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getKalimantanTengah = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanTengah.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getKalimantanTimur = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanTimur.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getKalimantanUtara = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getKepulauanRiau = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KepulauanRiau.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getLampung = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Lampung.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}



const getNusaTenggaraBarat = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-NusaTenggaraBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getNusaTenggaraTimur = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-NusaTenggaraTimur.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getPapua = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Papua.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const getPapuaBarat = () => {
    return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-PapuaBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}






export  {getJawaBarat , getBali , getBangkaBelitung , getBanten  , getBengkulu , getYogyakarta , getJakarta , getGorontalo , getJambi , getIndonesia, getSumUt, getSumSel, getSumBar, getSulSel, getSulTengah, getSulTenggara, getSulUt, getSulBar, getRiau , getMaluku, getJawaTengah, getJawaTimur, getKalimantanBarat, getKalimantanSelatan, getKalimantanTengah, getKalimantanTimur, getKalimantanUtara, getKepulauanRiau,
    getLampung, getNusaTenggaraBarat, getNusaTenggaraTimur, getPapua, getPapuaBarat}