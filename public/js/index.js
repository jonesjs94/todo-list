eventListeners();

recoverItems();


function eventListeners() {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", addItem);

    const list = document.getElementById("list");
    list.addEventListener("click", removeItem)
}


/**
 * Create and append HTML Element of the Item 
 * @param {string} textItem 
 */
function createItem(textItem) {
    const input = document.getElementById("input");
    const list = document.querySelector("ul");
    
    input.value = "";

    let li = document.createElement("li");
    li.classList.add("item")
    li.textContent = textItem;

    let i = document.createElement("i");
    i.classList.add("delete")
    i.textContent = "x";

    li.appendChild(i);
    list.appendChild(li);
}


/**
 * Function for the form event. Use createItem and saveItem.
 * @param {object} e 
 */
function addItem(e) {
    e.preventDefault();
    const item = document.getElementById("input").value;

    createItem(item); // Create Element

    saveItem(item); // Save text in localStorage
}

/**
 * Remove HTML Element from the DOM
 * @param {object} e 
 */
function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        const item =  e.target.parentElement;
        const text = item.textContent.slice(0, item.textContent.length - 1);

        item.remove();

        deleteItem(text);
    }
}

/**
 * Save item text in localStorage
 * @param {string} item 
 */
function saveItem(item) {
    let array = [],
        items = localStorage.getItem("items");

    if(items) {
        array = items.split(",");
    } 

    array.push(item);
    localStorage.setItem("items", array)
}


function deleteItem(item) {
    let array = [],
    items = localStorage.getItem("items");

    array = items.split(",").filter(it => it !== item);
    console.log(array)
    localStorage.setItem("items", array);
}


function recoverItems() {
    let array = [],
        items = localStorage.getItem("items");

    if(items) {
        array = items.split(",");

        array.forEach(it => createItem(it));
    } 
}