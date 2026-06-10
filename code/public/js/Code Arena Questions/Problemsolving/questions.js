// ============================================================
// CODE ARENA - MAIN QUESTIONS FILE
// This file initializes window.questions and exports functions
// Actual questions are added by topic files
// ============================================================

// Initialize window.questions
if (typeof window !== 'undefined') {
  window.questions = [];
  console.log("✅ Initialized window.questions array");
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function createQuestion(data) {
  const difficultyConfig = {
    easy: {
      xp: 10,
      coins: 5,
      estimatedTime: "2 min"
    },
    medium: {
      xp: 25,
      coins: 15,
      estimatedTime: "10 min"
    },
    hard: {
      xp: 50,
      coins: 30,
      estimatedTime: "20 min"
    }
  };

  const config = difficultyConfig[data.difficulty] || difficultyConfig.easy;

  return {
    // Dynamic Rewards
    xp: config.xp,
    coins: config.coins,
    estimatedTime: config.estimatedTime,

    // Common UI
    acceptanceRate: 100,
    likes: 0,
    dislikes: 0,

    // Future
    learningObjective: "",
    concepts: [],
    relatedProblems: [],
    isPremium: false,

    // Firebase
    isActive: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),

    // Original Question (override allowed)
    ...data
  };
}
function getSubtopicsForCategory(category) {
  const subtopics = new Set();
  window.questions.forEach(q => { 
    if (q.category === category) subtopics.add(q.subtopic); 
  });
  return Array.from(subtopics).sort();
}

function filterQuestions(category, subtopic) {
  let filtered = window.questions.filter(q => q.category === category);
  if (subtopic && subtopic !== "All Topics")
    filtered = filtered.filter(q => q.subtopic === subtopic);
  return filtered;
}

function getQuestionById(id) {
  return window.questions.find(q => q.id === parseInt(id));
}

// ============================================================
// YOUTUBE PLAYER FUNCTION
// ============================================================

function renderYouTubePlayer(containerId, videoId, startSec, endSec) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (!videoId) {
    container.innerHTML = `<div style="background:#1e1f2e; border-radius:12px; height:220px; display:flex; align-items:center; justify-content:center; color:#64748b;">📺 Video solution coming soon...</div>`;
    return;
  }
  
  const playerId = "yt-player-" + containerId.replace(/[^a-zA-Z0-9]/g, '');
  
  container.innerHTML = `
    <div style="position:relative;">
      <div style="position:relative; padding-bottom:56.25%; height:0; border-radius:12px; overflow:hidden; background:#000;">
        <div id="${playerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>
      </div>
      <div id="replay-btn-${playerId}" style="
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          padding: 12px 28px;
          border-radius: 50px;
          cursor: pointer;
          z-index: 9999;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.3);
          gap: 10px;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        ">
        <i class="fas fa-repeat" style="color: white; font-size: 1.2rem;"></i>
        <span style="color: white; font-weight: 600; font-size: 0.95rem;">Replay</span>
      </div>
    </div>`;
  
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }
  
  let player = null;
  let checkInterval = null;
  
  function showReplayButton() {
    const btn = document.getElementById(`replay-btn-${playerId}`);
    if (btn) btn.style.display = "flex";
  }
  
  function hideReplayButton() {
    const btn = document.getElementById(`replay-btn-${playerId}`);
    if (btn) btn.style.display = "none";
  }
  
  function setupReplayButton() {
    const btnId = `replay-btn-${playerId}`;
    let btn = document.getElementById(btnId);
    
    if (btn && player) {
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      btn = newBtn;
      
      btn.onclick = function(e) {
        e.stopPropagation();
        player.seekTo(startSec || 0);
        player.playVideo();
        hideReplayButton();
        
        if (checkInterval) clearInterval(checkInterval);
        if (endSec && endSec > 0) {
          checkInterval = setInterval(function() {
            try {
              if (player && typeof player.getCurrentTime === "function") {
                const currentTime = player.getCurrentTime();
                if (currentTime >= endSec) {
                  player.pauseVideo();
                  showReplayButton();
                  clearInterval(checkInterval);
                  checkInterval = null;
                }
              }
            } catch(e) {}
          }, 200);
        }
      }; 
    }
  }
  
  function createPlayer() {
    player = new YT.Player(playerId, {
      videoId: videoId,
      playerVars: { 
        start: startSec || 0, 
        autoplay: 0, 
        controls: 1, 
        modestbranding: 1, 
        rel: 0, 
        fs: 1 
      },
      events: {
        onReady: function(event) {
          if (endSec && endSec > 0) {
            if (checkInterval) clearInterval(checkInterval);
            checkInterval = setInterval(function() {
              try {
                if (player && typeof player.getCurrentTime === "function") {
                  const currentTime = player.getCurrentTime();
                  if (currentTime >= endSec) {
                    player.pauseVideo();
                    showReplayButton();
                    clearInterval(checkInterval);
                    checkInterval = null;
                  }
                }
              } catch(e) {}
            }, 200);
          }
          setTimeout(setupReplayButton, 100);
        },
        onStateChange: function(event) {
          if (event.data === 1) hideReplayButton();
          if (event.data === 2 && player && endSec) {
            const currentTime = player.getCurrentTime();
            if (currentTime >= endSec) showReplayButton();
          }
          if (event.data === 0) showReplayButton();
        }
      }
    });
  }
  
  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    window.onYouTubeIframeAPIReady = createPlayer;
  }
}

// ============================================================
// GLOBAL EXPORTS
// ============================================================

window.getQuestionById = getQuestionById;
window.filterQuestions = filterQuestions;
window.getSubtopicsForCategory = getSubtopicsForCategory;
window.renderYouTubePlayer = renderYouTubePlayer;

console.log("✅ Main questions.js loaded - waiting for topic files");