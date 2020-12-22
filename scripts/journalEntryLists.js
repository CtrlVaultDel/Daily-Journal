// Imports
import { getEntries, useEntries } from "./journalDataProvider.js";
import { journalEntryComponent } from "./journalEntry.js";

// Selectors
const targetElement = document.querySelector(".journalList");
const eventHub = document.querySelector(".container");

let entries = [];

// Used to initialize the existing entries in the API on the DOM.
export const entryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        entries = useEntries();
        targetElement.innerHTML = entries.map(entry => journalEntryComponent(entry)).join("");
    })
};

// If a new journal entry is saved, add the new JSON file to the DOM
eventHub.addEventListener("journalStateChange", () => entryListComponent());