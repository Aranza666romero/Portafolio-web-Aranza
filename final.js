let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #581845;'>|</span>",
});
 
typewriter
  .pauseFor(3000)
  .typeString('<span style="color: #581845;">La mejor inversión que harás en tu vida.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();