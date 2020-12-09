/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./journalDataProvider.js";
import { journalEntryComponent } from "./journalEntry.js";

// Selectors
const targetElement = document.querySelector(".journalList");

let entries = [];

export const entryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        entries = useEntries();
        targetElement.innerHTML = entries.map(entry => journalEntryComponent(entry));
    })
};