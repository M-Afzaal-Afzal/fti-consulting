import {Box, Button} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment,selectCounterVale} from "../src/store/counter/counterSlice";
import HeroSection from "../src/components/Hero/HeroSection";

const Home = () => {

    // const dispatch = useDispatch();
    //
    // const value = useSelector(selectCounterVale);
    // console.log(value);
    //
    // const incrementHandler = () => {
    //     dispatch(increment());
    // }
    //
    // const decrementHandler = () => {
    //     dispatch(decrement());
    // }

    return (
        <Box>
            <HeroSection/>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra";

export default Home;