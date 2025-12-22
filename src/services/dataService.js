import materialsData from '../data/materials.json';

// In a real static app, we can't write to the JSON file at runtime.
// This service will read from the imported JSON.
// The Dashboard will be used to GENERATE the JSON entry for the user to copy-paste.

export const dataService = {
    // Fetch notes for a standard and subject
    async getNotes(standard, subject) {
        // Simulate network delay for realism/consistency
        await new Promise(resolve => setTimeout(resolve, 300));

        return materialsData.filter(note =>
            note.standard === standard &&
            note.subject === subject
        );
    },

    // This is now just a "Mock" or "Helper" for the Dashboard
    // It returns the object that SHOULD be added to materials.json
    async generateEntry(metadata) {
        const newId = Date.now();
        return {
            id: newId,
            title: metadata.title,
            standard: metadata.standard,
            subject: metadata.subject,
            type: 'PDF',
            date: new Date().toISOString().split('T')[0],
            url: `/materials/class${metadata.standard}/${metadata.subject.toLowerCase()}/${metadata.fileName.endsWith('.pdf') ? metadata.fileName : metadata.fileName + '.pdf'}`
        };
    }
};
