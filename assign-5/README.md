# Assignment 5

## Prompt

Test out your Javascript by writing a page where the user can type text into a box, and by clicking on UI controls, the text will get styling. **Submit a link to your solution hosted on your github.**

The HTML page `fancifymytext.html` contains a basic HTML shell and page header.

You will write a JavaScript file `fancifymytext.js` that will manipulate the text.

1. The first task is to expand fancifymytext.html by adding UI controls. Add HTML code for the following:
    - A field for users to enter large (multi-line) amounts of text.
        - It should be 4 rows by 30 columns in size.
        - Wrap it in a bordered field set box with the label "Text".
    - Add a second bordered field set box labeled "Fancify" that contains the following controls:
        - A button labeled: Bigger!
        - Two radio buttons labeled "FancyShmancy" and "BoringBetty"
2. Create a new file and save it as `fancifymytext.js`.
    - Add `alert("Hello, world!");` to the file.
4. Now let's set up a very basic JS event handler. Modify your JS code and HTML so that the "Hello, world!" alert message won't pop up until the user clicks the "Bigger" button.
    - Modify your JS file to wrap the alert into a function.
    - Add an onclick handler attribute to the "Bigger" button that calls your new function.
    - Refresh your page in the browser. Click the button. Do you see the alert?  If yes, go to the next step.
5. Modify your JS code so that when the user clicks "Bigger", the text in the text area will get larger.
    - Make sure your text area has an id attribute so your JS code can talk to it.
    - Modify your JS function so that it now changes the text area's font size to 24pt .
6. 




