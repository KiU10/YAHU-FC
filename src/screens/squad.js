
import { clubs } from "../data/clubs.js";
import { renderDashboard } from "./dashboard.js";

export function renderSquad(app, career) {
    const players = clubs[career.club] || clubs["FC Bayern München"];

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
