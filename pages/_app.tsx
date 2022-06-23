import "../styles/globals.css";
import DefaultLayout from "../layouts/default";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

function MyApp({ Component, pageProps }: any) {
	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	);
}

export default MyApp;
