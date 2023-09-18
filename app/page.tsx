import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const revalidate = 5;

export default function Home() {
  const session = getServerSession();
  console.log(session);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main>
      <h1>Welcome to the home page</h1>
      <p>A next-gen social media app to connect with friends.</p>
    </main>
  );
}
