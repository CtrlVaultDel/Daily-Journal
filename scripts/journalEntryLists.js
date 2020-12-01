/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./journalDataProvider.js";
import { journalEntryComponent } from "./journalEntry.js";

export const entryListComponent = () => {
    // DOM reference to where all entries will be rendered
    const entryLog = document.querySelector(".journalList")
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    entryLog.innerHTML = entries.map(entry => journalEntryComponent(entry));
}