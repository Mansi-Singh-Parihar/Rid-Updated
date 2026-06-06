
function normalizeState(stateName) {
  const stateMap = {
    central: "central",
    "central govt": "central",
    "central govt / all india": "central",
    "all india": "central",
    "andhra pradesh": "ap", "arunachal pradesh": "ar", "assam": "as",
    "bihar": "br", "chhattisgarh": "cg", "goa": "ga",
    "gujarat": "gj", "haryana": "hr", "himachal pradesh": "hp",
    "jharkhand": "jh", "karnataka": "ka", "kerala": "kl",
    "madhya pradesh": "mp", "maharashtra": "mh", "manipur": "mn",
    "meghalaya": "ml", "mizoram": "mz", "nagaland": "nl",
    "odisha": "od", "punjab": "pb", "rajasthan": "rj",
    "sikkim": "sk", "tamil nadu": "tn", "telangana": "tg",
    "tripura": "tr", "uttar pradesh": "up", "uttarakhand": "uk",
    "west bengal": "wb", "delhi": "dl", "delhi (nct)": "dl",
    "jammu & kashmir": "jk", "ladakh": "la", "chandigarh": "ch",
    "dadra & nagar haveli": "dd", "puducherry": "py",
    ap:"ap", ar:"ar", as:"as", br:"br", cg:"cg", ga:"ga",
    gj:"gj", hr:"hr", hp:"hp", jh:"jh", ka:"ka", kl:"kl",
    mp:"mp", mh:"mh", mn:"mn", ml:"ml", mz:"mz", nl:"nl",
    od:"od", pb:"pb", rj:"rj", sk:"sk", tn:"tn", tg:"tg",
    tr:"tr", up:"up", uk:"uk", wb:"wb", dl:"dl", jk:"jk",
    la:"la", ch:"ch", dd:"dd", py:"py"
  };
  if (!stateName) return "";
  return stateMap[stateName.toLowerCase().trim()] || stateName;
}


// ═══════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════
let token = "";

async function login() {
  const email    = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email || !password) { showAlert("Please enter email and password", "error"); return; }
  try {
    const res  = await fetch("/nokari/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
   if (data.token) {
  token = data.token;

  // Save token in browser
  localStorage.setItem("adminToken", data.token);

  showAlert("Login Successful! Welcome Admin", "success");

  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("dashboardSection").classList.remove("hidden");

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  loadJobs();
  loadAdmits();
  loadResults();
  loadExams();
  loadExamGuides();
  loadExamGuideSlugs();
} else { showAlert(data.message || "Invalid credentials", "error"); }
  } catch (err) { showAlert("Server error. Is the server running?", "error"); }
}

function logout() {
  token = "";
  localStorage.removeItem("adminToken");

  document.getElementById("dashboardSection").classList.add("hidden");
  document.getElementById("loginSection").classList.remove("hidden");

  showAlert("Logged out successfully", "success");
}


// ═══════════════════════════════════════════════════════
//  PANEL / TAB SWITCHING
// ═══════════════════════════════════════════════════════
function switchPanel(tab) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
  document.querySelectorAll('.nav-item[id^="snav-"]').forEach(n => n.classList.remove('active'));
  const snav = document.getElementById('snav-' + tab);
  if (snav) snav.classList.add('active');
  document.querySelectorAll('.mobile-nav-item').forEach(m => m.classList.remove('active'));
  const mnav = document.getElementById('mnav-' + tab);
  if (mnav) mnav.classList.add('active');
  if (tab === 'tracker') loadTrackerUpdates();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchTrackerTab(tab) {
  document.querySelectorAll('.tracker-stat-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.t-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tsc-' + tab).classList.add('active');
  document.getElementById('tpanel-' + tab).classList.add('active');
}


// ═══════════════════════════════════════════════════════
//  SEARCH / FILTER
// ═══════════════════════════════════════════════════════
function filterList(section) {
  const query   = document.getElementById(section + '-search').value.toLowerCase().trim();
  const entries = document.querySelectorAll(`#${section}-list .entry`);
  let visible   = 0;
  entries.forEach(entry => {
    const text = (entry.querySelector('.entry-title')?.textContent || '').toLowerCase() +
                 (entry.querySelector('.entry-meta')?.textContent  || '').toLowerCase();
    const show = !query || text.includes(query);
    entry.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  // update count badge to reflect filtered results
  const countEl = document.getElementById(section.replace('-list','') + 's-count') ||
                  document.getElementById(section + 's-count');
  // update search result hint
  const hint = document.getElementById(section + '-search-hint');
  if (hint) hint.textContent = query ? `${visible} match${visible !== 1 ? 'es' : ''}` : '';
}


// ═══════════════════════════════════════════════════════
//  BODY BUILDERS  (shared by add + update)
// ═══════════════════════════════════════════════════════
function buildJobBody() {
  const selRaw = document.getElementById('job_selection').value;
  const selectionProcess = selRaw ? selRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
  return {
    title            : document.getElementById('job_title').value.trim(),
    examGuideSlug: document.getElementById('job_examguideslug').value.trim() || '',
    organization     : document.getElementById('job_org').value.trim(),
    category         : document.getElementById('job_cat').value.trim(),
    notificationDate : document.getElementById('job_notifdate').value   || null,
    applyStartDate   : document.getElementById('job_startdate').value   || null,
    lastDate         : document.getElementById('job_lastdate').value    || null,
    examDate         : document.getElementById('job_examdate').value    || '',
    admitCardInfo    : document.getElementById('job_admitcard').value   || '',
    totalPosts       : Number(document.getElementById('job_totalposts').value)  || null,
    eligibility      : document.getElementById('job_eligibility').value || '',
    ageMin           : Number(document.getElementById('job_agemin').value)      || null,
    ageMax           : Number(document.getElementById('job_agemax').value)      || null,
    feeGeneral       : Number(document.getElementById('job_feelgeneral').value) || null,
    feeSCST          : Number(document.getElementById('job_feescst').value)     || null,
    vacancyDetails   : {
      UR : Number(document.getElementById('job_vac_ur').value)  || null,
      OBC: Number(document.getElementById('job_vac_obc').value) || null,
      EWS: Number(document.getElementById('job_vac_ews').value) || null,
      SC : Number(document.getElementById('job_vac_sc').value)  || null,
      ST : Number(document.getElementById('job_vac_st').value)  || null,
    },
    selectionProcess,
    state            : normalizeState(document.getElementById('jobs_state').value),
    applyLink        : document.getElementById('job_applylink').value  || '',
    notificationLink : document.getElementById('job_notiflink').value  || '',
    officialSite     : document.getElementById('job_officialsite').value || '', 
  };
}

function buildAdmitBody() {
  const selRaw = document.getElementById('admit_selection').value;
  const selectionProcess = selRaw ? selRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
  return {
    title          : document.getElementById('admit_title').value.trim(),
    examGuideSlug: document.getElementById('admit_examguideslug').value.trim() || '',
    organization   : document.getElementById('admit_org').value.trim(),
    category       : document.getElementById('admit_cat').value.trim()            || '',
    applyStartDate : document.getElementById('admit_applystartdate').value        || null,
    applyLastDate  : document.getElementById('admit_applylastdate').value         || null,
    releaseDate    : document.getElementById('admit_releasedate').value           || null,
    examDate       : document.getElementById('admit_examdate').value.trim(),
    reportingTime  : document.getElementById('admit_time').value                  || '',
    totalPosts     : Number(document.getElementById('admit_totalposts').value)    || null,
    eligibility    : document.getElementById('admit_eligibility').value.trim()    || '',
    ageLimit       : {
      min: Number(document.getElementById('admit_agemin').value) || null,
      max: Number(document.getElementById('admit_agemax').value) || null,
    },
    fee: {
      general: document.getElementById('admit_fee_general').value.trim() || '',
      scSt   : document.getElementById('admit_fee_scst').value.trim()    || '',
      female : document.getElementById('admit_fee_female').value.trim()  || '',
    },
    state            : normalizeState(document.getElementById('admit_state').value),
    selectionProcess,
    downloadLink     : document.getElementById('admit_link').value.trim(),
    applyLink        : document.getElementById('admit_applylink').value.trim()    || '',
    officialSite     : document.getElementById('admit_officialsite').value.trim() || '',
  };
}

function buildResultBody() {
  const selRaw = document.getElementById('result_selection').value;
  const selectionProcess = selRaw ? selRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
  return {
    title          : document.getElementById('result_title').value.trim(),
    examGuideSlug: document.getElementById('result_examguideslug').value.trim() || '',
    organization   : document.getElementById('result_org').value.trim(),
    category       : document.getElementById('result_cat').value.trim()           || '',
    applyStartDate : document.getElementById('result_applystartdate').value       || null,
    applyLastDate  : document.getElementById('result_applylastdate').value        || null,
    examDate       : document.getElementById('result_examdate').value             || '',
    resultDate     : document.getElementById('result_date').value,
    resultType     : document.getElementById('result_type').value                 || '',
    totalPosts     : Number(document.getElementById('result_totalposts').value)   || null,
    selectionProcess,
    state          : normalizeState(document.getElementById('result_state').value),
    resultLink     : document.getElementById('result_link').value.trim(),
    officialSite   : document.getElementById('result_officialsite').value.trim()  || '',
    meritListLink  : document.getElementById('result_meritlink').value.trim()     || '',
  };
}


// ═══════════════════════════════════════════════════════
//  JSON FILL HELPERS
// ═══════════════════════════════════════════════════════
function fillJobFromJson() {
  try {
    const raw = document.getElementById('job_json').value;
    if (!raw.trim()) { showAlert('Paste JSON first', 'error'); return; }
    const d = JSON.parse(raw);
    document.getElementById('job_title').value        = d.title            || '';
    document.getElementById('job_examguideslug').value = d.examGuideSlug || '';
    document.getElementById('job_org').value          = d.organization     || '';
    document.getElementById('job_cat').value          = d.category         || '';
    document.getElementById('job_notifdate').value    = d.notificationDate || '';
    document.getElementById('job_startdate').value    = d.applyStartDate   || '';
    document.getElementById('job_lastdate').value     = d.lastDate         || '';
    document.getElementById('job_examdate').value     = d.examDate         || '';
    document.getElementById('job_admitcard').value    = d.admitCardInfo    || '';
    document.getElementById('job_totalposts').value   = d.totalPosts       || '';
    document.getElementById('job_eligibility').value  = d.eligibility      || '';
    document.getElementById('job_agemin').value       = d.ageMin           || '';
    document.getElementById('job_agemax').value       = d.ageMax           || '';
    document.getElementById('job_feelgeneral').value  = d.feeGeneral       || '';
    document.getElementById('job_feescst').value      = d.feeSCST          || '';
    document.getElementById('job_applylink').value    = d.applyLink        || '';
    document.getElementById('job_notiflink').value    = d.notificationLink || '';
    document.getElementById('job_officialsite').value = d.officialSite     || ''; 
    document.getElementById('jobs_state').value       = normalizeState(d.state);
    if (d.vacancyDetails) {
      document.getElementById('job_vac_ur').value  = d.vacancyDetails.UR  || '';
      document.getElementById('job_vac_obc').value = d.vacancyDetails.OBC || '';
      document.getElementById('job_vac_ews').value = d.vacancyDetails.EWS || '';
      document.getElementById('job_vac_sc').value  = d.vacancyDetails.SC  || '';
      document.getElementById('job_vac_st').value  = d.vacancyDetails.ST  || '';
    }
    if (Array.isArray(d.selectionProcess))
      document.getElementById('job_selection').value = d.selectionProcess.join(', ');
    showAlert('Data filled successfully. You can edit before publishing.', 'success');
  } catch (err) { showAlert('Invalid JSON format', 'error'); }
}

function fillAdmitFromJson() {
  try {
    const raw = document.getElementById('admit_json').value;
    if (!raw.trim()) { showAlert('Paste JSON first', 'error'); return; }
    const d = JSON.parse(raw);
    document.getElementById('admit_title').value          = d.title          || '';
    document.getElementById('admit_examguideslug').value = d.examGuideSlug || '';
    document.getElementById('admit_org').value            = d.organization   || '';
    document.getElementById('admit_cat').value            = d.category       || '';
    document.getElementById('admit_applystartdate').value = d.applyStartDate || '';
    document.getElementById('admit_applylastdate').value  = d.applyLastDate  || '';
    document.getElementById('admit_releasedate').value    = d.releaseDate    || '';
    document.getElementById('admit_examdate').value       = d.examDate       || '';
    document.getElementById('admit_time').value           = d.reportingTime  || '';
    document.getElementById('admit_totalposts').value     = d.totalPosts     || '';
    document.getElementById('admit_eligibility').value    = d.eligibility    || '';
    document.getElementById('admit_state').value          = normalizeState(d.state);
    document.getElementById('admit_link').value           = d.downloadLink   || '';
    document.getElementById('admit_applylink').value      = d.applyLink      || '';
    document.getElementById('admit_officialsite').value   = d.officialSite   || '';
    if (d.ageLimit) {
      document.getElementById('admit_agemin').value = d.ageLimit.min || '';
      document.getElementById('admit_agemax').value = d.ageLimit.max || '';
    }
    if (d.fee) {
      document.getElementById('admit_fee_general').value = d.fee.general || '';
      document.getElementById('admit_fee_scst').value    = d.fee.scSt    || '';
      document.getElementById('admit_fee_female').value  = d.fee.female  || '';
    }
    if (Array.isArray(d.selectionProcess))
      document.getElementById('admit_selection').value = d.selectionProcess.join(', ');
    showAlert('Data filled successfully. You can edit before publishing.', 'success');
  } catch (err) { showAlert('Invalid JSON format', 'error'); }
}

function fillResultFromJson() {
  try {
    const raw = document.getElementById('result_json').value;
    if (!raw.trim()) { showAlert('Paste JSON first', 'error'); return; }
    const d = JSON.parse(raw);
    document.getElementById('result_title').value          = d.title          || '';
    document.getElementById('result_examguideslug').value = d.examGuideSlug || '';
    document.getElementById('result_org').value            = d.organization   || '';
    document.getElementById('result_cat').value            = d.category       || '';
    document.getElementById('result_applystartdate').value = d.applyStartDate || '';
    document.getElementById('result_applylastdate').value  = d.applyLastDate  || '';
    document.getElementById('result_examdate').value       = d.examDate       || '';
    document.getElementById('result_date').value           = d.resultDate     || '';
    document.getElementById('result_type').value           = d.resultType     || '';
    document.getElementById('result_totalposts').value     = d.totalPosts     || '';
    document.getElementById('result_link').value           = d.resultLink     || '';
    document.getElementById('result_officialsite').value   = d.officialSite   || '';
    document.getElementById('result_meritlink').value      = d.meritListLink  || '';
    document.getElementById('result_state').value          = normalizeState(d.state);
    if (Array.isArray(d.selectionProcess))
      document.getElementById('result_selection').value = d.selectionProcess.join(', ');
    showAlert('Data filled successfully. You can edit before publishing.', 'success');
  } catch (err) { showAlert('Invalid JSON format — ' + err.message, 'error'); }
}


// ═══════════════════════════════════════════════════════
//  ADD (PUBLISH)
// ═══════════════════════════════════════════════════════
async function addJob() {
  if (!token) { showAlert('Please login first!', 'error'); return; }
  const body = buildJobBody();
  if (!body.title || !body.organization || !body.category) {
    showAlert('Title, Organization, and Category are required', 'error'); return;
  }
  try {
    const res  = await fetch('/nokari/admin/add-job', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    showAlert(data.message || 'Job published!', 'success');
    if (res.ok) { clearJobForm(); loadJobs(); }
  } catch (err) { showAlert('Error publishing job. Try again.', 'error'); }
}

async function addAdmit() {
  if (!token) { showAlert('Please login first!', 'error'); return; }
  const body = buildAdmitBody();
  if (!body.title || !body.organization || !body.examDate || !body.downloadLink) {
    showAlert('Title, Organization, Exam Date & Download Link are required', 'error'); return;
  }
  try {
    const res  = await fetch('/nokari/admin/add-admit', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) { showAlert(data.message || 'Admit card published!', 'success'); clearAdmitForm(); loadAdmits(); }
    else showAlert(data.error || data.message || 'Server error', 'error');
  } catch (err) { showAlert('Network error: ' + err.message, 'error'); }
}

async function addResult() {
  if (!token) { showAlert('Please login first!', 'error'); return; }
  const body = buildResultBody();
  if (!body.title || !body.organization || !body.resultDate || !body.resultLink) {
    showAlert('Title, Organization, Result Date & Link are required', 'error'); return;
  }
  try {
    const res  = await fetch('/nokari/admin/add-result', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) { showAlert(data.message || 'Result published!', 'success'); clearResultForm(); loadResults(); }
    else showAlert(data.error || data.message || 'Server error', 'error');
  } catch (err) { showAlert('Network error: ' + err.message, 'error'); }
}



async function editEntry(type, id) {
  if (!token) { showAlert('Please login first!', 'error'); return; }
  try {
    const res  = await fetch(`/admin/${type}/${id}`, { headers: { 'Authorization': 'Bearer ' + token } });
    if (!res.ok) throw new Error('Failed to fetch entry');
    const data = await res.json();

    const panelMap = { job: 'jobs', admit: 'admit', result: 'results', exam: 'eligibility' };
    const panelKey = panelMap[type];

    // ✅ Panel exist karta hai check karo
    const panelEl = document.getElementById('panel-' + panelKey);
    if (!panelEl) {
      showAlert('Panel not found: panel-' + panelKey, 'error');
      return;
    }

    switchPanel(panelKey);

    if (type === 'job') {
      document.getElementById('job_json').value = JSON.stringify(data);
      fillJobFromJson();
    } else if (type === 'admit') {
      document.getElementById('admit_json').value = JSON.stringify(data);
      fillAdmitFromJson();
    } else if (type === 'result') {
      document.getElementById('result_json').value = JSON.stringify(data);
      fillResultFromJson();
    } else if (type === 'exam') {
      document.getElementById('exam_json').value = JSON.stringify(data);
      fillExamFromJson();
    }

    setFormEditMode(type, id);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) { showAlert('Failed to load entry: ' + err.message, 'error'); }
}

// ═══════════════════════════════════════════════════════
//  EDIT MODE  —  swap button states
// ═══════════════════════════════════════════════════════
function setFormEditMode(type, id) {

  const panelKeyMap = { job: 'jobs', admit: 'admit', result: 'results',exam: 'eligibility' };
  
  const panel       = document.getElementById('panel-' + panelKeyMap[type]);
  const pubBtn      = panel.querySelector('.btn-pub');


  // mark panel so we know it's in edit mode
  panel.dataset.editId   = id;
  panel.dataset.editType = type;

  pubBtn.innerHTML = '<i class="fas fa-save"></i> Update Entry';
  pubBtn.onclick   = () => updateEntry(type, id);
  pubBtn.classList.add('editing');

  // inject cancel button once
  if (!panel.querySelector('.btn-cancel-edit')) {
    const cancelBtn       = document.createElement('button');
    cancelBtn.className   = 'btn btn-clr btn-cancel-edit';
    cancelBtn.innerHTML   = '<i class="fas fa-times"></i> Cancel Edit';
    cancelBtn.onclick     = () => cancelEditMode(type);
    pubBtn.insertAdjacentElement('afterend', cancelBtn);
  }

  // show edit banner
  if (!panel.querySelector('.edit-banner')) {
    const banner     = document.createElement('div');
    banner.className = 'edit-banner';
    banner.innerHTML = `<i class="fas fa-pencil-alt"></i> Editing existing entry — ID: <code>${id}</code>`;
    panel.querySelector('.form-card').prepend(banner);
  }
}

function cancelEditMode(type) {
  // const panelKeyMap   = { job: 'jobs', admit: 'admit', result: 'results' };
  // const addFnMap      = { job: addJob, admit: addAdmit, result: addResult };
  // const labelMap      = { job: 'Publish Job', admit: 'Publish Admit Card', result: 'Publish Result' };

  const panelKeyMap = { job: 'jobs', admit: 'admit', result: 'results', exam: 'eligibility' };
const addFnMap    = { job: addJob, admit: addAdmit, result: addResult, exam: addExam };
const labelMap    = { job: 'Publish Job', admit: 'Publish Admit Card', result: 'Publish Result', exam: 'Publish Exam' };

  const panel         = document.getElementById('panel-' + panelKeyMap[type]);
  const pubBtn        = panel.querySelector('.btn-pub');

  pubBtn.innerHTML    = `<i class="fas fa-paper-plane"></i> ${labelMap[type]}`;
  pubBtn.onclick      = addFnMap[type];
  pubBtn.classList.remove('editing');

  panel.querySelector('.btn-cancel-edit')?.remove();
  panel.querySelector('.edit-banner')?.remove();
  delete panel.dataset.editId;
  delete panel.dataset.editType;

  if (type === 'job')    clearJobForm();
  else if (type === 'admit')   clearAdmitForm();
  else if (type === 'result')  clearResultForm();
}


// ═══════════════════════════════════════════════════════
//  UPDATE  (PUT)
// ═══════════════════════════════════════════════════════
async function updateEntry(type, id) {
  if (!token) { showAlert('Please login first!', 'error'); return; }

  const bodyFnMap   = { job: buildJobBody, admit: buildAdmitBody, result: buildResultBody, exam: buildExamBody  };
  const body        = bodyFnMap[type]();
  const endpointMap = { job: 'job', admit: 'admit', result: 'result', exam: 'exam' };

  try {
    const res  = await fetch(`/admin/${endpointMap[type]}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) {
      showAlert('Entry updated successfully!', 'success');
      cancelEditMode(type);
      if (type === 'job')    loadJobs();
      else if (type === 'admit')   loadAdmits();
      else if (type === 'result')  loadResults();
    } else { showAlert(data.error || data.message || 'Update failed', 'error'); }
  } catch (err) { showAlert('Network error: ' + err.message, 'error'); }
}


// ═══════════════════════════════════════════════════════
//  CLEAR FORMS
// ═══════════════════════════════════════════════════════
function clearForm(...ids) { ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; }); }

function clearJobForm() {
  clearForm(
    'job_title','job_examguideslug','job_org','job_cat','jobs_state',
    'job_notifdate','job_startdate','job_lastdate','job_examdate','job_admitcard',
    'job_totalposts','job_eligibility','job_agemin','job_agemax',
    'job_feelgeneral','job_feescst',
    'job_vac_ur','job_vac_obc','job_vac_ews','job_vac_sc','job_vac_st',
    'job_selection','job_applylink','job_officialsite','job_notiflink','job_json'
  );
}

function clearAdmitForm() {
  clearForm(
    'admit_title','admit_examguideslug','admit_org','admit_cat',
    'admit_applystartdate','admit_applylastdate','admit_releasedate',
    'admit_examdate','admit_time',
    'admit_totalposts','admit_eligibility',
    'admit_agemin','admit_agemax',
    'admit_fee_general','admit_fee_scst','admit_fee_female',
    'admit_selection','admit_state',
    'admit_link','admit_applylink','admit_officialsite','admit_json'
  );
}

function clearResultForm() {
  clearForm(
    'result_title','result_examguideslug','result_org','result_cat','result_state',
    'result_applystartdate','result_applylastdate',
    'result_examdate','result_date','result_type',
    'result_totalposts','result_selection',
    'result_link','result_officialsite','result_meritlink','result_json'
  );
}


// ═══════════════════════════════════════════════════════
//  LOAD LISTS
// ═══════════════════════════════════════════════════════
async function loadJobs() {
  const c = document.getElementById("jobs-list");
  c.innerHTML = '<div class="list-loading"><span class="spinner"></span> Loading entries…</div>';
  try {
    const res  = await fetch('/nokari/admin/jobs', { headers: { 'Authorization': 'Bearer ' + token } });
    const jobs = await res.json();
    renderList(c, jobs, 'jobs-count', job => ({
      title: job.title,
      meta : `${job.organization || ''}${job.category ? ' · ' + job.category : ''}${job.lastDate ? ' · Last Date: ' + formatDate(job.lastDate) : ''}`,
      id   : job._id, type: 'job'
    }), loadJobs);
  } catch (err) { c.innerHTML = '<div class="list-empty"><i class="fas fa-exclamation-circle"></i> Failed to load entries.</div>'; }
}

async function loadAdmits() {
  const c = document.getElementById("admits-list");
  c.innerHTML = '<div class="list-loading"><span class="spinner"></span> Loading entries…</div>';
  try {
    const res    = await fetch('/nokari/admin/admits', { headers: { 'Authorization': 'Bearer ' + token } });
    const admits = await res.json();
    renderList(c, admits, 'admits-count', admit => ({
      title: admit.title,
      meta : `${admit.organization || ''}${admit.category ? ' · ' + admit.category : ''}${admit.examDate ? ' · Exam: ' + formatDate(admit.examDate) : ''}`,
      id   : admit._id, type: 'admit'
    }), loadAdmits);
  } catch (err) { c.innerHTML = '<div class="list-empty"><i class="fas fa-exclamation-circle"></i> Failed to load entries.</div>'; }
}

async function loadResults() {
  const c = document.getElementById("results-list");
  c.innerHTML = '<div class="list-loading"><span class="spinner"></span> Loading entries…</div>';
  try {
    const res     = await fetch('/nokari/admin/results', { headers: { 'Authorization': 'Bearer ' + token } });
    const results = await res.json();
    renderList(c, results, 'results-count', result => ({
      title: result.title,
      meta : `${result.organization || ''}${result.resultType ? ' · ' + result.resultType : ''}${result.resultDate ? ' · ' + formatDate(result.resultDate) : ''}`,
      id   : result._id, type: 'result'
    }), loadResults);
  } catch (err) { c.innerHTML = '<div class="list-empty"><i class="fas fa-exclamation-circle"></i> Failed to load entries.</div>'; }
}


// ═══════════════════════════════════════════════════════
//  RENDER LIST  (with Edit + Delete + Search)
// ═══════════════════════════════════════════════════════
function renderList(container, items, countId, mapper, reloadFn) {
  const cEl = document.getElementById(countId);
  if (cEl) cEl.textContent = `${items.length} ${items.length === 1 ? 'entry' : 'entries'}`;

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="list-empty"><i class="fas fa-inbox"></i><span>No entries found. Add one above.</span></div>';
    return;
  }

  container.innerHTML = '';
  const list = document.createElement('div');
  list.className = 'entries';

  items.forEach(item => {
    const m   = mapper(item);
    const div = document.createElement('div');
    div.className = 'entry';
    div.id = `entry-${m.id}`;
    div.innerHTML = `
      <div class="entry-info">
        <div class="entry-title">${escapeHtml(m.title || 'Untitled')}</div>
        <div class="entry-meta">${escapeHtml(m.meta || '')}</div>
      </div>
      <div class="entry-actions">
        <button class="btn-edit" onclick="editEntry('${m.type}', '${m.id}')">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button class="btn-del" onclick="deleteEntry('${m.type}', '${m.id}', ${reloadFn.name})">
          <i class="fas fa-trash-alt"></i> Delete
        </button>
      </div>
    `;
    list.appendChild(div);
  });

  container.appendChild(list);
}


// ═══════════════════════════════════════════════════════
//  DELETE
// ═══════════════════════════════════════════════════════
async function deleteEntry(type, id, reloadFn) {
  const confirmed = await showConfirmModal('Are you sure you want to delete this entry? This cannot be undone.');
  if (!confirmed) return;
  const el = document.getElementById(`entry-${id}`);
  if (el) { el.style.opacity = '0.4'; el.style.pointerEvents = 'none'; }
  try {
    const res = await fetch(`/admin/${type}/${id}`, { method: 'DELETE', headers: { 'Authorization': 'Bearer ' + token } });
    if (res.ok) { showAlert('Entry deleted successfully', 'success'); reloadFn(); }
    else {
      const data = await res.json().catch(() => ({}));
      showAlert(data.message || 'Failed to delete entry', 'error');
      if (el) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; }
    }
  } catch (err) { showAlert('Network error. Try again.', 'error'); if (el) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; } }
}


function showConfirmModal(message) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.5);
      display:flex;align-items:center;justify-content:center;
      z-index:9999;backdrop-filter:blur(2px);
    `;
    overlay.innerHTML = `
      <div style="
        background:#fff;border-radius:16px;padding:2rem;
        max-width:380px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.2);
        font-family:'DM Sans',sans-serif;text-align:center;
      ">
        <div style="font-size:2rem;margin-bottom:0.75rem">🗑️</div>
        <div style="font-size:1rem;font-weight:600;color:#1a1a1a;margin-bottom:0.5rem">Delete Entry</div>
        <div style="font-size:0.875rem;color:#64748b;margin-bottom:1.5rem">${message}</div>
        <div style="display:flex;gap:10px;justify-content:center">
          <button id="confirmNo" style="
            padding:0.5rem 1.5rem;border-radius:10px;border:1.5px solid #d1d5db;
            background:#f8fafc;color:#475569;font-size:0.875rem;font-weight:600;
            cursor:pointer;transition:all 0.2s;
          ">Cancel</button>
          <button id="confirmYes" style="
            padding:0.5rem 1.5rem;border-radius:10px;border:none;
            background:#dc2626;color:#fff;font-size:0.875rem;font-weight:600;
            cursor:pointer;transition:all 0.2s;
          ">Delete</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('#confirmYes').onclick = () => { document.body.removeChild(overlay); resolve(true); };
    overlay.querySelector('#confirmNo').onclick  = () => { document.body.removeChild(overlay); resolve(false); };
    overlay.onclick = e => { if (e.target === overlay) { document.body.removeChild(overlay); resolve(false); } };
  });
}

// ═══════════════════════════════════════════════════════
//  TRACKER
// ═══════════════════════════════════════════════════════
async function loadTrackerUpdates() {
    const token = localStorage.getItem("adminToken");

  console.log("TOKEN =", token);

  if (!token) {
    showAlert("Admin token not found. Please login again.", "error");
    return;
  }

 
  const btn = document.getElementById('refreshBtn');
  if (btn) btn.classList.add('loading');
  ['tracker-jobs-list', 'tracker-results-list', 'tracker-admit-list'].forEach(id => {
    document.getElementById(id).innerHTML = '<div class="tracker-loading"><span class="spinner"></span> Fetching live data…</div>';
  });
  try {
    const res = await fetch('/nokari/admin/tracker-updates', { headers: { 'Authorization': 'Bearer ' + token } });
    if (!res.ok) { const e = await res.json().catch(() => ({})); showAlert('Tracker error ' + res.status + ': ' + (e.message || e.error || 'Unknown'), 'error'); return; }
    const data = await res.json();
    const now  = new Date();
    const timeStr = 'Updated: ' + now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) + ', ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
    document.getElementById('tc-jobs').textContent     = data.jobs.length;
    document.getElementById('tc-results').textContent  = data.results.length;
    document.getElementById('tc-admit').textContent    = data.admitCards.length;
    document.getElementById('tu-jobs').textContent     = timeStr;
    document.getElementById('tu-results').textContent  = timeStr;
    document.getElementById('tu-admit').textContent    = timeStr;
    document.getElementById('tracker-jobs-count').textContent    = data.jobs.length + ' items';
    document.getElementById('tracker-results-count').textContent = data.results.length + ' items';
    document.getElementById('tracker-admit-count').textContent   = data.admitCards.length + ' items';
    document.getElementById('tracker-jobs-scrape').textContent    = 'Scraped ' + timeStr.replace('Updated: ', '');
    document.getElementById('tracker-results-scrape').textContent = 'Scraped ' + timeStr.replace('Updated: ', '');
    document.getElementById('tracker-admit-scrape').textContent   = 'Scraped ' + timeStr.replace('Updated: ', '');
    renderTrackerItems('tracker-jobs-list',    data.jobs,       'date', 'job');
    renderTrackerItems('tracker-results-list', data.results,    'date', 'result');
    renderTrackerItems('tracker-admit-list',   data.admitCards, 'date', 'admit');
  } catch (err) {
    showAlert('Failed to load tracker: ' + err.message, 'error');
    ['tracker-jobs-list', 'tracker-results-list', 'tracker-admit-list'].forEach(id => {
      document.getElementById(id).innerHTML = '<div class="tracker-empty"><i class="fas fa-exclamation-triangle"></i><span>Failed to fetch. Try refreshing.</span></div>';
    });
  } finally { if (btn) btn.classList.remove('loading'); }
}

function renderTrackerItems(containerId, items, dateField, tabType) {
  const container = document.getElementById(containerId);
  if (!items || items.length === 0) {
    container.innerHTML = `<div class="tracker-empty"><i class="fas fa-inbox"></i><span>No items found.</span></div>`; return;
  }
  const wrap = document.createElement('div');
  items.slice(0, 50).forEach((item, idx) => {
    const div      = document.createElement('div');
    div.className  = 't-item';
    const dateVal  = item[dateField] || item.date;
    const isNew    = idx < 5;
    const safeLink  = escapeHtml(item.link  || '');
    const safeTitle = escapeHtml(item.title || '');
    let metaChips = '';
    if (tabType === 'job') {
      if (item.totalPosts) metaChips += `<span class="t-chip blue">📊 ${escapeHtml(String(item.totalPosts))} Posts</span>`;
      if (item.lastDate)   metaChips += `<span class="t-chip red">⏰ Last: ${escapeHtml(item.lastDate)}</span>`;
      if (item.examDate && item.examDate !== 'Notify Later') metaChips += `<span class="t-chip grey">📝 Exam: ${escapeHtml(item.examDate)}</span>`;
      if (item.category)   metaChips += `<span class="t-chip green">${escapeHtml(item.category)}</span>`;
    } else if (tabType === 'result') {
      if (item.resultType) metaChips += `<span class="t-chip blue">🏆 ${escapeHtml(item.resultType)}</span>`;
      if (item.resultDate) metaChips += `<span class="t-chip green">📣 ${escapeHtml(item.resultDate)}</span>`;
      if (item.examDate)   metaChips += `<span class="t-chip grey">📝 Exam: ${escapeHtml(item.examDate)}</span>`;
      if (item.category)   metaChips += `<span class="t-chip grey">${escapeHtml(item.category)}</span>`;
    } else if (tabType === 'admit') {
      if (item.examDate)    metaChips += `<span class="t-chip blue">📝 Exam: ${escapeHtml(item.examDate)}</span>`;
      if (item.releaseDate) metaChips += `<span class="t-chip green">🎫 Released: ${escapeHtml(item.releaseDate)}</span>`;
      if (item.category)    metaChips += `<span class="t-chip grey">${escapeHtml(item.category)}</span>`;
    }
    div.innerHTML = `
      <div class="t-item-info">
        <div class="t-item-title">${safeTitle}${isNew ? '<span class="t-new-badge">NEW</span>' : ''}</div>
        ${metaChips ? `<div class="t-item-chips">${metaChips}</div>` : ''}
        ${item.link ? `<div class="t-item-link-wrap"><div class="t-item-link">${safeLink}</div><button class="copy-link-btn" onclick="copyTrackerLink('${safeLink}', this)" title="Copy Link"><i class="fas fa-copy"></i></button></div>` : ''}
        ${dateVal && dateVal !== 'See link' && dateVal !== 'Check link' ? `<div class="t-item-date"><i class="fas fa-calendar-alt" style="font-size:0.6rem;opacity:0.55"></i> ${escapeHtml(dateVal)}</div>` : ''}
      </div>
      <div class="t-item-actions">
        ${item.link ? `<button class="ds-btn" data-url="${safeLink}" data-type="${tabType}" title="Deep Scrape"><i class="fas fa-search-plus"></i> Scrape</button><a href="${safeLink}" target="_blank" class="t-view-btn"><i class="fas fa-external-link-alt"></i> View</a>` : ''}
      </div>
    `;
    wrap.appendChild(div);
  });
  container.innerHTML = '';
  container.appendChild(wrap);
}


// ═══════════════════════════════════════════════════════
//  DEEP SCRAPE MODAL
// ═══════════════════════════════════════════════════════
async function openDeepScrape(url, type, btn) {
  document.getElementById('dsOverlay').classList.remove('hidden');
  document.getElementById('dsModalBody').innerHTML = `
    <div class="ds-url-row"><i class="fas fa-link"></i><div class="ds-url-text">${escapeHtml(url)}</div></div>
    <div class="ds-loading"><span class="spinner"></span><p>Scraping ${type} page…</p></div>
  `;
  if (btn) { btn.classList.add('loading'); btn.innerHTML = '<i class="fas fa-spinner"></i> Scraping…'; }
  try {
    const res  = await fetch('/nokari/admin/deep-scrape', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ url, type }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Scrape failed');
    renderDsResult(json.data, url);
  } catch (err) {
    document.getElementById('dsModalBody').innerHTML = `
      <div class="ds-url-row"><i class="fas fa-link"></i><div class="ds-url-text">${escapeHtml(url)}</div></div>
      <div class="ds-error"><i class="fas fa-exclamation-triangle"></i><span>${escapeHtml(err.message)}</span></div>
    `;
  } finally { if (btn) { btn.classList.remove('loading'); btn.innerHTML = '<i class="fas fa-search-plus"></i> Scrape'; } }
}

function renderDsResult(d, url) {
  const jsonExport = { ...d };
  delete jsonExport.sourceUrl; delete jsonExport.scrapedAt; delete jsonExport.pageType;
  const jsonStr   = JSON.stringify(jsonExport, null, 2);
  const typeIcon  = d.pageType === 'result' ? 'trophy' : d.pageType === 'admit' ? 'id-card' : 'briefcase';
  const typeLabel = d.pageType === 'admit'  ? 'Admit Card' : d.pageType.charAt(0).toUpperCase() + d.pageType.slice(1);
  document.getElementById('dsModalBody').innerHTML = `
    <div class="ds-url-row"><i class="fas fa-link"></i><div class="ds-url-text">${escapeHtml(url)}</div></div>
    <div style="display:inline-flex;align-items:center;gap:6px;background:var(--gold-pale);border:1px solid rgba(230,180,34,0.3);padding:4px 12px;border-radius:20px;font-size:0.7rem;font-weight:700;color:#7a5c0a;margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.08em;">
      <i class="fas fa-${typeIcon}"></i> ${typeLabel}
    </div>
    <div class="ds-json-section">
      <div class="ds-json-head">
        <div class="ds-json-label"><i class="fas fa-code" style="color:var(--gold)"></i> Extracted JSON — copy and paste into any form above</div>
        <button class="ds-copy-json-btn" id="copyJsonBtn" onclick="copyDsJson(this)"><i class="fas fa-copy"></i> Copy JSON</button>
      </div>
      <pre class="ds-json-pre" id="dsJsonPre">${escapeHtml(jsonStr)}</pre>
    </div>
  `;
  window._dsJsonRaw = jsonStr;
}

async function copyDsJson(btn) {
  try {
    await navigator.clipboard.writeText(window._dsJsonRaw || '{}');
    btn.classList.add('copied'); btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = '<i class="fas fa-copy"></i> Copy JSON'; }, 2000);
  } catch { showAlert('Failed to copy', 'error'); }
}

function closeDsModal(event) {
  if (event && event.target !== document.getElementById('dsOverlay')) return;
  document.getElementById('dsOverlay').classList.add('hidden');
  window._dsJsonRaw = null;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDsModal(null); });
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.ds-btn');
  if (!btn) return;
  const url  = btn.dataset.url;
  const type = btn.dataset.type;
  if (url) openDeepScrape(url, type, btn);
});


// ═══════════════════════════════════════════════════════
//  COPY TRACKER LINK
// ═══════════════════════════════════════════════════════
async function copyTrackerLink(link, btn) {
  try {
    await navigator.clipboard.writeText(link);
    btn.classList.add('copied'); btn.innerHTML = '<i class="fas fa-check"></i>';
    showAlert('Link copied to clipboard', 'success');
    setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = '<i class="fas fa-copy"></i>'; }, 1500);
  } catch (err) { showAlert('Failed to copy link', 'error'); }
}


// ═══════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════
function showAlert(message, type) {
  const box = document.getElementById("alertMessage");
  box.innerHTML   = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
  box.className   = `alert alert-${type}`;
  box.style.display = "flex";
  setTimeout(() => { box.style.display = "none"; }, 3500);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("password")?.addEventListener("keypress", e => { if (e.key === "Enter") login(); });
});

setInterval(() => {
  const tp = document.getElementById('panel-tracker');
  if (tp && tp.classList.contains('active') && token) loadTrackerUpdates();
}, 5 * 60 * 1000);

// new 
// ═══════════════════════════════════════════════════════
//  SCRAPE FEED  —  single-card carousel per panel
//  Appended to admin.js
// ═══════════════════════════════════════════════════════

// ── State ────────────────────────────────────────────
const feedState = {
  jobs   : { items: [], idx: 0, loaded: false },
  admit  : { items: [], idx: 0, loaded: false },
  results: { items: [], idx: 0, loaded: false },
};

// Map panel key → tracker data key → item type for check-exists
const FEED_META = {
  jobs   : { dataKey: 'jobs',       type: 'job'    },
  admit  : { dataKey: 'admitCards', type: 'admit'  },
  results: { dataKey: 'results',    type: 'result' },
};


// ── Inject feed HTML into each panel once ────────────
function injectFeedSection(panelKey) {
  const panel = document.getElementById('panel-' + panelKey);
  if (!panel || panel.querySelector('.sf-wrap')) return; // already injected

  const formCard = panel.querySelector('.form-card');
  if (!formCard) return;

  const wrap = document.createElement('div');
  wrap.className = 'sf-wrap';
  wrap.innerHTML = `
    <div class="sf-header">
      <div class="sf-title"><i class="fas fa-satellite-dish"></i> Live Scrape Feed</div>
      <button class="sf-refresh-btn" onclick="refreshFeed('${panelKey}')">
        <i class="fas fa-sync-alt"></i> Refresh
      </button>
    </div>
    <div class="sf-card-area" id="sf-card-${panelKey}">
      <div class="sf-skeleton">
        <span class="spinner"></span> Loading feed…
      </div>
    </div>
    <div class="sf-nav" id="sf-nav-${panelKey}">
      <button class="sf-nav-btn" id="sf-prev-${panelKey}" onclick="feedNav('${panelKey}', -1)" disabled>
        <i class="fas fa-chevron-left"></i> Prev
      </button>
      <span class="sf-counter" id="sf-counter-${panelKey}">— / —</span>
      <button class="sf-nav-btn" id="sf-next-${panelKey}" onclick="feedNav('${panelKey}', +1)" disabled>
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `;

  // Insert before .form-card
  panel.querySelector('.page-head').insertAdjacentElement('afterend', wrap);
}


// ── Load feed data (reuses tracker endpoint) ─────────
async function loadFeed(panelKey, forceRefresh = false) {
  const state = feedState[panelKey];
  if (state.loaded && !forceRefresh) {
    renderFeedCard(panelKey);
    return;
  }

  const cardArea = document.getElementById('sf-card-' + panelKey);
  if (cardArea) cardArea.innerHTML = '<div class="sf-skeleton"><span class="spinner"></span> Fetching live data…</div>';

  setSfNavDisabled(panelKey, true);

  try {
    const res  = await fetch('/nokari/admin/tracker-updates', { headers: { 'Authorization': 'Bearer ' + token } });
    if (!res.ok) throw new Error('Tracker fetch failed (' + res.status + ')');
    const data = await res.json();

    const meta   = FEED_META[panelKey];
    const raw    = data[meta.dataKey] || [];

    state.items  = raw;
    state.idx    = 0;
    state.loaded = true;

    if (raw.length === 0) {
      if (cardArea) cardArea.innerHTML = '<div class="sf-empty"><i class="fas fa-inbox"></i> No items in feed.</div>';
      updateSfCounter(panelKey, 0, 0);
      return;
    }

    renderFeedCard(panelKey);
  } catch (err) {
    if (cardArea) cardArea.innerHTML = `<div class="sf-error"><i class="fas fa-exclamation-triangle"></i> ${escapeHtml(err.message)}</div>`;
    setSfNavDisabled(panelKey, true);
  }
}


// ── Render the current card ───────────────────────────
async function renderFeedCard(panelKey) {
  const state    = feedState[panelKey];
  const cardArea = document.getElementById('sf-card-' + panelKey);
  if (!cardArea) return;

  const { items, idx } = state;
  if (!items || items.length === 0) return;

  const item  = items[idx];
  const meta  = FEED_META[panelKey];
  const total = items.length;

  updateSfCounter(panelKey, idx + 1, total);
  setSfNavDisabled(panelKey, false);
  document.getElementById('sf-prev-' + panelKey).disabled = idx === 0;
  document.getElementById('sf-next-' + panelKey).disabled = idx === total - 1;

  // Show loading state while checking DB
  cardArea.innerHTML = `<div class="sf-card sf-card-loading"><span class="spinner" style="width:16px;height:16px;border-width:2px"></span></div>`;

  // Check if already in DB
  let alreadyAdded = false;
  let matchedTitle = null;
  try {
    const chk = await fetch(
      `/admin/check-exists?title=${encodeURIComponent((item.title || '').slice(0, 80))}&type=${meta.type}`,
      { headers: { 'Authorization': 'Bearer ' + token } }
    );
    const chkData = await chk.json();
    alreadyAdded  = chkData.exists;
    matchedTitle  = chkData.matchedTitle;
  } catch (_) { /* non-fatal */ }

  // Build chip row
  const safeLink  = escapeHtml(item.link  || '');
  const safeTitle = escapeHtml(item.title || 'Untitled');
  let chips = '';
  if (panelKey === 'jobs') {
    if (item.totalPosts) chips += `<span class="t-chip blue">📊 ${escapeHtml(String(item.totalPosts))} Posts</span>`;
    if (item.lastDate)   chips += `<span class="t-chip red">⏰ Last: ${escapeHtml(item.lastDate)}</span>`;
    if (item.examDate && item.examDate !== 'Notify Later') chips += `<span class="t-chip grey">📝 Exam: ${escapeHtml(item.examDate)}</span>`;
    if (item.category)   chips += `<span class="t-chip green">${escapeHtml(item.category)}</span>`;
  } else if (panelKey === 'results') {
    if (item.resultType) chips += `<span class="t-chip blue">🏆 ${escapeHtml(item.resultType)}</span>`;
    if (item.resultDate) chips += `<span class="t-chip green">📣 ${escapeHtml(item.resultDate)}</span>`;
    if (item.examDate)   chips += `<span class="t-chip grey">📝 Exam: ${escapeHtml(item.examDate)}</span>`;
    if (item.category)   chips += `<span class="t-chip grey">${escapeHtml(item.category)}</span>`;
  } else if (panelKey === 'admit') {
    if (item.examDate)    chips += `<span class="t-chip blue">📝 Exam: ${escapeHtml(item.examDate)}</span>`;
    if (item.releaseDate) chips += `<span class="t-chip green">🎫 Released: ${escapeHtml(item.releaseDate)}</span>`;
    if (item.category)    chips += `<span class="t-chip grey">${escapeHtml(item.category)}</span>`;
  }

  cardArea.innerHTML = `
    <div class="sf-card ${alreadyAdded ? 'sf-card-exists' : ''}">
      <div class="sf-card-top">
        <div class="sf-card-title-row">
          <div class="sf-card-title">${safeTitle}</div>
          ${alreadyAdded
            ? `<span class="sf-badge-exists" title="Already in DB: ${escapeHtml(matchedTitle || '')}">
                <i class="fas fa-check-circle"></i> Already Added
              </span>`
            : '<span class="sf-badge-new"><i class="fas fa-star"></i> New</span>'
          }
        </div>
        ${chips ? `<div class="t-item-chips" style="margin-top:8px">${chips}</div>` : ''}
        ${safeLink ? `
          <div class="t-item-link-wrap" style="margin-top:8px">
            <div class="t-item-link" style="font-size:0.7rem">${safeLink}</div>
            <button class="copy-link-btn" onclick="copyTrackerLink('${safeLink}', this)" title="Copy Link">
              <i class="fas fa-copy"></i>
            </button>
          </div>` : ''}
      </div>
      <div class="sf-card-actions">
        ${safeLink ? `
          <button class="ds-btn sf-scrape-btn"
            data-url="${safeLink}"
            data-type="${meta.type}"
            title="Deep Scrape this page">
            <i class="fas fa-search-plus"></i> Scrape
          </button>
          <a href="${safeLink}" target="_blank" class="t-view-btn">
            <i class="fas fa-external-link-alt"></i> View
          </a>` : '<span style="color:var(--muted);font-size:0.75rem">No link available</span>'}
      </div>
    </div>
  `;
}


// ── Nav ───────────────────────────────────────────────
function feedNav(panelKey, delta) {
  const state = feedState[panelKey];
  const next  = state.idx + delta;
  if (next < 0 || next >= state.items.length) return;
  state.idx = next;
  renderFeedCard(panelKey);
}

function refreshFeed(panelKey) {
  feedState[panelKey].loaded = false;
  loadFeed(panelKey, true);
}


// ── Helpers ───────────────────────────────────────────
function updateSfCounter(panelKey, current, total) {
  const el = document.getElementById('sf-counter-' + panelKey);
  if (el) el.textContent = total ? `${current} / ${total}` : '— / —';
}

function setSfNavDisabled(panelKey, disabled) {
  const prev = document.getElementById('sf-prev-' + panelKey);
  const next = document.getElementById('sf-next-' + panelKey);
  if (prev) prev.disabled = disabled;
  if (next) next.disabled = disabled;
}


// ── Hook into switchPanel ─────────────────────────────
//  Override the existing switchPanel function to also
//  inject + load the feed when switching panels.
//  Paste this AFTER the existing switchPanel definition
//  in admin.js, replacing it entirely.

const _originalSwitchPanel = switchPanel;  // keep reference if needed

// Re-declare switchPanel to include feed init
function switchPanel(tab) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
  document.querySelectorAll('.nav-item[id^="snav-"]').forEach(n => n.classList.remove('active'));
  const snav = document.getElementById('snav-' + tab);
  if (snav) snav.classList.add('active');
  document.querySelectorAll('.mobile-nav-item').forEach(m => m.classList.remove('active'));
  const mnav = document.getElementById('mnav-' + tab);
  if (mnav) mnav.classList.add('active');
  if (tab === 'tracker') loadTrackerUpdates();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // ── Feed init ──
  const feedPanels = ['jobs', 'admit', 'results'];
  if (feedPanels.includes(tab) && token) {
    injectFeedSection(tab);
    loadFeed(tab);
  }
}


// ── Init feeds after login ────────────────────────────
//  Call this after login() succeeds. Add the line
//  initFeedsAfterLogin(); inside the login success block.
function initFeedsAfterLogin() {
  ['jobs', 'admit', 'results'].forEach(panelKey => {
    injectFeedSection(panelKey);
  });
  // Auto-load the default panel (jobs)
  loadFeed('jobs');
}

// ── EXAM FUNCTIONS ──

function fillExamFromJson() {
  try {
    const raw = document.getElementById('exam_json').value.trim();
    const d = JSON.parse(raw);
    
    document.getElementById('exam_title').value       = d.title || '';
    document.getElementById('exam_dept').value        = d.department || '';
    document.getElementById('exam_type').value        = d.examType || '';
    document.getElementById('exam_level').value       = d.examLevel || 'Preliminary';
    document.getElementById('exam_vacancies').value   = d.totalVacancies || '';
    document.getElementById('exam_frequency').value   = d.examFrequency || '';
    document.getElementById('exam_qual').value        = (d.qualificationRequired || []).join(', ');
    document.getElementById('exam_agemin').value      = d.minimumAge || '';
    document.getElementById('exam_agemax').value      = d.maximumAge || '';
    document.getElementById('exam_gender').value      = d.genderEligibility || 'All';
    document.getElementById('exam_state').value       = (d.stateEligibility || []).join(', ');
    document.getElementById('exam_relax_scst').value  = d.ageRelaxation?.sc_st || '';
    document.getElementById('exam_relax_obc').value   = d.ageRelaxation?.obc || '';
    document.getElementById('exam_relax_pwd').value   = d.ageRelaxation?.pwd || '';
    document.getElementById('exam_relax_ews').value   = d.ageRelaxation?.ews || '';
    document.getElementById('exam_sal_min').value     = d.salaryRange?.min || '';
    document.getElementById('exam_sal_max').value     = d.salaryRange?.max || '';
    document.getElementById('exam_sal_grade').value   = d.salaryRange?.grade || '';
    document.getElementById('exam_startdate').value   = d.applicationStartDate?.split('T')[0] || '';
    document.getElementById('exam_lastdate').value    = d.lastDate?.split('T')[0] || '';
    document.getElementById('exam_admitdate').value   = d.admitCardDate?.split('T')[0] || '';
    document.getElementById('exam_resultdate').value  = d.resultDate?.split('T')[0] || '';
    document.getElementById('exam_website').value     = d.officialWebsite || '';
    document.getElementById('exam_notifurl').value    = d.notificationUrl || '';
    document.getElementById('exam_tags').value        = (d.tags || []).join(', ');
    document.getElementById('exam_featured').value    = d.featured ? 'true' : 'false';
    document.getElementById('exam_active').value      = d.active !== false ? 'true' : 'false';

    showAlert('✅ JSON data filled successfully!', 'success');
  } catch (e) {
    showAlert('❌ Invalid JSON: ' + e.message, 'error');
  }
}

async function addExam() {
  const title = document.getElementById('exam_title').value.trim();
  const dept  = document.getElementById('exam_dept').value.trim();
  const type  = document.getElementById('exam_type').value.trim();

  if (!title || !dept || !type) {
    return showAlert('⚠️ Title, Department and Exam Type are required!', 'error');
  }

  const payload = {
    title,
    department:            dept,
    examType:              type,
    examLevel:             document.getElementById('exam_level').value,
    totalVacancies:        Number(document.getElementById('exam_vacancies').value) || undefined,
    examFrequency:         document.getElementById('exam_frequency').value || undefined,
    qualificationRequired: document.getElementById('exam_qual').value.split(',').map(s => s.trim()).filter(Boolean),
    minimumAge:            Number(document.getElementById('exam_agemin').value) || 18,
    maximumAge:            Number(document.getElementById('exam_agemax').value) || 35,
    genderEligibility:     document.getElementById('exam_gender').value,
    stateEligibility:      document.getElementById('exam_state').value.split(',').map(s => s.trim()).filter(Boolean),
    ageRelaxation: {
      sc_st: Number(document.getElementById('exam_relax_scst').value) || 0,
      obc:   Number(document.getElementById('exam_relax_obc').value)  || 0,
      pwd:   Number(document.getElementById('exam_relax_pwd').value)  || 0,
      ews:   Number(document.getElementById('exam_relax_ews').value)  || 0,
    },
    salaryRange: {
      min:   Number(document.getElementById('exam_sal_min').value)   || undefined,
      max:   Number(document.getElementById('exam_sal_max').value)   || undefined,
      grade: document.getElementById('exam_sal_grade').value || undefined,
    },
    applicationStartDate: document.getElementById('exam_startdate').value || undefined,
    lastDate:             document.getElementById('exam_lastdate').value   || undefined,
    admitCardDate:        document.getElementById('exam_admitdate').value  || undefined,
    resultDate:           document.getElementById('exam_resultdate').value || undefined,
    officialWebsite:      document.getElementById('exam_website').value    || undefined,
    notificationUrl:      document.getElementById('exam_notifurl').value   || undefined,
    tags:                 document.getElementById('exam_tags').value.split(',').map(s => s.trim()).filter(Boolean),
    featured:             document.getElementById('exam_featured').value === 'true',
    active:               document.getElementById('exam_active').value === 'true',
  };

  try {
   const res = await fetch('/nokari/admin/add-exam', { 
  method: 'POST', 
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + token 
  }, 
  body: JSON.stringify(payload) 
});
    const data = await res.json();
    if (res.ok) {
      showAlert('✅ Exam published successfully!', 'success');
      clearExamForm();
     loadExams();
    } else {
      showAlert('❌ Error: ' + (data.message || 'Unknown error'), 'error');
    }
  } catch (e) {
    showAlert('❌ Network error: ' + e.message, 'error');
  }
}

function clearExamForm() {
  ['exam_json','exam_title','exam_dept','exam_type','exam_level','exam_vacancies',
   'exam_frequency','exam_qual','exam_agemin','exam_agemax','exam_gender','exam_state',
   'exam_relax_scst','exam_relax_obc','exam_relax_pwd','exam_relax_ews',
   'exam_sal_min','exam_sal_max','exam_sal_grade','exam_startdate','exam_lastdate',
   'exam_admitdate','exam_resultdate','exam_website','exam_notifurl','exam_tags'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}
async function loadExams() {
  const c = document.getElementById('exams-list');
  c.innerHTML = '<div class="list-loading"><span class="spinner"></span> Loading entries…</div>';
  try {
    const res   = await fetch('/nokari/admin/exams', { headers: { 'Authorization': 'Bearer ' + token } });
    const exams = await res.json();
    renderList(c, exams, 'exams-count', exam => ({
      title : exam.title,
      meta  : `${exam.department || ''}${exam.examType ? ' · ' + exam.examType : ''}${exam.lastDate ? ' · Last: ' + formatDate(exam.lastDate) : ''}`,
      id    : exam._id,
      type  : 'exam'
    }), loadExams);
  } catch (err) {
    c.innerHTML = '<div class="list-empty"><i class="fas fa-exclamation-circle"></i> Failed to load entries.</div>';
  }
}

function buildExamBody() {
  return {
    title                : document.getElementById('exam_title').value.trim(),
    department           : document.getElementById('exam_dept').value.trim(),
    examType             : document.getElementById('exam_type').value,
    examLevel            : document.getElementById('exam_level').value,
    totalVacancies       : Number(document.getElementById('exam_vacancies').value) || undefined,
    examFrequency        : document.getElementById('exam_frequency').value || undefined,
    qualificationRequired: document.getElementById('exam_qual').value.split(',').map(s => s.trim()).filter(Boolean),
    minimumAge           : Number(document.getElementById('exam_agemin').value) || 18,
    maximumAge           : Number(document.getElementById('exam_agemax').value) || 35,
    genderEligibility    : document.getElementById('exam_gender').value,
    stateEligibility     : document.getElementById('exam_state').value.split(',').map(s => s.trim()).filter(Boolean),
    ageRelaxation: {
      sc_st : Number(document.getElementById('exam_relax_scst').value) || 0,
      obc   : Number(document.getElementById('exam_relax_obc').value)  || 0,
      pwd   : Number(document.getElementById('exam_relax_pwd').value)  || 0,
      ews   : Number(document.getElementById('exam_relax_ews').value)  || 0,
    },
    salaryRange: {
      min   : Number(document.getElementById('exam_sal_min').value)  || undefined,
      max   : Number(document.getElementById('exam_sal_max').value)  || undefined,
      grade : document.getElementById('exam_sal_grade').value        || undefined,
    },
    applicationStartDate : document.getElementById('exam_startdate').value  || undefined,
    lastDate             : document.getElementById('exam_lastdate').value    || undefined,
    admitCardDate        : document.getElementById('exam_admitdate').value   || undefined,
    resultDate           : document.getElementById('exam_resultdate').value  || undefined,
    officialWebsite      : document.getElementById('exam_website').value     || undefined,
    notificationUrl      : document.getElementById('exam_notifurl').value    || undefined,
    tags                 : document.getElementById('exam_tags').value.split(',').map(s => s.trim()).filter(Boolean),
    featured             : document.getElementById('exam_featured').value === 'true',
    active               : document.getElementById('exam_active').value === 'true',
  };
}



// ═══════════════════════════════════════════════════════════
//  EXAMGUIDE ADMIN  —  add this block to the bottom of
//  your existing admin.js file
//  (or load as a separate <script src="/js/examguide-admin.js">)
// ═══════════════════════════════════════════════════════════

// ── State ────────────────────────────────────────────────
let _examGuideEditId = null;   // null = create mode, string = edit mode


// ── Preview JSON ─────────────────────────────────────────
function previewExamGuideJson() {
  const raw = (document.getElementById('examguide_json')?.value || '').trim();
  if (!raw) { showAlert('Paste JSON first', 'error'); return; }

  let d;
  try { d = JSON.parse(raw); }
  catch (e) { showAlert('Invalid JSON: ' + e.message, 'error'); return; }

  const previewEl = document.getElementById('examguide-preview');
  const bodyEl    = document.getElementById('examguide-preview-body');
  const slugEl    = document.getElementById('examguide-preview-slug');

  previewEl.classList.remove('hidden');
  slugEl.textContent = d.slug || '(no slug)';

  // ── Helper renderers ──────────────────────────────────
  const field = (label, value, longClass = '') => {
    if (value === undefined || value === null || value === '') return '';
    return `
      <div class="eg-field">
        <div class="eg-field-label">${escapeHtml(label)}</div>
        <div class="eg-field-value ${longClass}">${value}</div>
      </div>`;
  };

  const bool = (label, value) => field(label,
    value
      ? '<span class="eg-bool-yes">✓ Yes</span>'
      : '<span class="eg-bool-no">✗ No</span>'
  );

  const pills = (arr) =>
    (Array.isArray(arr) && arr.length)
      ? arr.map(v => `<span class="eg-array-pill">${escapeHtml(String(v))}</span>`).join('')
      : '';

  const sectionTitle = (t) =>
    `<div class="eg-section-title"><i class="fas fa-angle-right"></i> ${t}</div>`;

  // ── Build preview HTML ────────────────────────────────
  let html = '';

  // Identity
  html += sectionTitle('Identity');
  html += field('Slug',     escapeHtml(d.slug || ''));
  html += field('Title',    escapeHtml(d.title || ''));
  html += field('Category', escapeHtml(d.category || ''));

  // Overview
  if (d.overview || d.alertNote) {
    html += sectionTitle('Overview');
    if (d.overview)   html += field('Overview',   escapeHtml(d.overview),   'long');
    if (d.alertNote)  html += field('Alert Note', escapeHtml(d.alertNote));
  }

  // Exam Structure
  if (Array.isArray(d.stages) && d.stages.length) {
    html += sectionTitle('Exam Stages (' + d.stages.length + ')');
    d.stages.forEach((s, i) => {
      html += field(
        'Stage ' + (i + 1),
        `<b>${escapeHtml(s.name || '')}</b> · ${escapeHtml(s.stageType  || '')} · ${escapeHtml(s.totalMarks || '')} marks · ${escapeHtml(s.nature || '')}`
      );
    });
    if (d.structureNote) html += field('Structure Note', escapeHtml(d.structureNote));
  }

  // Roadmap
  if (Array.isArray(d.roadmap) && d.roadmap.length) {
    html += sectionTitle('Roadmap (' + d.roadmap.length + ' steps)');
    d.roadmap.forEach(r => {
      html += field(
        'Step ' + r.step + (r.tag ? ' · ' + r.tag : ''),
        `<b>${escapeHtml(r.title || '')}</b><br><span style="font-size:0.75rem;color:#64748b">${escapeHtml(r.desc || '')}</span>`
      );
    });
  }

  // Syllabus
  if (Array.isArray(d.syllabus) && d.syllabus.length) {
    html += sectionTitle('Syllabus (' + d.syllabus.length + ' papers)');
    d.syllabus.forEach(p => {
      const topicsHtml = pills(p.topics);
      html += field(
        (p.paperName || '') + (p.marks ? ' — ' + p.marks + ' marks' : ''),
        topicsHtml || '—'
      );
    });
  }

  // Books
  if (Array.isArray(d.books) && d.books.length) {
    html += sectionTitle('Recommended Books (' + d.books.length + ')');
    d.books.forEach(b => {
      html += field(
        b.subject || 'Book',
        `<b>${escapeHtml(b.title || '')}</b> — ${escapeHtml(b.author || '')}`
      );
    });
  }

  // Eligibility
  if (d.eligibility) {
    const e = d.eligibility;
    html += sectionTitle('Eligibility');
    html += field('Nationality',    escapeHtml(e.nationality || 'Indian Citizen'));
    html += field('Age Range',      `${e.ageMin || '?'} – ${e.ageMax || '?'} years`);
    if (e.ageRelaxation) {
      const rel = e.ageRelaxation;
      html += field('Age Relaxation',
        `SC/ST: +${rel.sc_st || 0} · OBC: +${rel.obc || 0} · PwD: +${rel.pwd || 0} · EWS: +${rel.ews || 0}`
      );
    }
    html += field('Education',  escapeHtml(e.education || ''));
    html += field('Qualification', pills(e.qualificationRequired) || '—');
    html += field('Category',   pills(e.categoryEligibility) || '—');
    html += field('Gender',     escapeHtml(e.genderEligibility || 'All'));
    html += field('State',      pills(e.stateEligibility) || '—');
    if (e.attemptsGen)  html += field('Attempts (Gen)',   escapeHtml(e.attemptsGen));
    if (e.attemptsOBC)  html += field('Attempts (OBC)',   escapeHtml(e.attemptsOBC));
    if (e.attemptsScSt) html += field('Attempts (SC/ST)', escapeHtml(e.attemptsScSt));
    if (e.ageRelaxNote) html += field('Relax Note',       escapeHtml(e.ageRelaxNote));
  }

  // Salary
  if (d.salaryRange) {
    html += sectionTitle('Salary');
    html += field('Range', `₹${(d.salaryRange.min || 0).toLocaleString('en-IN')} – ₹${(d.salaryRange.max || 0).toLocaleString('en-IN')}`);
    if (d.salaryRange.grade) html += field('Grade', escapeHtml(d.salaryRange.grade));
  }

  // Meta
  html += sectionTitle('Exam Meta');
  html += field('Exam Type',      escapeHtml(d.examType || ''));
  html += field('Frequency',      escapeHtml(d.examFrequency || ''));
  html += field('Total Vacancies', d.totalVacancies ? String(d.totalVacancies) : '');
  html += field('Tags',           pills(d.tags) || '—');
  bool('Featured', d.featured) && (html += bool('Featured', d.featured));
  bool('Active',   d.active)   && (html += bool('Active',   d.active));
  bool('Published',d.isPublished) && (html += bool('Published', d.isPublished));

  // Links
  if (d.officialSite || d.applyLink || d.notificationPdfLink || d.admitCardLink) {
    html += sectionTitle('Links');
    if (d.officialSite)        html += field('Official Site',    `<a href="${escapeHtml(d.officialSite)}" target="_blank" style="color:#4f46e5;font-size:0.75rem">${escapeHtml(d.officialSite)}</a>`);
    if (d.applyLink)           html += field('Apply Link',       `<a href="${escapeHtml(d.applyLink)}" target="_blank" style="color:#4f46e5;font-size:0.75rem">${escapeHtml(d.applyLink)}</a>`);
    if (d.notificationPdfLink) html += field('Notification PDF', `<a href="${escapeHtml(d.notificationPdfLink)}" target="_blank" style="color:#4f46e5;font-size:0.75rem">${escapeHtml(d.notificationPdfLink)}</a>`);
    if (d.admitCardLink)       html += field('Admit Card Link',  `<a href="${escapeHtml(d.admitCardLink)}" target="_blank" style="color:#4f46e5;font-size:0.75rem">${escapeHtml(d.admitCardLink)}</a>`);
  }

  // Tips
  if (d.tips) {
    html += sectionTitle('Tips');
    html += field('Preparation Tips', escapeHtml(d.tips), 'long');
  }

  bodyEl.innerHTML = html;
}


// ── Publish (POST) ───────────────────────────────────────
async function addExamGuide() {
  if (!token) { showAlert('Please login first!', 'error'); return; }

  const raw = (document.getElementById('examguide_json')?.value || '').trim();
  if (!raw) { showAlert('Paste JSON first', 'error'); return; }

  let payload;
  try { payload = JSON.parse(raw); }
  catch (e) { showAlert('Invalid JSON: ' + e.message, 'error'); return; }

  // ── Array support ──
  const items = Array.isArray(payload) ? payload : [payload];

  if (items.some(p => !p.slug || !p.category)) {
    showAlert('Every entry must have "slug" and "category"', 'error');
    return;
  }

  try {
    const res  = await fetch('/nokari/admin/add-examguide-bulk', {
      method  : 'POST',
      headers : { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body    : JSON.stringify({ items }),
    });
    const data = await res.json();
    if (res.ok) {
      showAlert(`✅ ${data.inserted} guide(s) published!`, 'success');
      clearExamGuideForm();
      loadExamGuides();
    } else {
      showAlert('❌ ' + (data.error || 'Server error'), 'error');
    }
  } catch (err) { showAlert('Network error: ' + err.message, 'error'); }
}


// ── Clear Form ───────────────────────────────────────────
function clearExamGuideForm() {
  const el = document.getElementById('examguide_json');
  if (el) el.value = '';
  document.getElementById('examguide-preview')?.classList.add('hidden');
  _examGuideEditId = null;
  // Reset publish button
  const pubBtn = document.getElementById('examguide-pub-btn');
  if (pubBtn) {
    pubBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Publish Exam Guide';
    pubBtn.onclick   = addExamGuide;
    pubBtn.classList.remove('editing');
  }
  document.querySelector('.eg-edit-banner')?.remove();
  document.querySelector('.btn-cancel-examguide')?.remove();
}

// ── Load ExamGuide slugs for dropdown ────────────────
async function loadExamGuideSlugs() {
  try {
    const res    = await fetch('/nokari/admin/examguides', { headers: { 'Authorization': 'Bearer ' + token } });
    const guides = await res.json();

    // Har form mein slug dropdown populate karo
    ['job', 'admit', 'result'].forEach(type => {
      const el = document.getElementById(`${type}_examguideslug`);
      if (!el) return;

      // Input ko datalist se connect karo
      el.setAttribute('list', `${type}-slug-list`);

      let list = document.getElementById(`${type}-slug-list`);
      if (!list) {
        list = document.createElement('datalist');
        list.id = `${type}-slug-list`;
        el.insertAdjacentElement('afterend', list);
      }

      list.innerHTML = guides
        .map(g => `<option value="${g.slug}">${g.title || g.slug}</option>`)
        .join('');
    });
  } catch (err) {
    console.error('Slug load failed:', err.message);
  }
}
// ── Load list ────────────────────────────────────────────
async function loadExamGuides() {
  const c = document.getElementById('examguides-list');
  if (!c) return;
  c.innerHTML = '<div class="list-loading"><span class="spinner"></span> Loading entries…</div>';
  try {
    const res    = await fetch('/nokari/admin/examguides', { headers: { 'Authorization': 'Bearer ' + token } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const guides = await res.json();

    const countEl = document.getElementById('examguides-count');
    if (countEl) countEl.textContent = `${guides.length} ${guides.length === 1 ? 'entry' : 'entries'}`;

    if (!guides.length) {
      c.innerHTML = '<div class="list-empty"><i class="fas fa-inbox"></i><span>No entries found. Add one above.</span></div>';
      return;
    }

    c.innerHTML = '';
    const list = document.createElement('div');
    list.className = 'entries';

    guides.forEach(g => {
      const div = document.createElement('div');
      div.className = 'entry';
      div.id = `entry-${g._id}`;

      const meta = [
        g.category,
        g.examType,
        g.totalVacancies ? g.totalVacancies + ' vacancies' : '',
        g.active ? '' : '⚪ Inactive',
        g.isPublished ? '🟢 Published' : '🔴 Draft',
      ].filter(Boolean).join(' · ');

      div.innerHTML = `
        <div class="entry-info">
          <div class="entry-title">${escapeHtml(g.title || g.slug || 'Untitled')}</div>
          <div class="entry-meta">${escapeHtml(meta)}</div>
        </div>
        <div class="entry-actions">
          <button class="btn-edit" onclick="editExamGuide('${g._id}')">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="btn-del" onclick="deleteExamGuide('${g._id}')">
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        </div>
      `;
      list.appendChild(div);
    });

    c.appendChild(list);
  } catch (err) {
    c.innerHTML = '<div class="list-empty"><i class="fas fa-exclamation-circle"></i> Failed to load entries.</div>';
  }
}


// ── Edit (load into textarea) ────────────────────────────
async function editExamGuide(id) {
  if (!token) { showAlert('Please login first!', 'error'); return; }
  try {
    const res  = await fetch(`/admin/examguide/${id}`, { headers: { 'Authorization': 'Bearer ' + token } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();

    // Strip mongoose meta fields for cleaner editing
    const { _id, __v, createdAt, updatedAt, ...clean } = data;

    document.getElementById('examguide_json').value = JSON.stringify(clean, null, 2);
    previewExamGuideJson();

    _examGuideEditId = id;

    // Swap publish button → update
    const pubBtn = document.getElementById('examguide-pub-btn');
    pubBtn.innerHTML = '<i class="fas fa-save"></i> Update Exam Guide';
    pubBtn.onclick   = () => updateExamGuide(id);
    pubBtn.classList.add('editing');

    // Edit banner
    const formCard = document.getElementById('examguide-form-card');
    if (!formCard.querySelector('.eg-edit-banner')) {
      const banner = document.createElement('div');
      banner.className = 'eg-edit-banner';
      banner.innerHTML = `<i class="fas fa-pencil-alt"></i> Editing — ID: <code>${id}</code>`;
      formCard.querySelector('.form-card-title').insertAdjacentElement('afterend', banner);
    }

    // Cancel button
    if (!document.querySelector('.btn-cancel-examguide')) {
      const cancelBtn       = document.createElement('button');
      cancelBtn.className   = 'btn btn-clr btn-cancel-examguide';
      cancelBtn.innerHTML   = '<i class="fas fa-times"></i> Cancel Edit';
      cancelBtn.onclick     = clearExamGuideForm;
      pubBtn.insertAdjacentElement('afterend', cancelBtn);
    }

    switchPanel('eligibility');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showAlert('Entry loaded for editing', 'success');
  } catch (err) {
    showAlert('Failed to load entry: ' + err.message, 'error');
  }
}


// ── Update (PUT) ─────────────────────────────────────────
async function updateExamGuide(id) {
  if (!token) { showAlert('Please login first!', 'error'); return; }

  const raw = (document.getElementById('examguide_json')?.value || '').trim();
  if (!raw) { showAlert('Paste JSON first', 'error'); return; }

  let payload;
  try { payload = JSON.parse(raw); }
  catch (e) { showAlert('Invalid JSON: ' + e.message, 'error'); return; }

  try {
    const res  = await fetch(`/admin/examguide/${id}`, {
      method  : 'PUT',
      headers : { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body    : JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) {
      showAlert('✅ Exam Guide updated!', 'success');
      clearExamGuideForm();
      loadExamGuides();
    } else {
      showAlert('❌ ' + (data.message || data.error || 'Update failed'), 'error');
    }
  } catch (err) { showAlert('Network error: ' + err.message, 'error'); }
}


// ── Delete ───────────────────────────────────────────────
async function deleteExamGuide(id) {
  const confirmed = await showConfirmModal('Delete this Exam Guide? This cannot be undone.');
  if (!confirmed) return;

  const el = document.getElementById(`entry-${id}`);
  if (el) { el.style.opacity = '0.4'; el.style.pointerEvents = 'none'; }

  try {
    const res = await fetch(`/admin/examguide/${id}`, {
      method  : 'DELETE',
      headers : { 'Authorization': 'Bearer ' + token },
    });
    if (res.ok) {
      showAlert('Entry deleted', 'success');
      loadExamGuides();
    } else {
      const data = await res.json().catch(() => ({}));
      showAlert(data.message || 'Delete failed', 'error');
      if (el) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; }
    }
  } catch (err) {
    showAlert('Network error: ' + err.message, 'error');
    if (el) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; }
  }
}


// ── Hook into login + switchPanel ────────────────────────
//  Call loadExamGuides() inside the login success block:
//    loadJobs(); loadAdmits(); loadResults(); loadExams(); loadExamGuides();
//
//  The switchPanel override below auto-loads when panel is opened.
//  If you already have a switchPanel override in your file,
//  just add the examguide block inside it instead of redefining.

const _egOriginalSwitchPanel = (typeof switchPanel === 'function') ? switchPanel : null;

function switchPanel(tab) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');

  document.querySelectorAll('.nav-item[id^="snav-"]').forEach(n => n.classList.remove('active'));
  const snav = document.getElementById('snav-' + tab);
  if (snav) snav.classList.add('active');

  document.querySelectorAll('.mobile-nav-item').forEach(m => m.classList.remove('active'));
  const mnav = document.getElementById('mnav-' + tab);
  if (mnav) mnav.classList.add('active');

  if (tab === 'tracker') loadTrackerUpdates();

  // Live scrape feed panels
  const feedPanels = ['jobs', 'admit', 'results'];
  if (feedPanels.includes(tab) && token) {
    if (typeof injectFeedSection === 'function') injectFeedSection(tab);
    if (typeof loadFeed          === 'function') loadFeed(tab);
  }

  // ExamGuide panel
  if (tab === 'eligibility' && token) loadExamGuides();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}