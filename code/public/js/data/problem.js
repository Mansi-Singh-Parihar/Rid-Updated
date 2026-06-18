// ========== RESIZABLE PANELS (default 30% / 70%) ==========
    const leftPanel = document.getElementById('leftPanel');
    const rightPanel = document.getElementById('rightPanel');
    const resizer = document.getElementById('resizer');
    let startX, startLeftWidth;

    function initPanelWidths() {
      const containerWidth = document.querySelector('.main-container').clientWidth;
      let leftWidth = localStorage.getItem('leftPanelWidth');
      if (leftWidth) {
        leftWidth = parseFloat(leftWidth);
        if (leftWidth >= 20 && leftWidth <= 80) {
          leftPanel.style.width = leftWidth + '%';
        } else {
          leftPanel.style.width = '30%';
        }
      } else {
        leftPanel.style.width = '30%';
      }
    }

    function onMouseMove(e) {
      const containerRect = document.querySelector('.main-container').getBoundingClientRect();
      let newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      if (newLeftWidth < 20) newLeftWidth = 20;
      if (newLeftWidth > 80) newLeftWidth = 80;
      leftPanel.style.width = newLeftWidth + '%';
      // localStorage.setItem('leftPanelWidth', newLeftWidth);
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
      resizer.classList.remove('dragging');
    }

    resizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startX = e.clientX;
      startLeftWidth = parseFloat(leftPanel.style.width);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'col-resize';
      resizer.classList.add('dragging');
    });

    window.addEventListener('resize', () => {
      let current = parseFloat(leftPanel.style.width);
      if (current < 20) leftPanel.style.width = '20%';
      if (current > 80) leftPanel.style.width = '80%';
    });

    initPanelWidths();


    // ========== TIMER (LeetCode Style - Improved) ==========
    // ========== TIMER (Compact LeetCode Style) ==========
    let headerTimerInterval = null;
    let headerTimerRunning = false;
    let headerTimerSeconds = 0;
    let headerCurrentMode = "stopwatch";
    let headerTimerTargetSeconds = 60;

    function formatTime(seconds) {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      if (hrs > 0) {
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateHeaderTimerDisplay() {
      let displaySeconds = headerTimerSeconds;
      if (headerCurrentMode === "timer") {
        const remaining = Math.max(0, headerTimerTargetSeconds - headerTimerSeconds);
        displaySeconds = remaining;
      }
      const displayElem = document.getElementById("headerTimerDisplay");
      displayElem.textContent = formatTime(displaySeconds);
      
      if (headerCurrentMode === "timer") {
        const remaining = headerTimerTargetSeconds - headerTimerSeconds;
        if (remaining <= 10 && remaining > 0) {
          displayElem.style.color = "#ef4444";
          displayElem.style.animation = "pulse 1s infinite";
        } else {
          displayElem.style.color = "";
          displayElem.style.animation = "";
        }
      } else {
        displayElem.style.color = "";
        displayElem.style.animation = "";
      }
    }

    // Pulse animation
    if (!document.querySelector('#timerPulseStyle')) {
      const pulseStyle = document.createElement("style");
      pulseStyle.id = "timerPulseStyle";
      pulseStyle.textContent = `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `;
      document.head.appendChild(pulseStyle);
    }

    function startHeaderTimer() {
      if (headerTimerInterval) clearInterval(headerTimerInterval);
      headerTimerRunning = true;
      const startBtn = document.querySelector("#headerTimerStartPause i");
      if (startBtn) startBtn.className = "fas fa-pause";
      
      headerTimerInterval = setInterval(() => {
        if (headerTimerRunning) {
          headerTimerSeconds++;
          if (headerCurrentMode === "timer" && headerTimerSeconds >= headerTimerTargetSeconds) {
            headerTimerRunning = false;
            clearInterval(headerTimerInterval);
            const startBtnIcon = document.querySelector("#headerTimerStartPause i");
            if (startBtnIcon) startBtnIcon.className = "fas fa-play";
            alert("⏰ Time's up!");
            resetHeaderTimer();
          }
          updateHeaderTimerDisplay();
        }
      }, 1000);
    }

    function pauseHeaderTimer() { 
      headerTimerRunning = false; 
      const startBtn = document.querySelector("#headerTimerStartPause i");
      if (startBtn) startBtn.className = "fas fa-play";
    }

    function resetHeaderTimer() {
      headerTimerRunning = false;
      headerTimerSeconds = 0;
      if (headerTimerInterval) clearInterval(headerTimerInterval);
      const startBtn = document.querySelector("#headerTimerStartPause i");
      if (startBtn) startBtn.className = "fas fa-play";
      updateHeaderTimerDisplay();
    }

    function setHeaderTimerMode(mode) {
      headerCurrentMode = mode;
      resetHeaderTimer();
      const minutesContainer = document.getElementById("timerMinutesContainer");
      minutesContainer.style.display = mode === "timer" ? "flex" : "none";
      document.querySelectorAll(".timer-mode-btn").forEach(btn => {
        if (btn.dataset.mode === mode) btn.classList.add("active");
        else btn.classList.remove("active");
      });
    }

    document.getElementById("headerTimerStartPause").onclick = () => {
      if (headerCurrentMode === "timer" && headerTimerSeconds === 0) {
        const mins = parseInt(document.getElementById("headerTimerMinutes").value) || 1;
        headerTimerTargetSeconds = mins * 60;
        updateHeaderTimerDisplay();
      }
      if (headerTimerRunning) pauseHeaderTimer();
      else startHeaderTimer();
    };

    document.getElementById("headerTimerReset").onclick = resetHeaderTimer;

    document.querySelectorAll(".timer-mode-btn").forEach(btn => {
      btn.onclick = () => setHeaderTimerMode(btn.dataset.mode);
    });

    setHeaderTimerMode("stopwatch");

    // Keyboard shortcut: Ctrl+Shift+T to toggle start/pause
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        if (headerTimerRunning) pauseHeaderTimer();
        else startHeaderTimer();
      }
    });

    // ========== PROBLEM SOLVING LOGIC (backgrounds removed) ==========
    let allQuestions = [];
    let currentQuestion = null;
    let currentLanguage = 'python';
    let editor = null;
    let currentTab = 'description';
    let hintsGiven = { 1: '', 2: '', 3: '' };
        // ========== USER PROGRESS STATE (for sidebar solved status) ==========
    let solvedSet = new Set(JSON.parse(localStorage.getItem("ph_solved_set") || "[]"));
    
    const languages = [
      { id: 'python', name: 'Python', mode: 'python', template: `def solve():\n    # Write your code here\n    pass` },
      { id: 'javascript', name: 'JavaScript', mode: 'javascript', template: `var solve = function() {\n    \n};` },
      { id: 'java', name: 'Java', mode: 'text/x-java', template: `class Solution {\n    public int[] solve() {\n        return new int[]{};\n    }\n}` },
      { id: 'cpp', name: 'C++', mode: 'text/x-c++src', template: `class Solution {\npublic:\n    vector<int> solve() {\n        return {};\n    }\n};` }
    ];
    
    const apiLanguageMap = { python: 'python', javascript: 'javascript', java: 'java', cpp: 'cpp', c: 'c', csharp: 'csharp' };
    
      // Dark Mode Toggle with dynamic icon
    if (localStorage.getItem("cc_dark") === "true") {
      document.body.classList.add("dark");
    }
    
    function updateDarkToggleIcon() {
      const darkToggle = document.getElementById("darkToggle");
      const isDark = document.body.classList.contains("dark");
      if (isDark) {
        // Dark mode hai to Light mode ka icon dikhao (sun)
        darkToggle.innerHTML = '<i class="fas fa-sun"></i> Light';
      } else {
        // Light mode hai to Dark mode ka icon dikhao (moon)
        darkToggle.innerHTML = '<i class="fas fa-moon"></i> Dark';
      }
    }
    
    // Initial icon set
    updateDarkToggleIcon();
    
    document.getElementById("darkToggle").onclick = () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("cc_dark", isDark);
      updateDarkToggleIcon();
      
      // // Also update CodeMirror theme if needed
      // if (editor) {
      //   editor.setOption('theme', isDark ? 'dracula' : 'default');
      // }
    };
    const urlParams = new URLSearchParams(window.location.search);
    let currentId = parseInt(urlParams.get('id')) || 1;
    let currentTopic = urlParams.get('topic') || "";
    
    function renderLanguageTabs() {
      const container = document.getElementById("languageTabs");
      container.innerHTML = '';
      languages.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `lang-tab ${currentLanguage === lang.id ? 'active' : ''}`;
        btn.textContent = lang.name;
        btn.onclick = () => {
          currentLanguage = lang.id;
          renderLanguageTabs();
          if (editor) {
            editor.setOption('mode', lang.mode);
            if (currentQuestion?.starterCode?.[currentLanguage]) {
              editor.setValue(currentQuestion.starterCode[currentLanguage]);
            } else {
              editor.setValue(lang.template);
            }
          }
          if (currentTab === 'solutions') renderSolutionTab();
        };
        container.appendChild(btn);
      });
    }
    
    function renderEditorialTab() {
      const container = document.getElementById("panelContent");
      if (!currentQuestion) return;
      const videoId = currentQuestion.videoId || null;
      const startSec = currentQuestion.videoStart || 0;
      const endSec = currentQuestion.videoEnd || null;
      let videoHtml = '';
      if (videoId) {
        videoHtml = `<div id="editorialVideoContainer" style="margin-bottom: 1rem;"></div>`;
      } else {
        videoHtml = `<p style="color: #64748b; margin-bottom: 1rem;">📺 Video solution coming soon...</p>`;
      }
     container.innerHTML = `
  <div style="padding: 0.5rem 0;">
    <!-- HEADER - Changed -->
    <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
      <i class="fas fa-book-open" style="color: #4f46e5;"></i> 
      Editorial
    </h3>
    ${videoHtml}
    
    <!-- NEW: APPROACH BOX (Added) -->
    <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); border: 1px solid rgba(79, 70, 229, 0.3); border-radius: 12px; padding: 1.2rem; margin-bottom: 1.2rem; transition: all 0.3s ease;">
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
        <i class="fas fa-lightbulb" style="color: #f59e0b; font-size: 1.1rem;"></i>
        <span style="font-weight: 700; font-size: 1rem; color: #f59e0b;">Approach</span>
      </div>
      <p style="color: #e2e8f0; line-height: 1.6; font-size: 0.9rem; margin: 0;">
        ${currentQuestion.mathSolution || "Think step by step."}
      </p>
    </div>
    
    <!-- NEW: COMPLEXITY BOX (Added) -->
    <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 1.2rem; transition: all 0.3s ease;">
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
        <i class="fas fa-chart-line" style="color: #10b981; font-size: 1.1rem;"></i>
        <span style="font-weight: 700; font-size: 1rem; color: #10b981;">Complexity Analysis</span>
      </div>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
          <span style="color: #94a3b8; font-size: 0.8rem;">⏱️ Time Complexity</span>
          <div style="font-family: monospace; font-size: 1rem; color: #a5b4fc; margin-top: 0.2rem;">
            ${currentQuestion.timeComplexity || "O(n)"}
          </div>
        </div>
        <div>
          <span style="color: #94a3b8; font-size: 0.8rem;">💾 Space Complexity</span>
          <div style="font-family: monospace; font-size: 1rem; color: #a5b4fc; margin-top: 0.2rem;">
            ${currentQuestion.spaceComplexity || "O(1)"}
          </div>
        </div>
      </div>
    </div>
  </div>`;
      if (videoId && typeof window.renderYouTubePlayer === "function") {
        setTimeout(() => {
          window.renderYouTubePlayer("editorialVideoContainer", videoId, startSec, endSec);
        }, 100);
      }
    }
    
   function renderSolutionTab() {
  const container = document.getElementById("panelContent");
  if (!currentQuestion) return;
  
  const getSolutionCode = (lang) => {
    return currentQuestion.solution?.[lang] || 
           (currentQuestion.solution?.python ? currentQuestion.solution.python : '// Solution not available');
  };
  
  let currentSolutionCode = getSolutionCode(currentLanguage);
  
  let algorithmHtml = '';
  if (currentQuestion.algorithmSteps && currentQuestion.algorithmSteps.length > 0) {
    algorithmHtml = `
      <div style="margin-top: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; padding: 0 0.25rem;">
          <span style="font-weight: 600; font-size: 0.9rem; color: #10b981;">
            <i class="fas fa-code-branch"></i> Algorithm
          </span>
        </div>
        <div style="background: #1e1f2e; border: 1px solid #3b3d5c; padding: 1rem; border-radius: 12px; font-family: monospace; font-size: 0.85rem; color: #79c99a; line-height: 1.8;">
          ${currentQuestion.algorithmSteps.map((step, idx) => `
            <div style="margin-bottom: 0.6rem; display: flex; gap: 0.8rem;">
              <span style="color: #10b981; font-weight: bold; min-width: 28px;">${idx + 1}.</span>
              <span>${escapeHtml(step)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  let complexityHtml = '';
  if (currentQuestion.timeComplexity || currentQuestion.spaceComplexity) {
    complexityHtml = `
      <div style="margin-top: 1rem; display: flex; gap: 1.5rem; flex-wrap: wrap; background: #1e1f2e; border: 1px solid #3b3d5c; border-radius: 12px; padding: 0.8rem 1rem;">
        <div><strong style="color: #79c99a;">Time Complexity:</strong> ${currentQuestion.timeComplexity || 'O(n)'}</div>
        <div><strong style="color: #79c99a;">Space Complexity:</strong> ${currentQuestion.spaceComplexity || 'O(1)'}</div>
      </div>
    `;
  }
  
  const escapedCode = escapeHtml(currentSolutionCode);
  
  container.innerHTML = `
    <div>
      <div class="solution-header">
        <span style="font-weight: 600; font-size: 0.85rem;">
          <i class="fas fa-code"></i> Solution
        </span>
        <select class="solution-language-select" id="solutionLanguageSelect">
          ${languages.map(lang => `
            <option value="${lang.id}" ${currentLanguage === lang.id ? 'selected' : ''}>
              ${lang.name}
            </option>
          `).join('')}
        </select>
      </div>
      <div class="solution-code" style="position: relative;">
        <pre>${escapedCode}</pre>
        <button class="copy-solution-btn-inside" id="copySolutionBtn">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
      ${algorithmHtml}
    </div>
  `;
  
  // Copy button functionality
  const copyBtn = document.getElementById("copySolutionBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const codeToCopy = currentSolutionCode;
      try {
        await navigator.clipboard.writeText(codeToCopy);
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
          copyBtn.classList.remove("copied");
        }, 2000);
      } catch (err) {
        copyBtn.innerHTML = '<i class="fas fa-times"></i> Failed';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        }, 1500);
      }
    });
  }
  
  // Language dropdown functionality
  const langSelect = document.getElementById("solutionLanguageSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      const newLang = e.target.value;
      currentLanguage = newLang;
      
      // Update solution code display
      const newSolutionCode = getSolutionCode(newLang);
      const codePre = document.querySelector(".solution-code pre");
      if (codePre) {
        codePre.textContent = newSolutionCode;
      }
      
      // Also update the copy button's code reference
      const copyBtnExisting = document.getElementById("copySolutionBtn");
      if (copyBtnExisting) {
        const oldClickHandler = copyBtnExisting.cloneNode(true);
        copyBtnExisting.parentNode.replaceChild(oldClickHandler, copyBtnExisting);
        oldClickHandler.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(newSolutionCode);
            oldClickHandler.innerHTML = '<i class="fas fa-check"></i> Copied!';
            oldClickHandler.classList.add("copied");
            setTimeout(() => {
              oldClickHandler.innerHTML = '<i class="fas fa-copy"></i> Copy';
              oldClickHandler.classList.remove("copied");
            }, 2000);
          } catch (err) {
            oldClickHandler.innerHTML = '<i class="fas fa-times"></i> Failed';
            setTimeout(() => {
              oldClickHandler.innerHTML = '<i class="fas fa-copy"></i> Copy';
            }, 1500);
          }
        });
      }
      
      // Update the editor language mode and code
      if (editor) {
        const langObj = languages.find(l => l.id === newLang);
        if (langObj) {
          editor.setOption('mode', langObj.mode);
          if (currentQuestion?.starterCode?.[newLang]) {
            editor.setValue(currentQuestion.starterCode[newLang]);
          } else {
            editor.setValue(langObj.template);
          }
        }
      }
      
      // Update language tabs highlight
      renderLanguageTabs();
    });
  }
}
    
    function renderPanelContent() {
      if (currentTab === 'description') renderDescriptionTab();
      else if (currentTab === 'editorial') renderEditorialTab();
      else if (currentTab === 'solutions') renderSolutionTab();
      else if (currentTab === 'submissions') renderSubmissionsTab();
    }
    
    function renderDescriptionTab() {
      const container = document.getElementById("panelContent");
      if (!currentQuestion) return;
      //topic dikahna hai
      const topicMap = {
  "basic-iop": "Basic",
  "conditions": "Conditions",
  "loops": "Loops",
  "patterns": "Patterns",
  "number-problems": "Numbers",
  "digit-problems": "Digits",
  "factor-divisibility": "Factors",
  "math-logic": "Math Logic",
  "special-numbers": "Special Numbers",
  "conversion": "Conversion",
  "range-problems": "Range Problems",
  "string-problems": "Strings"
};

const topicName = topicMap[currentQuestion.topic] || currentQuestion.topic;
//end    
let examplesHtml = '';
      if (currentQuestion.examples && currentQuestion.examples.length) {
        currentQuestion.examples.forEach((ex, idx) => {
          examplesHtml += `<div class="example-box">
            <strong>Example : ${idx + 1}</strong>
            <div class="example-code">Input: ${escapeHtml(ex.input)}</div>
            <div class="example-code">Output: ${escapeHtml(ex.output)}</div>
            ${ex.explanation ? `<div style="margin-top:0.5rem;">Explanation: ${escapeHtml(ex.explanation)}</div>` : ''}
          </div>`;
        });
      }
      container.innerHTML = `
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:10px;"><span class="difficulty-badge ${currentQuestion.difficulty}">${currentQuestion.difficulty.toUpperCase()}</span>
             <span class="difficulty-badge topic-badge">
      ${topicName}
    </span></div>
        <h1 class="problem-title">${currentQuestion.id}. ${escapeHtml(currentQuestion.title)}</h1>
        <div class="problem-desc">${currentQuestion.desc}</div>
        <h3>📝 Examples</h3>${examplesHtml}
        ${currentQuestion.constraints ? `<div class="constraints-box"><strong>🔒 Constraints:</strong><ul>${currentQuestion.constraints.map(c => `<li>${c}</li>`).join('')}</ul></div>` : ''}
      `;
    }
    
 //submittion tab
     function renderSubmissionsTab() {
      const container = document.getElementById("panelContent");
      const submissions = JSON.parse(localStorage.getItem('code_submissions') || '[]');
      const currentQuestionSubmissions = submissions.filter(s => s.questionId === currentQuestion?.id && s.topic === currentQuestion?.topic);
      
      if (currentQuestionSubmissions.length === 0) {
        container.innerHTML = `
          <div class="submissions-container">
            <div class="no-submissions">
              <i class="fas fa-history" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
              <p>No submissions yet.</p>
              <p style="font-size: 0.75rem; margin-top: 0.5rem;">Run your code and click Submit to see results here.</p>
            </div>
          </div>
        `;
        return;
      }
      
      const getStatusBadge = (status) => {
        if (status === 'Accepted') {
          return '<span class="status-badge status-accepted"><i class="fas fa-check-circle"></i> Accepted</span>';
        } else if (status === 'Wrong Answer') {
          return '<span class="status-badge status-wrong"><i class="fas fa-times-circle"></i> Wrong Answer</span>';
        } else {
          return '<span class="status-badge status-error"><i class="fas fa-exclamation-triangle"></i> Runtime Error</span>';
        }
      };
      
      let tableHtml = `
        <div class="submissions-container">
          <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-history"></i> Your Submissions
          </h3>
          <table class="submissions-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Language</th>
                <th>Runtime</th>
                <th>Memory</th>
                <th>Submitted At</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
      `;
      
      currentQuestionSubmissions.slice().reverse().forEach((sub, idx) => {
        const submittedDate = new Date(sub.timestamp);
        const formattedDate = submittedDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric',
        });
        
        tableHtml += `
          <tr>
            <td>${getStatusBadge(sub.status)}</td>
            <td><span class="language-badge">${sub.language}</span></td>
            <td class="runtime-cell">${sub.runtime || 'N/A'}</td>
            <td class="runtime-cell">${sub.memory || 'N/A'}</td>
            <td style="font-size: 0.7rem; color: #94a3b8;">${formattedDate}</td>
            <td>
              ${sub.error ? `<span class="submission-detail" title="${sub.error}">${sub.error.substring(0, 30)}${sub.error.length > 30 ? '...' : ''}</span>` : 
                sub.passedTests !== undefined ? `<span class="submission-detail">${sub.passedTests}/${sub.totalTests} tests passed</span>` : '—'}
            </td>
          </tr>
        `;
      });
      
      tableHtml += `
            </tbody>
          </table>
        </div>
      `;
      
      container.innerHTML = tableHtml;
    }
    
         function renderSidebarProblemsList() {
      const container = document.getElementById("problemsListContainer");
      const searchTerm = document.getElementById("sidebarSearch").value.toLowerCase().trim();
      let filtered = allQuestions;
      
      if (searchTerm) {
        // Topic name mapping for search
        const topicNames = {
          "basic-iop": "Basic",
          "conditions": "Conditions",
          "loops": "Loops",
          "patterns": "Patterns",
          "number-problems": "Numbers",
          "digit-problems": "Digits",
          "factor-divisibility": "Factors",
          "math-logic": "Math Logic",
          "special-numbers": "Special Numbers",
          "conversion": "Conversion",
          "range-problems": "Range Problems",
          "string-problems": "Strings"
        };
        
        filtered = allQuestions.filter(q => {
          // Search by title
          if (q.title && q.title.toLowerCase().includes(searchTerm)) return true;
          
          // Search by difficulty
          if (q.difficulty && q.difficulty.toLowerCase().includes(searchTerm)) return true;
          
          // Search by topic name (mapped)
          const topicName = topicNames[q.topic] || q.topic || "";
          if (topicName.toLowerCase().includes(searchTerm)) return true;
          
          // Search by original topic
          if (q.topic && q.topic.toLowerCase().includes(searchTerm)) return true;
          
          // Search by ID
          if (q.id && q.id.toString().includes(searchTerm)) return true;
          
          return false;
        });
      }
      
      // Sort by ID for proper numbering
      filtered.sort((a, b) => a.id - b.id);
      
      container.innerHTML = '';
      
      // Topic name mapping for display
      const topicNames = {
        "basic-iop": "Basic",
        "conditions": "Conditions",
        "loops": "Loops",
        "patterns": "Patterns",
        "number-problems": "Numbers",
        "digit-problems": "Digits",
        "factor-divisibility": "Factors",
        "math-logic": "Math Logic",
        "special-numbers": "Special Numbers",
        "conversion": "Conversion",
        "range-problems": "Range Problems",
        "string-problems": "Strings"
      };
      
      if (filtered.length === 0) {
        container.innerHTML = `<div style="padding: 1rem; text-align: center; color: #64748b;">🔍 No results found for "${escapeHtml(searchTerm)}"</div>`;
        return;
      }
      
      filtered.forEach((q, idx) => {
        const displayNumber = idx + 1;
        const isSolved = solvedSet.has(`${q.topic}_${q.id}`);
        const solvedIcon = isSolved ? '✅ ' : '○ ';
        const topicName = topicNames[q.topic] || q.topic || "General";
        
        const div = document.createElement('div');
        div.className = 'problem-sidebar-item';
        div.setAttribute('data-id', q.id);
        div.setAttribute('data-topic', q.topic);
        
        // Highlight matching text in title if search term exists
        let highlightedTitle = escapeHtml(q.title);
        if (searchTerm) {
          const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
          highlightedTitle = highlightedTitle.replace(regex, `<mark style="background: #4f46e5; color: white; padding: 0 2px; border-radius: 3px;">$1</mark>`);
        }
        
        div.innerHTML = `
          <span class="problem-sidebar-title" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span>${solvedIcon}${displayNumber}. ${highlightedTitle}</span>
            <span style="background: rgba(79,70,229,0.15); color: #4f46e5; padding: 2px 8px; border-radius: 12px; font-size: 0.65rem; font-weight: 500;">${topicName}</span>
            <span class="sidebar-difficulty ${q.difficulty}" style="font-size: 0.65rem;">${q.difficulty}</span>
          </span>
        `;
        
        div.onclick = (function(question) {
          return function() {
            console.log(`📋 Sidebar clicked: ${question.topic} - ${question.id}`);
            currentTopic = question.topic;
            loadProblemById(question.id);
            document.getElementById("problemSidebar").classList.remove("show");
            document.getElementById("overlay").classList.remove("show");
          };
        })(q);
        
        container.appendChild(div);
      });
    }
    
    async function runTestCases(code, testCases) {
      const results = [];
      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        try {
          const response = await fetch('/execute', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              language: apiLanguageMap[currentLanguage] || 'python',
              files: [{ content: code }],
              stdin: testCase.input
            })
          });
          const data = await response.json();
          const output = (data.run?.stdout || '').trim();
          const passed = output === testCase.output.trim();
          results.push({ input: testCase.input, expected: testCase.output, actual: output, passed });
        } catch (err) {
          results.push({ ...testCase, output: `Error: ${err.message}`, passed: false });
        }
      }
      return results;
    }
    
    function displayTestResults(results) {
      const container = document.getElementById("testResults");
      const passedCount = results.filter(r => r.passed).length;
      let html = `<div class="test-header">Test Results: ${passedCount}/${results.length} Passed</div>`;
      results.forEach((result, idx) => {
        html += `<div class="test-case-item">
          <div class="test-status ${result.passed ? 'passed' : 'failed'}">${result.passed ? '✓ Passed' : '✗ Failed'}</div>
          <div class="test-info">
            <div>Test ${idx + 1}: Input: ${escapeHtml(result.input)}</div>
            <div>Expected: ${escapeHtml(result.expected)}</div>
            <div>Output: ${escapeHtml(result.actual || '')}</div>
          </div>
        </div>`;
      });
      container.innerHTML = html;
      container.classList.add("show");
    }
    
    async function executeCode(isSubmit = false) {
      if (!editor) return;
      const code = editor.getValue();
      const outputDiv = document.getElementById("outputArea");
      const testResultsDiv = document.getElementById("testResults");
      if (!code.trim()) {
        outputDiv.className = "output-area error";
        outputDiv.innerHTML = "⚠️ Please write your solution!";
        return;
      }
      if (isSubmit && currentQuestion?.testCases) {
        outputDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running tests...';
        testResultsDiv.classList.remove("show");
        const results = await runTestCases(code, currentQuestion.testCases);
        displayTestResults(results);
        const passedCount = results.filter(r => r.passed).length;
        const totalTests = results.length;
        const allPassed = passedCount === totalTests;
        
        // Save submission to localStorage
        const submissions = JSON.parse(localStorage.getItem('code_submissions') || '[]');
        const newSubmission = {
          id: Date.now(),
          questionId: currentQuestion.id,
          topic: currentQuestion.topic,
          questionTitle: currentQuestion.title,
          language: languages.find(l => l.id === currentLanguage)?.name || currentLanguage,
          status: allPassed ? 'Accepted' : (results.some(r => r.actual?.includes('Error') || r.actual?.includes('stderr')) ? 'Runtime Error' : 'Wrong Answer'),
          runtime: Math.floor(Math.random() * 100) + 20 + ' ms',
          memory: Math.floor(Math.random() * 50) + 10 + ' MB',
          passedTests: passedCount,
          totalTests: totalTests,
          error: !allPassed && results.some(r => r.actual?.includes('Error')) ? results.find(r => r.actual?.includes('Error'))?.actual : null,
          timestamp: new Date().toISOString(),
          code: code.substring(0, 500)
        };
        
        submissions.push(newSubmission);
        localStorage.setItem('code_submissions', JSON.stringify(submissions));
        
        if (allPassed) {
          outputDiv.className = "output-area";
          outputDiv.innerHTML = '✅ All tests passed! 🎉';
          markSolved();
        } else {
          outputDiv.className = "output-area error";
          outputDiv.innerHTML = `❌ ${totalTests - passedCount} test case(s) failed.`;
        }
      } else {
        testResultsDiv.classList.remove("show");
        outputDiv.className = "output-area";
        outputDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executing...';
        const firstTestCase = currentQuestion?.testCases?.[0];
        const autoInput = firstTestCase?.input || "";
        try {
          const response = await fetch('/execute', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              language: apiLanguageMap[currentLanguage] || 'python',
              files: [{ content: code }],
              stdin: autoInput
            })
          });
          const data = await response.json();
          if (data.run?.stderr && data.run.stderr.trim()) {
            outputDiv.className = "output-area error";
            outputDiv.innerHTML = `❌ ${data.run.stderr}`;
          } else {
            const actualOutput = (data.run?.stdout || '').trim();
            const expectedOutput = (firstTestCase?.output || '').trim();
            const passed = actualOutput === expectedOutput;
            testResultsDiv.innerHTML = `
              <div class="test-header" style="color: ${passed ? '#10b981' : '#ef4444'};">
                ${passed ? '✅ Test Case 1 Passed' : '❌ Test Case 1 Failed'}
              </div>
              <div class="test-case-item">
                <div style="width:100%;">
                  <div style="margin-bottom:0.4rem;">
                    <span style="color:#94a3b8; font-size:0.8rem;">Input:</span>
                    <code style="color:#e2e8f0; margin-left:0.5rem;">${escapeHtml(autoInput)}</code>
                  </div>
                  <div style="margin-bottom:0.4rem;">
                    <span style="color:#94a3b8; font-size:0.8rem;">Expected:</span>
                    <code style="color:#10b981; margin-left:0.5rem;">${escapeHtml(expectedOutput)}</code>
                  </div>
                  <div>
                    <span style="color:#94a3b8; font-size:0.8rem;">Your Output:</span>
                    <code style="color:${passed ? '#10b981' : '#ef4444'}; margin-left:0.5rem;">
                      ${escapeHtml(actualOutput)}
                    </code>
                  </div>
                </div>
              </div>
              <div class="summary" style="color: ${passed ? '#10b981' : '#ef4444'};">
                ${passed ? '✅ Correct! Click Submit to run your solution against all test cases.' : '❌ Wrong Answer. Logic check karo!'}
              </div>
            `;
            testResultsDiv.classList.add("show");
            outputDiv.className = "output-area";
            outputDiv.innerHTML = `<span style="color:#94a3b8;">► Test Case 1 running...\n</span><span style="color:${passed ? '#10b981' : '#ef4444'};">${escapeHtml(actualOutput) || '(no output)'}</span>`;
          }
        } catch (err) {
          outputDiv.className = "output-area error";
          outputDiv.innerHTML = `🚨 Error: ${err.message}`;
        }
      }
    }
    
    async function getAIHint(level) {
      if (!currentQuestion) return;
      const hintText = document.getElementById("hintText");
      hintText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
      try {
        const response = await fetch('/ai-hint', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: currentQuestion.desc || currentQuestion.title,
            hint1: hintsGiven[1], hint2: hintsGiven[2], level: level
          })
        });
        const data = await response.json();
        hintsGiven[level] = data.hint || "Try breaking it down.";
        hintText.innerHTML = hintsGiven[level];
      } catch (err) {
        hintText.innerHTML = "Unable to fetch hint.";
      }
    }
    
    function loadProblemById(id) {
      if (!allQuestions.length) return;
      currentQuestion = allQuestions.find(q => q.id == id && q.topic == currentTopic);
      if (!currentQuestion) return;
      currentId = id;
      currentTopic = currentQuestion.topic;
      currentTab = 'description';
      document.querySelectorAll(".panel-tab").forEach(tab => {
        if (tab.dataset.tab === "description") tab.classList.add("active");
        else tab.classList.remove("active");
      });
      renderPanelContent();
      if (editor) {
        editor.setValue(currentQuestion.starterCode?.[currentLanguage] || languages.find(l => l.id === currentLanguage)?.template || languages[0].template);
      }
      window.history.pushState({}, '', `/problem?topic=${currentTopic}&id=${currentId}`);
    }
    const TOPIC_ORDER = [
  "basic-iop",
  "conditions",
  "loops",
  "patterns",
  "number-problems",
  "digit-problems",
  "factor-divisibility",
  "math-logic",
  "special-numbers",
  "conversion",
  "range-problems",
  "string-problems"
];
   function goToPrev() {
  const topicQuestions = allQuestions
    .filter(q => q.topic === currentTopic)
    .sort((a, b) => a.id - b.id);

  const idx = topicQuestions.findIndex(
    q => q.id == currentId
  );

  // Same topic previous question
  if (idx > 0) {
    const prev = topicQuestions[idx - 1];

    window.location.href =
      `?topic=${prev.topic}&id=${prev.id}`;
    return;
  }

  // Previous topic last question
  const topicIndex = TOPIC_ORDER.indexOf(currentTopic);

  if (topicIndex > 0) {
    const prevTopic = TOPIC_ORDER[topicIndex - 1];

    const prevQuestions = allQuestions
      .filter(q => q.topic === prevTopic)
      .sort((a, b) => a.id - b.id);

    const lastQuestion =
      prevQuestions[prevQuestions.length - 1];

    if (lastQuestion) {
      window.location.href =
        `?topic=${prevTopic}&id=${lastQuestion.id}`;
    }
  }
}

function goToNext() {
  const topicQuestions = allQuestions
    .filter(q => q.topic === currentTopic)
    .sort((a, b) => a.id - b.id);

  const idx = topicQuestions.findIndex(
    q => q.id == currentId
  );

  // Same topic next question
  if (idx < topicQuestions.length - 1) {
    const next = topicQuestions[idx + 1];
    window.location.href =
      `?topic=${next.topic}&id=${next.id}`;
    return;
  }

  // Next topic first question
  const topicIndex = TOPIC_ORDER.indexOf(currentTopic);

  if (topicIndex < TOPIC_ORDER.length - 1) {
    const nextTopic = TOPIC_ORDER[topicIndex + 1];

    const firstQuestion = allQuestions
      .filter(q => q.topic === nextTopic)
      .sort((a, b) => a.id - b.id)[0];

    if (firstQuestion) {
      window.location.href =
        `?topic=${nextTopic}&id=${firstQuestion.id}`;
    }
  }
}
    
    function initEditor() {
      const textarea = document.getElementById("codeEditor");
      editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true, mode: 'python', theme: 'dracula', lineWrapping: true,
        autoCloseBrackets: true, indentUnit: 4, tabSize: 4
      });
      editor.setValue(languages[0].template);
    }
    
    function init() {
      const checkInterval = setInterval(() => {
        if (typeof window.questions !== 'undefined' && window.questions.length) {
          clearInterval(checkInterval);
          allQuestions = window.questions;
          renderSidebarProblemsList();
          renderLanguageTabs();
          initEditor();
          loadProblemById(currentId);
          document.getElementById("prevProblem").onclick = goToPrev;
          document.getElementById("nextProblem").onclick = goToNext;
          document.getElementById("runBtn").onclick = () => executeCode(false);
          document.getElementById("submitBtn").onclick = () => executeCode(true);
          document.getElementById("hintBtn").onclick = () => document.getElementById("hintPanel").classList.toggle("show");
          const problemListBtn = document.getElementById("problemListBtn");
          const sidebar = document.getElementById("problemSidebar");
          const sidebarClose = document.getElementById("sidebarClose");
          const overlay = document.getElementById("overlay");
          problemListBtn.onclick = () => {
            sidebar.classList.add("show");
            overlay.classList.add("show");
            renderSidebarProblemsList();
          };
          sidebarClose.onclick = () => {
            sidebar.classList.remove("show");
            overlay.classList.remove("show");
          };
          overlay.onclick = () => {
            sidebar.classList.remove("show");
            overlay.classList.remove("show");
          };
          document.getElementById("sidebarSearch").oninput = () => renderSidebarProblemsList();
          document.querySelectorAll(".hint-level").forEach(btn => {
            btn.onclick = () => {
              document.querySelectorAll(".hint-level").forEach(b => b.classList.remove("active"));
              btn.classList.add("active");
              getAIHint(parseInt(btn.dataset.level));
            };
          });
          document.querySelectorAll(".panel-tab").forEach(tab => {
            tab.onclick = () => {
              document.querySelectorAll(".panel-tab").forEach(t => t.classList.remove("active"));
              tab.classList.add("active");
              currentTab = tab.dataset.tab;
              renderPanelContent();
            };
          });
        }
      }, 100);
      setTimeout(() => clearInterval(checkInterval), 5000);
    }
    
    function escapeHtml(str) { if (!str) return ''; return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;'); }
    init();
        // Mark problem as solved in localStorage
       // Mark problem as solved in localStorage with difficulty tracking
      function markSolved() {
      if (!currentQuestion) return;
      const questionId = currentQuestion.id.toString();
      const topic = currentQuestion.topic || "unknown";
      const difficulty = currentQuestion.difficulty || 'easy';
      
      // Create unique key with topic + id
      const uniqueKey = `${topic}_${questionId}`;
      
      console.log(`📝 Marking problem ${uniqueKey} (${difficulty}) as solved...`);
      
      // Get current solved set from localStorage
      let solvedSet = new Set(JSON.parse(localStorage.getItem("ph_solved_set") || "[]"));
      
      if (!solvedSet.has(uniqueKey)) {
        solvedSet.add(uniqueKey);
        localStorage.setItem("ph_solved_set", JSON.stringify([...solvedSet]));
        
        // Difficulty tracking
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
        
        // XP addition
        let xpGain = difficulty === "easy" ? 10 : (difficulty === "medium" ? 25 : 50);
        let currentXP = parseInt(localStorage.getItem("ph_xp") || "0");
        currentXP += xpGain;
        localStorage.setItem("ph_xp", currentXP);
        
        // Streak update
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
        
        console.log(`🎉 Problem ${uniqueKey} marked as solved! +${xpGain} XP`);
      } else {
        console.log(`⚠️ Problem ${uniqueKey} already solved!`);
      }
    }