
const players = [
    { name: "Manuel Neuer", position: "GK", rating: 86, age: 40 },
    { name: "Dayot Upamecano", position: "CB", rating: 85, age: 27 },
    { name: "Jonathan Tah", position: "CB", rating: 86, age: 30 },
    { name: "Alphonso Davies", position: "LB", rating: 84, age: 25 },
    { name: "Joshua Kimmich", position: "CDM", rating: 89, age: 31 },
    { name: "Leon Goretzka", position: "CM", rating: 82, age: 31 },
    { name: "Jamal Musiala", position: "CAM", rating: 90, age: 23 },
    { name: "Michael Olise", position: "RW", rating: 88, age: 24 },
    { name: "Luis Díaz", position: "LW", rating: 87, age: 29 },
    { name: "Harry Kane", position: "ST", rating: 91, age: 33 }
];

export function renderSquad(app, career) {
    app.innerHTML = `
        <header class="topbar">
            <div class="logo">YAHU <span>FC</span></div>
            <button class="back-button" id="back">← DASHBOARD</button>
        </header>

        <main class="dashboard">
            <p class="eyebrow">TEAM MANAGEMENT / ${career.club}</p>
            <h1>YOUR <span>SQUAD.</span></h1>

            <div class="squad-summary">
                <div>
                    <span>PLAYERS</span>
                    <strong>${players.length}</strong>
                </div>
                <div>
                    <span>AVERAGE RATING</span>
                    <strong>${Math.round(players.reduce((sum, p) => sum + p.rating, 0) / players.length)}</strong>
                </div>
            </div>

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
        location.reload();
    };
}
