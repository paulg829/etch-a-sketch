const container = document.querySelector("#container");

function createGrid(size) {

    container.innerHTML = "";

    let squareSize = 960/size;

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {

            square.style.backgroundColor = "black";

        });

        container.appendChild(square);

    }

}

createGrid(16);

const resizeButton = document.querySelector("#resize-button");

resizeButton.addEventListener("click", () => {


    let size = prompt(
        "How many squares per side?"

    );

    size = Number(size);

    if (size > 100) {

        alert("Maximum size is 100");

        return;
    }

    createGrid(size);

});

