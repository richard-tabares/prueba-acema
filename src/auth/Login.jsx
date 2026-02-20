import { useForm } from '../hooks/useForm.ts'
import { useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { userStore } from '../store/userStore.js'


export const Login = () => {
    const initialFormState = { user: '', pass: '' }
    const path = useLocation().pathname
    const navigate = useNavigate()
    //usamos el custom hook para manejar el formulario
    const { user, pass, onInputChange } = useForm(initialFormState)
    const fetchUsers = userStore((state) => state.fetchUsers)
    const login = userStore((state) => state.login)
    const authUser = userStore((state) => state.authUser)
    const error = userStore((state) => state.error)

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    useEffect(() => {
        if (authUser && error === null) {
            navigate('/dashboard', {
                replace: true,
            })
        }
    }, [authUser, error, navigate])

    const onAuth = () => {
        //validaciones basicas de los campos user y pass no esten vacios
        // if (!user?.trim()) {
        //     // notify('El campo usuario esta vacio', 'warning', 'empty-user')
        //     return
        // }
        // if (!pass?.trim()) {
        //     // notify('El campo contraseña esta vacio', 'warning', 'empty-pass')
        //     return
        // }
        //llamamos a la funcion que hace el post al backend
        login(user, pass)
        
        //si hay error en la respuesta del backend, mostramos notificacion
        // if (data.error?.message) {
        //     // notify('Usuario o contraseña invalidos', 'warning', 'error500')
        //     return
        // }
    }

    return (
        <section className='container m-auto h-screen flex flex-col gap-4 justify-center items-center'>
            <section className='flex gap-2 w-[80%] min-sm:w-[400px] flex-col items-center justify-center p-4'>
                <h1 className='titles'>
                    {/* {path === '/login' ? 'Iniciar Sesión' : 'Registrarse'} */}
                </h1>

                <input
                    type='email'
                    name='user'
                    value={user || ''}
                    placeholder='Usuario'
                    className='input-link'
                    required
                    onChange={onInputChange}
                />
                <input
                    type='password'
                    name='pass'
                    value={pass || ''}
                    placeholder='Contraseña'
                    className='input-link'
                    required
                    onChange={onInputChange}
                />
                <button
                    className='btn-primary'
                    onClick={onAuth}>
                    {path === '/login' ? 'Iniciar Sesión' : 'Registrase'}
                </button>
                {/* {path === '/login' && (
                    <a
                        href=''
                        className='self-end cursor-pointer text-subtitle'>
                        Recuperar Contraseña
                    </a>
                )} */}
            </section>

            {/* <section className='flex w-[80%] min-sm:w-[400px] items-center justify-center px-4'>
                <div className='w-20 h-px bg-gray-300'></div>
                <span className='px-3 text-sm text-gray-500'>
                    Continuar con
                </span>
                <div className='w-20 h-px bg-gray-300'></div>
            </section> */}

            {/* <section className='flex flex-col gap-2 w-[80%] min-sm:w-[400px] px-4'>
                <section className='border border-accentBlue/15 py-2 px-3 rounded-md cursor-pointer hover:bg-primary/10 flex items-center justify-center'>
                    <FaGoogle className='size-6 text-primary mr-3' />
                    Continuar con Google
                </section>
                <section className='border border-accentBlue/15 py-2 px-3 rounded-md cursor-pointer hover:bg-primary/10 flex items-center justify-center'>
                    <FaFacebookF className='size-6 text-primary mr-3' />
                    Continuar con Facebook
                </section>
            </section> */}
            {/* <ToastContainer
                position='top-right'
                autoClose={4000}
            /> */}
        </section>
    )
}
