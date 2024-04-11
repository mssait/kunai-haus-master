import { Masonry } from '@mui/lab'
import { Badge, Box, Button, Card, CardActionArea, CardMedia, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Skeleton, Stack, SwipeableDrawer, Tab, Tabs, Typography } from '@mui/material'
import { IconFilter } from "@tabler/icons-react"
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import fetcher from '../util/fetcher'
import { toQueryString, useQuery } from '../util/useQuery'
import { toWorkDriveLink } from '../util/util'

export default function MobileCompanyListingTemplate({ url, meta }) {
    const [filters, setFilters] = useState(null)
    const [data, setData] = useState(null)
    const [filterTab, setFilterTab] = useState(0)

    const navigate = useNavigate()

    const { params } = useQuery()
    const { pathname } = useLocation()

    const typeUrl = {
        "SME": "sme",
        "Bank": "bank",
        "Government Officers": "government",
        "Development Partners": "development-partner",
        "Private Companies": "private-company",
    }

    const [drawer, setDrawer] = useState({
        filter: false,
        sort: false
    })

    const getFilterCount = () => {
        return Boolean(Array.isArray(params?.f_type) ? params?.f_type?.length : params?.f_type) +
            Boolean(Array.isArray(params?.f_region) ? params?.f_region?.length : params?.f_region) +
            Boolean(Array.isArray(params?.f_province) ? params?.f_province?.length : params?.f_province)
    }

    const [tempFilter, setTempFilter] = useState({
        f_type: params.f_type ? Array.isArray(params.f_type) ? params.f_type : [params.f_type] : [],
        f_region: params.f_region ? Array.isArray(params.f_region) ? params.f_region : [params.f_region] : [],
        f_province: params.f_province ? Array.isArray(params.f_province) ? params.f_province : [params.f_province] : [],
    })

    const toggleFilter = (filter, value) => {
        const temp = { ...tempFilter };
        if (Array.isArray(tempFilter[filter])) {
            const index = tempFilter[filter].indexOf(value);
            if (index > -1) {
                temp[filter].splice(index, 1)
            } else {
                temp[filter].push(value)
            }
        } else {
            temp[filter] = temp[filter] ? null : value;
        }
        setTempFilter(temp)
    }

    const setFilter = () => {
        params.f_type = tempFilter.f_type
        params.f_region = tempFilter.f_region
        params.f_province = tempFilter.f_province
        navigate(`${pathname}?${toQueryString(params)}`)
    }

    const toggleDrawer = (element, open) => event => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawer({ ...drawer, [element]: open });
    };

    const clearFilter = () => {
        toggleDrawer('filter', false)()
        navigate(`${pathname}`)
    }

    useEffect(() => {
        fetcher(`${url}?${toQueryString(params)}`)
            .then(r => r.json())
            .then(({ listing, filters }) => {
                setData(listing)
                setFilters(filters)
            })
    }, [params])

    function handleSort(sort) {
        params.sort = sort
        navigate(`${pathname}?${toQueryString(params)}`)
        toggleDrawer('sort', false)()
    }

    return data === null ? (
        <Box>
            <Grid container spacing={1} p={1}>
                <Grid item xs={6}>
                    <Skeleton animation="wave" variant="rectangular" width='100%' height={250} />
                    <Skeleton animation="wave" height={15} width="100%" />
                    <Skeleton animation="wave" height={15} width="40%" />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton animation="wave" variant="rectangular" width='100%' height={250} />
                    <Skeleton animation="wave" height={15} width="100%" />
                    <Skeleton animation="wave" height={15} width="70%" />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton animation="wave" variant="rectangular" width='100%' height={250} />
                    <Skeleton animation="wave" height={15} width="100%" />
                    <Skeleton animation="wave" height={15} width="70%" />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton animation="wave" variant="rectangular" width='100%' height={250} />
                    <Skeleton animation="wave" height={15} width="100%" />
                    <Skeleton animation="wave" height={15} width="70%" />
                </Grid>
            </Grid>
        </Box>
    ) : (
        <Box>
            <Box>
                <Typography my={2} textAlign="center" variant="h3">
                    {meta.title}
                </Typography>
                <Masonry columns={2} spacing={0.2}>
                    {data.map(({
                        id,
                        billboard,
                        name,
                        region,
                        province,
                        type
                    }, key) => (
                        <Box key={key}>
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
            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                padding: '.5rem'
            }}>
                <Divider />
                <Button sx={{ color: 'grey.A700' }} fullWidth onClick={toggleDrawer('filter', true)}
                    variant='text'>
                    <Badge badgeContent={getFilterCount()} color="primary">
                        <IconFilter /> Filter
                    </Badge>
                </Button>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={drawer.filter}
                onClose={toggleDrawer('filter', false)}
                onOpen={toggleDrawer('filter', true)}
            >
                <Box>
                    <Grid container p={3} alignItems="center">
                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Filters
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <Button variant="outlined" color="error" onClick={() => {
                                clearFilter()
                            }}>Clear All</Button>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container>
                        <Grid item xs={4}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={filterTab}
                                onChange={(_, v) => {
                                    setFilterTab(v)
                                }}>
                                {filters?.types?.length > 0 && (
                                    <Tab
                                        value={0}
                                        label={
                                            <Badge
                                                variant="dot"
                                                color="warning"
                                                invisible={!Boolean(Array.isArray(params?.f_type) ? params?.f_type?.length : params?.f_type)}>
                                                Type
                                            </Badge>
                                        }
                                        id="type-filter"
                                        sx={{ alignItems: 'flex-start' }} />
                                )}
                                {filters?.region?.length > 0 && (
                                    <Tab
                                        value={1}
                                        label={
                                            <Badge
                                                variant="dot"
                                                color="warning"
                                                invisible={!Boolean(Array.isArray(params?.f_region) ? params?.f_region?.length : params?.f_region)}>
                                                Regions
                                            </Badge>}
                                        id="region-filter"
                                        sx={{ alignItems: 'flex-start' }} />
                                )}
                                {filters?.provinces?.length > 0 && (
                                    <Tab
                                        value={2}
                                        label={<Badge
                                            variant="dot"
                                            color="warning"
                                            invisible={!Boolean(Array.isArray(params?.f_province) ? params?.f_province?.length : params?.f_province)}
                                        >
                                            Province
                                        </Badge>}
                                        id="province-filter"
                                        sx={{ alignItems: 'flex-start' }} />
                                )}
                            </Tabs>
                        </Grid>
                        <Grid item xs={8}>
                            {filterTab === 0 && (
                                <Box role="tabpanel" aria-labelledby="type-filter">
                                    <List subheader={(
                                        <ListSubheader>Select one or more Types</ListSubheader>
                                    )}>
                                        {filters.types?.map(({ id, type }) => (
                                            <Box key={id}>
                                                <ListItem disablePadding>
                                                    <ListItemButton onClick={() => {
                                                        toggleFilter('f_type', type)
                                                    }} role={undefined}
                                                    >
                                                        <ListItemIcon>
                                                            <Checkbox
                                                                edge="start"
                                                                tabIndex={-1}
                                                                inputProps={{ 'aria-labelledby': `type-${id}` }}
                                                                checked={tempFilter.f_type.indexOf(type) !== -1}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText id={`type-${id}`}
                                                            primary={type} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))}
                                    </List>
                                </Box>
                            )}
                            {filterTab === 1 && (
                                <Box role="tabpanel"
                                    aria-labelledby="region-filter">
                                    <List subheader={<ListSubheader>Select one or more Regions</ListSubheader>}>
                                        {filters.regions?.map(({ id, region }) => (
                                            <Box key={id}>
                                                <ListItem disablePadding>
                                                    <ListItemButton onClick={() => {
                                                        toggleFilter('f_region', region)
                                                    }} role={undefined}
                                                    >
                                                        <ListItemIcon>
                                                            <Checkbox
                                                                edge="start"
                                                                tabIndex={-1}
                                                                inputProps={{ 'aria-labelledby': `region-${id}` }}
                                                                checked={tempFilter.f_region.indexOf(region) !== -1}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText id={`region-${id}`} primary={region} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))}
                                    </List>
                                </Box>
                            )}
                            <Box role="tabpanel" hidden={filterTab !== 2}
                                aria-labelledby="province-filter">
                                <List subheader={<ListSubheader>Select one or more Provinces</ListSubheader>}>
                                    {filters.provinces?.map(({ id, province }) => (
                                        <Box key={id}>
                                            <ListItem disablePadding>
                                                <ListItemButton onClick={() => {
                                                    toggleFilter('f_province', province)
                                                }} role={undefined}
                                                >
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            tabIndex={-1}
                                                            inputProps={{ 'aria-labelledby': `province-${id}` }}
                                                            checked={tempFilter.f_province.indexOf(province) !== -1}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={`province-${id}`} primary={province} />
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />
                                        </Box>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container textAlign="center" mt={1} spacing={2} p={1}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                color="error"
                                variant="outlined"
                                onClick={toggleDrawer('filter', false)}>
                                Close
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                color="primary"
                                variant="outlined"
                                onClick={() => {
                                    setFilter()
                                    toggleDrawer('filter', false)()
                                }}>
                                Apply
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </SwipeableDrawer>
        </Box>
    )
}
