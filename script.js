function toggleMenu() {

    /**
     * 
     * 
     * targertingg these 2 elemment - menu, icon 
     * when we click either add, remove
     */
    const menu = document.querySelector(".menu-links ");
    const icon = document.querySelector(".hamburger-icon ");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}