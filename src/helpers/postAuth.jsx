// import { useUserStore } from '../store/userStore.js'

export const postAuth = async (user, pass) => {
    
    const apiUrl = import.meta.env.VITE_API_URL

    try {
        const responseUsers = await fetch(`${apiUrl}`)
        const dataUsers = await responseUsers.json()

        const userExist = dataUsers.results.some(item => item.user.email === user)

        if (!userExist || !pass?.trim()) {
            return { error: 'Usuario o contraseña invalidos' }
        }

        // const response = await fetch(`${apiUrl}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ user, pass }),
        // })

        // //si la respuesta no es ok, lanzamos error
        // if (!response.ok) {
        //     throw new Error(`${response.status}`)
        // }

        // //parseamos la respuesta a un json valido
        // const data = await response.json()

        // console.log(data)

        // //validamos si el backend devolvio error
        // if (data.error) throw new Error(data.error)

        return { user }
    } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Error Desconocido'

        return { error: message }
    }
}
