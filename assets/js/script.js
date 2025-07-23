// List of public domain or freely attributed quotes
const quotes = [
  { text: "Almost everything will work again if you unplug it for a few minutes, including you.", author: "Anne Lamott" },
  { text: "Keep taking time for yourself until you’re you again.", author: "Lalah Delia" },
  { text: "Just when the caterpillar thought the world was over, it became a butterfly.", author: "Proverb" },
  { text: "You don’t have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
  { text: "You are not your thoughts. You are the awareness behind them.", author: "Eckhart Tolle" },
  { text: "Healing takes time, and asking for help is a courageous step.", author: "Mariska Hargitay" },
  { text: "Self-care is not a waste of time; self-care makes your use of time more sustainable.", author: "Jackie Viramontez" },
  { text: "Nothing can dim the light that shines from within.", author: "Maya Angelou" },
  { text: "There is hope, even when your brain tells you there isn’t.", author: "John Green" },
  { text: "Feelings are much like waves. We can’t stop them from coming but we can choose which ones to surf.", author: "Jonatan Mårtensson" },
  { text: "Mental health is not a destination but a process.", author: "Noam Shpancer" },
  { text: "You deserve to be happy. You deserve to live a life you’re excited about.", author: "Unknown" },
  { text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo" },
  { text: "Be patient with yourself. Nothing in nature blooms all year.", author: "Unknown" },
  { text: "Your present circumstances don’t determine where you go; they merely determine where you start.", author: "Nido Qubein" },
  { text: "This too shall pass.", author: "Persian Proverb" },
  { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
  { text: "Don’t believe everything you think.", author: "Unknown" },
  { text: "Take a deep breath. You’re doing better than you think.", author: "Unknown" },
  { text: "One small positive thought in the morning can change your whole day.", author: "Dalai Lama" }
];

// Get DOM elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

// Display a random quote
function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Remove and re-trigger animation
  const quoteBox = quoteText.parentElement;
  quoteBox.classList.remove("fade-in");
  void quoteBox.offsetWidth; // Force reflow

  // Set new quote and author
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `– ${quote.author}`;

  // Re-apply animation
  quoteBox.classList.add("fade-in");
}

// Show initial quote on page load
window.addEventListener("DOMContentLoaded", showQuote);

// Show new quote on button click
newQuoteBtn.addEventListener("click", showQuote);

// Theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Toggle dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update tooltip + icon
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.title = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
  themeToggle.textContent = isDark ? "☀️" : "🌓";

  // Optionally: Save preference
  localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
});

// On page load: apply saved preference
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferred-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
    themeToggle.title = "Switch to Light Mode";
  }
});
