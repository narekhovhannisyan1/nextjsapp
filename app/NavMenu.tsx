import styles from "./NavMenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignOutButton } from "../components/buttons";
import AuthCheck from "../components/AuthCheck";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/next.svg" width={216} height={30} alt="logo"></Image>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <AuthCheck>
          <li>
            <SignOutButton />
          </li>
        </AuthCheck>
      </ul>
    </nav>
  );
}
