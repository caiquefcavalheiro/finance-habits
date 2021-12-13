import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";
import { HabitsProvider } from "./Habits";
import { HabitIdProvider } from "./HabitId";;

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <SignUpProvider>
                <GroupProvider>
                    <HabitsProvider>
                        <HabitIdProvider>
                            {children}
                        </HabitIdProvider>
                    </HabitsProvider>
                </GroupProvider>
            </SignUpProvider>
        </SigninProvider>
    )
}

export default Providers