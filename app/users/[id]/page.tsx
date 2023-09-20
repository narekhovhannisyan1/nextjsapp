import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

// export default async function UserProfile({ params }: Props) {
// const user = prisma.user.findUnique({ where: { id: params.id } });
// const { name, bio, image}: {string|null, string|null, string|null} = user ?? {};

//   return <div>{name}</div>;
// }
