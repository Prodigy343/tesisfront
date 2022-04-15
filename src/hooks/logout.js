import React from 'react'
import { useUserStore } from '../store'
import { useHistory } from 'react-router-dom'
import UserService from '../services/User'

export const useLogout = () => {
    const history = useHistory();
    const clearUser = useUserStore((state) => state.clearUser)

    const logout = () => UserService.logout().then(() => {
        clearUser()
        history.push('/login')
    }).catch(
        history.push('/login')
    )
    return { logout }
}
