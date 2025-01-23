document.getElementById("main-menu").addEventListener("click", main_menu_popup )

function main_menu_popup () {
    const menuBarButton = document.getElementById("main-menu-button-popup");
    if (menuBarButton.style.display === "block") {
        menuBarButton.style.display = "none";
    }
    else {
        menuBarButton.style.display = "block";
    }
    
}
