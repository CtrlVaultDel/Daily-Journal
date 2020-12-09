/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This will hold the API data locally
let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

// Fetch entries data from the API and then store the information on the local journal variable
export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        //.then(data => JSON.parse(data))
        .then(entries => journal = entries)
};

// Returns a copy of the journal array
export const useEntries = () => journal.slice();