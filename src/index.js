// import uuidv4 from 'uuid/v4'
// import moment from 'moment'

renderNotes()

document.querySelector('#"add-recipe').addEventListener('click', (e) => {
    const id = createRecipe()
    location.assign('/recipe.html#' +id)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })  
    renderNotes()
})


window.addEventListener('storage', (e) => {
    if (e.key === 'recipes'){
        loadRecipes()
        renderNotes()
    }
})



const filters = {
    searchText: '',
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string'){
        filters.searchText = updates.searchText
    }
}


// Generate the DOM structure for a note
const generateRecipeCardDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('p')
    const ingredientEl = document.createElement('p')

    // Set up the note title text
    if (recipe.title.length > 0 ){
        titleEl.textContent = note.title
    } else {
        titleEl.textContent = 'Unnamed Recipe'
    }
    // titleEl.classList.add('list-item__title')
    recipeEl.appendChild(titleEl)

    // Setup the link
    recipeEl.setAttribute("href", `/edit.html#${recipe.id}`)
    // recipeEl.classList.add('list-item')

    // Setup the ingredient status message
    ingredientEl.textContent = getEnoughIngredients()
    // ingredientEl.classList.add('list-item__subtitle')
    recipeEl.appendChild(ingredientEl)

    return recipeEl
}


const createRecipe = () => {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
        recipe: '',
        ingredients: {
            ingredientName: '',
            inStock: false
        },
    })
    saveNotes()

    return id
}

// Render application notes
const renderRecipes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = '';
    
    if(filteredNotes.length > 0){
        filteredNotes.forEach( (note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })    
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}
/*
const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const timeElement = document.querySelector('#timestamp')
    const bodyElement = document.querySelector('#note-body')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId) 
    
    if (!note) {
        location.assign('/index.html')
    }
    
    titleElement.value = note.title
    timeElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    bodyElement.value = note.body    
}*/

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
