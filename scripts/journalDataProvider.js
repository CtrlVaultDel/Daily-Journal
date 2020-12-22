// Selectors
const eventHub = document.querySelector(".container");

// This will hold the API data locally
let journal = [];

// Fetch entries data from the API and then store the information on the local journal variable
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(parsedEntries => journal = parsedEntries);
};

// Returns a copy of the journal array
export const useEntries = () => journal.slice();

// This is called within the saveEntry function to let the eventHub know when a new entry has been made
const dispatchStateChangeEvent = () => eventHub.dispatchEvent(new CustomEvent("journalStateChange"));

// Called when a new entry is saved on the form
export const saveJournalEntry = newJournalEntry => {
    return fetch('http://localhost:8088/entries?_expand=mood', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};