import Auth from "../Auth/Auth";

const LoginSignupPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4 flex justify-center items-center gradient-background">
      <div className="flex gap-5 justify-center items-center">
        <Auth />
      </div>
    </div>
  );
};

export default LoginSignupPage;
