const colorPicker = document.getElementById('colorPicker');  // pen color
const canvasColor = document.getElementById('canvasColor');  // background color
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const fontPicker = document.getElementById('fontPicker');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set default styles
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;
ctx.lineCap = 'round';

// Change text/drawing color
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
});

// Change canvas background color
canvasColor.addEventListener('change', (e) => {
    canvas.style.backgroundColor = e.target.value;
});

// Change font size (line width)
fontPicker.addEventListener('change', (e) => {
    ctx.lineWidth = parseInt(e.target.value);
});

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Draw lines
canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Stop drawing
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// Clear canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save canvas as image
saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = canvas.toDataURL();
    link.click();
});
