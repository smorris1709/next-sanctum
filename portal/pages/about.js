import Nav from "../components/nav";
import { getSession } from "next-auth/client";

const About = () => {
  return (
    <>
      <Nav />
      About us
    </>
  );
};

export default About;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/signin",
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
