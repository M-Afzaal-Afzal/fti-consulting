import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";

const FtiStrategicSection = () => {
    return (
        <Box height={'995px'} bg={`url(https://fticommunications.com/wp-content/uploads/2020/04/communication-background.jpg) center/cover`}>

           <Box px={['1rem','2rem','4rem']} pt={"127px"}>
                <Heading
                    fontFamily={'Fjalla One'}
                    color={'#fff'} fontWeight={'normal'}
                    fontSize={['45px','60',null,'68px']}
                    as={'h1'}
                    textAlign={['center',null,'left']}
                >

                    FTI STRATEGIC COMMUNICATIONS
                </Heading>

               <Box>
                   <Text
                       color={'white'}
                       fontSize={'27px'}
                       textAlign={['center',null,'left']}
                   >
                       Combining subject matter expertise with functional and disciplinary experience, we help companies and industries around the world navigate and manage their most pressing financial, regulatory and reputational challenges.
                   </Text>
               </Box>
           </Box>

        </Box>
    );
};

export default FtiStrategicSection;