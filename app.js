// select filterInput 
const filterInput = document.getElementById("filterInput");
// get exist items
let items = document.querySelectorAll(".collection_item a");

filterInput.addEventListener("keyup" , filterItems);

// filter items according to filterInput value
function filterItems(e) {
    let filterValue = e.target.value.toUpperCase();

    // iterate of every exist items
    items.forEach(item => {
        if (item.textContent.toUpperCase().indexOf(filterValue) > -1) {
            item.parentElement.style.display = "";
        } else {
            item.parentElement.style.display = "none";
        }
    });
}