import { SessionWrapper } from "@/components/SessionWrapper";
import LoginComponent from "@/components/login/LoginComponent";
import SignOutPage from "@/components/login/SignoutComponent";

import { auth } from "@/lib/auth";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        {isAuthenticated ? <SignOutPage /> : <LoginComponent />}
      </SessionWrapper>
    </div>
  );
}
