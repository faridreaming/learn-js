function anotherAddEventListener(eventType, callback) {
  // Generate the information about event
  theEvent = {
    type: "keydown",
    key: "a",
    longPressed: 3,
  };

  if (eventType === theEvent.type) callback(theEvent);
}
