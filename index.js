const text = document.querySelector('#text');
const container = document.querySelector('.container')

// times
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function BreathAnimation() {
    text.innerHTML = 'Breath In!';
    container.className = 'container max'
    setTimeout(() => {
        text.innerHTML = 'Hold!'

        setTimeout(() => {
            text.innerHTML = 'Breath Out!'
            container.className = 'container min'
        },holdTime)
    },breathTime)
}
BreathAnimation()

setInterval(BreathAnimation, totalTime)
