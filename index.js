function titleCased() {
const tutorials = [
  'What Does The This Keyword Mean?',
  'What Is The Constructor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
];

const titleCased = () => {
  return tutorials
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Use Array.prototype.map() to transform each tutorial title to title case
return tutorials.map (tutorial => {
  const words = tutorial.split(' ');
  const titleCasedWords = words.map(word => capitalizeFirstLetter(word));
  return titleCasedWords.join(' ');});}
