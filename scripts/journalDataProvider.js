// Selectors
const eventHub = document.querySelector(".form-container")

// This will hold the API data locally
let journal = []

const dispatchStateChangeEvent = () => {
    const entryStateChangeEvent = new CustomEvent("entryStateChange");

    eventHub.dispatchEvent(entryStateChangeEvent);
}

// Fetch entries data from the API and then store the information on the local journal variable
export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(parsedEntries => journal = parsedEntries);
};

// Returns a copy of the journal array
export const useEntries = () => journal.slice();

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
}