// Saving to localSession 
function store(key, value) {
    sessionStorage[key] = JSON.stringify(value);
}


// Loading from localSession
function load(key, defaultValue = []) {
    let value = sessionStorage[key];
    if (!value) return defaultValue
    else return JSON.parse(value);
}

export default {
    store,
    load
}