let recipe = {
    id: '123',
    title: 'Some Food',
    recipe: 'Do this. Then That',
    ingredients: [{
        ingredientName: '',
        inStock: true
    },
    {
        ingredientName: '',
        inStock: true
    }]
}

console.log(recipe);

const getEnoughIngredients = (ingredients) => {
    let doHave = false;
    let dontHave = false;

    for (let ingredient of ingredients ) {
        if (ingredient.inStock) {
            doHave = true;
        } else {
            dontHave = true;
        } 
    }

    if (doHave && dontHave) {
        return 'You have some of the ingredients neccessary for this recipe.'
    } else if (!doHave) {
        return 'You do not have the ingredients for this recipe.'
    } else {
        return 'You have everything you need to start cooking!'
    }
}
const renderCard = (recipe) => {
    const cardEl = document.querySelector('.cards');
    
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('p')
    const ingredientEl = document.createElement('p')

    if (recipe.title.length > 0 ){
        titleEl.textContent = recipe.title
    } else {
        titleEl.textContent = 'Unnamed Recipe'
    }
    // titleEl.classList.add('list-item__title')
    recipeEl.appendChild(titleEl)

    // Setup the link
    recipeEl.setAttribute("href", `/edit.html#${recipe.id}`)
    // recipeEl.classList.add('list-item')

    // Setup the ingredient status message
    ingredientEl.textContent = getEnoughIngredients(recipe.ingredients)
    
    recipeEl.appendChild(ingredientEl)

    cardEl.appendChild(recipeEl)
}
renderCard(recipe)


// const searchFilter = {
// searchText: '',
// }
// const getFilter = () => searchFilter
// // import uuidv4 from 'uuid/v4'
// // import moment from 'moment'

// const renderRecipes = () => {
//     const notesEl = document.querySelector('#notes')
//     const filters = getFilter()
//     const recipes = [''] // sortNotes(filters.sortBy)
//     const filteredNotes = recipes.filter( (recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

//     notesEl.innerHTML = '';
    
//     if(filteredNotes.length > 0){
//         filteredNotes.forEach( (note) => {
//             const noteEl = generateNoteDOM(note)
//             notesEl.appendChild(noteEl)
//         })    
//     } else {
//         const emptyMessage = document.createElement('p')
//         emptyMessage.textContent = 'No notes to show'
//         emptyMessage.classList.add('empty-message')
//         notesEl.appendChild(emptyMessage)
//     }
// }

// renderRecipes()

// document.querySelector('#"add-recipe').addEventListener('click', (e) => {
//     const id = createRecipe()
//     location.assign('/recipe.html#' +id)
// })

// document.querySelector('.searchbox').addEventListener('input', (e) => {
//     setFilters({
//         searchText: e.target.value
//     })  
//     renderRecipes()
// })

// window.addEventListener('storage', (e) => {
//     if (e.key === 'recipes'){
//         loadRecipes()
//         renderRecipes()
//     }
// })




// const setFilter = (updates) => {
//     if (typeof updates.searchText === 'string'){
//         searchFilter.searchText = updates.searchText
//     }
// }


// // Generate the DOM structure for a recipe card
// const generateRecipeCardDOM = (recipe) => {
//     const recipeEl = document.createElement('a')
//     const titleEl = document.createElement('p')
//     const ingredientEl = document.createElement('p')

//     // Set up the note title text
//     if (recipe.title.length > 0 ){
//         titleEl.textContent = recipe.title
//     } else {
//         titleEl.textContent = 'Unnamed Recipe'
//     }
//     // titleEl.classList.add('list-item__title')
//     recipeEl.appendChild(titleEl)

//     // Setup the link
//     recipeEl.setAttribute("href", `/edit.html#${recipe.id}`)
//     // recipeEl.classList.add('list-item')

//     // Setup the ingredient status message
//     ingredientEl.textContent = getEnoughIngredients()
//     // ingredientEl.classList.add('list-item__subtitle')
//     recipeEl.appendChild(ingredientEl)

//     return recipeEl
// }


// const createRecipe = () => {
//     const id = uuidv4()

//     recipes.push({
//         id: id,
//         title: '',
//         recipe: '',
//         ingredients: {
//             ingredientName: '',
//             inStock: false
//         },
//     })
//     saveRecipes()

//     return id
// }

// /*
// const initializeEditPage = (noteId) => {
//     const titleElement = document.querySelector('#note-title')
//     const timeElement = document.querySelector('#timestamp')
//     const bodyElement = document.querySelector('#note-body')
//     const notes = getNotes()
//     const note = notes.find((note) => note.id === noteId) 
    
//     if (!note) {
//         location.assign('/index.html')
//     }
    
//     titleElement.value = note.title
//     timeElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
//     bodyElement.value = note.body    
// }*/

