const colorInputEvent = document.getElementById('color');
const backgroundColorEvent = document.getElementById('containerBg');
colorInputEvent.addEventListener('input', event => {
    const color = event.target.value
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if (color.match(hexColorRegex)) {

        backgroundColorEvent.style.backgroundColor = color
    } else {

        backgroundColorEvent.style.backgroundColor = 'rgb(226,226,226)'
    }
})