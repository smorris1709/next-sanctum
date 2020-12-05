import { useQuery } from "react-query";
import { useSession, signOut } from "next-auth/client";
import { http } from "../lib/http";

export const useUser = (config = {}) => {
  const [session, loading] = useSession();
  if (!loading && !session) {
    signOut();
  }

  return useQuery(
    "user",
    async () => {
      const { data } = await http.get("/api/user", {
        headers: { Authorization: session.token },
      });
      return data;
    },
    {
      enabled: !loading,
      ...config,
    }
  );
};
