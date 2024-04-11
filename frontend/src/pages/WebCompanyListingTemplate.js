import { Masonry } from "@mui/lab"
import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Checkbox,
    CircularProgress,
    Container,
    Divider,
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import fetcher from '../util/fetcher'
import { toQueryString, useQuery } from '../util/useQuery'
import { toWorkDriveLink } from '../util/util'

export default function WebCompanyListingTemplate({ url, meta }) {

    const [filters, setFilters] = useState(null)
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    const { params } = useQuery()
    const { pathname } = useLocation()

    useEffect(() => {
        fetcher(`${url}?${toQueryString(params)}`)
            .then(r => r.json())
            .then(({ listing, filters }) => {
                setData(listing)
                setFilters(filters)
            })
    }, [params])

    const checkFilter = (filter, value) => {
        if (Array.isArray(params[filter])) {
            return params?.[filter].indexOf(value) > -1;
        } else {
            return params?.[filter] === value;
        }
    }

    const toggleFilter = (filter, value) => {
        if (params[filter] !== undefined) {
            if (Array.isArray(params[filter])) {
                const index = params[filter].indexOf(value)
                if (index > -1) {
                    params[filter].splice(index, 1)
                } else {
                    params[filter] = [...params[filter], value]
                }
            } else {
                if (params[filter] === value) {
                    delete params[filter]
                } else {
                    params[filter] = [params[filter], value]
                }
            }
        } else {
            params[filter] = value
        }
        navigate(`${pathname}?${toQueryString(params)}`)
    }

    const typeUrl = {
        "SME": "sme",
        "Bank": "bank",
        "Government Officers": "government",
        "Development Partners": "development-partner",
        "Private Companies": "private-company",
    }

    return (
        <Box pb={8}>
            <Container>
                <Grid container mt={2} spacing={4}>
                    <Grid item xs={12}>
                        <Typography textAlign="center" variant="h1">
                            {meta.title}
                        </Typography>
                    </Grid>

                    <Grid item xs={3} position="sticky">
                        <Typography variant="h2" textAlign="center" mb={1}>
                            Filters
                        </Typography>
                        <Divider />
                        {filters === null ? (
                            <Box display="flex" height="50vh" justifyContent="center" alignItems="center">
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Box>
                                {filters.types?.length > 0 && (
                                    <React.Fragment>
                                        <Typography my={2} variant="h4">Company Types</Typography>
                                        {filters.types.map(({ id, type }) => (
                                            <Box key={id}>
                                                <ListItem disablePadding>
                                                    <ListItemButton role={undefined} onClick={() => {
                                                        toggleFilter('f_type', type)
                                                    }}>
                                                        <ListItemIcon>
                                                            <Checkbox edge="start" tabIndex={-1}
                                                                inputProps={{ 'aria-labelledby': `type-${id}` }}
                                                                checked={checkFilter('f_type', type)} />
                                                        </ListItemIcon>
                                                        <ListItemText id={`type-${id}`} primary={type} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))}
                                    </React.Fragment>
                                )}
                                {filters.regions?.length > 0 && (
                                    <React.Fragment>
                                        <Typography my={2} variant="h4">Regions</Typography>
                                        {filters.regions.map(({ id, region }) => (
                                            <Box key={id}>
                                                <ListItem disablePadding>
                                                    <ListItemButton role={undefined} onClick={() => {
                                                        toggleFilter('f_region', region)
                                                    }}>
                                                        <ListItemIcon>
                                                            <Checkbox edge="start" tabIndex={-1}
                                                                inputProps={{ 'aria-labelledby': `region-${id}` }}
                                                                checked={checkFilter('f_region', region)} />
                                                        </ListItemIcon>
                                                        <ListItemText id={`region-${id}`} primary={region} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))}
                                    </React.Fragment>
                                )}
                                {filters.provinces?.length > 0 && (
                                    <React.Fragment>
                                        <Typography my={2} variant="h4">Provinces</Typography>
                                        {filters.provinces.map(({ province }) => (
                                            <Box key={province}>
                                                <ListItem disablePadding>
                                                    <ListItemButton role={undefined} onClick={() => {
                                                        toggleFilter('f_province', province)
                                                    }}>
                                                        <ListItemIcon>
                                                            <Checkbox edge="start" tabIndex={-1}
                                                                inputProps={{ 'aria-labelledby': `province-${province}` }}
                                                                checked={checkFilter('f_province', province)} />
                                                        </ListItemIcon>
                                                        <ListItemText id={`province-${province}`} primary={province} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))}
                                    </React.Fragment>
                                )}
                            </Box>
                        )}
                        <Divider />
                    </Grid>

                    <Grid item xs={9}>
                        {data === null ? (
                            <Box display="flex" height="50vh" justifyContent="center" alignItems="center">
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Masonry columns={{ md: 3, xs: 2 }} spacing={2}>
                                {data.map(({
                                    id,
                                    billboard,
                                    name,
                                    region,
                                    province,
                                    type
                                }) => (
                                    <Box key={id}>
                                        <Card
                                            variant="elevation"
                                            sx={{
                                                "img": {
                                                    transition: 'all 0.3s ease-in-out 0s',
                                                },
                                                ":hover img": {
                                                    transform: 'scale3d(1.04, 1.04, 1)',
                                                    transition: 'all 0.3s ease-in-out 0s',
                                                    overflow: 'hidden'
                                                }
                                            }}>
                                            <CardActionArea component={Link} to={`/${typeUrl[type]}/${id}`}>
                                                <Box height="100%" overflow="hidden">
                                                    <CardMedia
                                                        component="img"
                                                        image={toWorkDriveLink(billboard)}
                                                        alt="" />
                                                </Box>
                                                <Stack spacing={.25} p={1}>
                                                    <Typography variant="h4">{name}</Typography>
                                                    <Typography variant="h5">{region}</Typography>
                                                    <Typography variant="h6">{province}</Typography>
                                                </Stack>
                                            </CardActionArea>
                                        </Card>
                                    </Box>
                                ))}
                            </Masonry>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
