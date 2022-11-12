const buddyForm = async (event) => {
  event.preventDefault();

  // Collect email from the email modal
  //const name = document.getElementById('nameBuddy').value.trim();
  const email = document.getElementById('emailBuddy').value.trim();
 
  if (email) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/buddies', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, add the user's email to the page
      document.location.replace('/buddies');
    } else {
      alert('Failed to create goal');
    }
  }
  }

document
    .getElementById('buddyEmailForm')
    .addEventListener('submit', buddyForm);
