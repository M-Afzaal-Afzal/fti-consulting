import {Box} from "@chakra-ui/react";

import HeroSection from "../src/components/Hero/HeroSection";
import InfoSection from "../src/components/info/InfoSection";
import CarouselSection from "../src/components/carousel/CarouselSection";

const Home = () => {

    return (
        <Box>
            <HeroSection/>
            <InfoSection/>
            <CarouselSection/>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra"

export default Home