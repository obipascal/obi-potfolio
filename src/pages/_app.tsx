import "./../styles/globals.scss"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { wrapper } from "redux/stores"

export default function App({ Component, pageProps }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(pageProps)
	const queryClient = new QueryClient()

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</Provider>
	)
}
