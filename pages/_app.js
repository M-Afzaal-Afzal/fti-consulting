import {Chakra} from "../src/theme/Chakra";
import Layout from '../src/components/Layout/Layout';
import 'focus-visible/dist/focus-visible'
import {Provider} from 'react-redux'
import store from "../src/store/store";
import {AnimatePresence} from "framer-motion"

import "swiper/swiper.min.css";
import '../src/components/carousel/swiper.css'


function MyApp({Component, pageProps}) {

    return (
            <Provider store={store}>
                <Chakra cookies={pageProps.cookies}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Chakra>
            </Provider>
    )
}

export default MyApp
