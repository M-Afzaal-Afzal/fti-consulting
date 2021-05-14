import React from 'react';
import {Box} from "@chakra-ui/react";

const HeaderButton = ({children,...props}) => {
    return (
        <Box
            display={"inline-flex"}
            alignItems={'center'}
            justifyContent={'center'}
            fontSize={'16px'}
            verticalAlign={'baseline'}
            color={'white'}
            textTransform={'uppercase'}
            height={'40px'}
            // lineHeight={"40px"}
            padding={'0 10px 0 10px'}
            _hover={{borderBottom: '1px solid #fff',cursor: 'pointer'}}
            {...props}
        >
            {children}
        </Box>
    );
};

export default HeaderButton;