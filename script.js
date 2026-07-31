const container = document.querySelector("#container");

function createGrid(size) {

    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");

        square.classList.add("square");

        square.addEventListener("mouseover", () => {

            square.style.backgroundColor = "black";

        });

        container.appendChild(square);

    }

}

createGrid(16);


