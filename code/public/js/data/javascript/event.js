QuizData.questions.push(
{
  id: 'js_events_1',
  topicId: 'js_events',
  question: 'Add click event to button using addEventListener().',
  mathSolution: 'click event triggers when element is clicked.',
  codeSolution: '// HTML: <button id="myButton">Click me</button>\nconst button = document.getElementById("myButton");\nbutton.addEventListener("click", function() {\n    console.log("Button was clicked!");\n});',
  hint: 'Use addEventListener("click", callback).'
},
{
  id: 'js_events_2',
  topicId: 'js_events',
  question: 'Add click event using onclick property.',
  mathSolution: 'onclick property assigns single event handler.',
  codeSolution: '// HTML: <button id="myButton">Click me</button>\nconst button = document.getElementById("myButton");\nbutton.onclick = function() {\n    console.log("Button clicked!");\n};',
  hint: 'onclick overwrites previous handlers.'
},
{
  id: 'js_events_3',
  topicId: 'js_events',
  question: 'Use inline onclick attribute in HTML.',
  mathSolution: 'onclick attribute calls JavaScript function.',
  codeSolution: '// HTML: <button onclick="alert(Hello)">Click</button>\n// Not recommended for large projects',
  hint: 'Inline events mix HTML and JS (avoid in production).'
},
{
  id: 'js_events_4',
  topicId: 'js_events',
  question: 'Add double-click event (dblclick) to element.',
  mathSolution: 'dblclick fires after two quick clicks.',
  codeSolution: '// HTML: <button id="myButton">Double click me</button>\nconst button = document.getElementById("myButton");\nbutton.addEventListener("dblclick", function() {\n    console.log("Button was double-clicked!");\n});',
  hint: 'Use dblclick event for double-click actions.'
},
{
  id: 'js_events_5',
  topicId: 'js_events',
  question: 'Add mouseenter event to detect mouse entering element.',
  mathSolution: 'mouseenter fires when mouse pointer enters element.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("mouseenter", function() {\n    console.log("Mouse entered the box!");\n});',
  hint: 'mouseenter does not bubble.'
},
{
  id: 'js_events_6',
  topicId: 'js_events',
  question: 'Add mouseleave event to detect mouse leaving element.',
  mathSolution: 'mouseleave fires when mouse pointer leaves element.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("mouseleave", function() {\n    console.log("Mouse left the box!");\n});',
  hint: 'mouseleave does not bubble.'
},
{
  id: 'js_events_7',
  topicId: 'js_events',
  question: 'Add mouseover event (bubbling version of mouseenter).',
  mathSolution: 'mouseover bubbles up to parent elements.',
  codeSolution: '// HTML: <div id="parent"><div id="child">Child</div></div>\nconst parent = document.getElementById("parent");\nparent.addEventListener("mouseover", function() {\n    console.log("Mouse over parent or child");\n});',
  hint: 'mouseover bubbles, mouseenter does not.'
},
{
  id: 'js_events_8',
  topicId: 'js_events',
  question: 'Add mouseout event (bubbling version of mouseleave).',
  mathSolution: 'mouseout bubbles up to parent elements.',
  codeSolution: '// HTML: <div id="parent"><div id="child">Child</div></div>\nconst parent = document.getElementById("parent");\nparent.addEventListener("mouseout", function() {\n    console.log("Mouse left parent or child");\n});',
  hint: 'mouseout bubbles, mouseleave does not.'
},
{
  id: 'js_events_9',
  topicId: 'js_events',
  question: 'Add mousemove event to track mouse movement.',
  mathSolution: 'mousemove fires continuously as mouse moves.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("mousemove", function(event) {\n    console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);\n});',
  hint: 'mousemove can fire many times - use efficiently.'
},
{
  id: 'js_events_10',
  topicId: 'js_events',
  question: 'Get mouse coordinates from event object (clientX, clientY).',
  mathSolution: 'clientX/clientY give position relative to viewport.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("click", function(event) {\n    console.log(`Clicked at X: ${event.clientX}, Y: ${event.clientY}`);\n});',
  hint: 'clientX/Y are relative to viewport, not page.'
},
{
  id: 'js_events_11',
  topicId: 'js_events',
  question: 'Get mouse coordinates relative to target element (offsetX, offsetY).',
  mathSolution: 'offsetX/Y give position relative to target element.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("click", function(event) {\n    console.log(`Clicked at offset X: ${event.offsetX}, Y: ${event.offsetY}`);\n});',
  hint: 'offsetX/Y are relative to the target element.'
},
{
  id: 'js_events_12',
  topicId: 'js_events',
  question: 'Get which mouse button was clicked (button property).',
  mathSolution: 'button property: 0=left, 1=middle, 2=right.',
  codeSolution: '// HTML: <button id="myButton">Click with any mouse button</button>\nconst button = document.getElementById("myButton");\nbutton.addEventListener("mousedown", function(event) {\n    if (event.button === 0) console.log("Left button clicked");\n    if (event.button === 1) console.log("Middle button clicked");\n    if (event.button === 2) console.log("Right button clicked");\n});',
  hint: 'Prevent default on contextmenu event for right-click.'
},
{
  id: 'js_events_13',
  topicId: 'js_events',
  question: 'Prevent context menu (right-click) using contextmenu event.',
  mathSolution: 'contextmenu event fires on right-click, preventDefault stops menu.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("contextmenu", function(event) {\n    event.preventDefault();\n    console.log("Right-click prevented!");\n});',
  hint: 'Use contextmenu event and preventDefault().'
},
{
  id: 'js_events_14',
  topicId: 'js_events',
  question: 'Add keydown event to detect key presses.',
  mathSolution: 'keydown fires when key is pressed down.',
  codeSolution: '// HTML: <input type="text" id="myInput" placeholder="Type here">\nconst input = document.getElementById("myInput");\ninput.addEventListener("keydown", function(event) {\n    console.log(`Key pressed: ${event.key}`);\n});',
  hint: 'keydown fires before character is inserted.'
},
{
  id: 'js_events_15',
  topicId: 'js_events',
  question: 'Add keyup event to detect key release.',
  mathSolution: 'keyup fires when key is released.',
  codeSolution: '// HTML: <input type="text" id="myInput" placeholder="Type here">\nconst input = document.getElementById("myInput");\ninput.addEventListener("keyup", function(event) {\n    console.log(`Key released: ${event.key}`);\n});',
  hint: 'keyup fires after character is inserted.'
},
{
  id: 'js_events_16',
  topicId: 'js_events',
  question: 'Add keypress event (deprecated but still works).',
  mathSolution: 'keypress fires for character keys only.',
  codeSolution: '// HTML: <input type="text" id="myInput" placeholder="Type here">\nconst input = document.getElementById("myInput");\ninput.addEventListener("keypress", function(event) {\n    console.log(`Character: ${event.key}`);\n});',
  hint: 'keypress is deprecated, use keydown instead.'
},
{
  id: 'js_events_17',
  topicId: 'js_events',
  question: 'Get key code using event.keyCode (deprecated).',
  mathSolution: 'keyCode returns numeric code of pressed key.',
  codeSolution: '// HTML: <input type="text" id="myInput">\nconst input = document.getElementById("myInput");\ninput.addEventListener("keydown", function(event) {\n    console.log(`Key code: ${event.keyCode}`);  // e.g., Enter=13\n    if (event.keyCode === 13) {\n        console.log("Enter key pressed!");\n    }\n});',
  hint: 'Use event.key instead of keyCode in modern code.'
},
{
  id: 'js_events_18',
  topicId: 'js_events',
  question: 'Detect Enter key press using event.key.',
  mathSolution: 'event.key returns string name of key.',
  codeSolution: '// HTML: <input type="text" id="myInput">\nconst input = document.getElementById("myInput");\ninput.addEventListener("keydown", function(event) {\n    if (event.key === "Enter") {\n        console.log("Enter key pressed!");\n    }\n});',
  hint: 'event.key is modern and readable.'
},
{
  id: 'js_events_19',
  topicId: 'js_events',
  question: 'Detect modifier keys (Ctrl, Alt, Shift).',
  mathSolution: 'Event properties: ctrlKey, altKey, shiftKey.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("click", function(event) {\n    if (event.ctrlKey) console.log("Ctrl + Click");\n    if (event.shiftKey) console.log("Shift + Click");\n    if (event.altKey) console.log("Alt + Click");\n});',
  hint: 'Check ctrlKey, shiftKey, altKey properties.'
},
{
  id: 'js_events_20',
  topicId: 'js_events',
  question: 'Add submit event to form.',
  mathSolution: 'submit event fires when form is submitted.',
  codeSolution: '// HTML: <form id="myForm"><input type="text"><button>Submit</button></form>\nconst form = document.getElementById("myForm");\nform.addEventListener("submit", function(event) {\n    event.preventDefault();\n    console.log("Form submitted!");\n});',
  hint: 'Use preventDefault() to stop page reload.'
},
{
  id: 'js_events_21',
  topicId: 'js_events',
  question: 'Add change event to input field.',
  mathSolution: 'change fires when input loses focus and value changed.',
  codeSolution: '// HTML: <input type="text" id="myInput">\nconst input = document.getElementById("myInput");\ninput.addEventListener("change", function() {\n    console.log(`Value changed to: ${this.value}`);\n});',
  hint: 'change fires after blur, not on every keystroke.'
},
{
  id: 'js_events_22',
  topicId: 'js_events',
  question: 'Add input event for real-time value tracking.',
  mathSolution: 'input fires on every keystroke or value change.',
  codeSolution: '// HTML: <input type="text" id="myInput">\nconst input = document.getElementById("myInput");\ninput.addEventListener("input", function() {\n    console.log(`Current value: ${this.value}`);\n});',
  hint: 'input fires immediately on each change.'
},
{
  id: 'js_events_23',
  topicId: 'js_events',
  question: 'Add focus event to input field.',
  mathSolution: 'focus fires when element receives focus.',
  codeSolution: '// HTML: <input type="text" id="myInput">\nconst input = document.getElementById("myInput");\ninput.addEventListener("focus", function() {\n    console.log("Input focused!");\n});',
  hint: 'focus fires on tab or click.'
},
{
  id: 'js_events_24',
  topicId: 'js_events',
  question: 'Add blur event to input field.',
  mathSolution: 'blur fires when element loses focus.',
  codeSolution: '// HTML: <input type="text" id="myInput">\nconst input = document.getElementById("myInput");\ninput.addEventListener("blur", function() {\n    console.log("Input lost focus!");\n});',
  hint: 'blur is opposite of focus.'
},
{
  id: 'js_events_25',
  topicId: 'js_events',
  question: 'Add load event to window for page load detection.',
  mathSolution: 'load fires when entire page finishes loading.',
  codeSolution: 'window.addEventListener("load", function() {\n    console.log("Page fully loaded!");\n});',
  hint: 'load waits for all resources (images, stylesheets).'
},
{
  id: 'js_events_26',
  topicId: 'js_events',
  question: 'Use DOMContentLoaded event for DOM ready.',
  mathSolution: 'DOMContentLoaded fires when DOM is parsed, before images.',
  codeSolution: 'document.addEventListener("DOMContentLoaded", function() {\n    console.log("DOM ready!");\n    // Safe to manipulate DOM here\n});',
  hint: 'DOMContentLoaded fires earlier than load.'
},
{
  id: 'js_events_27',
  topicId: 'js_events',
  question: 'Add scroll event to window.',
  mathSolution: 'scroll fires when user scrolls the page.',
  codeSolution: 'window.addEventListener("scroll", function() {\n    console.log(`Scroll position: ${window.scrollY}`);\n});',
  hint: 'Throttle scroll events for performance.'
},
{
  id: 'js_events_28',
  topicId: 'js_events',
  question: 'Add resize event to window.',
  mathSolution: 'resize fires when window is resized.',
  codeSolution: 'window.addEventListener("resize", function() {\n    console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);\n});',
  hint: 'resize fires many times during resize.'
},
{
  id: 'js_events_29',
  topicId: 'js_events',
  question: 'Add select event to input or textarea.',
  mathSolution: 'select fires when text is selected in input.',
  codeSolution: '// HTML: <input type="text" id="myInput" value="Select this text">\nconst input = document.getElementById("myInput");\ninput.addEventListener("select", function() {\n    console.log("Text selected!");\n});',
  hint: 'select works on input and textarea elements.'
},
{
  id: 'js_events_30',
  topicId: 'js_events',
  question: 'Add copy event to document.',
  mathSolution: 'copy fires when user copies content.',
  codeSolution: 'document.addEventListener("copy", function(event) {\n    console.log("Content copied!");\n    // event.clipboardData.setData("text/plain", "Custom text");\n});',
  hint: 'Can modify clipboard data in copy event.'
},
{
  id: 'js_events_31',
  topicId: 'js_events',
  question: 'Add paste event to document.',
  mathSolution: 'paste fires when user pastes content.',
  codeSolution: 'document.addEventListener("paste", function(event) {\n    const pastedText = event.clipboardData.getData("text");\n    console.log(`Pasted: ${pastedText}`);\n});',
  hint: 'Access clipboard data with clipboardData.'
},
{
  id: 'js_events_32',
  topicId: 'js_events',
  question: 'Add cut event to document.',
  mathSolution: 'cut fires when user cuts content.',
  codeSolution: 'document.addEventListener("cut", function() {\n    console.log("Content cut!");\n});',
  hint: 'cut works on input, textarea, and editable content.'
},
{
  id: 'js_events_33',
  topicId: 'js_events',
  question: 'Add drag and drop events (dragstart, dragend, drop).',
  mathSolution: 'Drag events handle drag-and-drop operations.',
  codeSolution: '// HTML: <div id="dragme" draggable="true">Drag me</div>\n//       <div id="dropzone">Drop here</div>\nconst dragme = document.getElementById("dragme");\nconst dropzone = document.getElementById("dropzone");\ndragme.addEventListener("dragstart", function(e) {\n    e.dataTransfer.setData("text/plain", "Dragged content");\n});\ndropzone.addEventListener("dragover", function(e) {\n    e.preventDefault();\n});\ndropzone.addEventListener("drop", function(e) {\n    e.preventDefault();\n    const data = e.dataTransfer.getData("text/plain");\n    console.log(`Dropped: ${data}`);\n});',
  hint: 'Set draggable="true" on draggable elements.'
},
{
  id: 'js_events_34',
  topicId: 'js_events',
  question: 'Add touch events for mobile devices (touchstart, touchmove, touchend).',
  mathSolution: 'Touch events handle finger interactions.',
  codeSolution: '// HTML: <div id="box" style="width:200px;height:200px;background:blue"></div>\nconst box = document.getElementById("box");\nbox.addEventListener("touchstart", function(e) {\n    e.preventDefault();\n    console.log("Touch started!");\n    console.log(`Touches: ${e.touches.length}`);\n});',
  hint: 'Use preventDefault() to prevent scrolling on touchmove.'
},
{
  id: 'js_events_35',
  topicId: 'js_events',
  question: 'Prevent default behavior of event using preventDefault().',
  mathSolution: 'preventDefault() stops browser\'s default action.',
  codeSolution: '// HTML: <a id="link" href="https://example.com">Click me</a>\nconst link = document.getElementById("link");\nlink.addEventListener("click", function(event) {\n    event.preventDefault();\n    console.log("Link navigation prevented!");\n});',
  hint: 'Use for links, form submission, checkbox, etc.'
},
{
  id: 'js_events_36',
  topicId: 'js_events',
  question: 'Stop event propagation using stopPropagation().',
  mathSolution: 'stopPropagation() prevents event from bubbling up.',
  codeSolution: '// HTML: <div id="parent"><button id="child">Click</button></div>\nconst parent = document.getElementById("parent");\nconst child = document.getElementById("child");\nparent.addEventListener("click", () => console.log("Parent"));\nchild.addEventListener("click", (e) => {\n    e.stopPropagation();\n    console.log("Child");\n});\n// Clicking child logs only "Child"',
  hint: 'stopPropagation() stops bubbling up DOM tree.'
},
{
  id: 'js_events_37',
  topicId: 'js_events',
  question: 'Stop immediate propagation using stopImmediatePropagation().',
  mathSolution: 'stopImmediatePropagation() stops other listeners on same element.',
  codeSolution: '// HTML: <button id="btn">Click me</button>\nconst btn = document.getElementById("btn");\nbtn.addEventListener("click", (e) => {\n    e.stopImmediatePropagation();\n    console.log("First handler");\n});\nbtn.addEventListener("click", () => {\n    console.log("Second handler"); // Won\'t execute\n});',
  hint: 'stopImmediatePropagation() prevents other handlers on same element.'
},
{
  id: 'js_events_38',
  topicId: 'js_events',
  question: 'Use event delegation for dynamic elements.',
  mathSolution: 'Listen on parent, filter by event.target.',
  codeSolution: '// HTML: <div id="container"><button class="dynamic">Button1</button></div>\nconst container = document.getElementById("container");\ncontainer.addEventListener("click", function(e) {\n    if (e.target && e.target.matches("button")) {\n        console.log(`Button clicked: ${e.target.textContent}`);\n    }\n});\n// Later add new button\nconst newBtn = document.createElement("button");\nnewBtn.textContent = "Button2";\nnewBtn.className = "dynamic";\ncontainer.appendChild(newBtn);',
  hint: 'Event delegation works for dynamically added elements.'
},
{
  id: 'js_events_39',
  topicId: 'js_events',
  question: 'Add one-time event listener using once option.',
  mathSolution: '{ once: true } option removes listener after first fire.',
  codeSolution: '// HTML: <button id="btn">Click once</button>\nconst btn = document.getElementById("btn");\nbtn.addEventListener("click", function() {\n    console.log("This will log only once!");\n}, { once: true });',
  hint: 'once: true auto-removes listener after first execution.'
},
{
  id: 'js_events_40',
  topicId: 'js_events',
  question: 'Use passive event listeners for scroll performance.',
  mathSolution: '{ passive: true } tells browser event won\'t call preventDefault().',
  codeSolution: '// Improves scroll performance\nconst box = document.getElementById("box");\nbox.addEventListener("touchstart", function(e) {\n    console.log("Touch started");\n}, { passive: true });',
  hint: 'Use passive: true for touch and scroll events.'
},
{
  id: 'js_events_41',
  topicId: 'js_events',
  question: 'Create and dispatch custom event.',
  mathSolution: 'CustomEvent allows custom named events with data.',
  codeSolution: '// HTML: <div id="myDiv">Listen for custom event</div>\nconst div = document.getElementById("myDiv");\nconst customEvent = new CustomEvent("userLogin", {\n    detail: { username: "John", time: Date.now() }\n});\ndiv.addEventListener("userLogin", function(e) {\n    console.log(`User ${e.detail.username} logged in`);\n});\ndiv.dispatchEvent(customEvent);',
  hint: 'Use detail property to pass custom data.'
},
{
  id: 'js_events_42',
  topicId: 'js_events',
  question: 'Remove event listener using removeEventListener().',
  mathSolution: 'Must pass same function reference used in addEventListener.',
  codeSolution: '// HTML: <button id="btn">Click me</button>\nfunction handleClick() {\n    console.log("Clicked!");\n}\nconst button = document.getElementById("btn");\nbutton.addEventListener("click", handleClick);\n// Later...\nbutton.removeEventListener("click", handleClick);',
  hint: 'Cannot remove anonymous functions.'
},
{
  id: 'js_events_43',
  topicId: 'js_events',
  question: 'Trigger event programmatically using dispatchEvent().',
  mathSolution: 'Create event object and dispatch on element.',
  codeSolution: '// HTML: <button id="btn">Click me</button>\nconst button = document.getElementById("btn");\nbutton.addEventListener("click", () => console.log("Clicked!"));\n// Programmatically trigger click\nbutton.dispatchEvent(new Event("click"));',
  hint: 'dispatchEvent() simulates user interaction.'
},
{
  id: 'js_events_44',
  topicId: 'js_events',
  question: 'Use event phase detection (capturing vs bubbling).',
  mathSolution: 'Events have capturing (outer to inner) and bubbling (inner to outer).',
  codeSolution: '// HTML: <div id="outer"><div id="inner">Click</div></div>\nconst outer = document.getElementById("outer");\nconst inner = document.getElementById("inner");\nouter.addEventListener("click", () => console.log("Outer - capturing"), true);\nouter.addEventListener("click", () => console.log("Outer - bubbling"));\ninner.addEventListener("click", () => console.log("Inner - target"));\n// Clicking inner logs:\n// Outer - capturing\n// Inner - target\n// Outer - bubbling',
  hint: 'Use true as third parameter for capturing phase.'
},
{
  id: 'js_events_45',
  topicId: 'js_events',
  question: 'Get event target vs currentTarget.',
  mathSolution: 'target is element that triggered event, currentTarget is listener element.',
  codeSolution: '// HTML: <div id="parent"><button id="child">Click</button></div>\nconst parent = document.getElementById("parent");\nparent.addEventListener("click", function(e) {\n    console.log(`target: ${e.target.tagName}`);        // BUTTON\n    console.log(`currentTarget: ${e.currentTarget.id}`); // parent\n});',
  hint: 'target changes with delegation, currentTarget stays same.'
},
{
  id: 'js_events_46',
  topicId: 'js_events',
  question: 'Create debounced event handler for performance.',
  mathSolution: 'Debounce limits how often function executes.',
  codeSolution: 'function debounce(fn, delay) {\n    let timeoutId;\n    return function(...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n}\n// HTML: <input id="search" placeholder="Type to search">\nconst input = document.getElementById("search");\nconst handleSearch = debounce((e) => {\n    console.log(`Searching for: ${e.target.value}`);\n}, 300);\ninput.addEventListener("input", handleSearch);',
  hint: 'Debounce is great for search inputs and resize events.'
},
{
  id: 'js_events_47',
  topicId: 'js_events',
  question: 'Create throttled event handler for performance.',
  mathSolution: 'Throttle limits execution to once per interval.',
  codeSolution: 'function throttle(fn, limit) {\n    let lastCall = 0;\n    return function(...args) {\n        const now = Date.now();\n        if (now - lastCall >= limit) {\n            lastCall = now;\n            fn(...args);\n        }\n    };\n}\n// Throttle scroll events\nconst handleScroll = throttle(() => {\n    console.log(`Scroll position: ${window.scrollY}`);\n}, 200);\nwindow.addEventListener("scroll", handleScroll);',
  hint: 'Throttle is great for scroll and mousemove events.'
},
{
  id: 'js_events_48',
  topicId: 'js_events',
  question: 'Handle form validation on submit event.',
  mathSolution: 'Validate form fields, prevent submit if invalid.',
  codeSolution: '// HTML: <form id="myForm"><input type="text" id="email"><button>Submit</button></form>\nconst form = document.getElementById("myForm");\nform.addEventListener("submit", function(e) {\n    const email = document.getElementById("email").value;\n    if (!email.includes("@")) {\n        e.preventDefault();\n        console.log("Invalid email!");\n    }\n});',
  hint: 'Validate before calling preventDefault().'
},
{
  id: 'js_events_49',
  topicId: 'js_events',
  question: 'Use animationstart and animationend events.',
  mathSolution: 'CSS animation events fire at animation start and end.',
  codeSolution: '// CSS: @keyframes slide { from {left:0;} to {left:200px;} }\n//       .animate { animation: slide 2s; }\n// HTML: <div id="box" style="position:absolute">Animate me</div>\nconst box = document.getElementById("box");\nbox.addEventListener("animationstart", () => console.log("Animation started"));\nbox.addEventListener("animationend", () => console.log("Animation ended"));\nbox.classList.add("animate");',
  hint: 'Animation events need CSS animations defined.'
},
{
  id: 'js_events_50',
  topicId: 'js_events',
  question: 'Use transitionstart and transitionend events.',
  mathSolution: 'CSS transition events fire when transition starts and ends.',
  codeSolution: '// CSS: .box { transition: all 0.5s; }\n//       .box.active { background-color: red; }\n// HTML: <div id="box" class="box">Hover or click</div>\nconst box = document.getElementById("box");\nbox.addEventListener("transitionend", function(e) {\n    console.log(`Transition ended on ${e.propertyName}`);\n});\n// Trigger transition\nbox.classList.add("active");\n// Also works with hover in CSS',
  hint: 'transitionend fires when CSS transition completes.'
}
);