import {ref, h} from "vue";

const message = ref('我是message');
export const visible = ref(false);

const error = (msg) => {
    message.value = msg;
    visible.value = true;
    setTimeout(() => {
        hide();
    }, 3000);
}

const hide = () => {
    visible.value = false;
    message.value = '';
}

// 使用 h 函数渲染虚拟 DOM
export const errorAlert = h('div', {
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

export default {
    error,
    hide,
};
