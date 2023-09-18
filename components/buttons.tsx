"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? "/user.webp"}
          width={32}
          height={32}
          alt="user"
        />
      </Link>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}
export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
