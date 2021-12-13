import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";
import { CreateHabitProvider } from "./CreateHabit";
import { HabitIdProvider } from "./HabitId";;

const Providers = ( { children }) => {
    return(
        <SigninProvider>
            <SignUpProvider>
                <GroupProvider>
                    <CreateHabitProvider>
                        <HabitIdProvider>
                            {children}
                        </HabitIdProvider>
                    </CreateHabitProvider>
                </GroupProvider>
            </SignUpProvider>
        </SigninProvider>
    )
}

export default Providers