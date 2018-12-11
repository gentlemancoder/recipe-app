import uuidv4 from 'uuid/v4'
import moment from 'moment'

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

