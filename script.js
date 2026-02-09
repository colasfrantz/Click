const nobtn = document.getElementById("no-btn");
const yesbtn = document.getElementById("yes-btn");
const container = document.getElementById("question-container");
const gif = document.getElementById("game");
const question = document.getElementById("question");

nobtn.addEventListener("mouseover", () =>
    {
        nobtn.style.position = "absolute";

        const maxX = container.offsetWidth - nobtn.offsetWidth;
        const maxY = container.offsetHeight - nobtn.offsetHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        
        nobtn.style.left = `${newX}px`;
        nobtn.style.top = `${newY}px`;
    })

yesbtn.addEventListener("click", () =>
    {
        const t = document.getElementById("yo.jpg")
        question.innerHTML = "Good.";

        gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDlpcWR6aWRzZG9oYTZwOWpzZzl3dGtqZ2dlbXlkZHltdTE4ZXVibSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jFiNR5uXqYKrpPaA5r/giphy.gif";

        nobtn.style.display = "none";
        yesbtn.style.display = "none";


    })