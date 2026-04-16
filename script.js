function changeBackground() {
    const colors = ['#e6f2ff', '#ffdddd', '#ddffdd', '#fff0b3', '#d1e0e0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
