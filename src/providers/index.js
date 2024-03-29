import { ActiviesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { GroupProvider } from "./Groups";
import { HabitProvider } from "./Habit";
import { SigninProvider } from "./SignIn";
import { SignUpProvider } from "./SignUp";

const Providers = ({ children }) => {
  return (
    <SigninProvider>
      <SignUpProvider>
        <GroupProvider>
          <ActiviesProvider>
            <GoalsProvider>
              <HabitProvider>{children}</HabitProvider>
            </GoalsProvider>
          </ActiviesProvider>
        </GroupProvider>
      </SignUpProvider>
    </SigninProvider>
  );
};

export default Providers;