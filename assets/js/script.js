// List of license-free inspirational quotes
const quotes = [
  "Almost everything will work again if you unplug it for a few minutes, including you. – Anne Lamott",
  "Keep taking time for yourself until you’re you again. – Lalah Delia",
  "Just when the caterpillar thought the world was over, it became a butterfly. – Proverb",
  "You don’t have to control your thoughts. You just have to stop letting them control you. – Dan Millman",
  "You are not your thoughts. You are the awareness behind them. – Eckhart Tolle",
  "Healing takes time, and asking for help is a courageous step. – Mariska Hargitay",
  "Self-care is not a waste of time; self-care makes your use of time more sustainable. – Jackie Viramontez",
  "Nothing can dim the light that shines from within. – Maya Angelou",
  "There is hope, even when your brain tells you there isn’t. – John Green",
  "Feelings are much like waves. We can’t stop them from coming but we can choose which ones to surf. – Jonatan Mårtensson",
  "Mental health is not a destination but a process. – Noam Shpancer",
  "You deserve to be happy. You deserve to live a life you’re excited about. – Unknown",
  "Even the darkest night will end and the sun will rise. – Victor Hugo",
  "Be patient with yourself. Nothing in nature blooms all year. – Unknown",
  "Your present circumstances don’t determine where you go; they merely determine where you start. – Nido Qubein",
  "This too shall pass. – Persian Proverb",
  "The greatest weapon against stress is our ability to choose one thought over another. – William James",
  "Don’t believe everything you think. – Unknown",
  "Take a deep breath. You’re doing better than you think. – Unknown",
  "One small positive thought in the morning can change your whole day. – Dalai Lama"
];

// Get DOM elements
const quoteBox = document.getElementById("quote-box");
const newQuoteBtn = document.getElementById("new-quote");

// Display a random quote
function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Reset animation
  quoteBox.classList.remove("fade-in");
  void quoteBox.offsetWidth; // Trigger reflow

  // Set new quote and re-apply animation
  quoteBox.textContent = quote;
  quoteBox.classList.add("fade-in");
}

// Load quote when page is ready
window.addEventListener("DOMContentLoaded", showQuote);

// Load new quote on button click
newQuoteBtn.addEventListener("click", showQuote);

