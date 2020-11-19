/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./journalDataProvider.js";
import { journalEntryComponent } from "./journalEntry.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalList")

export const entryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        const journalHTML = journalEntryComponent(entry)
        entryLog.innerHTML += journalHTML
    }
}