import React from 'react';
import {Box, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'horizontal',
                backgroundColor: '#EE5C43',
                padding: '10%'
            }}
        >
            <Typography variant="h4" color="white" align="center">
                {'Tian Bogdan-Mihai '}{' '}
                {new Date().getFullYear()}
                {'.'}
                <br/>
                <Typography>
                    Bucharest, Romania / Swansea, United Kingdom
                    <LocationOnIcon
                        fontSize="large"
                    />
                </Typography>

            </Typography>

        </Box>
    );
}

export default FooterComponent;
