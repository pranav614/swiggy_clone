import { useRouteError } from "react-router-dom"

const Error=()=>{
    const route=useRouteError();
    console.log(route)
    console.log(route.status)
    return (
        <div>OOPs error {route.status} {route.statusText} </div>
    )
}
export default Error;