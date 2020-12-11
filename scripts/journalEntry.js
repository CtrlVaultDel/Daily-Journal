/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journalEntryComponent = (entry) => {
    return `
        <section id="entry-${entry.id}" class="journal">
            
            <div class="btn-container">
                <div class ="btn-container__edit">
                    <button class="edit-btn" id="edit--${entry.id}">
                        <img class="edit-btn__img" src="./images/edit-icon.png" alt="edit icon">
                    </button>
                </div>
                <div class="journal__concepts">
                    <h3>${entry.concepts}</h3>
                </div>
                <div class="btn-container__delete">
                    <button class="delete-btn" id="delete--${entry.id}">
                        <img class="delete-btn__img" src="./images/delete-icon.png" alt="delete icon">
                    </button>
                </div>
            </div>
                
            <div class="journal__entry">
                ${entry.entry}
            </div>

            <div class="journal__date">
                ${entry.date}
            </div>

            <div class="journal__mood">
                Mood: ${entry.mood.label}
            </div>
        </section>
    `
}