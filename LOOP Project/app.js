// Loop Project

// GUSSS THE NUMBER FUNCTION

function guessTheNumber(difficulty) {
    let randomNumber;
    let attempts = 0;
    let maxAttempts;
    let range;

    // set diffinculty-based parameters

    switch (difficulty) {
        case "easy":
            range = 10;
            maxAttempts = 5;
            randomNumber = Math.floor(Math.random() * 10) + 1; // 1-10
            console.log(randomNumber);
            break;
        case "medium":
            range = 100;
            maxAttempts = 10;
            randomNumber = Math.floor(Math.random() * 100) + 1; // 1-100
            console.log(randomNumber);
            break;
        case "hard":
            range = 1000;
            maxAttempts = 15;
            randomNumber = Math.floor(Math.random() * 1000) + 1; // 1-1000
            console.log(randomNumber);
            break;
        default:
            document.getElementById("output").innerHTML =
                "Invalid difficulty level. Please choose easy, medium, or hard.";
            return;
    }

    // Get user input and check guesses
    while (attempts < maxAttempts) {
        let guess = parseInt(
            prompt(
                `Guess a number between 1 and ${range} (Inclusive). You have ${
                    maxAttempts - attempts
                } attempts left.`
            )
        );
        attempts++;

        if (guess === randomNumber) {
            document.getElementById(
                "output"
            ).innerHTML = `<p>Congratulations! You guessed the number in ${attempts} attempts.</p>`;
            break;
        } else if (guess < randomNumber) {
            document.getElementById("output").innerHTML =
                "<p>Too Low. Try Again</p>";
        } else {
            document.getElementById("output").innerHTML =
                "<p>Too High. Try Again</p>";
        }
    }
    if (maxAttempts === attempts) {
        document.getElementById("output").innerHTML =
            "<p>Sorry, You ran out of attempts. The Number Was ${randomNumber}</p>";
    }
}

// Get user input deficulty level

let difficulty = prompt(
    "choose difficulty level: easy, medium, hard"
).toLowerCase();

guessTheNumber(difficulty);

// console.log(difficulty);
