import { SigninProvider } from "./SignIn";

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            {children}
        </SigninProvider>
    )
}

export default Providers