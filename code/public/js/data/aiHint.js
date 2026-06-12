const hintState = {};

async function handleAIHint(questionId) {
  
  const question = window.QuizData.questions.find(q => q.id === questionId);
  
  if (!question) return;

  if (!hintState[questionId]) hintState[questionId] = 0;

  const nextLevel = hintState[questionId] + 1;
  
  if (nextLevel > 3) return;

  const hintPanel   = document.getElementById(`hint-${questionId}`);
  const hintContent = hintPanel?.querySelector('.hint-content');
  const hintBtn     = document.querySelector(`.hint-btn[data-target="hint-${questionId}"]`);
  if (!hintContent) return;

  // HINT 1: Static
 // 👉 HINT 1 & 2: AI
if (nextLevel === 1 || nextLevel === 2) {
  hintState[questionId] = nextLevel;

  const loadingEl = document.createElement('div');
  loadingEl.className = 'ai-hint-loading';
  loadingEl.innerHTML = '<span class="ai-hint-spinner"></span> AI is thinking...';
  hintContent.appendChild(loadingEl);

  try {
    const aiHint = await fetchGroqHint(question, nextLevel);
    loadingEl.remove();
    hintContent.innerHTML += buildHintHTML(nextLevel, aiHint);

    updateHintButton(hintBtn, nextLevel === 2 ? 3 : null);
  } catch (err) {
    loadingEl.remove();
    hintState[questionId]--;
  }

  return;
}

// 👉 HINT 3: STATIC (FINAL)
if (nextLevel === 3) {
  hintState[questionId] = 3;

  hintContent.innerHTML += buildHintHTML(
    3,
    question.hint || 'Think carefully about the problem.'
  );

  updateHintButton(hintBtn, null);
  return;
}

  // HINT 2 & 3: AI Generated
  hintState[questionId] = nextLevel;

  const loadingEl = document.createElement('div');
  loadingEl.className = 'ai-hint-loading';
  loadingEl.innerHTML = '<span class="ai-hint-spinner"></span> AI is thinking...';
  hintContent.appendChild(loadingEl);

  try {
    const aiHint = await fetchGroqHint(question, nextLevel);
    loadingEl.remove();
    hintContent.innerHTML += buildHintHTML(nextLevel, aiHint);
    updateHintButton(hintBtn, nextLevel === 3 ? null : 3);
} catch (err) {
    loadingEl.remove();
    hintState[questionId]--;
    // Error dikhao lekin duplicate mat banao
    const errorId = `ai-error-${questionId}`;
    if (!document.getElementById(errorId)) {
      const errDiv = document.createElement('div');
      errDiv.id = errorId;
      errDiv.className = 'ai-hint-loading';
      errDiv.innerHTML = '⚠️ API key check karo — Groq key sahi se lagi hai?';
      hintContent.appendChild(errDiv);
    }
    updateHintButton(hintBtn, nextLevel);
  }
}

// ============================================================
// BUILD HINT HTML
// ============================================================
function buildHintHTML(level, text, isError = false) {
  const labels = { 1: '💡 Hint 1', 2: '🤔 Hint 2', 3: '🧠 Hint 3' };
  const colors = { 1: '#4f6f8f', 2: '#7aa2f7', 3: '#bb9af7' };
  const label  = labels[level];
  const color  = isError ? '#ff7b7b' : colors[level];
  return `
    <div class="ai-hint-card ai-hint-level-${level}" style="--hint-color:${color}">
      <div class="ai-hint-label">${label}</div>
      <div class="ai-hint-text">${text}</div>
    </div>`;
}

// ============================================================
// UPDATE HINT BUTTON
// ============================================================
function updateHintButton(btn, nextLevel) {
  if (!btn) return;
  if (nextLevel === null) {
    btn.textContent   = '▲ Hide Hint';
    btn.disabled      = false;
    btn.style.opacity = '1';
    btn.style.cursor  = 'pointer';
    btn.dataset.allDone = 'true';
  } else if (nextLevel === 2) {
    btn.textContent = '💡 Next Hint (2/3)';
    btn.dataset.allDone = 'false';
  } else if (nextLevel === 3) {
    btn.textContent = '💡 Next Hint (3/3)';
    btn.dataset.allDone = 'false';
  }
  
}

// ============================================================
// FETCH from Groq API
// ============================================================
async function fetchGroqHint(question, level) {
  const response = await fetch('/tech-interview/ai-hint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      question: question.question,
      hint1:    question.hint || '',
      level:    level
    })
  });
  if (!response.ok) throw new Error('Server error');
  const data = await response.json();
  return data.hint;
}

// Call this when topic/language changes
function resetAllHintStates() {
  for (const key in hintState) delete hintState[key];
}