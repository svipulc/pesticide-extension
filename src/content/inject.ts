(function test() {
  chrome.runtime.onMessage.addListener((message: { isEnabled: boolean }) => {
    if (message?.isEnabled && !document.getElementById("CustomStyleCss")) {
      const CustomStyle = document.createElement("link");
      CustomStyle.rel = "stylesheet";
      CustomStyle.type = "text/css";
      CustomStyle.id = "CustomStyleCss";
      CustomStyle.href = chrome.runtime.getURL("content.css");
      document.getElementsByTagName("head")[0].appendChild(CustomStyle);
    } else {
      // const CustomCss = document.getElementById("CustomStyleCss");
      // if (CustomCss) {
      //   document.getElementsByTagName("head")[0].removeChild(CustomCss);
      // }
      document
        .getElementsByTagName("head")[0]
        .removeChild(document.getElementById("CustomStyleCss")!);
    }
  });
})();
