import { SigninProvider } from "./SignIn";
import { GroupProvider } from "./Groups";
import { SignUpProvider } from "./SignUp";
import { CreateHabitProvider } from "./CreateHabit";
import { HabitIdProvider } from "./HabitId";
import { ActiviesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";

const Providers = ({ children }) => {
  return (
    <SigninProvider>
      <SignUpProvider>
        <GroupProvider>
          <CreateHabitProvider>
            <ActiviesProvider>
              <GoalsProvider>
                <HabitIdProvider>{children}</HabitIdProvider>
              </GoalsProvider>
            </ActiviesProvider>
          </CreateHabitProvider>
        </GroupProvider>
      </SignUpProvider>
    </SigninProvider>
  );
};

export default Providers;
