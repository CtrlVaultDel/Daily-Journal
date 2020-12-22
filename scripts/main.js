// Imports
import { journalFormComponent } from "./journalForm.js";
import { entryListComponent } from "./journalEntryLists.js";
import "./deleteEntries/deleteEntries.js";

// Initialization

// Initialize the form on the DOM
journalFormComponent();

// Initialize the existing entries in the API
entryListComponent();