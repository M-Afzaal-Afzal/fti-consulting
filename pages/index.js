import {Box} from "@chakra-ui/react";

import HeroSection from "../src/components/Hero/HeroSection";
import InfoSection from "../src/components/info/InfoSection";
import CarouselSection from "../src/components/carousel/CarouselSection";
import FtiStrategicSection from "../src/components/FTIStrategic/FTIStrategicSection";
import GlobalLeadersSection from "../src/components/GlobalLeaders/GlobalLeadersSection";

const Home = () => {

    return (
        <Box>
            <HeroSection/>
            <InfoSection/>
            <CarouselSection/>
            <FtiStrategicSection/>
            <GlobalLeadersSection/>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra"

export default Home