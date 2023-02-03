const homeSec = document.querySelector('.home');
let url = `http://localhost:3030/data/recipes`;

export function renderHome() {

    fetch(url)
    .then(resp => resp.json())
    .then(recipes => {

        renderRecipes(recipes)
    })
}
function renderRecipes(recipes) {
    const fragment = document.createDocumentFragment();
    recipes.forEach(element => {
        fragment.appendChild(renedeRecipe(element))
    });
    homeSec.innerHTML = '';
    homeSec.appendChild(fragment);
    homeSec.style.display = 'block'
}
function renedeRecipe(recipe) {
    const recipeEl = document.createElement('article');
    recipeEl.classList.add('preview');
    recipeEl.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}" alt="">
        </div>`;
        
        return recipeEl
}