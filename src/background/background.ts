let isEnabled = false;

// listening to the action on extension click
chrome.action.onClicked.addListener((tab) => {
  isEnabled = !isEnabled;
  if (!tab.id) return;
  //sending message to content inject js file.
  chrome.tabs.sendMessage(tab.id, { isEnabled });
});
