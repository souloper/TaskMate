import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-green-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
      <SignIn afterSignInUrl="/" afterSignUpUrl="/sign-up"/>
    </div>
  );
}
