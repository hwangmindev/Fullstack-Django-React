"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/api/auth";
import { useAuthSession } from "@/hooks/useAuthSession";

type AuthNavItemsProps = {
  linkClassName: string;
  logoutButtonClassName?: string;
};

export default function AuthNavItems({
  linkClassName,
  logoutButtonClassName = linkClassName,
}: AuthNavItemsProps) {
  const router = useRouter();
  const { isLoggedIn, refresh } = useAuthSession();

  const handleLogout = () => {
    logout();
    refresh();
    router.push("/");
  };

  return (
    <>
      <Link href="/" className={linkClassName}>
        Home
      </Link>
      {!isLoggedIn && (
        <>
          <Link href="/login" className={linkClassName}>
            Login
          </Link>
          <Link href="/register" className={linkClassName}>
            Register
          </Link>
        </>
      )}
      {isLoggedIn && (
        <button
          type="button"
          onClick={handleLogout}
          className={logoutButtonClassName}
        >
          Logout
        </button>
      )}
      <Link href="/profile" className={linkClassName}>
        Profile
      </Link>
    </>
  );
}
