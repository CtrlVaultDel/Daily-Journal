// Selectors
const targetElement = document.querySelector(".form-container");

// Responsible for rendering the form to the DOM
export const journalFormComponent = () => {
    targetElement.innerHTML =`
        <fieldset class="form-container">
            <h2>Daily Journal</h2>
            <div class="journalDate form-item">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </div>
            <div class="journalConcepts form-item">
                <label for="journalConcepts">Concepts Covered</label>
                <input type="text" name="journalConcepts" id="journalConcepts" placeholder="Main ideas covered">
            </div>
                <div class="journalMood form-item">
                <label for="journalMood">Mood</label>
                <select name="journalMood" id="journalMood">
                    <option value="elated">Elated</option>
                    <option value="happy">Happy</option>
                    <option value="normal">Normal</option>
                    <option value="sad">Sad</option>
                    <option value="depressed">Depressed</option>
                </select>
            </div>
            <div class="journalEntry">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="journalEntry" cols="60" rows="10" placeholder="Enter your journal entry here"></textarea>
            </div>
            <div class="journalSubmit">
                <input type="submit" value="Record Journal Entry" id="journalSubmit">
            </div>
        </fieldset>
    `
};

