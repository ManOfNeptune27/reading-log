const list = document.querySelector("#books");

fetch("books.json")
    .then((response) => response.json())
    .then((books) => {
        books.forEach((book) => {
            const item = document.createElement("article");
            const title = document.createElement("h2");
            title.textContent = book.title;

            const author = document.createElement("p");
            const authorLabel = document.createElement("strong");
            authorLabel.textContent = "By: "
            author.append(authorLabel, book.author);

            const finished = document.createElement("p");
            const finishedLabel = document.createElement("strong");
            finishedLabel.textContent = "Finished: ";
            finished.append(finishedLabel, book.finished);

            const rating = document.createElement("p");
            const ratingLabel = document.createElement("strong");
            ratingLabel.textContent = "Rating: ";
            rating.append(ratingLabel, `${book.rating}/10`);

            const label = document.createElement("p");
            const notesLabel = document.createElement("strong");
            notesLabel.textContent = "Notes:";
            label.append(notesLabel);

            const noteText = document.createElement("p");
            noteText.textContent = book.notes;

            item.append(title, author, rating, finished, label, noteText);

            list.append(item);
        });
    })
    .catch((error) => console.error("Could not load books:", error));

const snow = document.querySelector("#snow");

for (let i = 0; i < 200; i++) {
    const flake = document.createElement("li");
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.width = `${2 + Math.random() * 10}px`;
    flake.style.height = flake.style.width;
    const fallDuration = 20 + Math.random() * 20;
    flake.style.setProperty("--fall-duration", `${fallDuration}s`);
    flake.style.setProperty("--fall-delay", `-${Math.random() * fallDuration}s`);
    flake.style.setProperty("--fall-drift", `${Math.random() * 100 - 50}px`);
    const swayDistance = 4 + Math.random() * 16;
    flake.style.setProperty("--sway-left", `-${swayDistance}px`);
    flake.style.setProperty("--sway-right", `${swayDistance}px`);
    flake.style.setProperty("--sway-duration", `${2 + Math.random() * 5}s`);
    flake.style.setProperty("--sway-delay", `-${Math.random() * 5}s`);
    snow.append(flake);

    flake.addEventListener("animationiteration", (event) => {
        if (event.animationName !== "snowfall") return;
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.setProperty("--fall-drift", `${Math.random() * 100 - 50}px`);
    });
}
