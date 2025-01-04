const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

const characters = "アカサタナハマヤラワ0123456789";

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Verde característico
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, x) => {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, x * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[x] = 0; // Reinicia la "lluvia" en este punto
    }

    drops[x]++;
  });
}

setInterval(drawMatrix, 50);
