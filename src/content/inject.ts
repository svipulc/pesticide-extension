(function ToggleAction() {
  // listening all the message from background
  chrome.runtime.onMessage.addListener((message: { isEnabled: boolean }) => {
    // checking the status of feature to enable or not and if there any "CustomStyleCss" linked or not.
    if (message?.isEnabled && !document.getElementById("CustomStyleCss")) {
      // creating link element and add properties like rel,type,id,href
      const CustomStyle = document.createElement("link");
      CustomStyle.rel = "stylesheet";
      CustomStyle.type = "text/css";
      CustomStyle.id = "CustomStyleCss";
      CustomStyle.href = chrome.runtime.getURL("content.css");
      // adding link element as child to head tag
      document.getElementsByTagName("head")[0].appendChild(CustomStyle);
    } else {
      // removing CustomStyleCss link tag from head Tag
      document
        .getElementsByTagName("head")[0]
        .removeChild(document.getElementById("CustomStyleCss")!);
    }
  });
})();
