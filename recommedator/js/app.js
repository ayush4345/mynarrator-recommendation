// State management
let currentState = 'landing'; // Possible states: landing, quiz, results, waitlist
let currentQuestion = 0;
let answers = {};
let personalityResult = '';
let ceoAnswer = '';
let interestAnswer = '';

// DOM Elements
const appContainer = document.getElementById('app');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderCurrentState();
});

// Render the current state
function renderCurrentState() {
  // Clear the app container
  appContainer.innerHTML = '';
  
  // Render the appropriate component based on the current state
  switch (currentState) {
    case 'landing':
      renderLandingPage();
      break;
    case 'quiz':
      renderQuizPage();
      break;
    case 'results':
      renderResultsPage();
      break;
    case 'waitlist':
      renderWaitlistForm();
      break;
    default:
      renderLandingPage();
  }
}

// Landing Page Component
function renderLandingPage() {
  const landingPage = document.createElement('div');
  landingPage.className = 'section landing-page';
  
  landingPage.innerHTML = `
    <div class="header">
      <div class="logo">MY NARRATIVE</div>
      <div class="tagline">WEAR YOUR PERSONALITY</div>
    </div>
    
    <div class="accent-element"></div>
    
    <h2>Discover your narrative</h2>
    <p>Find your personality trait and get personalized narrative recommendations that match who you are.</p>
    <button id="start-quiz-btn" class="btn">Take the Quiz</button>
    
    <div class="accent-border"></div>
  `;
  
  appContainer.appendChild(landingPage);
  
  // Add event listener to the button
  document.getElementById('start-quiz-btn').addEventListener('click', handleStartQuiz);
}

// Quiz Page Component
function renderQuizPage() {
  const quizPage = document.createElement('div');
  quizPage.className = 'section quiz-page';
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  quizPage.innerHTML = `
    <div class="header">
      <div class="logo">MY NARRATIVE</div>
      <div class="tagline">WEAR YOUR PERSONALITY</div>
    </div>
    
    <div class="accent-border"></div>
    
    <div class="quiz-header">
      <h1 class="quiz-title">FIND YOUR NARRATIVE</h1>
      <p class="tagline">WEAR YOUR PERSONALITY</p>
    </div>
    
    <div class="progress-container">
      <div class="progress-info">
        <span>Question ${currentQuestion + 1} of ${questions.length}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-indicator" style="width: ${progress}%"></div>
      </div>
    </div>
    
    <div class="question-container">
      <h2 class="question-text">${question.question}</h2>
      <div class="options-container" id="options-container">
        ${question.options.map((option, index) => `
          <button class="option" data-index="${index}" data-points="${option.points}">
            ${option.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  appContainer.appendChild(quizPage);
  
  // Add event listeners to the options
  const optionsContainer = document.getElementById('options-container');
  const options = optionsContainer.querySelectorAll('.option');
  
  options.forEach(option => {
    option.addEventListener('click', function() {
      const points = this.getAttribute('data-points');
      const index = this.getAttribute('data-index');
      
      handleOptionSelect(points, parseInt(index));
    });
  });
}

// Results Page Component
function renderResultsPage() {
  const resultsPage = document.createElement('div');
  resultsPage.className = 'section results-page';
  
  // Get narratives and exemplars for the personality trait
  const narratives = personalityNarrativeMapping[personalityResult] || [];
  const exemplars = personalityExemplarMapping[personalityResult] || { global: [], indian: "" };
  const emoji = emojiMapping[personalityResult] || "✨";
  
  // Parse special answers
  const ceoRecommendations = parseSpecialAnswer(ceoAnswer);
  const interestRecommendations = parseSpecialAnswer(interestAnswer);
  
  // Combine all recommendations and remove duplicates
  const uniqueRecommendations = getAllUniqueRecommendations(narratives, ceoRecommendations, interestRecommendations);
  
  resultsPage.innerHTML = `
    <div class="header">
      <div class="logo">MY NARRATIVE</div>
      <div class="tagline">WEAR YOUR PERSONALITY</div>
    </div>
    
    <div class="accent-border"></div>
    
    <div class="personality-badge">
      <span class="emoji">${emoji}</span>
      ${personalityResult.toUpperCase()}
    </div>
    
    <h1 class="results-title">YOUR PERSONALITY TRAIT: ${personalityResult.toUpperCase()}</h1>
    
    <div class="results-emoji">
      ${emoji}
    </div>
    
    <p class="results-description">
      Based on your answers, we've identified your personality trait, secret CEO identity, and top interests. 
      Check out the narratives that match your personality!
    </p>
    
    <div class="recommendations-container">
      <h3 class="recommendations-title">Your Recommended Narratives:</h3>
      <div class="recommendations">
        ${uniqueRecommendations.map(recommendation => `
          <span class="recommendation-tag">${recommendation.toUpperCase()}</span>
        `).join('')}
      </div>
    </div>
    
    <div class="exemplars-container">
      <p class="exemplar-text">
        <strong class="exemplar-highlight">Global Examples:</strong> 
        ${exemplars.global.join(", ")}
      </p>
      <p class="exemplar-text">
        <strong class="exemplar-highlight">Indian Example:</strong> 
        ${exemplars.indian}
      </p>
    </div>
    
    <button id="join-waitlist-btn" class="btn">Join Waitlist</button>
  `;
  
  appContainer.appendChild(resultsPage);
  
  // Add event listener to the button
  document.getElementById('join-waitlist-btn').addEventListener('click', handleJoinWaitlist);
}

// Waitlist Form Component
function renderWaitlistForm() {
  const waitlistForm = document.createElement('div');
  waitlistForm.className = 'section';
  
  waitlistForm.innerHTML = `
    <div class="waitlist-form-container">
      <div class="form-header">
        <h2 class="form-title">Join the Waitlist</h2>
        <p class="form-description">
          We are getting our next quiz reviewed. Join the waitlist to get notified.
        </p>
      </div>
      
      <form id="waitlist-form" class="waitlist-form">
        <div class="form-group">
          <label class="form-label" for="userEmail">Your email address</label>
          <input 
            id="userEmail" 
            class="form-input" 
            type="email" 
            placeholder="your.email@example.com" 
            required
          >
          <p id="userEmailError" class="error-message hidden"></p>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="partnerEmail">Your partner's email address</label>
          <input 
            id="partnerEmail" 
            class="form-input" 
            type="email" 
            placeholder="partner.email@example.com" 
            required
          >
          <p id="partnerEmailError" class="error-message hidden"></p>
        </div>
        
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  `;
  
  appContainer.appendChild(waitlistForm);
  
  // Add event listener to the form
  document.getElementById('waitlist-form').addEventListener('submit', handleWaitlistSubmit);
}

// Render Success Message after form submission
function renderSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.className = 'section';
  
  successMessage.innerHTML = `
    <div class="success-message">
      <div class="success-icon">✅</div>
      <h2 class="success-title">Thank you!</h2>
      <p>Your details have been submitted successfully.</p>
    </div>
    <p class="redirect-message">Redirecting you to the home page...</p>
  `;
  
  appContainer.innerHTML = '';
  appContainer.appendChild(successMessage);
  
  // Redirect to landing page after a delay
  setTimeout(() => {
    currentState = 'landing';
    renderCurrentState();
  }, 2000);
}

// Event Handlers
function handleStartQuiz() {
  currentState = 'quiz';
  currentQuestion = 0;
  answers = {};
  personalityResult = '';
  ceoAnswer = '';
  interestAnswer = '';
  renderCurrentState();
}

function handleOptionSelect(points, index) {
  // Update answers
  answers[currentQuestion] = points;
  
  // Disable all options and highlight the selected one
  const options = document.querySelectorAll('.option');
  options.forEach((option, i) => {
    option.disabled = true;
    option.classList.add('disabled');
    
    if (i === index) {
      option.classList.add('selected');
      option.classList.remove('disabled');
    }
  });
  
  // Auto-advance after a short delay
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderCurrentState();
    } else {
      // Calculate result on the last question
      calculateResult();
    }
  }, 500);
}

function handleJoinWaitlist() {
  currentState = 'waitlist';
  renderCurrentState();
}

function handleWaitlistSubmit(e) {
  e.preventDefault();
  
  const userEmail = document.getElementById('userEmail').value;
  const partnerEmail = document.getElementById('partnerEmail').value;
  
  // Validate emails
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(userEmail)) {
    document.getElementById('userEmailError').textContent = 'Please enter a valid email address';
    document.getElementById('userEmailError').classList.remove('hidden');
    document.getElementById('userEmail').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('userEmailError').classList.add('hidden');
    document.getElementById('userEmail').classList.remove('error');
  }
  
  if (!emailRegex.test(partnerEmail)) {
    document.getElementById('partnerEmailError').textContent = 'Please enter a valid email address';
    document.getElementById('partnerEmailError').classList.remove('hidden');
    document.getElementById('partnerEmail').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('partnerEmailError').classList.add('hidden');
    document.getElementById('partnerEmail').classList.remove('error');
  }
  
  if (isValid) {
    renderSuccessMessage();
  }
}

// Helper Functions
function calculateResult() {
  // First 5 questions (0-4) determine personality trait
  // Last 3 questions (5-7) are used for narrative recommendations
  
  // Extract narrative recommendation questions
  ceoAnswer = answers[5] || ''; // Question 6 (CEO question) is at index 5
  interestAnswer = answers[6] || ''; // Question 7 (interests) is at index 6
  const weekendThemeAnswer = answers[7] || ''; // Question 8 (weekend theme) is at index 7
  
  // Process the first 5 questions for personality trait calculation
  const personalityAnswers = {};
  const personalityQuestionIndices = [0, 1, 2, 3, 4];
  
  personalityQuestionIndices.forEach(i => {
    if (i in answers) {
      personalityAnswers[i] = answers[i];
    }
  });
  
  // Count the frequency of each answer type for personality questions
  const answerCounts = { A: 0, B: 0, C: 0, D: 0 };
  
  Object.values(personalityAnswers).forEach(answer => {
    if (answer in answerCounts) {
      answerCounts[answer]++;
    }
  });
  
  // Find the most frequent answer type
  let maxCount = 0;
  let dominantType = "";
  
  Object.entries(answerCounts).forEach(([type, count]) => {
    if (count > maxCount) {
      maxCount = count;
      dominantType = type;
    }
  });
  
  // Get potential personality traits based on dominant answer type
  const potentialTraits = personalityTraitMapping[dominantType] || [];
  
  // Select a random trait from the potential traits
  personalityResult = potentialTraits[Math.floor(Math.random() * potentialTraits.length)];
  
  // Combine the weekend theme song answer with other special answers
  const combinedInterests = [
    interestAnswer || '',
    weekendThemeAnswer || ''
  ].filter(Boolean).join('/');
  
  interestAnswer = combinedInterests;
  
  // Update state and render results page
  currentState = 'results';
  renderCurrentState();
}

function parseSpecialAnswer(answer) {
  if (!answer) return [];
  
  // If the answer contains multiple recommendations separated by '/', split them
  if (answer.includes('/')) {
    return answer.split('/').map(item => item.trim());
  }
  
  // Otherwise return as a single item array
  return [answer.trim()];
}

function getAllUniqueRecommendations(narratives, ceoRecommendations, interestRecommendations) {
  // Start with narratives from personality trait
  const allRecommendations = [...narratives];
  
  // Add CEO recommendations
  if (ceoRecommendations && ceoRecommendations.length) {
    allRecommendations.push(...ceoRecommendations);
  }
  
  // Add interest recommendations
  if (interestRecommendations && interestRecommendations.length) {
    allRecommendations.push(...interestRecommendations);
  }
  
  // Remove duplicates and empty strings
  return [...new Set(allRecommendations)].filter(rec => rec && rec.trim() !== '');
}
