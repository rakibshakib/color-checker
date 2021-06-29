const colorInputEvent = document.getElementById('color');
const backgroundColorEvent = document.getElementById('containerBg');
colorInputEvent.addEventListener('input', event => {
    const color = event.target.value
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if(color.match(hexColorRegex)){
        // colorInputEvent.style.borderColor = color
        backgroundColorEvent.style.backgroundColor = color
    } else{
        // colorInputEvent.style.borderColor = 'rgb(226,226,226)'
        backgroundColorEvent.style.backgroundColor = 'rgb(226,226,226)'
    }
})