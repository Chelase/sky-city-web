// DaisyMessage.js
import { ref, h } from 'vue';

const DaisyMessage = {
    install(app) {
        // 创建响应式引用
        const message = ref('');
        const visible = ref(false);

        // 错误提示方法
        const error = (msg) => {
            message.value = msg;
            visible.value = true;
            setTimeout(() => {
                hide();
            }, 3000);
        };

        // 隐藏提示方法
        const hide = () => {
            visible.value = false;
            message.value = '';
        };

        // 渲染函数
        const renderErrorAlert = () => {
            if (!visible.value) return null;
            return h('div', {
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
                h('span', {}, message.value)
            ]);
        };

        // 将方法添加到 app 的 config 上，方便全局调用
        app.config.globalProperties.$DaisyMessage = {
            error,
            hide
        };

        // 创建一个组件，用于在模板中渲染错误提示
        const DaisyMessageComponent = {
            name: 'DaisyMessage',
            render() {
                return renderErrorAlert();
            }
        };

        // 注册组件，使其可以在应用中的任何地方使用
        app.component('DaisyMessage', DaisyMessageComponent);
    },
};

export default DaisyMessage;