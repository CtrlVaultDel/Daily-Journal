/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./journalDataProvider.js";
import { journalEntryComponent } from "./journalEntry.js";

// Selectors
const entryLog = document.querySelector(".journalList");

let entries = [];

export const entryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(entries = useEntries())
    .then(entryLog.innerHTML = entries.map(entry => 
        journalEntryComponent(entry)))
}