//Create the sort container
const sortContainer = document.createElement("div");
sortContainer.classList.add("sort-container");

// Create the sort button
const sortButton = document.createElement("button");
sortButton.innerText = "Trié par:";
sortButton.classList.add("sort-button");
sortButton.setAttribute("aria-label", "Bouton de tri");
sortButton.setAttribute("aria-haspopup", "listbox");
sortButton.setAttribute("aria-labelledby", "listboxlabel");

// Create the dropdown menu
const sortDropdown = document.createElement("select");
sortDropdown.classList.add("sort-dropdown");
sortDropdown.setAttribute("aria-label", "Menu de tri");
sortDropdown.setAttribute("aria-haspopup", "listbox");
sortDropdown.setAttribute("aria-labelledby", "listboxlabel");

// Create the dropdown options
const dateOption = document.createElement("option");
dateOption.value = "date";
dateOption.innerText = "Date";
dateOption.setAttribute("aria-label", "Trier par date");

const titleOption = document.createElement("option");
titleOption.value = "title";
titleOption.innerText = "Titre";
titleOption.setAttribute("aria-label", "Trier par titre");

const popularityOption = document.createElement("option");
popularityOption.value = "popularity";
popularityOption.innerText = "Popularité";
popularityOption.setAttribute("aria-label", "Trier par popularité");

// Add the dropdown options to the dropdown menu
sortDropdown.appendChild(dateOption);
sortDropdown.appendChild(titleOption);
sortDropdown.appendChild(popularityOption);

// Add the sort button and dropdown menu to the main element
sortContainer.appendChild(sortButton);
sortContainer.appendChild(sortDropdown);

// Add the sort button and dropdown menu to the main element
const mainElement = document.querySelector("main");
const secondChild = mainElement.children[1];
mainElement.insertBefore(sortContainer, secondChild);
