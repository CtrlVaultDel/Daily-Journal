// Imports
import { saveJournalEntry } from "./journalDataProvider.js";
import { getMoods, useMoods } from "./moods/moodProvider.js";

// Selectors
const targetElement = document.querySelector(".form-container");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if (event.target.id === "journalSubmit"){
        // Save DOM form elements to related local variables
        const date = document.getElementById("journalDate").value;
        const concepts = document.getElementById("journalConcepts").value;
        const entry = document.getElementById("journalEntry").value;
        const mood = document.getElementById("journalMood").value;

        // Check to see if the concepts text is less than 15 characters long
        if(concepts.length < 15){
            // Create a new object to be saved to the API
            const newEntry = {
                date: date,
                concepts: concepts,
                entry: entry,
                mood: mood
            }
            // Save the new entry object to the API
            saveJournalEntry(newEntry);
        }
        else{
            alert("Please keep the Concepts less than 15 characters")
        };
    };  
});

// Responsible for rendering the form to the DOM
export const journalFormComponent = () => {
    let moodsList = [];

    // First get the moods and then present the form on the DOM
    getMoods()
    .then(() => {
        moodsList = useMoods();

        targetElement.innerHTML =`
            <h2>Daily Journal</h2>
            <div class="journalDate form-item">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </div>
            <div class="journalConcepts form-item">
                <label for="journalConcepts">
                    Concepts Covered
                </label>
                <input type="text" name="journalConcepts" id="journalConcepts" placeholder="Main ideas covered" required>
            </div>
            <div class="journalMood form-item">
                <label for="journalMood">
                    Mood
                </label>
                <select name="journalMood" id="journalMood">
                    <option value="elated">${moodsList[0].label}</option>
                    <option value="happy">${moodsList[1].label}</option>
                    <option value="normal" selected>${moodsList[2].label}</option>
                    <option value="sad">${moodsList[3].label}</option>
                    <option value="depressed">${moodsList[4].label}</option>
                </select>
            </div>
            <div class="journalEntry">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="journalEntry" cols="60" rows="10" placeholder="Enter your journal entry here" required></textarea>
            </div>
            <div class="journalSubmit">
                <input type="submit" value="Record Journal Entry" id="journalSubmit">
            </div>
        `;
    });
};