let isEnabled = false;

chrome.action.onClicked.addListener((tab) => {
  isEnabled = !isEnabled;
  if (!tab.id) return;
  if (isEnabled) {
    chrome.tabs.sendMessage(tab.id, { isEnabled });
  } else {
    chrome.tabs.sendMessage(tab.id, { isEnabled });
  }
});
