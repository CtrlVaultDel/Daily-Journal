// Selectors
const eventHub = document.querySelector(".container");

// This is called within the saveEntry function to let the eventHub know when a new entry has been made
const dispatchStateChangeEvent = () => eventHub.dispatchEvent(new CustomEvent("journalStateChange"));

// This function will use a uniqueID to determine what entry to delete from entries.json
const deleteSpecifiedEntry = (uniqueId) =>{
    return fetch(`http://localhost:8088/entries/${uniqueId}`, {
        method: 'DELETE',
        headers: {
            "content-Type": "application/json"
        }
    })
    .then(dispatchStateChangeEvent);
};

eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("delete-btn")) {

        // Split off the identifier from the delete button
        // [0] = "delete", [1] = ID#
        const toDelete = event.target.id.split("--")[1];
        
        // Call the function to delete the specified object from entries.json
        deleteSpecifiedEntry(toDelete)
    };
});