const prefs = JSON.parse(localStorage.getItem("venuePreferences"));
fetch("data/artist-database.csv")
  .then(r => r.text())
  .then(csv => {
    Papa.parse(csv, {
      header: true,
      complete: res => {
        const matches = res.data.map(a => {
          let score = 0;
          if (prefs.genres && a.Genre.includes(prefs.genres)) score += 40;
          if (prefs.budget && parseInt(a.Fee) <= parseInt(prefs.budget)) score += 30;
          if (prefs.dates && prefs.dates.split(',').some(d => a.Availability.includes(d.trim()))) score += 30;
          return { ...a, matchScore: score };
        });
        matches.sort((a, b) => b.matchScore - a.matchScore);
        document.getElementById("results").innerHTML = matches.map(m => `
          <div class='p-4 border rounded shadow'>
            <h3 class='text-xl font-bold'>${m.Name} (${m.matchScore}%)</h3>
            <p>${m.Bio}</p>
            <a href="qr-tip.html?link=${encodeURIComponent(m.TipLink)}" class="text-indigo-600">Tip</a>
          </div>`).join('');
      }
    });
  });
