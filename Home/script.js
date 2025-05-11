document.getElementById("chatButton").addEventListener("click", function () {
  if (document.querySelector('df-messenger')) return;

  // Create df-messenger element
  const dfMessenger = document.createElement("df-messenger");
  dfMessenger.setAttribute("intent", "WELCOME");
  dfMessenger.setAttribute("chat-title", "TeachMeAI");
  dfMessenger.setAttribute("agent-id", "TeachMeAI");
  dfMessenger.setAttribute("language-code", "en");
  document.body.appendChild(dfMessenger);

  // Load Dialogflow Messenger script
  const script = document.createElement("script");
  script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/messenger-internal.min.js?v=4";
  document.body.appendChild(script);
});
