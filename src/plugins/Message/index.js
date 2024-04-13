import { h, render } from 'vue'
import './style.css'

const body = document.body

export default {
    // info (msg) {
    //     const infoAlert = h('div', {
    //         class: 'alert alert-info absolute top-3 z-50 animation-top',
    //         role: 'alert'
    //     }, [
    //         h('svg', {
    //             xmlns: 'http://www.w3.org/2000/svg',
    //             class: 'stroke-current shrink-0 h-6 w-6',
    //             fill: 'none',
    //             viewBox: '0 0 24 24'
    //         }, [
    //             h('path', {
    //                 'stroke-linecap': 'round',
    //                 'stroke-linejoin': 'round',
    //                 'stroke-width': 2,
    //                 d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //             })
    //         ]),
    //         h('span', msg)  // 使用插值渲染 message
    //     ]);
    //     render(infoAlert,body)
    //     setTimeout(() => {
    //         remove()
    //     }, 3000);
    // },
    info (msg) {
        const infoAlert = document.createElement('div')
        infoAlert.className = 'alert alert-info z-50 animation-top'
        infoAlert.role = 'alert'

        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.className = 'stroke-current shrink-0 h-6 w-6';
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 24 24');

        const path = document.createElement('path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z");

        svg.appendChild(path);

        const span = document.createElement('span');
        span.textContent = msg // 替换为您想要显示的消息

// 将子元素添加到infoAlert中
        infoAlert.appendChild(svg);
        infoAlert.appendChild(span);

        body.appendChild(infoAlert)

        setTimeout(() => {
            infoAlert.remove()
        }, 3000);
    },
    success (msg) {
        const successAlert = h('div', {
            class: 'alert alert-success absolute top-3 z-50 animation-top',
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
                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                })
            ]),
            h('span', msg)  // 使用插值渲染 message
        ]);
        render(successAlert,body)
        setTimeout(() => {
            remove()
        }, 3000);
    },
    warning (msg) {
        const warningAlert = h('div', {
            class: 'alert alert-warning absolute top-3 z-50 animation-top',
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
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                })
            ]),
            h('span', msg)  // 使用插值渲染 message
        ]);
        render(warningAlert,body)
        setTimeout(() => {
            remove()
        }, 3000);
    },
    error (msg) {
        const errorAlert = h('div', {
            class: 'alert alert-error absolute top-3 z-50 animation-top',
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
            h('span', msg)  // 使用插值渲染 message
        ]);
        render(errorAlert,body)
        setTimeout(() => {
            remove()
        }, 3000);
    },
}

const remove = () => {
    render(null, body);
}
