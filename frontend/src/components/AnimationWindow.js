import { Box } from '@mui/material'
import React from 'react'

export default function AnimationWindow() {
    return (
        <Box position="relative" height="100%">
            <Box
                sx={{
                    "@keyframes left-door": {
                        "0%": {
                            transform: "none",
                        },
                        "50%": {
                            transform: "perspective(180px) rotateY(80deg)",
                        },
                        "100%": {
                            transform: "none",
                        },
                    },
                    animation: "left-door 3s ease-in infinite",
                    transformOrigin: "left",
                }}
                height="100%"
                width="50%"
                left={0}
                top={0}
                position="absolute"
                bgcolor="#C37359"
            />

            <Box sx={{
                "@keyframes right-door": {
                    "0%": {
                        transform: "none",
                    },
                    "50%": {
                        transform: "perspective(180px) rotateY(-80deg)",
                    },
                    "100%": {
                        transform: "none",
                    },
                },
                animation: "right-door 3s ease-in infinite",
                transformOrigin: "right",
            }}
                height="100%"
                width="50%"
                top={0}
                right={0}
                position="absolute"
                bgcolor="#C37359"
            />
        </Box>
    )
}
