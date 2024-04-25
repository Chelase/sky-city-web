import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import userApi from '@/api/modules/user.js'
import router from "@/router/index.js"

const useUserStore = defineStore('user', () => {
    const UserInfo = ref(localStorage.UserInfo ?? {})
    const Token = ref(localStorage.Token ?? '')
    const isLogin = computed(() => !!Token.value)

    const register = async (data) => await userApi.Register(data)

    const Login = async (data) => {
        const {token,userInfo} = await userApi.Login(data)
        Token.value = token
        UserInfo.value = userInfo
        localStorage.setItem('Token', Token.value)
        localStorage.setItem('UserInfo', userInfo.value)
    }

    const logout = async (redirect = router.currentRoute.value.fullPath) => {
        localStorage.removeItem('Token')
        Token.value = ''
        await router.push({
            name: 'welcome',
            query: {
                ...(router.currentRoute.value.path !== '/' && router.currentRoute.value.name !== 'welcome' && {redirect}),
            },
        })
    }

    return {
        UserInfo,
        Token,
        isLogin,
        register,
        Login,
        logout
    }
})

export default useUserStore