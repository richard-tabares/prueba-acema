import { create } from "zustand";

export const userStore = create((set) => ({
    users: [],
    authUser: null,
    error: null,
    isLoadingUsers: false,
    setUsers: (users) => set({ users }),
    clearError: () => set({ error: null }),
    logout: () => set({ authUser: null, error: null }),
    fetchUsers: async () => {
        const apiUrl = import.meta.env.VITE_API_URL;

        set({ isLoadingUsers: true, error: null });

        try {
            const responseUsers = await fetch(`${apiUrl}`);
            const { results } = await responseUsers.json();
            set({ users: results ?? [], isLoadingUsers: false });
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Error al cargar usuarios";
            set({ users: [], isLoadingUsers: false, error: message });
        }
    },
    login: (email, pass) =>
        set((state) => {
            const emailExist = state.users.find(
                (item) => item.user.email === email
            );

            if (emailExist && pass?.trim()) {
                return { authUser: emailExist.user, error: null };
            }

            return {
                authUser: null,
                error: "Usuario o contraseña invalidos",
            };
        }),
    searchUser: (email) =>
        set((state) => {
            const emailExist = state.users.find(
                (item) => item.user.email.toLowerCase().includes(email.toLowerCase())
            );

            if (emailExist) {
                return { users: [emailExist], error: null };
            }

            return {
                users: state.users,
            };
        }),
}));