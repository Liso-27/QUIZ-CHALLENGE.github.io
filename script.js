// =============================================
//   SMART QUIZ CHALLENGE - Enhanced Script
// =============================================

// ---- QUESTION POOL (categorised + difficulty) ----
const questionPool = [
    // HTML - Easy
    { question: "What does HTML stand for?", options: ["Hypertext Machine Language", "Hypertext Markup Language", "High-level Text Markup Language", "Hyperlink and Text Markup"], answer: 1, category: "html", difficulty: "easy" },
    { question: "Which tag creates a hyperlink?", options: ["<link>", "<href>", "<a>", "<url>"], answer: 2, category: "html", difficulty: "easy" },
    { question: "Which HTML element is used for the largest heading?", options: ["<h6>", "<heading>", "<head>", "<h1>"], answer: 3, category: "html", difficulty: "easy" },
    { question: "Which HTML tag is used for defining an internal style sheet?", options: ["<script>", "<css>", "<style>", "<link>"], answer: 2, category: "html", difficulty: "easy" },
    { question: "Which character represents a comment in HTML?", options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"], answer: 2, category: "html", difficulty: "easy" },

    // HTML - Medium
    { question: "What attribute specifies the URL of an image?", options: ["href", "link", "src", "url"], answer: 2, category: "html", difficulty: "medium" },
    { question: "Which input type creates a dropdown?", options: ["<input type='dropdown'>", "<select>", "<list>", "<option>"], answer: 1, category: "html", difficulty: "medium" },
    { question: "What does the 'alt' attribute in <img> provide?", options: ["Image title", "Alternative text", "Image URL", "Image size"], answer: 1, category: "html", difficulty: "medium" },
    { question: "Which HTML element is used to display a scalar measurement?", options: ["<gauge>", "<meter>", "<progress>", "<measure>"], answer: 1, category: "html", difficulty: "medium" },

    // HTML - Hard
    { question: "Which HTML attribute is used for lazy loading images?", options: ["defer", "async", "loading='lazy'", "lazy='true'"], answer: 2, category: "html", difficulty: "hard" },
    { question: "What is the purpose of the <datalist> element?", options: ["Defines a data table", "Provides autocomplete options for inputs", "Creates a list with data", "Defines data types"], answer: 1, category: "html", difficulty: "hard" },
    { question: "Which meta tag controls viewport for mobile devices?", options: ["<meta name='mobile'>", "<meta name='viewport'>", "<meta name='responsive'>", "<meta name='screen'>"], answer: 1, category: "html", difficulty: "hard" },

    // CSS - Easy
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: 1, category: "css", difficulty: "easy" },
    { question: "Which CSS property changes text color?", options: ["text-color", "font-color", "color", "foreground"], answer: 2, category: "css", difficulty: "easy" },
    { question: "How do you make text bold in CSS?", options: ["font-weight: bold", "text-style: bold", "font-style: bold", "text-bold: true"], answer: 0, category: "css", difficulty: "easy" },
    { question: "Which property controls the font size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: 2, category: "css", difficulty: "easy" },

    // CSS - Medium
    { question: "Which CSS property is used to create space outside an element?", options: ["padding", "spacing", "margin", "border"], answer: 2, category: "css", difficulty: "medium" },
    { question: "What value of 'position' removes an element from document flow?", options: ["relative", "static", "fixed", "absolute"], answer: 3, category: "css", difficulty: "medium" },
    { question: "Which flexbox property aligns items along the cross axis?", options: ["justify-content", "align-items", "flex-direction", "flex-wrap"], answer: 1, category: "css", difficulty: "medium" },
    { question: "What does 'z-index' control?", options: ["Zoom level", "Stacking order", "Zoom index", "Layer opacity"], answer: 1, category: "css", difficulty: "medium" },

    // CSS - Hard
    { question: "Which pseudo-element adds content before an element?", options: ["::after", "::first", "::before", ":prepend"], answer: 2, category: "css", difficulty: "hard" },
    { question: "What does 'specificity' determine in CSS?", options: ["Animation speed", "Which style rule applies when multiple match", "Font rendering", "Media query priority"], answer: 1, category: "css", difficulty: "hard" },
    { question: "Which CSS function creates a custom property reference?", options: ["get()", "var()", "custom()", "prop()"], answer: 1, category: "css", difficulty: "hard" },

    // JS - Easy
    { question: "How do you write an alert in JavaScript?", options: ["msgBox('Hi');", "alertBox('Hi');", "msg('Hi');", "alert('Hi');"], answer: 3, category: "js", difficulty: "easy" },
    { question: "Which keyword declares a variable in modern JS?", options: ["var", "let", "global", "def"], answer: 1, category: "js", difficulty: "easy" },
    { question: "How do you create a function in JavaScript?", options: ["function = myFn()", "function:myFn()", "function myFn()", "def myFn()"], answer: 2, category: "js", difficulty: "easy" },
    { question: "Inside which HTML element do we put JavaScript?", options: ["<script>", "<javascript>", "<js>", "<scripting>"], answer: 0, category: "js", difficulty: "easy" },

    // JS - Medium
    { question: "What is the correct way to write an IF statement in JS?", options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"], answer: 1, category: "js", difficulty: "medium" },
    { question: "Which method converts a JSON string into an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: 0, category: "js", difficulty: "medium" },
    { question: "Which array method creates a new filtered array?", options: ["map()", "reduce()", "filter()", "forEach()"], answer: 2, category: "js", difficulty: "medium" },
    { question: "What does '===' check in JavaScript?", options: ["Value only", "Type only", "Value and type", "Reference"], answer: 2, category: "js", difficulty: "medium" },

    // JS - Hard
    { question: "What is a closure in JavaScript?", options: ["A way to close a browser tab", "A function that retains access to its outer scope", "An error-handling pattern", "A CSS animation end event"], answer: 1, category: "js", difficulty: "hard" },
    { question: "What does 'event delegation' mean?", options: ["Assigning events to every child", "Handling child events via a parent listener", "Delegating async tasks", "Creating synthetic events"], answer: 1, category: "js", difficulty: "hard" },
    { question: "Which Promise method runs all promises and resolves when all settle?", options: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"], answer: 3, category: "js", difficulty: "hard" },
    { question: "What does the 'this' keyword refer to in an arrow function?", options: ["The arrow function itself", "window always", "The enclosing lexical context", "undefined"], answer: 2, category: "js", difficulty: "hard" },
];

// ---- CONFIG ----
const QUESTIONS_PER_ROUND = 7;
const TIME_LIMITS = { easy: 15, medium: 10, hard: 7 };
const BASE_POINTS = { easy: 10, medium: 20, hard: 35 };

// ---- STATE ----
let sessionQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let correctCount = 0;
let timerInterval;
let timeLeft;
let username = "";
let selectedCategory = "all";
let selectedDifficulty = "easy";
let isDoubleActive = false;
let skipUsed = false;
let lifelineUsed = false;
let doubleUsed = false;
let answerLog = [];

// ---- AUDIO ----
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
let isMuted = false;

function initAudio() { if (!audioCtx) audioCtx = new AudioContext(); }
function playSound(type) {
    if (isMuted || !audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    const t = audioCtx.currentTime;
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523, t);
        osc.frequency.exponentialRampToValueAtTime(1046, t + 0.15);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
        osc.start(); osc.stop(t + 0.35);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(80, t + 0.3);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
        osc.start(); osc.stop(t + 0.3);
    } else if (type === 'tick') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(900, t);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        osc.start(); osc.stop(t + 0.1);
    } else if (type === 'combo') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(1760, t + 0.2);
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        osc.start(); osc.stop(t + 0.4);
    }
}

// ---- DOM ----
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const finalScoreEl = document.getElementById("finalScore");
const performanceMessageEl = document.getElementById("performanceMessage");
const leaderboardEl = document.getElementById("leaderboard");
const popup = document.getElementById("popup");
const streakDisplay = document.getElementById("streakDisplay");
const lifelineBtn = document.getElementById("lifeline5050");
const skipBtn = document.getElementById("skipBtn");
const doubleBtn = document.getElementById("doubleBtn");
const muteBtn = document.getElementById("muteBtn");
const themeToggle = document.getElementById("themeToggle");
const comboOverlay = document.getElementById("comboOverlay");
const ringCircle = document.getElementById("ringCircle");
const categoryBadge = document.getElementById("categoryBadge");
const diffBadge = document.getElementById("diffBadge");
const questionWrap = document.getElementById("questionWrap");

// ---- THEME ----
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? "🔇" : "🔊";
});

// ---- CATEGORY & DIFFICULTY SELECTION ----
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCategory = btn.dataset.cat;
    });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDifficulty = btn.dataset.diff;
    });
});

// ---- PARTICLE CANVAS BACKGROUND ----
(function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W, H;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.1
        };
    }

    function init() {
        resize();
        particles = Array.from({ length: 90 }, createParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = isDark
                ? `rgba(100,180,255,${p.alpha})`
                : `rgba(79,140,254,${p.alpha})`;
            ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if (p.x < 0 || p.x > W) p.dx *= -1;
            if (p.y < 0 || p.y > H) p.dy *= -1;
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    init(); draw();
})();

// ---- START ----
document.getElementById("startBtn").addEventListener("click", () => {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

    username = document.getElementById("username").value.trim();
    if (!username) { showPopup("⚠️ Enter your name first!", "error"); return; }

    score = 0; streak = 0; bestStreak = 0; correctCount = 0;
    currentQuestionIndex = 0;
    isDoubleActive = false; skipUsed = false; lifelineUsed = false; doubleUsed = false;
    answerLog = [];

    scoreEl.textContent = 0;
    updateStreakUI();
    resetPowerups();

    sessionQuestions = getRandomQuestions(QUESTIONS_PER_ROUND);

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("slide-in");
    setTimeout(() => quizScreen.classList.remove("slide-in"), 600);

    loadQuestion();
});

function getRandomQuestions(num) {
    let pool = questionPool;
    if (selectedCategory !== 'all') pool = pool.filter(q => q.category === selectedCategory);
    pool = pool.filter(q => q.difficulty === selectedDifficulty);
    if (pool.length < num) pool = questionPool.filter(q => q.difficulty === selectedDifficulty);
    return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(num, pool.length));
}

function resetPowerups() {
    lifelineBtn.disabled = false; lifelineBtn.classList.remove('used');
    skipBtn.disabled = false; skipBtn.classList.remove('used');
    doubleBtn.disabled = false; doubleBtn.classList.remove('used');
}

// ---- LOAD QUESTION ----
function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = TIME_LIMITS[selectedDifficulty];
    updateTimerUI();

    const q = sessionQuestions[currentQuestionIndex];
    progressLabel.textContent = `${currentQuestionIndex + 1} / ${sessionQuestions.length}`;
    const pct = ((currentQuestionIndex) / sessionQuestions.length) * 100;
    progressBar.style.width = `${pct}%`;

    // Badges
    const catNames = { html: "HTML", css: "CSS", js: "JS" };
    categoryBadge.textContent = catNames[q.category] || q.category.toUpperCase();
    diffBadge.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    diffBadge.className = `diff-badge diff-${q.difficulty}`;

    // Question slide in
    questionWrap.classList.add('q-slide');
    questionEl.textContent = q.question;
    setTimeout(() => questionWrap.classList.remove('q-slide'), 400);

    optionsEl.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.dataset.index = i;
        btn.style.animationDelay = `${i * 0.07}s`;
        btn.classList.add('opt-appear');
        btn.addEventListener("click", () => handleAnswer(i, btn));
        optionsEl.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    const circumference = 2 * Math.PI * 18;
    ringCircle.style.strokeDasharray = circumference;

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        const progress = timeLeft / TIME_LIMITS[selectedDifficulty];
        ringCircle.style.strokeDashoffset = circumference * (1 - progress);

        if (timeLeft <= 3 && timeLeft > 0) playSound('tick');
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showPopup("⏳ Time's up!", "error");
            handleAnswer(-1, null);
        }
    }, 1000);
}

function updateTimerUI() {
    timerEl.textContent = timeLeft;
    const pct = timeLeft / TIME_LIMITS[selectedDifficulty];
    if (pct > 0.5) {
        ringCircle.style.stroke = "#00e676";
    } else if (pct > 0.25) {
        ringCircle.style.stroke = "#ffea00";
    } else {
        ringCircle.style.stroke = "#ff5252";
    }
    timerEl.style.color = pct <= 0.25 ? "#ff5252" : "";
}

// ---- POWER-UPS ----
lifelineBtn.addEventListener("click", () => {
    if (lifelineUsed) return;
    lifelineUsed = true;
    lifelineBtn.disabled = true; lifelineBtn.classList.add('used');

    const q = sessionQuestions[currentQuestionIndex];
    const correct = q.answer;
    const wrong = q.options.map((_, i) => i).filter(i => i !== correct)
        .sort(() => Math.random() - 0.5).slice(0, 2);

    Array.from(optionsEl.children).forEach(btn => {
        if (wrong.includes(parseInt(btn.dataset.index))) btn.classList.add("eliminated");
    });
    showPopup("⚡ 50/50 used!", "success");
});

skipBtn.addEventListener("click", () => {
    if (skipUsed) return;
    skipUsed = true;
    skipBtn.disabled = true; skipBtn.classList.add('used');
    clearInterval(timerInterval);
    answerLog.push({ q: sessionQuestions[currentQuestionIndex], selected: -2, skipped: true });
    showPopup("⏭ Skipped!", "info");
    streak = 0; updateStreakUI();
    setTimeout(nextQuestion, 800);
});

doubleBtn.addEventListener("click", () => {
    if (doubleUsed) return;
    doubleUsed = true;
    isDoubleActive = true;
    doubleBtn.disabled = true; doubleBtn.classList.add('used');
    showPopup("💎 DOUBLE POINTS active!", "success");
    doubleBtn.style.background = "rgba(255,215,0,0.3)";
    doubleBtn.style.borderColor = "gold";
});

// ---- HANDLE ANSWER ----
function handleAnswer(selectedIndex, btnElement) {
    clearInterval(timerInterval);
    const q = sessionQuestions[currentQuestionIndex];
    const correct = q.answer;

    Array.from(optionsEl.children).forEach(b => b.disabled = true);
    lifelineBtn.disabled = true; skipBtn.disabled = true; doubleBtn.disabled = true;

    const isCorrect = selectedIndex === correct;
    answerLog.push({ q, selected: selectedIndex, skipped: false });

    if (isCorrect) {
        playSound('correct');
        streak++; correctCount++;
        if (streak > bestStreak) bestStreak = streak;

        let multiplier = 1;
        if (streak >= 5) multiplier = 2;
        else if (streak >= 3) multiplier = 1.5;
        if (isDoubleActive) { multiplier *= 2; isDoubleActive = false; }

        const pts = Math.round(BASE_POINTS[selectedDifficulty] * multiplier);
        score += pts;

        if (btnElement) { btnElement.classList.add("correct"); triggerMiniConfetti(btnElement); }
        showPopup(`✅ +${pts}${multiplier > 1 ? ` (×${multiplier})` : ""}`, "success");

        if (streak >= 3) { playSound('combo'); showComboOverlay(streak); }
    } else {
        playSound('wrong');
        streak = 0;
        if (btnElement) btnElement.classList.add("wrong");
        const correctBtn = Array.from(optionsEl.children).find(b => parseInt(b.dataset.index) === correct);
        if (correctBtn) correctBtn.classList.add("correct");
        if (selectedIndex !== -1) showPopup("❌ Wrong!", "error");
    }

    scoreEl.textContent = score;
    updateStreakUI();

    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < sessionQuestions.length) {
        lifelineBtn.disabled = lifelineUsed; skipBtn.disabled = skipUsed; doubleBtn.disabled = doubleUsed;
        loadQuestion();
    } else {
        endQuiz();
    }
}

// ---- STREAK UI ----
function updateStreakUI() {
    if (streak >= 3) {
        streakDisplay.classList.remove("hidden");
        const multi = streak >= 5 ? "2x" : "1.5x";
        streakDisplay.textContent = `🔥 ${streak} Streak ${multi}`;
        streakDisplay.style.animation = 'none';
        streakDisplay.offsetHeight;
        streakDisplay.style.animation = '';
    } else {
        streakDisplay.classList.add("hidden");
    }
}

// ---- COMBO OVERLAY ----
function showComboOverlay(s) {
    comboOverlay.textContent = s >= 5 ? "🔥 LEGENDARY!" : s >= 4 ? "⚡ ON FIRE!" : "💫 COMBO!";
    comboOverlay.classList.remove("hidden");
    comboOverlay.classList.add("combo-show");
    setTimeout(() => {
        comboOverlay.classList.remove("combo-show");
        comboOverlay.classList.add("hidden");
    }, 1200);
}

// ---- END QUIZ ----
function endQuiz() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    resultScreen.classList.add("slide-in");
    setTimeout(() => resultScreen.classList.remove("slide-in"), 600);

    finalScoreEl.textContent = score;
    document.getElementById("statCorrect").textContent = correctCount;
    document.getElementById("statAccuracy").textContent =
        `${Math.round((correctCount / sessionQuestions.length) * 100)}%`;
    document.getElementById("statBest").textContent = bestStreak;

    const maxPossible = sessionQuestions.length * BASE_POINTS[selectedDifficulty] * 2;
    const ratio = score / maxPossible;

    let emoji = "😅", msg = "Keep practising!";
    if (ratio >= 0.8) { emoji = "🏆"; msg = "Incredible! You're a genius!"; triggerWinConfetti(); }
    else if (ratio >= 0.5) { emoji = "🎉"; msg = "Great work, keep it up!"; }
    else if (ratio >= 0.3) { emoji = "👍"; msg = "Good effort, keep learning!"; }

    document.getElementById("resultEmoji").textContent = emoji;
    performanceMessageEl.textContent = msg;

    buildReview();
    saveScore();
    loadLeaderboard();
}

// ---- REVIEW ----
function buildReview() {
    const list = document.getElementById("reviewList");
    list.innerHTML = "";
    answerLog.forEach((entry, i) => {
        const div = document.createElement("div");
        const isCorrect = !entry.skipped && entry.selected === entry.q.answer;
        div.className = `review-item ${entry.skipped ? 'skipped' : isCorrect ? 'r-correct' : 'r-wrong'}`;
        div.innerHTML = `
      <div class="ri-num">${i + 1}</div>
      <div class="ri-content">
        <div class="ri-q">${entry.q.question}</div>
        <div class="ri-a">
          ${entry.skipped ? '⏭ Skipped' : isCorrect
                ? `✅ ${entry.q.options[entry.selected]}`
                : `❌ You: ${entry.selected >= 0 ? entry.q.options[entry.selected] : 'Time out'} · ✅ ${entry.q.options[entry.q.answer]}`}
        </div>
      </div>`;
        list.appendChild(div);
    });
}

document.getElementById("reviewToggle").addEventListener("click", () => {
    const list = document.getElementById("reviewList");
    list.classList.toggle("hidden");
    document.querySelector("#reviewToggle span").textContent = list.classList.contains("hidden") ? "▼" : "▲";
});

// ---- STORAGE ----
function saveScore() {
    let lb = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
    lb.push({ name: username, score, difficulty: selectedDifficulty });
    lb.sort((a, b) => b.score - a.score);
    localStorage.setItem("quizLeaderboard", JSON.stringify(lb.slice(0, 7)));
}

function loadLeaderboard() {
    let lb = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
    leaderboardEl.innerHTML = "";
    if (!lb.length) { leaderboardEl.innerHTML = "<li>No scores yet!</li>"; return; }
    lb.forEach((e, i) => {
        const li = document.createElement("li");
        const medals = ["🥇", "🥈", "🥉"];
        li.innerHTML = `<span>${medals[i] || `${i + 1}.`} &nbsp;${e.name} <small>${e.difficulty || ''}</small></span><strong>${e.score} pts</strong>`;
        leaderboardEl.appendChild(li);
    });
}

// ---- POPUP ----
function showPopup(msg, type) {
    popup.textContent = msg;
    popup.className = `popup popup-${type} show`;
    clearTimeout(popup._t);
    popup._t = setTimeout(() => popup.classList.remove("show"), 1600);
}

// ---- CONFETTI ----
function triggerMiniConfetti(el) {
    if (!window.confetti) return;
    const r = el.getBoundingClientRect();
    confetti({ particleCount: 40, spread: 50, origin: { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight }, colors: ['#00e676', '#4facfe', '#ffd700'], disableForReducedMotion: true });
}

function triggerWinConfetti() {
    if (!window.confetti) return;
    const end = Date.now() + 3000;
    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#00f2fe', '#4facfe', '#00e676'] });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ffd700', '#ff6b6b', '#4facfe'] });
        if (Date.now() < end) requestAnimationFrame(frame);
    })();
}
