import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function addNote(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData);
  }

  export function getAll() {
    return sendRequest(BASE_URL);
  }