import './style.css'

const contents = ['我', '爱', '你']

export default {
    install(app, options) {
        const body = document.body

        body.addEventListener('click', function (e) {
            const {pageX: x, pageY: y} = e
            const content = getContent()
            const color = getColor()
            const span = document.createElement('span')

            const text = new Text(x, y)
            text.create(span, content, color)
            setTimeout(() => {
                clearInterval(text.timer)
                text.remove(span)
            }, 1000)
        })
    }
}

const getContent = () => contents[Math.floor(Math.random() * contents.length)];

function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Text(x, y) {
    this.x = x;
    this.y = y;
    this.timer = null;
}

Text.prototype.create = function (domSpan, content, color) {
    const body = document.body
    let offsetY = 20
    domSpan.innerText = content
    domSpan.style.color = color
    domSpan.className = 'text'
    domSpan.style.top = `${this.y}px`
    domSpan.style.left = `${this.x}px`

    this.timer = setInterval(() => {
        domSpan.style.top = `${this.y - offsetY}px`
        offsetY++
    })

    body.appendChild(domSpan)
}

Text.prototype.remove = function (domSpan) {
    domSpan.remove()
}