
export function renderDashboard(app, career) {
    app.innerHTML = `
        <header class="topbar">
            <div class="logo">YAHU <span>FC</span></div>
            <div class="version">MANAGER CAREER</div>
        </header>

        <main class="dashboard">
            <p class="eyebrow">MANAGER CAREER / SEASON 2026-27</p>
            <h1>WELCOME BACK,<br><span>${career.manager}</span></h1>

            <section class="club-banner">
                <div>
                    <p class="eyebrow">YOUR CLUB</p>
                    <h2>${career.club}</h2>
                    <p>Season 2026/27 · Professional</p>
                </div>
                <div class="club-rating">01</div>
            </section>

            <section class="dashboard-grid">
                <button class="dashboard-card" data-page="squad">
                    <span>01</span>
                    <h2>SQUAD</h2>
                    <p>Manage your players</p>
                </button>

                <button class="dashboard-card" data-page="tactics">
                    <span>02</span>
                    <h2>TACTICS</h2>
                    <p>Build your game plan</p>
                </button>

                <button class="dashboard-card" data-page="transfers">
                    <span>03</span>
                    <h2>TRANSFERS</h2>
                    <p>Build your dream team</p>
                </button>

                <button class="dashboard-card" data-page="matchday">
                    <span>04</span>
                    <h2>MATCHDAY</h2>
                    <p>Play your next fixture</p>
                </button>
            </section>
        </main>
    `;

    app.querySelectorAll("[data-page]").forEach(button => {
        button.addEventListener("click", () => {
            alert(button.dataset.page.toUpperCase() + " coming soon!");
        });
    });
}
