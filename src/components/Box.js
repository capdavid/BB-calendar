import React from 'react';
import styled from '@emotion/styled';

const Box = props => {
    const StyledBox = styled.div`
        width: 200px;
        height: 200px;
        background: blue;

        transform: ${`translateX(${props.move}0%)`};
        opacity: ${props.bye ? '30%' : '100'};
        transition: all 2s;
    `;
    return (
        <div>
            <StyledBox />
        </div>
    );
};
export default Box;
