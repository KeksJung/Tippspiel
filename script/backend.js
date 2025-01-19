const cors = require("cors")
app.use(
  cors({
    origin: "*",
  })
)

const form = document.getElementById('tip-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const payload = {
    user_name: data.get('user_name'),
    event: data.get('event'),
    prediction: data.get('prediction'),
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwJSeiJfI6kK3MoXBg4snO3XDVqSMui1PNxIrK2XmJS7QcUn7t4u-WQP_5y4Z2DxoPvkQ/exec', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      alert('Tipp erfolgreich gespeichert!');
    } else {
      console.error('Fehler beim Speichern:', await response.text());
      alert('Fehler beim Speichern des Tipps.');
    }
  } catch (error) {
    console.error('Netzwerkfehler:', error);
    alert('Netzwerkfehler. Bitte später erneut versuchen.');
  }
});


