import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let userStore = (set) => ({
    user: {
        token: '',
        email: '',
    },
    setUser: 
        user => 
            set(state => ({ 
                ...state,
                user 
            })),
    clearUser: 
        () => 
            set(state => ({ 
                ...state,
                user: {token: '', email: ''} 
            }))
})

userStore = devtools(userStore)
userStore = persist(userStore, { name: 'user_settings' })

export const useUserStore = create(userStore)