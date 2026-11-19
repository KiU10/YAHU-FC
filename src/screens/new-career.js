import { renderDashboard } from "./dashboard.js";
export function renderNewCareer(app) {
    app.innerHTML = `
        <header class="topbar">
            <div class="logo">YAHU <span>FC</span></div>
            <button class="back-button" id="back">← BACK</button>
        </header>

        <main class="career-setup">
            <p class="eyebrow">YOUR JOURNEY BEGINS</p>
            <h1>NEW <span>CAREER</span></h1>

            <section class="setup-panel">
                <h2>MANAGER PROFILE</h2>

                <label>Manager Name</label>
                <input id="manager" placeholder="Enter manager name">

                <label>Nationality</label>
                <select id="nationality">
                    <option>Germany</option>
                    <option>England</option>
                    <option>Spain</option>
                    <option>France</option>
                    <option>Brazil</option>
                    <option>Argentina</option>
                </select>

                <h2>CLUB SELECTION</h2>

                <label>Choose your club</label>
                <select id="club">
                    <option value="FC Bayern München">FC Bayern München</option>
                    <option value="Borussia Dortmund">Borussia Dortmund</option>
                    <option value="Bayer Leverkusen">Bayer Leverkusen</option>
                    <option value="Hamburger SV">Hamburger SV</option>
                    <option value="Manchester United">Manchester United</option>
                    <option value="Liverpool FC">Liverpool FC</option>
                    <option value="Real Madrid">Real Madrid</option>
                    <option value="FC Barcelona">FC Barcelona</option>
                </select>

                <h2>DIFFICULTY</h2>

                <select id="difficulty">
                    <option>Beginner</option>
                    <option selected>Professional</option>
                    <option>World Class</option>
                    <option>Legendary</option>
                </select>

                <button id="start-career" class="start-button">
                    START CAREER →
                </button>
            </section>
        </main>
    `;

    document.getElementById("back").onclick = () => {
        location.reload();
    };

    document.getElementById("start-career").onclick = () => {
        const manager = document.getElementById("manager").value.trim();

        if (!manager) {
            alert("Please enter a manager name.");
            return;
        }

        const club = document.getElementById("club").value;
        const difficulty = document.getElementById("difficulty").value;

        app.innerHTML = `
            <main class="career-setup">
                <p class="eyebrow">CAREER CREATED</p>
                <h1>WELCOME,<br><span>${manager.replace(/[&<>"']/g, "")}</span></h1>
                <h2>${club}</h2>
                <p>Difficulty: ${difficulty}</p>
                <p>Your managerial journey starts now.</p>
            </main>
        `;
    };
}
