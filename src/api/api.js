import axios from "axios";
import XMLParser from "react-xml-parser";

const fieldNameMapper = value => {
    return (
        {
            id: value.attributes.id,
            description: value.attributes.description.toLowerCase(),
            domain: value.attributes.domain.toLowerCase(),
            child: value.children,
            lat: value.attributes.latitude,
            long: value.attributes.longitude
        }
    )
};


const getAceh = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Aceh.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })

}
const getJawaBarat = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}
const getBali = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bali.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getBangkaBelitung = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-BangkaBelitung.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getBanten = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Banten.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}
const getBengkulu = () => {
    return axios.get(" https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bengkulu.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}
const getYogyakarta = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-DIYogyakarta.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })

}

const getJakarta = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-DKIJakarta.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}
const getGorontalo = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Gorontalo.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}
const getJambi = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Jambi.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })

}
const getRiau = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Riau.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSulBar = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSulSel = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiSelatan.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSulTengah = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiTengah.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSulTenggara = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiTenggara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSulUt = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SulawesiUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSumBar = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSumSel = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraSelatan.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getSumUt = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getIndonesia = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getMaluku = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Maluku.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getJawaTengah = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaTengah.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}


const getJawaTimur = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getKalimantanBarat = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getKalimantanSelatan = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanSelatan.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getKalimantanTengah = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanTengah.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getKalimantanTimur = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanTimur.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getKalimantanUtara = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KalimantanUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getKepulauanRiau = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-KepulauanRiau.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getLampung = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Lampung.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}


const getNusaTenggaraBarat = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-NusaTenggaraBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getNusaTenggaraTimur = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-NusaTenggaraTimur.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getPapua = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Papua.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}

const getPapuaBarat = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-PapuaBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}
const getMalukuUtara = () => {
    return axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-MalukuUtara.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })

}


export {
    getAceh,
    getBali,
    getBangkaBelitung,
    getBanten,
    getBengkulu,
    getYogyakarta,
    getJakarta,
    getGorontalo,
    getJambi,
    getIndonesia,
    getSumUt,
    getSumSel,
    getSumBar,
    getSulSel,
    getSulTengah,
    getSulTenggara,
    getSulUt,
    getSulBar,
    getRiau,
    getMaluku,
    getJawaTengah,
    getJawaTimur,
    getKalimantanBarat,
    getKalimantanSelatan,
    getKalimantanTengah,
    getKalimantanTimur,
    getKalimantanUtara,
    getKepulauanRiau,
    getLampung,
    getNusaTenggaraBarat,
    getNusaTenggaraTimur,
    getPapua,
    getPapuaBarat,
    getMalukuUtara,
    getJawaBarat
}