import {User} from "../models/User";

const getUserById = (id: number): User | null => {
    if (id === 1) {
        return new User(1, "test");
    } else {
        return null;
    }
}

export {getUserById}
