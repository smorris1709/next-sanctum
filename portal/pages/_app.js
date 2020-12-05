import { Provider } from "next-auth/client";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import "../styles/index.css";
const Noop = ({ children }) => <>{children}</>;

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  const queryCache = new QueryCache({
    defaultConfig: {
      queries: {
        // queryFn: defaultQueryFn,
        retry: false,
      },
    },
  });

  const Layout = Component.Layout || Noop;

  return (
    <Provider session={session}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ReactQueryCacheProvider>
      <ReactQueryDevtools />
    </Provider>
  );
};

export default App;
