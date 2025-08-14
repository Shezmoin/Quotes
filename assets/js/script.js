// This file contains an array of quotes to be displayed on the website.
// All quotes are license free and can be used for any purpose.
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

// Defining elements that will be used to display the quotes, theme toggle, and favorite button
const quoteText   = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");
const themeToggle = document.getElementById("theme-toggle");
const favoriteBtn = document.getElementById("favorite-btn");

// Setting the index for current quotes and favorites as empty
let currentQuoteIndex = null;
let favorites = JSON.parse(localStorage.getItem("favorites")) || []; // Checking and loading favorites from localStorage if they exist
let viewingFavorites = false; // Creating a variable to check if the user is viewing a favorite quote
let favoriteIndex = 0; // Setting this to find the index of the favorite quote


// This function is to show a random quote
function showQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[currentQuoteIndex];

  const quoteBox = quoteText.parentElement;
  quoteBox.classList.remove("fade-in");
  void quoteBox.offsetWidth;

  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `– ${quote.author}`;
  quoteBox.classList.add("fade-in");

  // Adding script for the favorite button
  const isFavorited = favorites.some(
    fav => fav.text === quote.text && fav.author === quote.author
  );
  // Checking if the quote is favorited and setting the button state
  favoriteBtn.textContent = isFavorited ? "✪" : "☆";
  favoriteBtn.classList.toggle("favorited", isFavorited);
  // Tooltip for the favorite button
  favoriteBtn.title = isFavorited ? "Unfavorite this quote" : "Favorite this quote";
}

// Adding event listener for the favorite button
favoriteBtn.addEventListener("click", () => {
  const quote = quotes[currentQuoteIndex];
  
  // Using arrays to check if the quote is already in favorites
  const index = favorites.findIndex(
    fav => fav.text === quote.text && fav.author === quote.author
  );

  if (index === -1) {
    // Add to favorites
    favorites.push(quote);
  } else {
    // Remove from favorites
    favorites.splice(index, 1);
  }

  // Save to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // Update button state
  const isFavorited = index === -1;
  favoriteBtn.textContent = isFavorited ? "✪" : "☆";
  favoriteBtn.classList.toggle("favorited", isFavorited);
  // Update tooltip for favorite button
  favoriteBtn.title = isFavorited ? "Unfavorite this quote" : "Favorite this quote";
});



// Handling the theme toggle of switching between light and dark modes
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.title = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
  themeToggle.textContent = isDark ? "☀️" : "🌓";
  localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
});

// Saving and setting the users preferred theme when they revisit the page
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferred-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
    themeToggle.title = "Switch to Light Mode";
  }
  showQuote();
});

newQuoteBtn.addEventListener("click", showQuote);
