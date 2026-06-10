    history.scrollRestoration = 'manual';
  // ========== USER PROGRESS STATE ==========
  let solvedSet = new Set(JSON.parse(localStorage.getItem("ph_solved_set") || "[]"));
  let xp = parseInt(localStorage.getItem("ph_xp") || "0");
  let streak = parseInt(localStorage.getItem("ph_streak") || "0");
  let lastVisit = localStorage.getItem("ph_last_visit");
  let currentNav = "problems";
  let currentSearchQuery = "";   // NEW: store current search term

  function updateStreak() {
    const today = new Date().toDateString();
    if (!lastVisit) {
      streak = 1;
      localStorage.setItem("ph_last_visit", today);
      localStorage.setItem("ph_streak", streak);
    } else if (lastVisit !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const isConsecutive = (new Date(lastVisit).toDateString() === yesterday.toDateString());
      streak = isConsecutive ? streak + 1 : 1;
      localStorage.setItem("ph_last_visit", today);
      localStorage.setItem("ph_streak", streak);
    }
    const streakEl = document.getElementById("streakValue");
    if (streakEl) streakEl.innerText = streak;
    const heroStreakEl = document.getElementById("heroStreak");
    if (heroStreakEl) heroStreakEl.innerText = streak;
    const streakProgress = document.getElementById("streakProgress");
    if (streakProgress) streakProgress.style.width = `${Math.min((streak / 30) * 100, 100)}%`;
    const streakMsg = document.getElementById("streakMsg");
    if (streakMsg) streakMsg.innerHTML = streak > 0 ? `🔥 ${streak} day streak! Keep going` : "Solve a problem today";
  }
  function updateUI() {
    // Refresh solvedSet from localStorage
    solvedSet = new Set(JSON.parse(localStorage.getItem("ph_solved_set") || "[]"));
    const totalSolved = solvedSet.size;
    
    // Get difficulty wise solved counts from localStorage
    let easySolved = parseInt(localStorage.getItem("ph_easy_solved") || "0");
    let mediumSolved = parseInt(localStorage.getItem("ph_medium_solved") || "0");
    let hardSolved = parseInt(localStorage.getItem("ph_hard_solved") || "0");
    
    // Dynamic total counts from questions (already in window.questions)
    let totalEasy = 0, totalMedium = 0, totalHard = 0;
    if (window.questions && window.questions.length) {
      window.questions.forEach(q => {
        if (q.difficulty === "easy") totalEasy++;
        else if (q.difficulty === "medium") totalMedium++;
        else if (q.difficulty === "hard") totalHard++;
      });
    } else {
      // Fallback values
      totalEasy = 12;
      totalMedium = 8;
      totalHard = 5;
    }
    
    const totalAvailableProblems = totalEasy + totalMedium + totalHard;
    
    // Update UI elements
    const totalSolvedEl = document.getElementById("totalSolved");
    if (totalSolvedEl) totalSolvedEl.innerText = totalSolved;
    
    const heroSolvedEl = document.getElementById("heroSolved");
    if (heroSolvedEl) heroSolvedEl.innerText = totalSolved;
    
    // Calculate percentage
    let percent = totalAvailableProblems > 0 ? Math.floor((totalSolved / totalAvailableProblems) * 100) : 0;
    const completionPercentEl = document.getElementById("completionPercent");
    if (completionPercentEl) completionPercentEl.innerText = percent;
    
    const solvedFill = document.getElementById("solvedFill");
    if (solvedFill) solvedFill.style.width = `${percent}%`;
    
    // Update difficulty counts display
    const easyCount = document.getElementById("easyCount");
    if (easyCount) easyCount.innerText = `${easySolved}/${totalEasy}`;
    
    const mediumCount = document.getElementById("mediumCount");
    if (mediumCount) mediumCount.innerText = `${mediumSolved}/${totalMedium}`;
    
    const hardCount = document.getElementById("hardCount");
    if (hardCount) hardCount.innerText = `${hardSolved}/${totalHard}`;
    
    // Update progress bars
    const easyFill = document.getElementById("easyFill");
    if (easyFill) easyFill.style.width = `${totalEasy > 0 ? (easySolved / totalEasy) * 100 : 0}%`;
    
    const mediumFill = document.getElementById("mediumFill");
    if (mediumFill) mediumFill.style.width = `${totalMedium > 0 ? (mediumSolved / totalMedium) * 100 : 0}%`;
    
    const hardFill = document.getElementById("hardFill");
    if (hardFill) hardFill.style.width = `${totalHard > 0 ? (hardSolved / totalHard) * 100 : 0}%`;
    
    // XP and Level (XP already in localStorage from questions.js)
    let level = Math.floor(xp / 200) + 1;
    let xpProgress = (xp % 200) / 200 * 100;
    const xpValue = document.getElementById("xpValue");
    if (xpValue) xpValue.innerText = xp;
    
    const xpProgressFill = document.getElementById("xpProgressFill");
    if (xpProgressFill) xpProgressFill.style.width = `${xpProgress}%`;
    
    const levelNum = document.getElementById("levelNum");
    if (levelNum) levelNum.innerText = level;
    
    let rank = Math.max(1, 100 - Math.floor(totalSolved / 2));
    const rankNum = document.getElementById("rankNum");
    if (rankNum) rankNum.innerText = rank;
    
    const heroRank = document.getElementById("heroRank");
    if (heroRank) heroRank.innerText = rank;
    
    // Modal stats
    const modalSolved = document.getElementById("modalSolved");
    if (modalSolved) modalSolved.innerText = totalSolved;
    
    const modalStreak = document.getElementById("modalStreak");
    if (modalStreak) modalStreak.innerText = streak;
    
    const modalXP = document.getElementById("modalXP");
    if (modalXP) modalXP.innerText = xp;
    
    const modalLevel = document.getElementById("modalLevel");
    if (modalLevel) modalLevel.innerText = level;
    
    updateBadges();
  }

  function updateBadges() {
    const totalSolved = solvedSet.size;
    const badges = [];
    if (totalSolved >= 15) badges.push('🥉 Bronze Coder');
    if (totalSolved >= 45) badges.push('🥈 Silver Coder');
    if (totalSolved >= 90) badges.push('🥇 Gold Coder');
    if (streak >= 7) badges.push('🔥 Weekly Warrior');
    if (streak >= 30) badges.push('⚡ Monthly Master');

    const badgeContainer = document.getElementById('badgeContainer');
    if (badgeContainer) {
      if (badges.length === 0) {
        badgeContainer.innerHTML = '<span style="color:#64748b; font-size:0.8rem;">✨ Solve 15 problems to earn your first badge!</span>';
      } else {
        badgeContainer.innerHTML = badges.map(b =>
          `<span style="background: linear-gradient(135deg, #f59e0b, #ef4444); padding: 6px 14px; border-radius: 30px; font-size: 0.75rem; font-weight: 600; color: white; display: inline-block; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
             ${b}
           </span>`
        ).join('');
      }
    }
  }

  function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    document.body.appendChild(particleContainer);
    for(let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = Math.random() * 10 + 10 + 's';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particleContainer.appendChild(particle);
    }
  }

  function switchToView(viewId) {
    const dashboardDiv = document.getElementById("dashboardView");
    const problemsDiv = document.getElementById("problemsView");
    const leaderboardDiv = document.getElementById("leaderboardView");
    const contestsDiv = document.getElementById("contestsView");
    if (dashboardDiv) dashboardDiv.style.display = "none";
    if (problemsDiv) problemsDiv.style.display = "none";
    if (leaderboardDiv) leaderboardDiv.style.display = "none";
    if (contestsDiv) contestsDiv.style.display = "none";
    if (viewId === "dashboard" && dashboardDiv) dashboardDiv.style.display = "block";
    else if (viewId === "problems" && problemsDiv) problemsDiv.style.display = "block";
    else if (viewId === "leaderboard" && leaderboardDiv) leaderboardDiv.style.display = "block";
    else if (viewId === "contests" && contestsDiv) contestsDiv.style.display = "block";
    document.querySelectorAll(".nav-link").forEach(btn => {
      if (btn.dataset.nav === viewId) btn.classList.add("active");
      else btn.classList.remove("active");
    });
    currentNav = viewId;
  }

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", () => switchToView(btn.dataset.nav));
  });

  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) {
    if (localStorage.getItem("ph_dark") === "true") document.body.classList.add("dark");
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("ph_dark", document.body.classList.contains("dark"));
    });
  }

  const profileIcon = document.getElementById("profileIcon");
  const profileModal = document.getElementById("profileModal");
  if (profileIcon && profileModal) {
    profileIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      profileModal.classList.toggle("show");
    });
    document.getElementById("closeProfileModal")?.addEventListener("click", () => profileModal.classList.remove("show"));
    document.addEventListener("click", (e) => {
      if (!profileModal.contains(e.target) && !profileIcon.contains(e.target)) {
        profileModal.classList.remove("show");
      }
    });
  }
  function renderQuestions(questionArray, startNumber = 1) {
    const container = document.getElementById("questionsContainer");
    if (!container) return;
    container.innerHTML = "";
    if (!questionArray || questionArray.length === 0) {
      container.innerHTML = '<div class="problems-empty"><i class="fas fa-database"></i><h3>No questions found</h3><p>Questions will appear here soon!</p></div>';
      return;
    }
    const sortedQuestions = [...questionArray].sort((a, b) => a.id - b.id);
    sortedQuestions.forEach((q, index) => {
      let difficultyClass = "";
      if(q.difficulty === "easy") difficultyClass = "easy";
      else if(q.difficulty === "medium") difficultyClass = "medium";
      else difficultyClass = "hard";
      const uniqueKey = `${q.topic}_${q.id}`;
      const isSolved = solvedSet.has(uniqueKey);
      const solvedIcon = isSolved ? '<i class="fas fa-check-circle" style="color: #10b981; margin-right: 8px;"></i>' : '<i class="far fa-circle" style="color: #64748b; margin-right: 8px;"></i>';
      const displayNumber = startNumber + index;
      
      // IMPORTANT: Store both id AND topic in data attributes
      container.innerHTML += `
        <div class="question-card" data-id="${q.id}" data-topic="${q.topic}" style="cursor: pointer;">
          <div class="question-left">
            <div class="question-top">
              <span class="question-number">${solvedIcon}${displayNumber}.</span>
              <h3 class="question-title">${escapeHtml(q.title)}</h3>
              <span class="difficulty ${difficultyClass}">${q.difficulty}</span>
            </div>
          </div>
          <div class="question-right">
            <button class="solve-btn" data-id="${q.id}" data-topic="${q.topic}">Solve →</button>
          </div>
        </div>
      `;
    });
    
    // Question card click handler
    document.querySelectorAll('.question-card').forEach(card => {
      // Remove existing listeners to avoid duplicates
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
      
      newCard.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('solve-btn')) return;
        const problemId = newCard.getAttribute('data-id');
        const topic = newCard.getAttribute('data-topic');
        if (problemId && topic) {
          console.log(`🔍 Opening: Topic=${topic}, ID=${problemId}`);
          openProblem(problemId, topic);
        }
      });
    });
    
    // Solve button click handler
    document.querySelectorAll('.solve-btn').forEach(btn => {
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      
      newBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const problemId = newBtn.getAttribute('data-id');
        const topic = newBtn.getAttribute('data-topic');
        if (problemId && topic) {
          console.log(`🔍 Opening from Solve btn: Topic=${topic}, ID=${problemId}`);
          openProblem(problemId, topic);
        }
      });
    });
  }
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }

   function openProblem(id, topic) {
    if (!id || !topic) {
      console.error("Missing id or topic:", { id, topic });
      return;
    }
    const encodedTopic = encodeURIComponent(topic);
    const url = `/tech-interview/problem?topic=${encodedTopic}&id=${id}`;
    console.log(`🚀 Navigating to: ${url}`);
    window.location.href = url;
  }

  // ========== NEW SEARCH FUNCTIONALITY ==========
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

function filterQuestionsBySearch(questions, query) {
  if (!query.trim()) return questions;

  const lowerQuery = query.toLowerCase().trim();

  return questions.filter(q => {

    // Question Number Search
    if (q.id && q.id.toString().includes(lowerQuery)) return true;

    // Title Search
    if (q.title && q.title.toLowerCase().includes(lowerQuery)) return true;

    // Tags Search
    if (q.tags && q.tags.some(tag =>
      tag.toLowerCase().includes(lowerQuery)
    )) return true;

    // Description Search
    if (q.desc && q.desc.toLowerCase().includes(lowerQuery)) return true;

    // Topic Search
    if (q.topic && q.topic.toLowerCase().includes(lowerQuery)) return true;

    // Subtopic Search
    if (q.subtopic && q.subtopic.toLowerCase().includes(lowerQuery)) return true;

    return false;
  });
}

  function handleSearch() {
    const query = document.getElementById("globalSearchInput")?.value || "";
    currentSearchQuery = query;
    if (!window.questions) return;
    // Remove active subtopic highlight while searching
    document.querySelectorAll(".subtopic-btn").forEach(btn => btn.classList.remove("active-subtopic"));
    let filtered = [...window.questions];
    if (query.trim()) {
      filtered = filterQuestionsBySearch(window.questions, query);
    }
    filtered.sort((a, b) => a.id - b.id);
    renderQuestions(filtered, 1);
    const container = document.getElementById("questionsContainer");
    if (filtered.length === 0 && query.trim()) {
      container.innerHTML = `<div class="problems-empty"><i class="fas fa-search"></i><h3>No results found</h3><p>No questions match "${escapeHtml(query)}"</p></div>`;
    }
  }

  const debouncedSearch = debounce(handleSearch, 300);

  // ========== SUBTOPIC FILTER (enhanced to clear search) ==========
  function setupSubtopicsFilter() {
    const subtopicButtons = document.querySelectorAll(".subtopic-btn");
    const searchInput = document.getElementById("globalSearchInput");

    subtopicButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Clear search input and reset search query
        if (searchInput) {
          searchInput.value = "";
          currentSearchQuery = "";
        }
        subtopicButtons.forEach((b) => b.classList.remove("active-subtopic"));
        btn.classList.add("active-subtopic");

        const topic = btn.dataset.topic;
        if (topic === "all") {
          renderQuestions(window.questions, 1);
          return;
        }
        const filteredQuestions = window.questions.filter(q => q.topic === topic);
        filteredQuestions.sort((a, b) => a.id - b.id);
        renderQuestions(filteredQuestions, 1);
      });
    });
  }

  // ========== INITIALIZE ON PAGE LOAD ==========
  document.addEventListener("DOMContentLoaded", function() {
    updateStreak();
    updateUI();
    switchToView("problems");
    createParticles();

    // Typing effect for hero text
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle && heroTitle.innerText) {
      const originalText = heroTitle.innerText;
      heroTitle.innerText = '';
      let i = 0;
      function typeWriter() {
        if (i < originalText.length) {
          heroTitle.innerText += originalText.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      }
      typeWriter();
    }

    // Attach search listener
 const searchInput = document.getElementById("globalSearchInput");

if (searchInput) {
  searchInput.addEventListener("input", handleSearch);
}
    // Load questions
    if (typeof window.questions !== 'undefined') {
      console.log("✅ Questions loaded:", window.questions.length);
      renderQuestions(window.questions);
      setupSubtopicsFilter();
    } else {
      console.log("⏳ Waiting for questions.js to load...");
      const checkInterval = setInterval(function() {
        if (typeof window.questions !== 'undefined') {
          console.log("✅ Questions loaded:", window.questions.length);
          renderQuestions(window.questions);
          setupSubtopicsFilter();
          clearInterval(checkInterval);
        }
      }, 100);
      setTimeout(function() {
        clearInterval(checkInterval);
        if (typeof window.questions === 'undefined') {
          console.error("❌ Failed to load questions.js");
          const container = document.getElementById("questionsContainer");
          if (container) {
            container.innerHTML = '<div class="problems-empty"><i class="fas fa-exclamation-triangle"></i><h3>Error loading questions</h3><p>Please refresh the page or contact support.</p></div>';
          }
        }
      }, 5000);
    }
        // Refresh solved status when page becomes visible
     document.addEventListener("visibilitychange", function() {
      if (!document.hidden && currentNav === "problems") {
        solvedSet = new Set(JSON.parse(localStorage.getItem("ph_solved_set") || "[]"));
        const activeTopic = document.querySelector(".subtopic-btn.active-subtopic")?.dataset.topic || "all";
        if (activeTopic === "all") {
          renderQuestions(window.questions, 1);
        } else {
          const filtered = window.questions.filter(q => q.topic === activeTopic);
          renderQuestions(filtered, 1);
        }
        updateUI();
      }
    });
  });
  //submited
       // Mark problem as solved in localStorage with unique key (topic + id)
    function markSolved() {
      if (!currentQuestion) return;
      const questionId = currentQuestion.id.toString();
      const topic = currentQuestion.topic || "unknown";
      const difficulty = currentQuestion.difficulty || 'easy';
      
      // 🔥 IMPORTANT: Create UNIQUE key with topic + id
      const uniqueKey = `${topic}_${questionId}`;
      
      console.log(`📝 Marking problem ${uniqueKey} (${difficulty}) as solved...`);
      
      // Get current solved set from localStorage
      let solvedSet = new Set(JSON.parse(localStorage.getItem("ph_solved_set") || "[]"));
      
      // Check using uniqueKey
      if (!solvedSet.has(uniqueKey)) {
        solvedSet.add(uniqueKey);  // ← YAHAN uniqueKey add karo, sirf questionId nahi
        localStorage.setItem("ph_solved_set", JSON.stringify([...solvedSet]));
        
        // ========== DIFFICULTY WISE TRACKING ==========
        let easySolved = parseInt(localStorage.getItem("ph_easy_solved") || "0");
        let mediumSolved = parseInt(localStorage.getItem("ph_medium_solved") || "0");
        let hardSolved = parseInt(localStorage.getItem("ph_hard_solved") || "0");
        
        if (difficulty === "easy") {
          easySolved++;
          localStorage.setItem("ph_easy_solved", easySolved);
        } else if (difficulty === "medium") {
          mediumSolved++;
          localStorage.setItem("ph_medium_solved", mediumSolved);
        } else if (difficulty === "hard") {
          hardSolved++;
          localStorage.setItem("ph_hard_solved", hardSolved);
        }
        
        // Add XP based on difficulty
        let xpGain = difficulty === "easy" ? 10 : (difficulty === "medium" ? 25 : 50);
        let currentXP = parseInt(localStorage.getItem("ph_xp") || "0");
        currentXP += xpGain;
        localStorage.setItem("ph_xp", currentXP);
        
        // Update streak
        let streak = parseInt(localStorage.getItem("ph_streak") || "0");
        let lastVisit = localStorage.getItem("ph_last_visit");
        const today = new Date().toDateString();
        
        if (!lastVisit) {
          streak = 1;
        } else if (lastVisit !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const isConsecutive = (new Date(lastVisit).toDateString() === yesterday.toDateString());
          streak = isConsecutive ? streak + 1 : 1;
        }
        localStorage.setItem("ph_streak", streak);
        localStorage.setItem("ph_last_visit", today);
        
        console.log(`🎉 Problem ${uniqueKey} (${difficulty}) marked as solved! +${xpGain} XP`);
      } else {
        console.log(`⚠️ Problem ${uniqueKey} already solved!`);
      }
    }
    document.body.style.visibility = 'visible';