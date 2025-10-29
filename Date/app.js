const now = new Date();
// console.log("Current date and time:", now);

const birthday = new Date(1997, 7, 8);
// console.log(birthday);

const date = new Date();
// console.log(date.getFullYear()); // Year
// console.log(date.getMonth() + 1); // Month (0-indexed)
// console.log(date.getDate()); // Day
// console.log(date.getDay()); // Day of week (0 = Sunday)
// console.log(date.getHours()); // Hour
// console.log(date.getMinutes()); // Minutes
// console.log(date.getSeconds()); // Seconds

// console.log(date.toDateString()); // "Wed Oct 29 2025"
// console.log(date.toISOString());  // "2025-10-29T11:00:00.000Z"
// console.log(date.toLocaleDateString('en-GB')); // "29/10/2025"

const start = new Date("2025-10-01");
const end = new Date("2025-10-29");

// if (end < start) {
//   console.log("End date is before start date");
// }   else {
//   console.log("End date is after start date");
// }

// const diffInMs = end - start;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log(`Difference: ${diffInDays} days`);

// const date = new Date();
// date.setFullYear(2030);
// date.setMonth(11); // December
// date.setDate(25);
// console.log(date);

const eventDate = new Date("2025-12-31");
const now2 = new Date();

const diff = eventDate - now2;
const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(`🎉 Only ${daysLeft} days left until New Year!`);

document.getElementById(
    "title"
).innerText = `🎉 Only ${daysLeft} days left until New Year!`;

const tableHTML = `
    <h2>JavaScript Date Method Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>বাংলা ব্যাখ্যা</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new Date()</code></td>
            <td>Current date/time</td>
            <td>বর্তমান সময়</td>
          </tr>
          <tr>
            <td><code>getFullYear()</code></td>
            <td>Get year</td>
            <td>সাল বের করে</td>
          </tr>
          <tr>
            <td><code>getMonth()</code></td>
            <td>Get month (0–11)</td>
            <td>মাস (০ থেকে শুরু)</td>
          </tr>
          <tr>
            <td><code>getDate()</code></td>
            <td>Get day of month</td>
            <td>দিনের সংখ্যা</td>
          </tr>
          <tr>
            <td><code>getDay()</code></td>
            <td>Day of week (0–6)</td>
            <td>সপ্তাহের দিন</td>
          </tr>
          <tr>
            <td><code>toDateString()</code></td>
            <td>Readable format</td>
            <td>সহজে পড়া যায়</td>
          </tr>
          <tr>
            <td><code>setFullYear()</code></td>
            <td>Change year</td>
            <td>সাল পরিবর্তন</td>
          </tr>
          <tr>
            <td><code>date1 - date2</code></td>
            <td>Difference in ms</td>
            <td>সময় পার্থক্য</td>
          </tr>
        </tbody>
      </table>
    `;
let isVisible = true;

document.getElementById("btn").addEventListener("click", function () {
    const container = document.getElementById("date_table");

    if (isVisible) {
        container.innerHTML = tableHTML;
        container.classList.add("visible");
        this.classList.add("active");
    } else {
        container.classList.remove("visible");
        this.classList.remove("active");
        setTimeout(() => {
            container.innerHTML = "";
        }, 500); // Wait for fade-out to finish
    }

    isVisible = !isVisible;
});

document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            faqButtons.forEach((btn) => {
                if (btn !== this) {
                    btn.classList.remove("active");
                    btn.nextElementSibling.classList.remove("visible");
                }
            });

            answer.classList.toggle("visible");
            this.classList.toggle("active");
        });
    });
});

const input = document.getElementById("targetDate");
const button = document.getElementById("countBtn");
const result = document.getElementById("result");
/*
button.addEventListener("click", function () {
    if (!input.value) {
        result.innerText = "Please select a date.";
        return;
    }
    // Step 1: Get selected date from input
    const selectedDate = new Date(input.value);

    // Step 2: Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to midnight

    // if (selectedDate < today) {
    //     result.innerText = "The selected date is in the past.";
    //     return;
    // }

    const diff = selectedDate - today;
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (daysLeft >= 0) {
        result.innerText = `⏳ ${daysLeft} day(s) left until your selected date.`;
    } else {
        result.innerText = `📅 ${Math.abs(
            daysLeft
        )} day(s) have passed since your selected date.`;
    }

    // Step 5: Show result
    result.innerText = `⏳ ${daysLeft} day(s) left until your selected date.`;
}); */


button.addEventListener("click", function () {
    if (!input.value) {
        result.innerText = "⚠️ Please select a date.";
        return;
    }

    const birthDate = new Date(input.value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if current month/day is before birth month/day
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText = `📅 ${years} year(s), ${months} month(s), ${days} day(s)`;
});
