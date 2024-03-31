/*
Event Bubbling:
The event bubbling phase occurs when an event is triggered on a target element and then bubbles outward through its ancestors, from the target to the outermost ancestor.
Event bubbling occurs when false parameter or no parameter is used in addEventListener() method.

Event Capturing:
The event capturing phase occurs when an event is first captured by the outermost ancestor element and then propagates inward toward the target element.
Event capturing occurs when true parameter is used in addEventListener() method.

stopPropagation():
It's a method used to stop the propagation of an event in the event flow. It prevents further propagation of the current event in either the capturing or bubbling phases. 
*/

document.getElementById('cars').addEventListener('click', function (e) {   // 'e' is an event object.
    console.log("Clicked inside #cars.");
    // e.stopPropagation();
}, false);

document.getElementById('scorpio').addEventListener('click', function (e) {
    console.log("Clicked inside #scorpio.");
    // e.stopPropagation();
}, false);

document.getElementById('google-link').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
}, false);

/*
Some Important Properties of Event Object:
1. type: Describes the type of event that occurred (e.g., "click", "keydown").
2. timeStamp: The timeStamp event property returns the number of milliseconds from the document was finished loading until the specific event was created.
3. defaultPrevented: Indicates whether the default action of the event has been prevented by calling the preventDefault() method.
4. target: Refers to the element that triggered the event initially.
5. toElement: Refers to the element the mouse pointer moved to when the mouse event was triggered.
6. srcElement: Refers to the element that triggered the event (deprecated in favor of target).
7. currentTarget: Refers to the element that currently has the event handler attached to it.
8. clientX: Represents the horizontal coordinate (in pixels) of the mouse pointer relative to the viewport, excluding any scroll offset.
9. clientY: Represents the vertical coordinate (in pixels) of the mouse pointer relative to the viewport, excluding any scroll offset.
10. screenX: Represents the horizontal coordinate (in pixels) of the mouse pointer relative to the screen.
11. screenY: Represents the vertical coordinate (in pixels) of the mouse pointer relative to the screen.
12. altKey: Indicates whether the "Alt" key was pressed during the event.
13. ctrlKey: Indicates whether the "Ctrl" key was pressed during the event.
14. shiftKey: Indicates whether the "Shift" key was pressed during the event.
15. keyCode: Represents the Unicode value of a key pressed during a keyboard event (deprecated, use key or code instead).
*/