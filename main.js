// wait for the DOM to to be ready so we can attach
document.addEventListener("DOMContentLoaded", function() {
    // get a list of all of the dots on the page
    const dots = document.querySelectorAll(".dot");

    // iterate through each of the dots to attach the click listeners
    dots.forEach(function(dot) {
        //add a click listener
        dot.addEventListener("click", function(e) {
            //prevent the default behavior (pretty standard on clicks)
            e.preventDefault();

            // assess which .dot was actually clicked on
            const clicked_dot = e.target.closest(".dot");

            // if this dot already has an active class
            if (clicked_dot.classList.contains("active")) {
                // remote the active class
                clicked_dot.classList.remove("active");
            } else {
                //otherwise add it 
                clicked_dot.classList.add("active");
            }
        });
    });
});

const select = document.querySelector ("select.filter")

select.addEventListener("change", function (e) {
    const filter = e.target.value;

    const actives = document.querySelectorAll (".item.active")

    actives.forEach(function (item) {
        item.classList.remove("active");
    });

const make_active = document.querySelectorAll (`.item.${filter}` );
    make_active.forEach(function (item) {
        item.classList.add ("active");
    });
}); 