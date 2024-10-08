import { Box, Container, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { IconBrandFacebook, IconBrandInstagram, IconBrandSnapchat, IconBrandX, IconLocation, IconMail, IconMan, IconMap, IconPhone, IconTimeline, IconUsers, IconWoman, IconWorldWww } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import fetcher from '../util/fetcher'
import { WorkDriveImage } from '../util/util'

export default function PrivateCompanyDetails() {
    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        fetcher(`/api/listings/private-company/${id}`)
            .then(r => r.json())
            .then(setData)
    }, [id])

    return data === null ? (
        <Loader />
    ) : (
        <Box my={{ md: 8, xs: 2 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        {data.billboards.length > 1 ? (
                            <Carousel
                                infiniteLoop={true}
                                autoPlay={true}
                                showArrows={true}
                                swipeable={true}
                                showStatus={false}
                                renderThumbs={() => (
                                    data.billboards.map((image, id) => (
                                        <WorkDriveImage
                                            key={id}
                                            image={image}
                                            alt=""
                                        />
                                    )))}
                            >
                                {data.billboards.map(image => (
                                    <WorkDriveImage
                                        image={image}
                                        alt=""
                                        key={image} />
                                ))}
                            </Carousel>
                        ) : (
                            <WorkDriveImage
                                key={id}
                                image={data.billboards?.[0]}
                                alt=""
                            />
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography variant="h1">
                                {data.name}
                            </Typography>
                            <Typography variant="h3">
                                {data.type}
                            </Typography>
                            <Typography>
                                {data.description}
                            </Typography>
                            <List>
                                <Grid container spacing={1}>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconLocation />
                                            </ListItemIcon>
                                            <ListItemText primary="Region" secondary={data.region} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconMap />
                                            </ListItemIcon>
                                            <ListItemText primary="Province" secondary={data.province} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconLocation />
                                            </ListItemIcon>
                                            <ListItemText primary="Address 1" secondary={data.address_1} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconMap />
                                            </ListItemIcon>
                                            <ListItemText primary="Address 2" secondary={data.address_2} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconMan />
                                            </ListItemIcon>
                                            <ListItemText primary="Employee Count(Male)" secondary={data.emp_male} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconWoman />
                                            </ListItemIcon>
                                            <ListItemText primary="Employee Count(Female)" secondary={data.emp_female} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <IconTimeline />
                                            </ListItemIcon>
                                            <ListItemText primary="Year Founded" secondary={data.year} />
                                        </ListItem>
                                    </Grid>
                                    {data.website && (
                                        <Grid item xs={12}>
                                            <ListItemButton component="a" href={`https://${data.website}`} target="_blank">
                                                <ListItemIcon>
                                                    <IconWorldWww />
                                                </ListItemIcon>
                                                <ListItemText primary="Website" secondary={data.website} />
                                            </ListItemButton>
                                        </Grid>
                                    )}
                                    <Grid item md={6} xs={12}>
                                        <ListItemButton component="a" href={`mailto://${data.email}`}>
                                            <ListItemIcon>
                                                <IconMail />
                                            </ListItemIcon>
                                            <ListItemText primary="Email" secondary={data.email} />
                                        </ListItemButton>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <ListItemButton component="a" href={`tel://${data.phone}`}>
                                            <ListItemIcon>
                                                <IconPhone />
                                            </ListItemIcon>
                                            <ListItemText primary="Phone" secondary={data.phone} />
                                        </ListItemButton>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Stack direction="row" spacing={1} justifyContent='center'>
                                            <Box>
                                                <IconButton target="_blank" component={Link} href={`https://www.instagram.com/${data.instagram}`}>
                                                    <IconBrandInstagram />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <IconButton target="_blank" component={Link} href={`https://www.facebook.com/${data.facebook}`}>
                                                    <IconBrandFacebook />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <IconButton target="_blank" component={Link} href={`https://www.twitter.com/${data.twitter}`}>
                                                    <IconBrandX />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <IconButton target="_blank" component={Link} href={`https://www.snapchat.com/${data.snapchat}`}>
                                                    <IconBrandSnapchat />
                                                </IconButton>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </List>
                        </Stack>
                    </Grid>

                    {data.latitude && data.longitude && (
                        <Grid item xs={12}>
                            <Typography variant="h2" mb={1}>Find Us</Typography>
                            <iframe
                                src={`https://maps.google.com/maps?q=${data.latitude},${data.longitude}&z=14&output=embed`}
                                width="100%"
                                height="200"
                                style={{ border: "0" }}
                            ></iframe>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    )
}
