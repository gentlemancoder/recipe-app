import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";



const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId) 
    
    if (!note) {
        location.assign('/index.html')
    }
    
    titleElement.value = note.title
    timeElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    bodyElement.value = note.body    
}
initializeEditPage(note)

titleElement.addEventListener('input',(e) => { 
    const note = updateNote(id, {
        title: e.target.value
    })
    timeElement.textContent = generateLastEdited(note.updatedAt)
})


bodyElement.addEventListener('input',(e) => { 
    const note = updateNote(id, {
        body: e.target.value
    })
    timeElement.textContent = generateLastEdited(note.updatedAt)
})

removeButton.addEventListener('click',(e) => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage',(e) =>{
    if (e.key === 'notes'){
        initializeEditPage(noteId)    
    }
})