import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <SignUpProvider>
                <GroupProvider>
                    {children}
                </GroupProvider>
            </SignUpProvider>
        </SigninProvider>
    )
}

export default Providers