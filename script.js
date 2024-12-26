const runawayButton = document.getElementById('runaway-button');

runawayButton.addEventListener('mouseover', () => {
  // Generate random new position
  const newX = Math.floor(Math.random() * (window.innerWidth - runawayButton.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - runawayButton.offsetHeight));

  // Move the button to the new position
  runawayButton.style.top = `${newY}px`;
  runawayButton.style.left = `${newX}px`;
});

// Make the button unclickable
runawayButton.addEventListener('click', (event) => {
  event.preventDefault();
});