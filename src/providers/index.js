import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";
import { HabitProvider } from "./Habit";
import { HabitIdProvider } from "./HabitId";;

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <SignUpProvider>
                <GroupProvider>
                    <HabitProvider>
                        <HabitIdProvider>
                            {children}
                        </HabitIdProvider>
                    </HabitProvider>
                </GroupProvider>
            </SignUpProvider>
        </SigninProvider>
    )
}

export default Providers