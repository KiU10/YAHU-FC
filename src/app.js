
const app = document.getElementById("app");

app.innerHTML = `
    <header class="topbar">
        <div class="logo">YAHU <span>FC</span></div>
        <div class="version">CAREER SIMULATOR</div>
    </header>

    <main class="hero">
        <div class="hero-content">
            <p class="eyebrow">YOUR STORY STARTS HERE</p>
            <h1>BUILD YOUR<br><span>LEGACY.</span></h1>
            <p class="description">
                Take control. Build your squad.
                Make history.
            </p>

            <button id="new-career">
                NEW CAREER <span>→</span>
            </button>

            <button id="load-career" class="secondary">
                LOAD CAREER
            </button>
        </div>
    </main>

    <footer>
        YAHU FC <span>© 2026</span>
    </footer>
`;

document.getElementById("new-career").addEventListener("click", () => {
    alert("Your career begins soon...");
});

document.getElementById("load-career").addEventListener("click", () => {
    alert("No saved careers found.");
});
