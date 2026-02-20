import { useMemo, useState } from "react"
import { userStore } from "../store/userStore"

export const Dashboard = () => {

    const authUser = userStore((state) => state.authUser)
    const users = userStore((state) => state.users)
    const seartchUser = userStore((state) => state.searchUser)
    const [search, setSearch] = useState("")


    const onSearch = () => {
        console.log(search)
        seartchUser(search)
    
    }

    return (

        <div>
            <input type="text" name="search" id="search" className="border p-2" onChange={(e) => setSearch(e.target.value)} placeholder="Buscar usuario..." />
            <button type="button" className="p-2 bg-blue-200 m-2" onClick={onSearch}>Buscar</button>

            {


                users.map((user, index) => (
                    <div key={index} className="p-2">
                        <span >{user.user.email}</span>
                        <button type="button" className="p-2 bg-blue-200 m-2">Editar</button>
                        <button type="button" className="p-2 bg-red-500">Eliminar</button>
                    </div>
                ))

            }</div>
    )
}
