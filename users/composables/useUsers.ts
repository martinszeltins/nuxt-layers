export function useUsers() {
    const loadUsers = () => {
        console.log('Users loaded!')
    }

    return { loadUsers }
}
