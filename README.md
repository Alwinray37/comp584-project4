# Project 4 - Calculator
live site: https://alwinray37.github.io/comp584-project4/

Desc: A browser-based calculator built with HTML, CSS (grid/flexbox), and vanilla JavaScript. It supports addition, subtraction, multiplication, and division, with clear and backspace buttons. Calculations are implemented from scratch without `eval()`.

Logic bugs:
Once an operation is set, it is never reset. Every digit press then clears the screen, so multi-digit numbers can't be entered after an operator.
Clear doesn't reset a, b or operation.
There is no decimal point.
There is no divide-by-zero handling.
Chaining operations without pressing = doesn't work.
