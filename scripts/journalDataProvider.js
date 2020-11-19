/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "11/16/20",
        concepts: "Git & GitHub",
        entry: "Our team worked a lot with Git and GitHub commands.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "11/17/20",
        concepts: "JavaScript Stuff",
        entry: "Worked on a few different projects, including Martin's Aquarium and Modern Farm.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "11/18/20",
        concepts: "JavaScript Stuff",
        entry: "Still working on Martin's Aquarium and Modern Farm.",
        mood: "Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

// Sent to journalEntryLists.js to be converted into HTML by the journalEntryComponent() function in journalEntry.js
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}