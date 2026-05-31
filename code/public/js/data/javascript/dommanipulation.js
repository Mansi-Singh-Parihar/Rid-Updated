QuizData.questions.push(
{
  id: 'js_dom_1',
  topicId: 'js_dom',
  question: 'Select an element by its ID using getElementById().',
  mathSolution: 'Use document.getElementById() to select element by ID.',
  codeSolution: '// HTML: <div id="myDiv">Hello</div>\nconst element = document.getElementById("myDiv");\nconsole.log(element.textContent);  // Hello',
  hint: 'getElementById() returns single element or null.'
},
{
  id: 'js_dom_2',
  topicId: 'js_dom',
  question: 'Select elements by class name using getElementsByClassName().',
  mathSolution: 'getElementsByClassName() returns live HTMLCollection.',
  codeSolution: '// HTML: <div class="box">Box1</div><div class="box">Box2</div>\nconst elements = document.getElementsByClassName("box");\nconsole.log(elements.length);  // 2\nconsole.log(elements[0].textContent);  // Box1',
  hint: 'Returns HTMLCollection (array-like, not array).'
},
{
  id: 'js_dom_3',
  topicId: 'js_dom',
  question: 'Select elements by tag name using getElementsByTagName().',
  mathSolution: 'getElementsByTagName() returns live HTMLCollection.',
  codeSolution: '// HTML: <p>Para1</p><p>Para2</p><p>Para3</p>\nconst paragraphs = document.getElementsByTagName("p");\nconsole.log(paragraphs.length);  // 3',
  hint: 'Tag name like "div", "p", "span".'
},
{
  id: 'js_dom_4',
  topicId: 'js_dom',
  question: 'Select first element matching CSS selector using querySelector().',
  mathSolution: 'querySelector() returns first matching element or null.',
  codeSolution: '// HTML: <div class="container"><p id="first">Hello</p></div>\nconst element = document.querySelector(".container p");\nconsole.log(element.textContent);  // Hello',
  hint: 'Use CSS selectors like .class, #id, element.'
},
{
  id: 'js_dom_5',
  topicId: 'js_dom',
  question: 'Select all elements matching CSS selector using querySelectorAll().',
  mathSolution: 'querySelectorAll() returns static NodeList.',
  codeSolution: '// HTML: <li>Item1</li><li>Item2</li><li>Item3</li>\nconst items = document.querySelectorAll("li");\nconsole.log(items.length);  // 3\nitems.forEach(item => console.log(item.textContent));',
  hint: 'querySelectorAll() returns NodeList with forEach().'
},
{
  id: 'js_dom_6',
  topicId: 'js_dom',
  question: 'Change text content of element using textContent property.',
  mathSolution: 'textContent sets or gets text inside element.',
  codeSolution: '// HTML: <div id="message">Old text</div>\nconst div = document.getElementById("message");\ndiv.textContent = "New text";\nconsole.log(div.textContent);  // New text',
  hint: 'textContent is safer than innerHTML for text only.'
},
{
  id: 'js_dom_7',
  topicId: 'js_dom',
  question: 'Change HTML content of element using innerHTML property.',
  mathSolution: 'innerHTML sets or gets HTML markup inside element.',
  codeSolution: '// HTML: <div id="container"></div>\nconst div = document.getElementById("container");\ndiv.innerHTML = "<p>Hello <strong>World</strong></p>";\nconsole.log(div.innerHTML);  // <p>Hello <strong>World</strong></p>',
  hint: 'innerHTML parses HTML tags.'
},
{
  id: 'js_dom_8',
  topicId: 'js_dom',
  question: 'Change value of input field using value property.',
  mathSolution: 'value property gets/sets input field value.',
  codeSolution: '// HTML: <input type="text" id="nameInput" value="John">\nconst input = document.getElementById("nameInput");\nconsole.log(input.value);  // John\ninput.value = "Jane";\nconsole.log(input.value);  // Jane',
  hint: 'Use .value for form inputs.'
},
{
  id: 'js_dom_9',
  topicId: 'js_dom',
  question: 'Change CSS class of element using className property.',
  mathSolution: 'className sets or gets class attribute.',
  codeSolution: '// HTML: <div id="box" class="oldClass"></div>\nconst box = document.getElementById("box");\nbox.className = "newClass";\nconsole.log(box.className);  // newClass',
  hint: 'className overwrites all existing classes.'
},
{
  id: 'js_dom_10',
  topicId: 'js_dom',
  question: 'Add CSS class using classList.add() method.',
  mathSolution: 'classList.add() adds class without removing existing.',
  codeSolution: '// HTML: <div id="box" class="box"></div>\nconst box = document.getElementById("box");\nbox.classList.add("highlight", "border");\nconsole.log(box.className);  // box highlight border',
  hint: 'classList.add() can take multiple classes.'
},
{
  id: 'js_dom_11',
  topicId: 'js_dom',
  question: 'Remove CSS class using classList.remove() method.',
  mathSolution: 'classList.remove() removes specified classes.',
  codeSolution: '// HTML: <div id="box" class="box highlight border"></div>\nconst box = document.getElementById("box");\nbox.classList.remove("highlight");\nconsole.log(box.className);  // box border',
  hint: 'classList.remove() ignores non-existent classes.'
},
{
  id: 'js_dom_12',
  topicId: 'js_dom',
  question: 'Toggle CSS class using classList.toggle() method.',
  mathSolution: 'toggle() adds class if missing, removes if present.',
  codeSolution: '// HTML: <div id="box" class="box"></div>\nconst box = document.getElementById("box");\nbox.classList.toggle("active");\nconsole.log(box.className);  // box active\nbox.classList.toggle("active");\nconsole.log(box.className);  // box',
  hint: 'toggle() returns true if class added, false if removed.'
},
{
  id: 'js_dom_13',
  topicId: 'js_dom',
  question: 'Check if element has class using classList.contains() method.',
  mathSolution: 'contains() returns true if class exists.',
  codeSolution: '// HTML: <div id="box" class="box highlight"></div>\nconst box = document.getElementById("box");\nconsole.log(box.classList.contains("highlight"));  // true\nconsole.log(box.classList.contains("hidden"));     // false',
  hint: 'contains() is useful for conditional operations.'
},
{
  id: 'js_dom_14',
  topicId: 'js_dom',
  question: 'Change inline CSS style using style property.',
  mathSolution: 'style.property sets inline CSS styles.',
  codeSolution: '// HTML: <div id="box">Hello</div>\nconst box = document.getElementById("box");\nbox.style.backgroundColor = "red";\nbox.style.color = "white";\nbox.style.fontSize = "20px";\nconsole.log(box.style.backgroundColor);  // red',
  hint: 'CSS properties use camelCase (backgroundColor not background-color).'
},
{
  id: 'js_dom_15',
  topicId: 'js_dom',
  question: 'Create new element using createElement() method.',
  mathSolution: 'createElement() creates new DOM element.',
  codeSolution: 'const newDiv = document.createElement("div");\nnewDiv.textContent = "I am new!";\nnewDiv.className = "my-class";\nconsole.log(newDiv);  // <div class="my-class">I am new!</div>',
  hint: 'Element not in DOM until appended.'
},
{
  id: 'js_dom_16',
  topicId: 'js_dom',
  question: 'Create text node using createTextNode() method.',
  mathSolution: 'createTextNode() creates text node element.',
  codeSolution: 'const textNode = document.createTextNode("Hello World");\nconsole.log(textNode.textContent);  // Hello World\n\n// Alternative: element.textContent = "text" does same',
  hint: 'Often simpler to use textContent instead.'
},
{
  id: 'js_dom_17',
  topicId: 'js_dom',
  question: 'Append child element using appendChild() method.',
  mathSolution: 'appendChild() adds node as last child.',
  codeSolution: '// HTML: <div id="parent"></div>\nconst parent = document.getElementById("parent");\nconst child = document.createElement("p");\nchild.textContent = "New paragraph";\nparent.appendChild(child);\nconsole.log(parent.innerHTML);  // <p>New paragraph</p>',
  hint: 'appendChild() returns the appended element.'
},
{
  id: 'js_dom_18',
  topicId: 'js_dom',
  question: 'Insert element at specific position using insertBefore().',
  mathSolution: 'insertBefore(newNode, referenceNode) inserts before reference.',
  codeSolution: '// HTML: <div id="parent"><span>First</span></div>\nconst parent = document.getElementById("parent");\nconst newSpan = document.createElement("span");\nnewSpan.textContent = "New";\nconst reference = parent.firstChild;\nparent.insertBefore(newSpan, reference);\nconsole.log(parent.innerHTML);  // <span>New</span><span>First</span>',
  hint: 'Insert before reference node (null = append).'
},
{
  id: 'js_dom_19',
  topicId: 'js_dom',
  question: 'Remove element using removeChild() method.',
  mathSolution: 'removeChild() removes child node from parent.',
  codeSolution: '// HTML: <div id="parent"><p id="toRemove">Remove me</p></div>\nconst parent = document.getElementById("parent");\nconst child = document.getElementById("toRemove");\nparent.removeChild(child);\nconsole.log(parent.children.length);  // 0',
  hint: 'Need parent reference to remove child.'
},
{
  id: 'js_dom_20',
  topicId: 'js_dom',
  question: 'Remove element directly using remove() method (modern).',
  mathSolution: 'remove() removes element directly without parent reference.',
  codeSolution: '// HTML: <p id="toRemove">Remove me</p>\nconst element = document.getElementById("toRemove");\nelement.remove();\nconsole.log(document.getElementById("toRemove"));  // null',
  hint: 'remove() is simpler than removeChild().'
},
{
  id: 'js_dom_21',
  topicId: 'js_dom',
  question: 'Replace child element using replaceChild() method.',
  mathSolution: 'replaceChild(newNode, oldNode) replaces old with new.',
  codeSolution: '// HTML: <div id="parent"><span>Old</span></div>\nconst parent = document.getElementById("parent");\nconst newSpan = document.createElement("span");\nnewSpan.textContent = "New";\nconst oldSpan = parent.firstChild;\nparent.replaceChild(newSpan, oldSpan);\nconsole.log(parent.innerHTML);  // <span>New</span>',
  hint: 'Replaces existing node with new node.'
},
{
  id: 'js_dom_22',
  topicId: 'js_dom',
  question: 'Clone element using cloneNode() method.',
  mathSolution: 'cloneNode(true) deep clones with children, false shallow.',
  codeSolution: '// HTML: <div id="original"><p>Child</p></div>\nconst original = document.getElementById("original");\nconst shallowClone = original.cloneNode(false);\nconst deepClone = original.cloneNode(true);\nconsole.log(shallowClone.children.length);  // 0\nconsole.log(deepClone.children.length);    // 1',
  hint: 'true clones children, false clones only element.'
},
{
  id: 'js_dom_23',
  topicId: 'js_dom',
  question: 'Get parent element using parentNode or parentElement.',
  mathSolution: 'parentNode returns parent node (could be non-element).',
  codeSolution: '// HTML: <div id="parent"><span id="child">Hello</span></div>\nconst child = document.getElementById("child");\nconst parent = child.parentNode;\nconsole.log(parent.id);  // parent',
  hint: 'parentElement similar but returns null if parent not element.'
},
{
  id: 'js_dom_24',
  topicId: 'js_dom',
  question: 'Get children elements using children property.',
  mathSolution: 'children returns live HTMLCollection of child elements (no text nodes).',
  codeSolution: '// HTML: <div id="parent"><span>1</span><span>2</span>text</div>\nconst parent = document.getElementById("parent");\nconst children = parent.children;\nconsole.log(children.length);  // 2 (only span elements)',
  hint: 'children excludes text and comment nodes.'
},
{
  id: 'js_dom_25',
  topicId: 'js_dom',
  question: 'Get first and last child using firstChild/firstElementChild.',
  mathSolution: 'firstChild gets any node, firstElementChild gets element node.',
  codeSolution: '// HTML: <div id="parent">text<span>Child</span></div>\nconst parent = document.getElementById("parent");\nconsole.log(parent.firstChild);       // #text "text"\nconsole.log(parent.firstElementChild); // <span>Child</span>',
  hint: 'Use element-specific properties to avoid text nodes.'
},
{
  id: 'js_dom_26',
  topicId: 'js_dom',
  question: 'Get sibling elements using nextSibling/nextElementSibling.',
  mathSolution: 'nextElementSibling returns next element (ignores text nodes).',
  codeSolution: '// HTML: <span id="first">First</span> text <span id="second">Second</span>\nconst first = document.getElementById("first");\nconsole.log(first.nextSibling);        // #text " text "\nconsole.log(first.nextElementSibling); // <span id="second">',
  hint: 'Use nextElementSibling to skip text nodes.'
},
{
  id: 'js_dom_27',
  topicId: 'js_dom',
  question: 'Get previous sibling using previousSibling/previousElementSibling.',
  mathSolution: 'previousElementSibling returns previous element.',
  codeSolution: '// HTML: <span id="first">First</span><span id="second">Second</span>\nconst second = document.getElementById("second");\nconsole.log(second.previousElementSibling); // <span id="first">',
  hint: 'previousElementSibling skips non-element nodes.'
},
{
  id: 'js_dom_28',
  topicId: 'js_dom',
  question: 'Set attribute using setAttribute() method.',
  mathSolution: 'setAttribute(name, value) sets attribute value.',
  codeSolution: '// HTML: <img id="myImage">\nconst img = document.getElementById("myImage");\nimg.setAttribute("src", "image.jpg");\nimg.setAttribute("alt", "Description");\nconsole.log(img.outerHTML);  // <img id="myImage" src="image.jpg" alt="Description">',
  hint: 'setAttribute() creates attribute if not exists.'
},
{
  id: 'js_dom_29',
  topicId: 'js_dom',
  question: 'Get attribute using getAttribute() method.',
  mathSolution: 'getAttribute() returns attribute value or null.',
  codeSolution: '// HTML: <a id="link" href="https://example.com">Link</a>\nconst link = document.getElementById("link");\nconsole.log(link.getAttribute("href"));  // https://example.com\nconsole.log(link.getAttribute("target")); // null',
  hint: 'Use getAttribute() for custom attributes.'
},
{
  id: 'js_dom_30',
  topicId: 'js_dom',
  question: 'Remove attribute using removeAttribute() method.',
  mathSolution: 'removeAttribute() removes specified attribute.',
  codeSolution: '// HTML: <input id="input" type="text" disabled>\nconst input = document.getElementById("input");\ninput.removeAttribute("disabled");\nconsole.log(input.hasAttribute("disabled"));  // false',
  hint: 'removeAttribute() completely removes attribute.'
},
{
  id: 'js_dom_31',
  topicId: 'js_dom',
  question: 'Check if attribute exists using hasAttribute() method.',
  mathSolution: 'hasAttribute() returns true if attribute exists.',
  codeSolution: '// HTML: <button id="btn" disabled>Click</button>\nconst btn = document.getElementById("btn");\nconsole.log(btn.hasAttribute("disabled"));  // true\nconsole.log(btn.hasAttribute("type"));      // false',
  hint: 'Use before getAttribute to avoid null.'
},
{
  id: 'js_dom_32',
  topicId: 'js_dom',
  question: 'Add event listener using addEventListener() method.',
  mathSolution: 'addEventListener(event, callback) attaches event handler.',
  codeSolution: '// HTML: <button id="myButton">Click me</button>\nconst button = document.getElementById("myButton");\nbutton.addEventListener("click", function() {\n    console.log("Button clicked!");\n});',
  hint: 'Can attach multiple listeners to same event.'
},
{
  id: 'js_dom_33',
  topicId: 'js_dom',
  question: 'Remove event listener using removeEventListener() method.',
  mathSolution: 'removeEventListener requires same function reference.',
  codeSolution: '// HTML: <button id="btn">Click</button>\nfunction handleClick() {\n    console.log("Clicked!");\n}\nconst button = document.getElementById("btn");\nbutton.addEventListener("click", handleClick);\n// Later...\nbutton.removeEventListener("click", handleClick);',
  hint: 'Must pass same function reference (not anonymous).'
},
{
  id: 'js_dom_34',
  topicId: 'js_dom',
  question: 'Use event object to get event details.',
  mathSolution: 'Event object passed automatically to handler.',
  codeSolution: '// HTML: <button id="btn">Click</button>\nconst button = document.getElementById("btn");\nbutton.addEventListener("click", function(event) {\n    console.log(event.type);      // click\n    console.log(event.target);    // button element\n    console.log(event.clientX);   // mouse X coordinate\n});',
  hint: 'Event object contains type, target, coordinates, etc.'
},
{
  id: 'js_dom_35',
  topicId: 'js_dom',
  question: 'Prevent default behavior using preventDefault() method.',
  mathSolution: 'preventDefault() stops browser\'s default action.',
  codeSolution: '// HTML: <a id="link" href="https://example.com">Link</a>\nconst link = document.getElementById("link");\nlink.addEventListener("click", function(event) {\n    event.preventDefault();\n    console.log("Navigation prevented!");\n    // Browser won\'t navigate to example.com\n});',
  hint: 'Common for form submission and link navigation.'
},
{
  id: 'js_dom_36',
  topicId: 'js_dom',
  question: 'Stop event propagation using stopPropagation() method.',
  mathSolution: 'stopPropagation() prevents event from bubbling up.',
  codeSolution: '// HTML: <div id="parent"><button id="child">Click</button></div>\nconst parent = document.getElementById("parent");\nconst child = document.getElementById("child");\nparent.addEventListener("click", () => console.log("Parent clicked"));\nchild.addEventListener("click", (event) => {\n    event.stopPropagation();\n    console.log("Child clicked");\n});\n// Clicking child only logs "Child clicked" (parent not triggered)',
  hint: 'stopPropagation() stops bubbling up the DOM tree.'
},
{
  id: 'js_dom_37',
  topicId: 'js_dom',
  question: 'Use event delegation with event.target property.',
  mathSolution: 'Listen on parent, check event.target for child.',
  codeSolution: '// HTML: <ul id="list"><li>Item1</li><li>Item2</li><li>Item3</li></ul>\nconst list = document.getElementById("list");\nlist.addEventListener("click", function(event) {\n    if (event.target.tagName === "LI") {\n        console.log("Clicked on:", event.target.textContent);\n    }\n});',
  hint: 'Event delegation works for dynamically added elements.'
},
{
  id: 'js_dom_38',
  topicId: 'js_dom',
  question: 'Get computed style using getComputedStyle() method.',
  mathSolution: 'getComputedStyle() returns final computed CSS values.',
  codeSolution: '// HTML: <div id="box" style="color: red; font-size: 16px">Text</div>\nconst box = document.getElementById("box");\nconst styles = getComputedStyle(box);\nconsole.log(styles.color);      // rgb(255, 0, 0)\nconsole.log(styles.fontSize);   // 16px',
  hint: 'Returns actual rendered styles, not just inline.'
},
{
  id: 'js_dom_39',
  topicId: 'js_dom',
  question: 'Get element position using getBoundingClientRect().',
  mathSolution: 'getBoundingClientRect() returns position relative to viewport.',
  codeSolution: '// HTML: <div id="box" style="width:100px; height:100px; margin:20px"></div>\nconst box = document.getElementById("box");\nconst rect = box.getBoundingClientRect();\nconsole.log(rect.top);     // distance from top of viewport\nconsole.log(rect.left);    // distance from left\nconsole.log(rect.width);   // 100\nconsole.log(rect.height);  // 100',
  hint: 'Returns DOMRect with top, left, right, bottom, width, height.'
},
{
  id: 'js_dom_40',
  topicId: 'js_dom',
  question: 'Scroll to element using scrollIntoView() method.',
  mathSolution: 'scrollIntoView() scrolls element into visible area.',
  codeSolution: '// HTML: <div id="target" style="margin-top: 1000px">Scroll to me</div>\nconst target = document.getElementById("target");\ntarget.scrollIntoView({ behavior: "smooth" });\n// Smoothly scrolls to the element',
  hint: 'Options: behavior: "smooth" or "auto", block: "start" or "end".'
},
{
  id: 'js_dom_41',
  topicId: 'js_dom',
  question: 'Get element dimensions including padding/border using offsetWidth/offsetHeight.',
  mathSolution: 'offsetWidth includes width + padding + border.',
  codeSolution: '// HTML: <div id="box" style="width:100px; padding:10px; border:5px solid black"></div>\nconst box = document.getElementById("box");\nconsole.log(box.offsetWidth);   // 100 + 20(padding) + 10(border) = 130\nconsole.log(box.clientWidth);   // 100 + 20(padding) = 120 (no border)',
  hint: 'offsetWidth = width + padding + border.'
},
{
  id: 'js_dom_42',
  topicId: 'js_dom',
  question: 'Insert HTML using insertAdjacentHTML() method.',
  mathSolution: 'insertAdjacentHTML(position, html) inserts HTML at specified position.',
  codeSolution: '// HTML: <div id="target">Existing</div>\nconst target = document.getElementById("target");\ntarget.insertAdjacentHTML("beforebegin", "<span>Before</span>");\ntarget.insertAdjacentHTML("afterbegin", "<span>First child</span>");\ntarget.insertAdjacentHTML("beforeend", "<span>Last child</span>");\ntarget.insertAdjacentHTML("afterend", "<span>After</span>");',
  hint: 'Positions: beforebegin, afterbegin, beforeend, afterend.'
},
{
  id: 'js_dom_43',
  topicId: 'js_dom',
  question: 'Get/set dataset attributes using dataset property.',
  mathSolution: 'dataset property gives access to data-* attributes.',
  codeSolution: '// HTML: <div id="user" data-id="123" data-user-name="John"></div>\nconst user = document.getElementById("user");\nconsole.log(user.dataset.id);        // 123\nconsole.log(user.dataset.userName);  // John (kebab-case to camelCase)\nuser.dataset.role = "admin";\n// Becomes: data-role="admin"',
  hint: 'data-user-name becomes dataset.userName.'
},
{
  id: 'js_dom_44',
  topicId: 'js_dom',
  question: 'Use matches() to check if element matches CSS selector.',
  mathSolution: 'matches() returns true if element matches selector.',
  codeSolution: '// HTML: <div class="box highlight" id="myDiv"></div>\nconst div = document.getElementById("myDiv");\nconsole.log(div.matches(".box"));        // true\nconsole.log(div.matches(".highlight"));   // true\nconsole.log(div.matches(".container"));   // false',
  hint: 'Useful for event delegation filtering.'
},
{
  id: 'js_dom_45',
  topicId: 'js_dom',
  question: 'Find closest ancestor matching selector using closest() method.',
  mathSolution: 'closest() traverses up finding matching element.',
  codeSolution: '// HTML: <div class="container"><div class="wrapper"><button>Click</button></div></div>\nconst button = document.querySelector("button");\nconst wrapper = button.closest(".wrapper");\nconst container = button.closest(".container");\nconsole.log(wrapper.className);    // wrapper\nconsole.log(container.className);  // container',
  hint: 'closest() includes current element.'
},
{
  id: 'js_dom_46',
  topicId: 'js_dom',
  question: 'Get/set form input values (radio, checkbox, select).',
  mathSolution: 'Different input types have different value properties.',
  codeSolution: '// HTML: <input type="checkbox" id="agree">\n//       <input type="radio" name="color" value="red" id="red">\n//       <select id="country"><option value="US">USA</option></select>\nconst checkbox = document.getElementById("agree");\nconsole.log(checkbox.checked);  // true/false\n\nconst radio = document.getElementById("red");\nconsole.log(radio.checked);  // true if selected\n\nconst select = document.getElementById("country");\nconsole.log(select.value);   // selected option value',
  hint: 'Use .checked for checkbox/radio, .value for select.'
},
{
  id: 'js_dom_47',
  topicId: 'js_dom',
  question: 'Focus element using focus() method.',
  mathSolution: 'focus() gives keyboard focus to element.',
  codeSolution: '// HTML: <input type="text" id="username">\nconst input = document.getElementById("username");\ninput.focus();\n// Input field receives focus for typing\nconsole.log(document.activeElement === input);  // true',
  hint: 'focus() works on input, button, links, and elements with tabindex.'
},
{
  id: 'js_dom_48',
  topicId: 'js_dom',
  question: 'Blur (remove focus) from element using blur() method.',
  mathSolution: 'blur() removes keyboard focus from element.',
  codeSolution: '// HTML: <input type="text" id="username" autofocus>\nconst input = document.getElementById("username");\ninput.blur();\nconsole.log(document.activeElement === input);  // false (body may be focused)',
  hint: 'blur() is opposite of focus().'
},
{
  id: 'js_dom_49',
  topicId: 'js_dom',
  question: 'Create and dispatch custom event.',
  mathSolution: 'CustomEvent constructor creates custom events.',
  codeSolution: '// HTML: <div id="myDiv">Listen for custom event</div>\nconst div = document.getElementById("myDiv");\n// Create custom event\nconst customEvent = new CustomEvent("myCustomEvent", {\n    detail: { message: "Hello from custom event!", timestamp: Date.now() }\n});\n// Listen to event\ndiv.addEventListener("myCustomEvent", function(event) {\n    console.log(event.detail.message);  // Hello from custom event!\n});\n// Dispatch event\ndiv.dispatchEvent(customEvent);',
  hint: 'CustomEvent can pass data via detail property.'
},
{
  id: 'js_dom_50',
  topicId: 'js_dom',
  question: 'Dynamic element creation and animation with requestAnimationFrame.',
  mathSolution: 'requestAnimationFrame creates smooth animations.',
  codeSolution: '// HTML: <div id="box" style="width:50px; height:50px; background:red; position:absolute"></div>\nconst box = document.getElementById("box");\nlet position = 0;\nlet direction = 1;\n\nfunction animate() {\n    position += direction * 2;\n    if (position >= 200 || position <= 0) {\n        direction *= -1;  // Reverse direction\n    }\n    box.style.left = position + "px";\n    requestAnimationFrame(animate);\n}\n\nanimate();  // Starts smooth animation\n// To stop: cancelAnimationFrame(animationId)',
  hint: 'requestAnimationFrame syncs with browser refresh rate (60fps).'
}
);