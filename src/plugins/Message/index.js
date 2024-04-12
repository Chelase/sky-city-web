import {h, ref, render} from 'vue'

export default {
    install(app, options) {
        error('666')
        console.log('I\'m app:',app);
    }
}

const message = ref('')
const body = document.body

const error = (msg) => {
    message.value = msg;
    render(errorAlert,body)
    setTimeout(() => {
        hide();
    }, 3000);
}

const hide = () => {

    message.value = '';
}

const errorAlert = h('div', {
    class: 'alert alert-error fixed top-0 z-50',
    role: 'alert'
}, [
    h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        class: 'stroke-current shrink-0 h-6 w-6',
        fill: 'none',
        viewBox: '0 0 24 24'
    }, [
        h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    ]),
    h('span', message.value)  // 使用插值渲染 message
]);