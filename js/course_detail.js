console.log(">>> cource_detail.js injected! >>>")

function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}

function getQueryParams(query)
{
    let params = {};
    query = query || document.location.search.substring(1);
    if (!query) {
        return params;
    }
    let vars = query.split("&");
    for (let i=0; i < vars.length; ++i) {
        let pair = vars[i].split("=");
        params[pair[0]] = pair[1];
    }
    return params;
}

let query_params = getQueryParams();

console.log(query_params);