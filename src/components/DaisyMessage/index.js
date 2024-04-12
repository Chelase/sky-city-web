import {ref} from "vue";

export const message = ref('我是message');
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

export default {
    error,
    hide,
};
