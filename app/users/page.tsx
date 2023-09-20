import { Metadata } from "next";
import UserCard from "@/components/UserCard/UserCard";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
