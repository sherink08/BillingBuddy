export class Room {
    constructor(
        public roomName: string,
        public users: Users
    ){}
}

export class Users {
    constructor(
        name: string,
        email: string,
        phone: string,
        isadmin: boolean
    ){}
}
