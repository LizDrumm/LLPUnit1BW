/* enables the drop down menu when you click the hamburger */

function navMenu(){
    let x = document.getElementById("myLinks");
    if (x.style.display === "block"){
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
}
