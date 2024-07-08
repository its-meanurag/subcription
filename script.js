const boxes = document.querySelectorAll(".box");
console.log(boxes);
let activeBox = null;  // Reference to the currently active box

boxes.forEach((box, i) => {
    box.addEventListener("click", (e) => {
        // If there is an active box, remove the 'active' class from it
        if (activeBox) {
            activeBox.classList.remove("active");
        }

        // If the clicked box is not the currently active box, activate it
        if (activeBox !== box) {
            box.classList.add("active");
            activeBox = box;  // Update the active box reference
        } else {
            activeBox = null;  // Reset if the same box is clicked again
        }

        // Log the index of the active box or -1 if no box is active
        console.log(activeBox ? Array.from(boxes).indexOf(activeBox) : -1, i);
    });
});
