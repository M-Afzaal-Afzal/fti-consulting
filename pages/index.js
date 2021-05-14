import {Box} from "@chakra-ui/react";

import HeroSection from "../src/components/Hero/HeroSection";
import InfoSection from "../src/components/info/InfoSection";

const Home = () => {

    return (
        <Box>
            <HeroSection/>
            <InfoSection/>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra"

export default Home