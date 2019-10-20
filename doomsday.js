// Calendar would have days of the week listed at the top of page, right below header, Sunday - Saturday.
//Local date and time would be displayed using moment.js.

// Would be grid-like with some Bootstrap (columns and rows would cross each other to create "boxes").

/* User would be able to hover over any day and any hour of the week and
white background color of box would turn yellow upon hover to let user know which
box has been selected with an eventListener. */

/* User would then have option to click the highlighted box and upon click, would
be allowed to start entering text in with an on("click") function. */

// Once done entering text/data, user would be allowed to click outside of box to exit text mode.

/* Save buttons would then be on the right side of the page (using float right) which gives user
the option to save that text input onto calendar page and also to localStorage. */

/* If user did input and saved multiple blocks of text next to eachother from left to right and top to bottom,
boxes would change to different colors upon save button being pressed / that function being called. */

button.addEventListener("click", saveButton);

calendar.render();