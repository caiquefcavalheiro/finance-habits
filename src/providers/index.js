import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <GroupProvider>
                {children}
            </GroupProvider>
        </SigninProvider>
    )
}

export default Providers