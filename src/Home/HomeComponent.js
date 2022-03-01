import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";
import Me from "../design resources/Untitled-1.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomeComponent = () => {
    return (
        <Box
            sx={{
                margin: '5% 5% 20% 5%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'horizontal',
            }}
        >
            <CardMedia
                component="img"
                height="600"
                image={Me}
                alt="Logo"
                sx={{
                    width: "fit-content",
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'
                }}
            >
                <Box
                    sx={{
                        margin: '0% 0% 0% 90%'
                    }}
                >
                    <LinkedInIcon
                        fontSize='large'
                    />
                    <InstagramIcon
                        fontSize='large'
                    />
                </Box>
                <Box
                    sx={{
                        margin: '0% 5% 20% 5%'
                    }}
                >
                    <Typography variant="h2"
                                sx={{
                                    margin: '8px',
                                    fontWeight: '600',
                                    color: '#EE5C43'
                                }}
                    >Tian Bogdan-Mihai</Typography>
                    <Typography variant="h6"
                                sx={{
                                    margin: '8px',
                                    fontWeight: '400',
                                    color: '#EE5C43'

                                }}
                    >Software developer passionate about delivering a good customer experience,
                        either through web development, mobile development or full-stack solutions</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default HomeComponent;
