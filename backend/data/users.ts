import bcrypt from 'bcryptjs'

export interface User {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    // matchPassword: (password: string) => Promise<boolean>
}

const users: User[] = [
    {
        name: 'Admin User',
        email: 'admin@somethin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Donald T.',
        email: 'donald@somethin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
]
export default users