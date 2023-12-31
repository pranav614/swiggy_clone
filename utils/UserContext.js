import { createContext} from "react";

const UserContext=createContext({
    loginUser:'defaultUser',
})

export default UserContext;