import { Logout } from "./styles"

const LogoutButton = ({children, ...rest}) => {
    return <Logout {...rest} > {children} </Logout>
}

export default LogoutButton