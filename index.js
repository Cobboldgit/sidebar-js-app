let sidebar = document.querySelector("#sidebar");
let closeButton = document.querySelector("#close-btn");
let openButton = document.querySelector("#open-btn")

closeButton.addEventListener('click', () => {
    sidebar.style.width = 0
})

openButton.addEventListener('click', () => {
  sidebar.style.width = "400px"
})