document.addEventListener('DOMContentLoaded', () => {
    // We want to create a new const that we can later refer back to when we want to append html elements to it
    const contentAppend = document.querySelector('tbody.displayContent');
    const mainBody = document.getElementsByTagName('body');

    // Example of the json file that would be created every 5 minutes with my python program
    const json_File = [[{"name": "Kasper Thörnsten", "points" : "6,903 Points", "url" : "/community/why-is-it-bad-to-use-multiple-if-statemets-when-its-for-the-same-statement", "title" : "Why is it bad to use multiple if statemets when it's for the same statement?", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  9:33pm","tags": "['Java']"},{"name": "Rachell A", "points" : "477 Points", "url" : "/community/grid-layout-and-pseudo-selectors", "title" : "Grid Layout and Pseudo Selectors", "numAnswered" : "0", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  9:02pm","tags": "['CSS']"},{"name": "ALBERT VASQUEZ", "points" : "243 Points", "url" : "/community/hey-guys-thanks-for-your-time-ive-got-my-function-down-i-cant-seem-to-figure-out-how-to-add-the-next-steps-correctly", "title" : "Hey guys thanks for your time, I've got my function down I can't seem to figure out how to add the next steps correctly", "numAnswered" : "2", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  8:56pm","tags": "['JavaScript', 'JavaScript Functions', 'Pass Information Into Functions', 'Create a max() Function']"},{"name": "travis halarewich", "points" : "6,275 Points", "url" : "/community/confusion-on-the-syntax-for-getters", "title" : "confusion on the syntax for getters", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  8:11pm","tags": "['JavaScript', 'Object-Oriented JavaScript', 'Getters and Setters', 'Getters']"},{"name": "Tremayne Moncrief", "points" : "2,239 Points", "url" : "/community/i-can-not-figure-out-why-i-can-not-get-the-correct-answer-for-challenge-task-2-updating-tables", "title" : "I can not figure out why I can not get the correct answer for Challenge Task 2 updating tables", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  7:01pm","tags": "['Databases', 'Modifying Data with SQL', 'Updating Data in a Database', 'Updating Data With SQL']"},{"name": "Abhishek Patil", "points" : "2,708 Points", "url" : "/community/can-someone-please-help-me-solve-this-2", "title" : "Can someone please help me solve this?", "numAnswered" : "3", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  6:19pm","tags": "['Java', 'Java Objects', 'Creating the MVP', 'Scrabble Tiles']"},{"name": "Luis Ponce de Leon", "points" : "1,722 Points", "url" : "/community/i-am-stuck-where-can-i-get-help-on-debugging-the-code-for-the-exercise", "title" : "I am stuck. Where can I get help on debugging the code for the exercise?", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  6:07pm","tags": "['JavaScript', 'JavaScript Loops, Arrays and Objects', 'Simplify Repetitive Tasks with Loops', 'Refactor Using a Loop']"},{"name": "Sam Cerwinske", "points" : "834 Points", "url" : "/community/print-only-continents", "title" : "print only continents", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  6:02pm","tags": "['Python', 'Introducing Lists', 'Using Lists', 'Continental']"},{"name": "Erick Rojas", "points" : "792 Points", "url" : "/community/return-in-ruby", "title" : "Return in ruby", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  5:35pm","tags": "['Ruby', 'Ruby Collections', 'Build a Grocery List Program', 'Build a Grocery List Program: Part 1']"},{"name": "Naomi Mitchell", "points" : "621 Points", "url" : "/community/i-did-not-understand-anything-about-the-for-each-loop-please-could-someone-explain-this-to-me-and-how-i-would-use-it", "title" : "I did not understand anything about the For each loop please could someone explain this to me and how i would use it?", "numAnswered" : "2", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  5:26pm","tags": "['Java', 'For Each']"},{"name": "kilian garland", "points" : "949 Points", "url" : "/community/in-the-css-file-use-the-class-to-give-both-a-tags-15px-of-padding-and-10px-of-margin-sociallinks15px-a", "title" : "In the CSS file, use the class to give both <a> tags 15px of padding and 10px of margin.   .social-links:15px {  <a>", "numAnswered" : "2", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  5:20pm","tags": "['HTML', 'Introduction to HTML and CSS', 'Make It Beautiful With CSS', ' Adding a Style to several Elements using Class']"},{"name": "Brittany Deaton", "points" : "277 Points", "url" : "/community/return-vs-result", "title" : "return vs result", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  4:39pm","tags": "['Python', 'Python Basics', 'Functions and Looping', 'Returning Values']"},{"name": "Shenerica Hines", "points" : "1,514 Points", "url" : "/community/variable-named-correct", "title" : "Variable named correct", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  4:25pm","tags": "['JavaScript', 'JavaScript Basics', 'Making Decisions in Your Code with Conditional Statements', 'The Conditional Challenge Solution']"},{"name": "Jason Loveless", "points" : "726 Points", "url" : "/community/this-function-should-return-one-value-the-string-hello-followed-by-the-value-of-the-name-parameter", "title" : "This function should return one value, the string 'Hello ' followed by the value of the name parameter.", "numAnswered" : "2", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  4:13pm","tags": "['Python', 'Functions, Packing,  and Unpacking', 'Getting Info In and Out of Functions', 'Functions with Arguments and Returns']"},{"name": "Nic Harrington", "points" : "255 Points", "url" : "/community/c-basic-coding-challenge-not-working", "title" : "C# Basic Coding Challenge -  Not Working", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  4:05pm","tags": "['C#', 'C# Basics', 'Strings', 'Strings']"},{"name": "Kathelyn Zelaya", "points" : "30 Points", "url" : "/community/material-design-modal-side-sheets-android-implemenation", "title" : "Material Design Modal Side Sheets Android Implemenation", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  2:46pm","tags": "['Design', 'Getting Started With Material Design', 'Material Design Components', 'Design a Side Sheet']"},{"name": "Tetsuya Yokoyama", "points" : "10,028 Points", "url" : "/community/is-it-possible-to-put-new-tokenthis-i-directly-into-push", "title" : "Is it possible to put new Token(this, i) directly into push()?", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  2:41pm","tags": "['JavaScript', 'Object-Oriented JavaScript: Challenge', 'Building Constructor Methods and Generating Objects', 'createTokens() Method Solution']"},{"name": "malcolm mowlam", "points" : "1,840 Points", "url" : "/community/can-anybody-please-help-with-challenge-task-4-of-6-css-please", "title" : "can anybody please help with challenge task 4 of 6 css please", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  2:36pm","tags": "['CSS', 'CSS Basics', 'Basic Selectors', 'ID and Class Selectors']"},{"name": "Spencer Hurrle", "points" : "2,131 Points", "url" : "/community/im-progressing-but-i-dont-understand-the-formatting", "title" : "I'm progressing, but I don't understand the formatting", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020  2:06pm","tags": "['Python', 'Write Better Python', 'Buggy Logs', 'Log Messages']"},{"name": "Itsa Snake", "points" : "3,729 Points", "url" : "/community/concatenating-correct-use-of-converting-int-to-str", "title" : "Concatenating - correct use of converting int to str?", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  1:58pm","tags": "['Python', 'Object-Oriented Python', 'Inheritance', 'Instances']"},{"name": "justinw", "points" : "14,485 Points", "url" : "/community/how-do-we-get-the-100-days-of-code-badge", "title" : "How do we get the 100 Days of Code Badge?", "numAnswered" : "2", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  1:36pm","tags": "['General Discussion']"},{"name": "Terence Hung", "points" : "1,602 Points", "url" : "/community/quiz-question-whats-one-of-the-main-ux-issues-when-onboarding-new-users-to-an-application-doesnt-have-an-answer", "title" : "Quiz question What's one of the main UX issues when onboarding new users to an application? doesn't have an answer", "numAnswered" : "2", "questionAnswered" : "False", "timeOfPost": "May 21, 2020  1:18pm","tags": "['Design', 'UX Design Patterns', 'UI Patterns', 'Content, Data, and Tutorialization Patterns']"},{"name": "Joseph Harlow", "points" : "4,573 Points", "url" : "/community/finally-create-a-rule-that-targets-an-h1-use-the-pxtorem-function-to-convert-a-fontsize-value-of-60px-to-a-value-in-3", "title" : "Finally, create a rule that targets an h1. Use the px-to-rem function to convert a font-size value of 60px to a value in", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020 12:50pm","tags": "['CSS', 'Sass Basics', 'Write Smart and Efficient CSS with Sass', 'Write a Sass Function']"},{"name": "Dorota Parzych", "points" : "5,497 Points", "url" : "/community/something-in-my-code-is-not-working", "title" : "something in my code is not working", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020 12:26pm","tags": "['JavaScript', 'JavaScript and the DOM', 'Traversing the DOM', 'Getting All Children of a Node with children']"},{"name": "Humza Malak", "points" : "1,232 Points", "url" : "/community/object-orientated-python-race-car-task-12", "title" : "Object Orientated Python: Race Car task 1/2", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020 12:11pm","tags": "['Python', 'Object-Oriented Python', 'Instant Objects', 'Master Class']"},{"name": "Manish Singh", "points" : "425 Points", "url" : "/community/-add-a-getter-method-that-exposes-the-color-field-2", "title" : "Add a getter method that exposes the color field.", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020 11:20am","tags": "['Java', 'Java Objects', 'Meet Objects', 'Add a Getter']"},{"name": "Alexander Stack", "points" : "1,814 Points", "url" : "/community/random-quote-generator-working-but-something-is-coming-undefined", "title" : "random quote generator working but something is coming undefined", "numAnswered" : "1", "questionAnswered" : "True", "timeOfPost": "May 21, 2020 11:06am","tags": "['JavaScript']"},{"name": "Joseff Kitchen", "points" : "4,417 Points", "url" : "/community/transitionduration", "title" : "transition-duration?", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020 11:03am","tags": "['CSS', 'CSS Transitions and Transforms', 'Getting Started with CSS Transitions', 'Creating Your First Transition with transition-duration']"},{"name": "sylkie1", "points" : "5,604 Points", "url" : "/community/treehouse-is-telling-me-this-is-wrong-that-the-price-doesnt-match-the-original-listing-im-stuck-and-not-sure", "title" : "Treehouse is telling me this is wrong, that the price doesn't match the original listing. I'm stuck and not sure.", "numAnswered" : "2", "questionAnswered" : "True", "timeOfPost": "May 21, 2020 10:50am","tags": "['JavaScript', 'JavaScript Basics', 'Working with Strings', 'Write a Template Literal']"},{"name": "Humza Malak", "points" : "1,232 Points", "url" : "/community/object-orientated-python-task-1-of-2", "title" : "Object Orientated Python - Task 1 of 2", "numAnswered" : "1", "questionAnswered" : "False", "timeOfPost": "May 21, 2020 10:10am","tags": "['Python', 'Object-Oriented Python', 'Instant Objects', '__init__']"}]];

    // We then loop through the json file and give the neccessary parameters to the createTR function
    json_File[0].forEach(person => createTR(person.name, person.points, person.title, person.url, person.timeOfPost, person.numAnswered, person.questionAnswered, person.tags))

    // Here createTR function accepts the parameters and within it there are 2 other functions that create the desired element and then that element will be
    // appended to the <tr> element
    function createTR(name, points, title, url, timeOfPost, numAnswered, questionAnswered, tags) {
        function createElement(elementName, property, value) {
            const element = document.createElement(elementName);
            element[property] = value;
            if (element.tagName === 'A') {element.target = '_blank'};
            return element
        }

        function appendToTR(elementName, property, value) {
            const element = createElement(elementName, property, value);
            tr.appendChild(element);
            return element;
        }

        // This will be the tr element that we will be appending all the other elements, in this case, all the <td> elements
        const tr = document.createElement('tr');
        if (parseInt(numAnswered) > 0) tr.className = 'table-primary';
        if (parseInt(numAnswered) == 0) tr.className = 'table-danger';
        if (questionAnswered == "True") tr.className = 'table-success';
        appendToTR('td', 'textContent', `${name} (${points})`);
        appendToTR('a', 'href', `https://teamtreehouse.com${url}`)
            .appendChild(createElement('td', 'textContent', `${title}`));
        appendToTR('td', 'textContent', timeOfPost);
        appendToTR('td', 'textContent', numAnswered);
        appendToTR('td', 'textContent', questionAnswered);
        appendToTR('td', 'textContent', tags);

        // And finally, here we just append the <tr> element that we created above to the contentAppend which is where we append all the <tr> elements
        contentAppend.appendChild(tr);
    };

    // Here we want to have references for elements in the toggle button
    const modeSelector = document.querySelector('div.screenMode');
    const modeDecider = document.getElementById('switch1');
    // By default 'checked' will be false, meaning it will be in 'Light mode'
    modeDecider.checked = false;
    const modeText = modeSelector.getElementsByClassName('modeText');
    // Adding a event listening to the const 'modeDecider'
    modeDecider.addEventListener('change', (e) => {
        // Here we check to see if the event.target is and INPUT element
        if (e.target.tagName === 'INPUT') {
            // Basic if else statement, checking to see if button is checked or not
            if (modeDecider.checked) {
                modeText[0].textContent = 'Light mode';
                modeText[0].style.color = 'white';
                mainBody[0].style.backgroundColor = 'darkslategrey';
            } else {
                modeText[0].textContent = 'Dark mode';
                modeText[0].style.color = 'black';
                mainBody[0].style.backgroundColor = 'white';
            }
        }
    });
    
});
