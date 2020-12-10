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

export {buildFilter, filterData}