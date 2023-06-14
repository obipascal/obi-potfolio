import "./../styles/globals.scss"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { wrapper } from "redux/stores"

export default function App({ Component, pageProps }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(pageProps)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}
