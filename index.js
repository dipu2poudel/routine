button = document.querySelector(".main_button");
main = document.querySelector(".main");
all_events = [
  "Exercise",
  "Learn Python",
  "Learn Sass",
  "Do Cycling",
  "Listen to Impaulsive",
  "Read Book(silk_road or any)",
  "Sleep",
  "Watch Billions",
  "Do 1xbet and Fun",
  "Walk Out",
  "Build a Clone",
  "Build a Portfolio Site",
  "Exercise",
  "Open Facebook Only Now",
  "Open Youtube and Fun",
  "Learn Data Structure and Algorithms",
  ,
];
small_events = [
  "Drinking Water",
  "Bathing",
  "Brushing Teeth",
  "Meditate",
  "Quick Nap",
  "Laugh",
  "Be Greatful",
];
button.addEventListener("click", function () {
  currentTime = new Date().getHours();
  console.log(currentTime);
  if (currentTime < 12) {
    events = all_events.slice(0, 5);
    console.log(events);
  } else {
    events = all_events;
  }
  event_length = events.length;

  random_number = Math.floor(Math.random() * event_length);
  random_number2 = Math.floor(Math.random() * small_events.length);
  random_event = events[random_number];
  markup = `<h1 class="answer">You need to ${random_event} right now!!</h1>
  <h2 class="answer-secondary">
    Small Event Remainder: ${small_events[random_number2]}
  </h2>`;
  main.innerHTML = "";
  main.innerHTML = markup;
});
