import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './Box';
import Text123 from './Text';



const stories = storiesOf('Components', module);

stories.add(
    'box/default box',
    () => (
        <Box color="black" fontSize={[ 1, 2, 3, 4 ]} >
        <Text123
            fontSize={[48, 64, 96, 128]}
            lineHeight='1.25'
            m={0}
        >
            Styled System
        </Text123>


        </Box>
    ),
);

