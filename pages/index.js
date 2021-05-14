import {Box} from "@chakra-ui/react";

import HeroSection from "../src/components/Hero/HeroSection";

const Home = () => {

    return (
        <Box>
            <HeroSection/>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra"

export default Home