import Signup from "../Auth/SignUp";

const SignupPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4 flex justify-center items-center gradient-background">
      <div className="flex gap-5 justify-center items-center">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
