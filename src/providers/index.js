import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";
import { HabitProvider } from "./Habit";

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <SignUpProvider>
                <GroupProvider>
                    <HabitProvider>
                        {children}
                    </HabitProvider>
                </GroupProvider>
            </SignUpProvider>
        </SigninProvider>
    )
}

export default Providers