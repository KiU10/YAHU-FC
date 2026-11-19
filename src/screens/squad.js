import { renderDashboard } from "./dashboard.js";
const players = [
    { name: "Manuel Neuer", position: "GK", rating: 86, age: 40, line: 0 },
    { name: "Alphonso Davies", position: "LB", rating: 84, age: 25, line: 1 },
    { name: "Dayot Upamecano", position: "CB", rating: 85, age: 27, line: 1 },
    { name: "Jonathan Tah", position: "CB", rating: 86, age: 30, line: 1 },
    { name: "Joshua Kimmich", position: "RB", rating: 89, age: 31, line: 1 },
    { name: "Tom Bischof", position: "CM", rating: 78, age: 21, line: 2 },
    { name: "Aleksandar Pavlovic", position: "CM", rating: 83, age: 22, line: 2 },
    { name: "Jamal Musiala", position: "CAM", rating: 90, age: 23, line: 2 },
    { name: "Luis Díaz", position: "LW", rating: 87, age: 29, line: 3 },
    { name: "Harry Kane", position: "ST", rating: 91, age: 33, line: 3 },
    { name: "Michael Olise", position: "RW", rating: 88, age: 24, line: 3 }
];

export function renderSquad(app, career) {
    const average = Math.round(
        players.reduce((sum, player) => sum + player.rating, 0) / players.length
    );

    const lines = [0, 1, 2, 3];

    app.innerHTML = `
        <header class="topbar">
            <div class="logo">YAHU <span>FC</span></div>
            <button class="back-button" id="back">← DASHBOARD</button>
        </header>

        <main class="dashboard squad-page">
            <p class="eyebrow">TEAM MANAGEMENT / ${career.club}</p>
            <h1>YOUR <span>SQUAD.</span></h1>

            <div class="squad-summary">
                <div>
                    <span>PLAYERS</span>
                    <strong>${players.length}</strong>
                </div>
                <div>
                    <span>AVERAGE RATING</span>
                    <strong>${average}</strong>
                </div>
                <div>
                    <span>FORMATION</span>
                    <strong>4-3-3</strong>
                </div>
            </div>

            <h2 class="section-heading">STARTING XI</h2>

            <section class="football-pitch">
                <div class="pitch-lines"></div>

                ${lines.map(line => `
                    <div class="pitch-row">
                        ${players.filter(p => p.line === line).map(player => `
                            <div class="pitch-player">
                                <div class="player-rating">${player.rating}</div>
                                <div class="player-shirt">●</div>
                                <strong>${player.name.split(" ").slice(-1)[0]}</strong>
                                <small>${player.position}</small>
                            </div>
                        `).join("")}
                    </div>
                `).join("")}
            </section>

            <h2 class="section-heading">FULL SQUAD</h2>

            <section class="player-list">
                <div class="player-row player-header">
                    <span>PLAYER</span>
                    <span>POS</span>
                    <span>AGE</span>
                    <span>OVR</span>
                </div>

                ${players.map((player, index) => `
                    <div class="player-row">
                        <span class="player-name">
                            <small>${String(index + 1).padStart(2, "0")}</small>
                            ${player.name}
                        </span>
                        <span>${player.position}</span>
                        <span>${player.age}</span>
                        <strong>${player.rating}</strong>
                    </div>
                `).join("")}
            </section>
        </main>
    `;

    document.getElementById("back").onclick = () => {
        renderDashboard(app, career);
    };
}
