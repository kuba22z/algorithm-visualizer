import type {AppProps} from 'next/app'
import {Layout} from "../layouts/Layout";
import {Provider} from 'react-redux'
import store from "../store/store";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export default function App({Component, pageProps}: AppProps) {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache(),
    });

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>,
        </Provider>
    )
}
