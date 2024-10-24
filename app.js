const apiKey = '47bf124d198f47de935f62271b9b15aa'; // Replace this with your Football-Data.org API key
const apiUrl = `https://api.football-data.org/v2/competitions/PL/matches`;

// Fetch live football data
fetch(apiUrl, {
  headers: { 'X-Auth-Token': apiKey }
})
.then(response => response.json())
.then(data => {
  displayLiveMatches(data.matches);
})
.catch(error => console.error('Error fetching data:', error));

function displayLiveMatches(matches) {
  const liveMatchesDiv = document.getElementById('live-matches');
  matches.forEach(match => {
    // Display each match info
    const matchDiv = document.createElement('div');
    matchDiv.innerHTML = `
      <h2>${match.homeTeam.name} vs ${match.awayTeam.name}</h2>
      <p>Score: ${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</p>
    `;
    liveMatchesDiv.appendChild(matchDiv);
  });
}
