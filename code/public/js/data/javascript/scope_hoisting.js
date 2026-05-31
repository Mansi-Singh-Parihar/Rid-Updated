QuizData.questions.push(
{
  id: 'js_scope_1',
  topicId: 'js_scope',
  question: 'Demonstrate global scope by declaring a variable outside any function.',
  mathSolution: 'Global variables are accessible everywhere.',
  codeSolution: 'let globalVar = "I am global";\nfunction test() {\n    console.log(globalVar);  // I am global\n}\ntest();\nconsole.log(globalVar);  // I am global',
  hint: 'Variables declared outside functions are global.'
},
{
  id: 'js_scope_2',
  topicId: 'js_scope',
  question: 'Demonstrate function scope with var inside a function.',
  mathSolution: 'var is function-scoped, not accessible outside.',
  codeSolution: 'function test() {\n    var funcVar = "Inside function";\n    console.log(funcVar);  // Inside function\n}\ntest();\n// console.log(funcVar);  // ReferenceError',
  hint: 'var variables are scoped to the function they are declared in.'
},
{
  id: 'js_scope_3',
  topicId: 'js_scope',
  question: 'Demonstrate block scope with let inside an if block.',
  mathSolution: 'let is block-scoped, accessible only within {} braces.',
  codeSolution: 'if (true) {\n    let blockVar = "Inside block";\n    console.log(blockVar);  // Inside block\n}\n// console.log(blockVar);  // ReferenceError',
  hint: 'let and const are block-scoped, var is not.'
},
{
  id: 'js_scope_4',
  topicId: 'js_scope',
  question: 'Demonstrate block scope with const inside a for loop.',
  mathSolution: 'const creates new binding for each loop iteration.',
  codeSolution: 'for (const i = 0; i < 3; i++) {\n    // i is block-scoped to each iteration\n    console.log(i);  // Works in for...of, not regular for loop\n}\n// Better example:\nconst arr = [1, 2, 3];\nfor (const num of arr) {\n    console.log(num);  // 1,2,3 (const works here)\n}',
  hint: 'const in for...of creates new binding per iteration.'
},
{
  id: 'js_scope_5',
  topicId: 'js_scope',
  question: 'Show that var ignores block scope (leaks outside if block).',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'if (true) {\n    var leakVar = "I leak out!";\n}\nconsole.log(leakVar);  // I leak out! (accessible outside block)',
  hint: 'var variables escape block boundaries.'
},
{
  id: 'js_scope_6',
  topicId: 'js_scope',
  question: 'Demonstrate lexical scoping (nested functions access outer variables).',
  mathSolution: 'Inner functions have access to outer function variables.',
  codeSolution: 'function outer() {\n    let outerVar = "I am outer";\n    function inner() {\n        console.log(outerVar);  // I am outer\n    }\n    inner();\n}\nouter();',
  hint: 'Lexical scope means inner functions can access outer variables.'
},
{
  id: 'js_scope_7',
  topicId: 'js_scope',
  question: 'Demonstrate variable hoisting with var (declaration hoisted, not assignment).',
  mathSolution: 'var declarations move to top, initialized with undefined.',
  codeSolution: 'console.log(hoistedVar);  // undefined (no error)\nvar hoistedVar = "Value";\nconsole.log(hoistedVar);  // Value',
  hint: 'var is hoisted but not initialized.'
},
{
  id: 'js_scope_8',
  topicId: 'js_scope',
  question: 'Show that let is hoisted but in Temporal Dead Zone (TDZ).',
  mathSolution: 'let is hoisted but cannot be accessed before declaration.',
  codeSolution: '// console.log(tdzVar);  // ReferenceError: Cannot access before initialization\nlet tdzVar = "Safe now";\nconsole.log(tdzVar);  // Safe now',
  hint: 'TDZ exists from block start until let declaration.'
},
{
  id: 'js_scope_9',
  topicId: 'js_scope',
  question: 'Show that const is also hoisted with TDZ like let.',
  mathSolution: 'const has same hoisting behavior as let.',
  codeSolution: '// console.log(CONST_VAR);  // ReferenceError\nconst CONST_VAR = "Constant";\nconsole.log(CONST_VAR);  // Constant',
  hint: 'const is also in TDZ before declaration.'
},
{
  id: 'js_scope_10',
  topicId: 'js_scope',
  question: 'Demonstrate function hoisting (function declarations are hoisted completely).',
  mathSolution: 'Function declarations are fully hoisted, can be called before definition.',
  codeSolution: 'console.log(sayHello("John"));  // Hello, John!\nfunction sayHello(name) {\n    return `Hello, ${name}!`;\n}',
  hint: 'Function declarations are hoisted with their definition.'
},
{
  id: 'js_scope_11',
  topicId: 'js_scope',
  question: 'Show that function expressions are not hoisted like declarations.',
  mathSolution: 'Variable declaration is hoisted, assignment is not.',
  codeSolution: '// console.log(sayHi("John"));  // TypeError: sayHi is not a function\nvar sayHi = function(name) {\n    return `Hi, ${name}!`;\n};\nconsole.log(sayHi("John"));  // Hi, John!',
  hint: 'Function expressions follow variable hoisting rules.'
},
{
  id: 'js_scope_12',
  topicId: 'js_scope',
  question: 'Demonstrate scope chain resolution (variable lookup).',
  mathSolution: 'JavaScript looks up scope chain from inner to outer.',
  codeSolution: 'let global = "global";\nfunction outer() {\n    let outerVar = "outer";\n    function inner() {\n        let innerVar = "inner";\n        console.log(innerVar);  // inner (own scope)\n        console.log(outerVar);  // outer (outer scope)\n        console.log(global);    // global (global scope)\n    }\n    inner();\n}\nouter();',
  hint: 'Scope chain goes from inner to outer to global.'
},
{
  id: 'js_scope_13',
  topicId: 'js_scope',
  question: 'Demonstrate variable shadowing (inner variable overrides outer).',
  mathSolution: 'Inner scope variable shadows outer variable of same name.',
  codeSolution: 'let message = "Outer";\nfunction test() {\n    let message = "Inner";\n    console.log(message);  // Inner (shadows outer)\n}\ntest();\nconsole.log(message);  // Outer',
  hint: 'Inner scope variables take precedence over outer.'
},
{
  id: 'js_scope_14',
  topicId: 'js_scope',
  question: 'Show that var is function-scoped, not block-scoped in loops.',
  mathSolution: 'var in loop accessible outside loop (function scope).',
  codeSolution: 'for (var i = 0; i < 3; i++) {\n    var loopVar = i;\n}\nconsole.log(i);        // 3 (accessible)\nconsole.log(loopVar);  // 2 (accessible)',
  hint: 'var in loop leaks out of the loop block.'
},
{
  id: 'js_scope_15',
  topicId: 'js_scope',
  question: 'Show that let is block-scoped and creates separate binding in loops.',
  mathSolution: 'let creates new binding for each loop iteration.',
  codeSolution: 'for (let i = 0; i < 3; i++) {\n    // i is only accessible inside\n}\n// console.log(i);  // ReferenceError\n\n// Classic example with setTimeout\nfor (let i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);  // 0,1,2 (correct)\n}',
  hint: 'let creates block-scoped binding per iteration.'
},
{
  id: 'js_scope_16',
  topicId: 'js_scope',
  question: 'Show classic var loop problem with setTimeout.',
  mathSolution: 'var shares same variable across all iterations.',
  codeSolution: 'for (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);  // 3,3,3 (not 0,1,2)\n}\n// Fix with IIFE:\nfor (var i = 0; i < 3; i++) {\n    (function(j) {\n        setTimeout(() => console.log(j), 100);  // 0,1,2\n    })(i);\n}',
  hint: 'var creates single binding, let creates per-iteration binding.'
},
{
  id: 'js_scope_17',
  topicId: 'js_scope',
  question: 'Demonstrate block scope using {} braces with let and const.',
  mathSolution: 'Any {} creates a block scope for let/const.',
  codeSolution: '{\n    let blockLet = "Inside block";\n    const blockConst = "Also inside block";\n    console.log(blockLet);   // Inside block\n    console.log(blockConst); // Also inside block\n}\n// console.log(blockLet);   // ReferenceError\n// console.log(blockConst); // ReferenceError',
  hint: 'Curly braces alone create block scope for let/const.'
},
{
  id: 'js_scope_18',
  topicId: 'js_scope',
  question: 'Show that var variables become properties of global object (in browsers).',
  mathSolution: 'Global var creates property on window object.',
  codeSolution: 'var globalVar = "I am global";\n// In browser: console.log(window.globalVar);  // I am global\nconsole.log(globalThis.globalVar);  // I am global (Node/browser)',
  hint: 'Global var adds to globalThis object.'
},
{
  id: 'js_scope_19',
  topicId: 'js_scope',
  question: 'Show that let and const do NOT become properties of global object.',
  mathSolution: 'let/const in global scope don\'t add to global object.',
  codeSolution: 'let globalLet = "Not on window";\nconst globalConst = "Also not on window";\n// In browser: console.log(window.globalLet);  // undefined\n// console.log(window.globalConst);  // undefined\nconsole.log(globalThis.globalLet);  // undefined',
  hint: 'let/const don\'t pollute global object.'
},
{
  id: 'js_scope_20',
  topicId: 'js_scope',
  question: 'Demonstrate nested function scope (multiple levels).',
  mathSolution: 'Functions create scope at each level of nesting.',
  codeSolution: 'function level1() {\n    let a = "level1";\n    function level2() {\n        let b = "level2";\n        function level3() {\n            let c = "level3";\n            console.log(a, b, c);  // level1 level2 level3\n        }\n        level3();\n    }\n    level2();\n}\nlevel1();',
  hint: 'Each function creates its own scope level.'
},
{
  id: 'js_scope_21',
  topicId: 'js_scope',
  question: 'Demonstrate that var is function-scoped, not block-scoped in switch.',
  mathSolution: 'var in switch case accessible throughout function.',
  codeSolution: 'function testSwitch(choice) {\n    switch(choice) {\n        case 1:\n            var switchVar = "I am in case 1";\n            break;\n        case 2:\n            console.log(switchVar);  // accessible! (undefined if case 1 not run)\n            break;\n    }\n}\ntestSwitch(2);  // undefined',
  hint: 'var ignores switch block boundaries.'
},
{
  id: 'js_scope_22',
  topicId: 'js_scope',
  question: 'Demonstrate that let is block-scoped in switch statement.',
  mathSolution: 'let in switch case is scoped to that case block.',
  codeSolution: 'switch(1) {\n    case 1: {\n        let blockScoped = "Only in case 1";\n        console.log(blockScoped);  // Only in case 1\n        break;\n    }\n    case 2: {\n        // console.log(blockScoped);  // ReferenceError\n        break;\n    }\n}',
  hint: 'Use {} to create block scope in switch cases for let/const.'
},
{
  id: 'js_scope_23',
  topicId: 'js_scope',
  question: 'Demonstrate that functions create closure (retain outer scope).',
  mathSolution: 'Inner function retains access to outer variables even after outer returns.',
  codeSolution: 'function outerFunction(x) {\n    return function innerFunction(y) {\n        return x + y;  // x is from outer scope (closure)\n    };\n}\nconst add5 = outerFunction(5);\nconsole.log(add5(3));  // 8 (closure retains x=5)',
  hint: 'Closures remember the scope they were created in.'
},
{
  id: 'js_scope_24',
  topicId: 'js_scope',
  question: 'Demonstrate script scope vs module scope.',
  mathSolution: 'Modules have their own scope, variables not global.',
  codeSolution: '// In a module file (.mjs or with type="module")\n// let moduleVar = "Only in this module";\n// console.log(window.moduleVar);  // undefined\n// Global scope in module is different from script global.',
  hint: 'ES modules have their own top-level scope.'
},
{
  id: 'js_scope_25',
  topicId: 'js_scope',
  question: 'Demonstrate that arrow functions inherit scope (lexical this).',
  mathSolution: 'Arrow functions don\'t create their own this, they inherit from outer scope.',
  codeSolution: 'const obj = {\n    name: "Object",\n    regular: function() {\n        console.log(this.name);  // Object\n    },\n    arrow: () => {\n        console.log(this.name);  // undefined (outer this)\n    }\n};\nobj.regular();\nobj.arrow();',
  hint: 'Arrow functions use lexical this from surrounding scope.'
},
{
  id: 'js_scope_26',
  topicId: 'js_scope',
  question: 'Demonstrate that eval can access local scope (dangerous).',
  mathSolution: 'eval can access and modify local variables (use with caution).',
  codeSolution: 'function testEval() {\n    let secret = "secret value";\n    eval("console.log(secret)");  // secret value\n    eval("secret = \'modified\'");\n    console.log(secret);  // modified\n}\ntestEval();',
  hint: 'eval executes code in current scope (avoid using).'
},
{
  id: 'js_scope_27',
  topicId: 'js_scope',
  question: 'Demonstrate that with statement extends scope chain (deprecated).',
  mathSolution: 'with adds object properties to scope chain (avoid using).',
  codeSolution: 'const person = { name: "Alice", age: 25 };\nwith(person) {\n    console.log(name);  // Alice\n    console.log(age);   // 25\n}\n// Not recommended - causes ambiguity',
  hint: 'with is deprecated and not allowed in strict mode.'
},
{
  id: 'js_scope_28',
  topicId: 'js_scope',
  question: 'Demonstrate variable redeclaration allowed with var but not let/const.',
  mathSolution: 'var allows redeclaration, let/const throw error.',
  codeSolution: 'var x = 1;\nvar x = 2;  // Works fine\nconsole.log(x);  // 2\n\nlet y = 1;\n// let y = 2;  // SyntaxError: Identifier already declared\n\nconst z = 1;\n// const z = 2;  // SyntaxError',
  hint: 'let and const cannot be redeclared in same scope.'
},
{
  id: 'js_scope_29',
  topicId: 'js_scope',
  question: 'Demonstrate block scope in try-catch block.',
  mathSolution: 'try-catch creates block scope for error variable.',
  codeSolution: 'try {\n    throw new Error("Something went wrong");\n} catch (error) {\n    console.log(error.message);  // Something went wrong\n}\n// console.log(error);  // ReferenceError (error scoped to catch block)',
  hint: 'Error variable in catch is block-scoped.'
},
{
  id: 'js_scope_30',
  topicId: 'js_scope',
  question: 'Demonstrate that function parameters have function scope.',
  mathSolution: 'Parameters are scoped to the function body.',
  codeSolution: 'function testParams(param) {\n    console.log(param);  // parameter value\n    var param = "overwritten";  // Possible but confusing\n    console.log(param);  // overwritten\n}\ntestParams("original");\n// console.log(param);  // ReferenceError',
  hint: 'Parameters behave like local variables in function.'
},
{
  id: 'js_scope_31',
  topicId: 'js_scope',
  question: 'Demonstrate that default parameters create their own scope.',
  mathSolution: 'Default parameters have their own scope separate from function body.',
  codeSolution: 'let x = 10;\nfunction test(y = x) {  // x from outer scope\n    let x = 20;  // This x shadows outer\n    console.log(y);  // 10 (outer x, not inner)\n}\ntest();',
  hint: 'Default parameters are evaluated in outer scope, not function scope.'
},
{
  id: 'js_scope_32',
  topicId: 'js_scope',
  question: 'Demonstrate temporal dead zone (TDZ) with let in detail.',
  mathSolution: 'TDZ is period from entering block until actual declaration.',
  codeSolution: '{\n    // TDZ for myVar starts\n    // console.log(myVar);  // ReferenceError\n    let myVar = "Now initialized";\n    console.log(myVar);  // Now initialized (TDZ ends)\n}',
  hint: 'Cannot access let variables before declaration line.'
},
{
  id: 'js_scope_33',
  topicId: 'js_scope',
  question: 'Demonstrate TDZ with typeof (safe for var but not let).',
  mathSolution: 'typeof on undeclared var returns undefined, but on let in TDZ throws.',
  codeSolution: 'console.log(typeof undeclaredVar);  // undefined (safe)\n\n// console.log(typeof tdzVar);  // ReferenceError (cannot use typeof in TDZ)\nlet tdzVar = "value";\nconsole.log(typeof tdzVar);  // string (after declaration)',
  hint: 'Accessing let variable in TDZ throws ReferenceError even with typeof.'
},
{
  id: 'js_scope_34',
  topicId: 'js_scope',
  question: 'Demonstrate that catch block parameters are block-scoped.',
  mathSolution: 'Error parameter in catch is scoped to catch block only.',
  codeSolution: 'try {\n    throw new Error("Custom error");\n} catch (err) {\n    console.log(err.message);  // Custom error\n    // err is scoped to this catch block\n}\n// console.log(err);  // ReferenceError',
  hint: 'Each catch block has its own error variable scope.'
},
{
  id: 'js_scope_35',
  topicId: 'js_scope',
  question: 'Demonstrate scope with IIFE (Immediately Invoked Function Expression).',
  mathSolution: 'IIFE creates private scope, variables not leak to global.',
  codeSolution: '(function() {\n    var privateVar = "This is private";\n    console.log(privateVar);  // This is private\n})();\n// console.log(privateVar);  // ReferenceError (private)\n\n// Arrow function IIFE\n(() => {\n    let arrowPrivate = "Also private";\n    console.log(arrowPrivate);  // Also private\n})();',
  hint: 'IIFE creates isolated scope for private variables.'
},
{
  id: 'js_scope_36',
  topicId: 'js_scope',
  question: 'Demonstrate that global variables can be accessed via globalThis.',
  mathSolution: 'globalThis provides standard way to access global object.',
  codeSolution: 'var globalVar = "I am global";\nlet notGlobal = "Not on globalThis";\nconsole.log(globalThis.globalVar);  // I am global\nconsole.log(globalThis.notGlobal);   // undefined (let doesn\'t attach)',
  hint: 'Use globalThis for cross-platform global access.'
},
{
  id: 'js_scope_37',
  topicId: 'js_scope',
  question: 'Demonstrate that const cannot be reassigned but object properties can change.',
  mathSolution: 'const prevents reassignment, not mutation.',
  codeSolution: 'const obj = { name: "Original" };\nobj.name = "Modified";  // Allowed (property mutation)\nconsole.log(obj.name);  // Modified\n// obj = { newObj: true };  // TypeError (reassignment not allowed)',
  hint: 'const only prevents reassignment of the binding itself.'
},
{
  id: 'js_scope_38',
  topicId: 'js_scope',
  question: 'Demonstrate that var variables are added to global object in strict mode too.',
  mathSolution: 'var always adds to global object in global scope, even in strict mode.',
  codeSolution: '"use strict";\nvar strictVar = "Still on global";\nconsole.log(globalThis.strictVar);  // Still on global\n\nlet strictLet = "Not on global";\nconsole.log(globalThis.strictLet);   // undefined',
  hint: 'Global var always adds to globalThis, even in strict mode.'
},
{
  id: 'js_scope_39',
  topicId: 'js_scope',
  question: 'Demonstrate block scope in for loop with let (each iteration new binding).',
  mathSolution: 'let creates new binding for each loop iteration.',
  codeSolution: 'const functions = [];\nfor (let i = 0; i < 3; i++) {\n    functions.push(() => console.log(i));\n}\nfunctions[0]();  // 0\nfunctions[1]();  // 1\nfunctions[2]();  // 2\n// Each closure has its own i variable',
  hint: 'let creates per-iteration binding in for loops.'
},
{
  id: 'js_scope_40',
  topicId: 'js_scope',
  question: 'Demonstrate that var in for loop creates single binding across iterations.',
  mathSolution: 'var is function-scoped, so same variable for all iterations.',
  codeSolution: 'const functions = [];\nfor (var i = 0; i < 3; i++) {\n    functions.push(() => console.log(i));\n}\nfunctions[0]();  // 3\nfunctions[1]();  // 3\nfunctions[2]();  // 3\n// All closures share the same i variable',
  hint: 'var creates single binding across loop iterations.'
},
{
  id: 'js_scope_41',
  topicId: 'js_scope',
  question: 'Demonstrate function declaration vs function expression hoisting difference.',
  mathSolution: 'Declarations fully hoisted, expressions follow variable hoisting.',
  codeSolution: '// Function declaration (fully hoisted)\nconsole.log(declaration());  // Works: "Declaration"\nfunction declaration() { return "Declaration"; }\n\n// Function expression (not hoisted)\n// console.log(expression());  // TypeError\nvar expression = function() { return "Expression"; };\nconsole.log(expression());  // Works: "Expression"',
  hint: 'Only function declarations are hoisted completely.'
},
{
  id: 'js_scope_42',
  topicId: 'js_scope',
  question: 'Demonstrate that class declarations are block-scoped (not hoisted like functions).',
  mathSolution: 'Class declarations are hoisted but not initialized (TDZ).',
  codeSolution: '// console.log(MyClass);  // ReferenceError (TDZ)\nclass MyClass {}\nconsole.log(MyClass);  // Works\n\n// const MyClassExpr = class {};  // Class expression\n// console.log(MyClassExpr);  // Works as variable hoisting',
  hint: 'Class declarations are in TDZ like let and const.'
},
{
  id: 'js_scope_43',
  topicId: 'js_scope',
  question: 'Demonstrate name collisions with global and local variables.',
  mathSolution: 'Local variables take precedence over globals with same name.',
  codeSolution: 'let message = "Global";\nfunction showMessage() {\n    let message = "Local";\n    console.log(message);  // Local (shadows global)\n}\nshowMessage();\nconsole.log(message);  // Global',
  hint: 'Local scope overrides global scope.'
},
{
  id: 'js_scope_44',
  topicId: 'js_scope',
  question: 'Demonstrate that window object properties are accessible as global variables.',
  mathSolution: 'Global object properties behave like global variables.',
  codeSolution: '// In browser:\n// window.customProp = "Custom";\n// console.log(customProp);  // Custom\n\n// In Node:\nglobalThis.customProp = "Custom";\nconsole.log(customProp);  // Custom',
  hint: 'Global object properties become global variables.'
},
{
  id: 'js_scope_45',
  topicId: 'js_scope',
  question: 'Demonstrate that var allows multiple declarations (no error).',
  mathSolution: 'var can be redeclared any number of times.',
  codeSolution: 'var count = 1;\nvar count = 2;\nvar count = 3;\nconsole.log(count);  // 3 (no error)',
  hint: 'var redeclaration is allowed and overwrites.'
},
{
  id: 'js_scope_46',
  topicId: 'js_scope',
  question: 'Demonstrate that let in different blocks are different variables.',
  mathSolution: 'let in different blocks creates separate variables.',
  codeSolution: '{\n    let shared = "Block 1";\n    console.log(shared);  // Block 1\n}\n{\n    let shared = "Block 2";  // Different variable, same name\n    console.log(shared);  // Block 2\n}\n// No conflict - different scopes',
  hint: 'let in separate blocks creates independent variables.'
},
{
  id: 'js_scope_47',
  topicId: 'js_scope',
  question: 'Demonstrate that const must be initialized at declaration.',
  mathSolution: 'const requires initializer; can\'t be declared without value.',
  codeSolution: 'const VALID = "Initialized";  // OK\n// const INVALID;  // SyntaxError: Missing initializer\nconsole.log(VALID);  // Initialized',
  hint: 'const variables must be assigned when declared.'
},
{
  id: 'js_scope_48',
  topicId: 'js_scope',
  question: 'Demonstrate that block scope works in if, else, for, while, switch.',
  mathSolution: 'All block statements create scope for let/const.',
  codeSolution: 'if (true) { let a = 1; }\n// console.log(a);  // ReferenceError\n\nwhile (false) { let b = 2; }\n// console.log(b);  // ReferenceError\n\nfor (let c = 0; c < 1; c++) { }\n// console.log(c);  // ReferenceError',
  hint: 'Any {} creates a block scope for let/const.'
},
{
  id: 'js_scope_49',
  topicId: 'js_scope',
  question: 'Demonstrate that function parameters are in their own scope (not same as function body).',
  mathSolution: 'Parameters are in a separate environment from function body.',
  codeSolution: 'function test(a = 1) {\n    var a = 2;  // Allowed but confusing (same binding)\n    console.log(a);  // 2\n}\ntest();\n\nfunction test2(b) {\n    let b = 5;  // SyntaxError: Cannot redeclare parameter\n}\n// test2();',
  hint: 'Parameters and var share same binding; let/const cannot redeclare parameters.'
},
{
  id: 'js_scope_50',
  topicId: 'js_scope',
  question: 'Comprehensive example: Scope in nested blocks with var, let, const.',
  mathSolution: 'Demonstrate all three variable types in nested scopes.',
  codeSolution: 'let global = "global";\nfunction demo() {\n    var functional = "functional (var)";\n    let blockLevel = "block (let)";\n    const CONSTANT = "constant (const)";\n    \n    if (true) {\n        var stillFunctional = "still functional (var leaks)";\n        let blockScoped = "block scoped (let)";\n        const constBlock = "const block scoped";\n        \n        console.log(functional);       // accessible\n        console.log(blockLevel);       // accessible\n        console.log(CONSTANT);         // accessible\n        console.log(stillFunctional);  // accessible\n        console.log(blockScoped);      // accessible\n    }\n    \n    console.log(stillFunctional);  // accessible (var leaks)\n    // console.log(blockScoped);   // ReferenceError (let block-scoped)\n    // console.log(constBlock);    // ReferenceError (const block-scoped)\n}\ndemo();\nconsole.log(global);          // accessible\n// console.log(functional);    // ReferenceError (function scope)',
  hint: 'var is function-scoped, let/const are block-scoped.'
}
);