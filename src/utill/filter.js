// let filter = {
//     city: [
//
//     ],
//     state: [
//         'OR',
//         'CA',
//     ],
//     type: [
//         'House',
//     ],
//     petsAllowed: [
//         true,
//     ],
//     saleType: [
//         'For Sale',
//     ],
// };
const buildFilter = (filter) => {
    let query = {};
    for (let keys in filter) {
        if (filter[keys].constructor === Array && filter[keys].length > 0) {
            query[keys] = filter[keys];
        }
    }
    return query;
}
const filterData = (data, query) => {
    const filteredData = data.filter((item) => {
        for (let key in query) {
            if (item[key] === undefined || !query[key].includes(item[key])) {
                return false;
            }
        }
        return true;
    });
    return filteredData;
};

const places = [
    {
        place:"Aceh",
        url:"DigitalForecast-Aceh.xml"
    },
    {
        place:"Bali",
        url:"DigitalForecast-Bali.xml"
    },
    {
        place:"Bangka Belitung",
        url:"DigitalForecast-BangkaBelitung.xml"
    },
    {
        place:"Banten",
        url:"DigitalForecast-Banten.xml"
    },
    {
        place:"Bengkulu",
        url:"DigitalForecast-Bengkulu.xml"
    },
    {
        place:"Yogyakarta",
        url:"DigitalForecast-DIYogyakarta.xml"
    },
    {
        place:"Jakarta",
        url:"DigitalForecast-DKIJakarta.xml"
    },
    {
        place:"Gorontalo",
        url:"DigitalForecast-Gorontalo.xml"
    },
    {
        place:"Jambi",
        url:"DigitalForecast-Jambi.xml"
    },
    {
        place:"Jawa Barat",
        url:"DigitalForecast-JawaBarat.xml"
    },
    {
        place:"Jawa Tengah",
        url:"DigitalForecast-JawaTengah.xml"
    },
    {
        place:"Jawa Timur",
        url:"DigitalForecast-JawaTimur.xml"
    },
    {
        place:"Kalimantan Barat",
        url:"DigitalForecast-KalimantanBarat.xml"
    },
    {
        place:"Kalimantan Selatan",
        url:"DigitalForecast-KalimantanSelatan.xml"
    },
    {
        place:"Kalimantan Tengah",
        url:"DigitalForecast-KalimantanTengah.xml"
    },
    {
        place:"Kalimantan Timur",
        url:"DigitalForecast-KalimantanTimur.xml"
    },
    {
        place:"Kepulauan Riau",
        url:"DigitalForecast-KepulauanRiau.xml"
    },
    {
        place:"Lampung",
        url:"DigitalForecast-Lampung.xml"
    },
    {
        place:"Maluku",
        url:"DigitalForecast-Maluku.xml"
    },
    {
        place:"Maluku Utara",
        url:"DigitalForecast-MalukuUtara.xml"
    },
    {
        place:"Nusa Tenggara Barat",
        url:"DigitalForecast-NusaTenggaraBarat.xml"
    },
    {
        place:"Nusa Tenggara Timur",
        url:"DigitalForecast-NusaTenggaraTimur.xml"
    },
    {
        place:"Provinsi Papua",
        url:"DigitalForecast-Papua.xml"
    },
    {
        place:"Provinsi Papua Barat",
        url:"DigitalForecast-PapuaBarat.xml"
    },
    {
        place:"Riau",
        url:"DigitalForecast-Riau.xml"
    },
    {
        place:"Sulawesi Barat",
        url:"DigitalForecast-SulawesiBarat.xml"
    },
    {
        place:"Sulawesi Selatan",
        url:"DigitalForecast-SulawesiSelatan.xml"
    },
    {
        place:"Sulawesi Tengah",
        url:"DigitalForecast-SulawesiTengah.xml"
    },
    {
        place:"Sulawesi Tenggara",
        url:"DigitalForecast-SulawesiTenggara.xml"
    },
    {
        place:"Sulawesi Utara",
        url:"DigitalForecast-SulawesiUtara.xml"
    },
    {
        place:"Sumatera Barat",
        url:"DigitalForecast-SumateraBarat.xml"
    },
    {
        place:"Sumatera Selatan",
        url:"DigitalForecast-SumateraSelatan.xml"
    },
    {
        place:"Sumatera Utara",
        url:"DigitalForecast-SumateraUtara.xml"
    },
    {
        place:"Indonesia",
        url:"DigitalForecast-Indonesia.xml"
    }
];

export {buildFilter, filterData , places}