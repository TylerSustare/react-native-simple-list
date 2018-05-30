// if you want to export many things just use 'export' instead of 'export default'
export const selectLibrary = (libraryId) => (
    { type: 'select_library', payload: libraryId }
);
