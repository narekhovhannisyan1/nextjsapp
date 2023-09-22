import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  age: number | null;
  bio: string | null;
}

export default async function UserProfile({ params }: Props) {
  const user: User = prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>
      <img width={300} src={image ?? "/user.webp"} alt={`${name}s profile`} />
      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}
