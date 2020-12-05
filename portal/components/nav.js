import { signin, signout, useSession } from "next-auth/client";
import { useUser } from "../hooks/use-user";
import Link from "next/link";
/**
 * The approach used in this component shows how to built a sign in and sign out
 * component that works on pages which support both client and server side
 * rendering, and avoids any flash incorrect content on initial page load.
 **/
const Nav = () => {
  const [session, loading] = useSession();
  const { data } = useUser();

  return (
    <nav>
      {!session && (
        <>
          <span className={``}>Not signed in</span>
          <a
            href={`/api/auth/signin`}
            onClick={e => {
              e.preventDefault();
              signin();
            }}
          >
            <button className={``}>Sign in</button>
          </a>
        </>
      )}
      {session && (
        <>
          <span className={``}>
            Signed in as <strong>{session.user.email}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            onClick={e => {
              e.preventDefault();
              signout();
            }}
          >
            <button className={``}>Sign out</button>
          </a>
        </>
      )}
      <div className="flex items-center space-x-3 text-white bg-blue-800">
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
