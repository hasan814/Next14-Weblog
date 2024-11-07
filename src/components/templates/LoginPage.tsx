import { loginHandler } from "@/utils/Action";

const LoginPage = async () => {
  // ============= Rendering ================
  return (
    <form action={loginHandler}>
      <button type="submit">Signin with GitHub</button>
    </form>
  );
};

export default LoginPage;
