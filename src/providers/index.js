import { SigninProvider } from "./SignIn";
import { SignUpProvider } from "./SignUp";

const Providers = ( { children }) => {
    return(
        <>
            <SigninProvider>
                <SignUpProvider>
                    {children}
                </SignUpProvider>
            </SigninProvider>
        </>
    )
}

export default Providers