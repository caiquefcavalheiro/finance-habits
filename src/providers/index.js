import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";
import { CreateHabitProvider } from "./CreateHabit";

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <SignUpProvider>
                <GroupProvider>
                    <CreateHabitProvider>
                    {children}
                    </CreateHabitProvider>
                </GroupProvider>
            </SignUpProvider>
        </SigninProvider>
    )
}

export default Providers