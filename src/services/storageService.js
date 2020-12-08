// Saving to localSession 
function store(key, value) {
    sessionStorage[key] = JSON.stringify(value);
}


// Loading from localSession
function load(key, defaultValue = []) {
    var value = sessionStorage[key];
    console.log('loading from storage');
    if (!value) return defaultValue
    else return JSON.parse(value);
}

export default {
    store,
    load
}