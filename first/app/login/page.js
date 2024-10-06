"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          onClick={() => signOut()}
          className="border-2 border-white p-2 bg-[#5746d7] text-white"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <div className="button-wrapper w-full min-h-20 flex items-center justify-center gap-7">
        <button
          onClick={() => signIn("github")}
          className="border-2 border-white p-2  bg-[#333] text-white"
        >
          Sign in using github
        </button>
        <button
          onClick={() => signIn("google")}
          className="border-2 border-white p-2  bg-[#da682b] text-white"
        >
          Sign in using google
        </button>
      </div>
    </>
  );
}
