// Gets the list of possible moods from the API. (These will be used to initialize the mood selection on the form)

// Local variable that holds list of moods from API. Will be copied by useMoods()
let moods = [];

// Get the list of moods from the API
export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(parsedMoods => moods = parsedMoods);
};

// Returns a copy of the moods array
export const useMoods = () => moods.slice();