import React, {useState} from 'react';
import {
    Accordion,
    AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel,
    Box,
    Button,
    Container,
    Text,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import Image from 'next/image';
import HeaderButton from "../Buttons/HeaderButton";
import {useMediaQuery} from "@chakra-ui/react";
import {
    Drawer,

    DrawerFooter,

    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"

import {AnimatePresence, motion} from "framer-motion"

const whiteBosVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            duration: .5,
        }
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'tween',
            duration: .3
        }
    }
}

const MotionBox = motion(Box)


const Header = () => {

    const [isLargerThan992] = useMediaQuery("(min-width: 992px)")

    const [hoveredSection, setHoveredSection] = useState(null);

    const {isOpen, onOpen, onClose} = useDisclosure()


    const handleMouseEnter = (value) => {
        setHoveredSection(value);
    }

    const handleMouseLeave = () => {
        setHoveredSection(null);
    }

    return (
        <>
            {/*<Box display={'flex'} justifyContent={'flex-end'}>*/}

            {/*</Box>*/}
            <Box position={'fixed'} zIndex={999} w={'100%'} bg={'rgba(118, 151, 176, 0.9)'}
                 borderBottom={'1px solid #fff'}>

                <Box position={'relative'}>

                    <Container maxWidth={["540px", null, "960px", '1140px']} position={'relative'}>
                        <Box
                            display={'flex'}
                            flexWrap={'nowrap'}
                            justifyContent={['flex-start', 'space-between']}
                            alignItems={'center'}
                            w={"100%"}
                            h={'80px'}
                            onMouseEnter={handleMouseLeave}
                        >
                            {/* Left icons*/}
                            <Box onMouseEnter={handleMouseLeave} flexGrow={1}>
                                <Box position={'relative'} width={[250, 365, null, 306]}
                                     height={[39, 49.28, null, 64.25]}>
                                    <Image
                                        src={'/Logoh.png'}
                                        objectFit={'contain'}
                                        layout={'fill'}
                                    />
                                </Box>
                            </Box>

                            {/* Right icons*/}

                            {
                                isLargerThan992 && (
                                    <Box>
                                        <HeaderButton onMouseEnter={() => {
                                            handleMouseEnter('about')
                                        }}>
                                            About
                                        </HeaderButton>

                                        <HeaderButton onMouseEnter={() => {
                                            handleMouseEnter('practices & sectors')
                                        }}>
                                            Practices & Sectors
                                        </HeaderButton>

                                        <HeaderButton onMouseEnter={() => {
                                            handleMouseEnter('trending topics')
                                        }}>
                                            Trending Topics
                                        </HeaderButton>

                                        <HeaderButton onMouseEnter={() => {
                                            handleMouseEnter('news')
                                        }}>
                                            Newsroom
                                        </HeaderButton>
                                    </Box>
                                )
                            }

                            {
                                !isLargerThan992 && (
                                    <Box onClick={onOpen} _hover={{cursor: 'pointer'}} right={'22px'} top={'30px'}
                                         position={'absolute'}>
                                        <Image
                                            src={'https://fticommunications.com/wp-content/themes/FTI%20Communications%20Custom%20Theme/assets/img/hamburger.png'}
                                            width={48}
                                            height={24}
                                        />
                                    </Box>
                                )
                            }

                        </Box>
                    </Container>

                    {/*     about white bos*/}

                    <AnimatePresence exitBeforeEnter>

                        {
                            (hoveredSection === 'about') && (
                                <MotionBox
                                    variants={whiteBosVariant}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    exit={'exit'}
                                    onMouseLeave={handleMouseLeave}
                                    py={16} px={24} position={'absolute'} bg={'white'} top={'80px'} w={'100%'}
                                    // height={'30rem'}
                                    display={'grid'}
                                    gridTemplateColumns={'1fr 1fr'}
                                    gridGap={'2rem'}
                                >

                                    {/* image section*/}
                                    <Box marginLeft={'auto'} width={'8rem'} marginRight={'4rem'}>

                                        <Box mb={'2rem'} height={'87px'} position={'relative'} width={'124px'}>

                                            <Image
                                                src={'https://fticommunications.com/wp-content/uploads/2020/05/brand_images_pine_forest_lake_road_A4-300x212.jpg'}
                                                layout={'fill'} objectFit={'cover'}/>

                                        </Box>

                                        <Box>

                                            <Text fontSize={'16px'} fontFamily={'Source Sans Pro'} fontWeight={'normal'}
                                                  color={'#58595b'}>
                                                FTI Strategic Communications helps companies around the world manage
                                                change, mitigate risk, and enhance their market position.
                                            </Text>

                                        </Box>

                                    </Box>

                                    {/* links section*/}

                                    <Box>

                                        {/* first link section*/}

                                        <Box display={'grid'} grid gridTemplateColumns={'1fr 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    Strategic Communications
                                                </Text>
                                            </Box>

                                            <VStack spacing={1.5} alignItems={'flex-start'}>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    about
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    carrers
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    our values
                                                </Button>

                                            </VStack>

                                        </Box>

                                        {/* second link section*/}

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'1fr 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    REGIONS </Text>
                                            </Box>

                                            <VStack spacing={1.5} alignItems={'flex-start'}>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    Asia-Pacific
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    Australia
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    Europe, MIddle East & Africa
                                                </Button>

                                            </VStack>

                                        </Box>

                                        {/* third link section*/}

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'1fr 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    FTI CONSULTING
                                                </Text>
                                            </Box>

                                            <VStack spacing={1.5} alignItems={'flex-start'}>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    fticonsulting.com
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    FTI Journal
                                                </Button>

                                            </VStack>

                                        </Box>

                                        {/* fourth link section*/}

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'1fr 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    Contact Us </Text>
                                            </Box>

                                            {/*<VStack spacing={1.5} alignItems={'flex-start'}>*/}

                                            {/*    <Button fontSize={'16px'} fontWeight={'normal'} textTransform={'uppercase'} variant={'link'}>*/}
                                            {/*        about*/}
                                            {/*    </Button>*/}

                                            {/*    <Button fontSize={'16px'} fontWeight={'normal'} textTransform={'uppercase'} variant={'link'}>*/}
                                            {/*        carrers*/}
                                            {/*    </Button>*/}

                                            {/*    <Button fontSize={'16px'} fontWeight={'normal'} textTransform={'uppercase'} variant={'link'}>*/}
                                            {/*        our values*/}
                                            {/*    </Button>*/}

                                            {/*</VStack>*/}

                                        </Box>

                                    </Box>

                                </MotionBox>
                            )
                        }


                        {/*     practices & sectors white bos*/}


                        {

                            (hoveredSection === 'practices & sectors') && (
                                <MotionBox
                                    variants={whiteBosVariant}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    exit={'exit'}
                                    onMouseLeave={handleMouseLeave}
                                    py={16} px={24} position={'absolute'} bg={'white'} top={'80px'} w={'100%'}
                                    // height={'30rem'}
                                    display={'grid'}
                                    gridTemplateColumns={'1fr 1fr'}
                                    gridGap={'2rem'}
                                >

                                    {/* image section*/}
                                    <Box marginLeft={'auto'} width={'10rem'} marginRight={'4rem'}>

                                        <Box mb={'2rem'} height={'87px'} position={'relative'} width={'124px'}>

                                            <Image
                                                src={'https://fticommunications.com/wp-content/uploads/2020/08/energy-natural-resources-2048x1366-1-300x200.jpg'}
                                                layout={'fill'} objectFit={'cover'}/>

                                        </Box>

                                        <Box>

                                            <Text fontSize={'16px'} fontFamily={'Source Sans Pro'} fontWeight={'normal'}
                                                  color={'#58595b'}>
                                                Combining subject matter expertise with functional and disciplinary
                                                experience, we help companies and industries around the world navigate
                                                and manage their most pressing financial, regulatory and reputational
                                                matters.
                                            </Text>

                                        </Box>

                                    </Box>

                                    {/* links section*/}

                                    <Box>

                                        {/* first link section*/}

                                        <Box display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    PRACTICES
                                                </Text>
                                            </Box>

                                            <VStack spacing={1.5} alignItems={'flex-start'}>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    CORPORATE REPUTATION
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    CRISIS & LITIGATION
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    DIGITAL & INSIGHTS
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    FINANCIAL COMMUNICATIONS
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    PEOPLE & TRANSFORMATION
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    PUBLIC AFFAIRS & GOVERNMENT RELATIONS
                                                </Button>

                                            </VStack>

                                        </Box>

                                        {/* second link section*/}

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    SECTORS
                                                </Text>
                                            </Box>

                                            <VStack spacing={1.5} alignItems={'flex-start'}>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    CONSUMER
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    ENERGY & NATURAL RESOURCES
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    FINANCIAL SERVICES
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    HEALTHCARE & LIFE SCIENCES
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    DIVERSIFIED INDUSTRIALS
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    REAL ESTATE
                                                </Button>

                                                <Button fontSize={'16px'} fontWeight={'normal'}
                                                        textTransform={'uppercase'} variant={'link'}>
                                                    TELECOM, MEDIA & TECHNOLOGY
                                                </Button>

                                            </VStack>

                                        </Box>

                                    </Box>

                                </MotionBox>
                            )

                        }

                        {/*     trending topics white bos*/}

                        {
                            (hoveredSection === 'trending topics') && (
                                <MotionBox
                                    variants={whiteBosVariant}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    exit={'exit'}
                                    onMouseLeave={handleMouseLeave}
                                    py={16} px={24} position={'absolute'} bg={'white'} top={'80px'} w={'100%'}
                                    // height={'30rem'}
                                    display={'grid'}
                                    gridTemplateColumns={'1fr 1fr'}
                                    gridGap={'2rem'}
                                >

                                    {/* image section*/}
                                    <Box marginLeft={'auto'} width={'10rem'} marginRight={'4rem'}>

                                        <Box mb={'2rem'} height={'87px'} position={'relative'} width={'124px'}>

                                            <Image
                                                src={'https://fticommunications.com/wp-content/uploads/2020/03/Layer-61-300x161.png'}
                                                layout={'fill'} objectFit={'cover'}/>

                                        </Box>

                                        <Box>

                                            <Text fontSize={'16px'} fontFamily={'Source Sans Pro'} fontWeight={'normal'}
                                                  color={'#58595b'}>
                                                FTI Consulting helps clients compete in a global economy where success
                                                crosses industries and borders. Our experts are recognized for the depth
                                                of their knowledge and a track record of making an impact.
                                            </Text>

                                        </Box>

                                    </Box>

                                    {/* links section*/}

                                    <Box>

                                        {/* first link section*/}

                                        <Box display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    ALL INSIGHTS
                                                </Text>
                                            </Box>

                                        </Box>

                                        {/* second link section*/}

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    2020 ELECTION
                                                </Text>
                                            </Box>

                                        </Box>

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    COVID-19
                                                </Text>
                                            </Box>

                                        </Box>

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    ESG
                                                </Text>
                                            </Box>

                                        </Box>

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    GERMAN ELECTION 2021
                                                </Text>
                                            </Box>

                                        </Box>

                                    </Box>

                                </MotionBox>
                            )
                        }

                        {/*     news white bos*/}

                        {
                            (hoveredSection === 'news') && (
                                <MotionBox
                                    variants={whiteBosVariant}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    exit={'exit'}
                                    onMouseLeave={handleMouseLeave}
                                    py={16} px={24} position={'absolute'} bg={'white'} top={'80px'} w={'100%'}
                                    // height={'30rem'}
                                    display={'grid'}
                                    gridTemplateColumns={'1fr 1fr'}
                                    gridGap={'2rem'}
                                >

                                    {/* image section*/}
                                    <Box marginLeft={'auto'} width={'10rem'} marginRight={'4rem'}>

                                        <Box mb={'2rem'} height={'87px'} position={'relative'} width={'124px'}>

                                            <Image
                                                src={'https://fticommunications.com/wp-content/uploads/2020/04/newsroom-1-300x200.jpg'}
                                                layout={'fill'} objectFit={'cover'}/>

                                        </Box>

                                        <Box>

                                            <Text fontSize={'16px'} fontFamily={'Source Sans Pro'} fontWeight={'normal'}
                                                  color={'#58595b'}>
                                                Keep up with the latest happenings from FTI Consulting Strategic
                                                Communications.
                                            </Text>

                                        </Box>

                                    </Box>

                                    {/* links section*/}

                                    <Box>

                                        {/* first link section*/}

                                        <Box display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    LATEST NEWS
                                                </Text>
                                            </Box>

                                        </Box>

                                        {/* second link section*/}

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    PRESS RELEASES
                                                </Text>
                                            </Box>

                                        </Box>

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    AWARDS
                                                </Text>
                                            </Box>

                                        </Box>

                                        <Box mt={8} display={'grid'} grid gridTemplateColumns={'150px 1fr'}>

                                            <Box>
                                                <Text color={'#454545'} fontSize={'16px'} fontWeight={'bolder'}>
                                                    CONTACT US
                                                </Text>
                                            </Box>

                                        </Box>

                                    </Box>

                                </MotionBox>
                            )
                        }

                    </AnimatePresence>

                </Box>

                <Box>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                    >
                        <DrawerOverlay/>
                        <DrawerContent>
                            <DrawerCloseButton color={'#003763'} size={'lg'} style={{position: 'absolute',top: 0,left: -40,borderRadius: 0, background: 'white'}} />

                            {/*<DrawerHeader>Create your account</DrawerHeader>*/}

                            {/*<DrawerBody>*/}

                                <Accordion defaultIndex={[0]} allowToggle>
                                    <AccordionItem>
                                        <Text >
                                            <AccordionButton>
                                                <Box fontWeight={'bold'} fontSize={'18px'} textTransform={'uppercase'} color={'#454545'} flex="1" textAlign="left">
                                                    About
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Text>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                {/*    second item*/}

                                    <AccordionItem>
                                        <Text >
                                            <AccordionButton>
                                                <Box fontWeight={'bold'} fontSize={'18px'} textTransform={'uppercase'} color={'#454545'} flex="1" textAlign="left">
                                                    Practices and Sectors
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Text>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                {/*    third item*/}

                                    <AccordionItem>
                                        <Text >
                                            <AccordionButton>
                                                <Box fontWeight={'bold'} fontSize={'18px'} textTransform={'uppercase'} color={'#454545'} flex="1" textAlign="left">
                                                    Trending Topics
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Text>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                {/*    4th item*/}

                                    <AccordionItem>
                                        <Text >
                                            <AccordionButton>
                                                <Box fontWeight={'bold'} fontSize={'18px'} textTransform={'uppercase'} color={'#454545'} flex="1" textAlign="left">
                                                   News Room
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Text>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>

                            {/*</DrawerBody>*/}

                            <DrawerFooter>

                            </DrawerFooter>
                        </DrawerContent>

                    </Drawer>
                </Box>

            </Box>
        </>
    );
};

export default Header;
