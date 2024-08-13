import { Box, Card, CardActionArea, CardContent, Divider, Grid, Typography } from "@mui/material"
import { amber, blue, blueGrey, brown, common, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import fetcher from "../util/fetcher"
import { addDays, todayEnd, todayStart } from "../util/util"

const Dashboard = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetcher('/api/dashboard')
            .then(r => r.json())
            .then(setData)
    }, [])

    return data === null ? (
        <Loader />
    ) : (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: amber[200] }}>
                        <CardActionArea component={Link} to="companies">
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.companies || 0}</Typography>
                                <Typography variant="h5">
                                    Total Companies
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: blue[200] }}>
                        <CardActionArea component={Link} to="subscriptions/active">
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.active_subscriptions || 0}</Typography>
                                <Typography variant="h5">
                                    Active Subscriptions
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: blueGrey[200] }}>
                        <CardActionArea component={Link} to="subscriptions/inactive">
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.inactive_subscriptions || 0}</Typography>
                                <Typography variant="h5">
                                    Inactive Subscriptions
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: brown[200] }}>
                        <CardActionArea component={Link} to={`companies?filterColumn=Created%20Time&filterColumn=Created%20Time&filterOperator=onOrAfter&filterOperator=onOrBefore&filterValue=${todayStart()}&filterValue=${todayEnd()}`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.today_registration || 0}</Typography>
                                <Typography variant="h5">
                                    Today's Registration
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: common[200] }}>
                        <CardActionArea component={Link} to={`subscriptions/inactive?filterColumn=End%20Date&filterOperator=is&filterValue=${addDays(7)}`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.inactive_30_days || 0}</Typography>
                                <Typography variant="h5">
                                    Inactive in 7 days
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: deepOrange[200] }}>
                        <CardActionArea component={Link} to={`subscriptions/inactive?filterColumn=End%20Date&filterOperator=is&filterValue=${addDays(30)}`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.inactive_30_days || 0}</Typography>
                                <Typography variant="h5">
                                    Inactive in 30 days
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography textAlign="center" variant="h3">SMEs</Typography>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: deepPurple[200] }}>
                        <CardActionArea component={Link} to={`companies/sme?filterColumn=Finance%20Advice&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.sme_finance_advice || 0}</Typography>
                                <Typography variant="h5">
                                    Monthly Finance Advice subscribed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: green[200] }}>
                        <CardActionArea component={Link} to={`companies/sme?filterColumn=Green%20Finance&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.sme_green_finance || 0}</Typography>
                                <Typography variant="h5">
                                    Green Finance subscribed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: grey[200] }}>
                        <CardActionArea component={Link} to={`companies/sme?filterColumn=Social%20Media%20Marketing&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.sme_smm || 0}</Typography>
                                <Typography variant="h5">
                                    Social Media subscribed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Card elevation={2} sx={{ backgroundColor: indigo[200] }}>
                        <CardActionArea component={Link} to={`companies/sme?filterColumn=Women%20Led&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.sme_women_led || 0}</Typography>
                                <Typography variant="h5">
                                    Women Led
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography textAlign="center" variant="h3">
                        Private Companies
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={2} sx={{ backgroundColor: lightBlue[200] }}>
                        <CardActionArea component={Link} to={`companies/private-company?filterColumn=Social%20Media%20Marketing&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.private_smm || 0}</Typography>
                                <Typography variant="h5">
                                    Social Media Subscribed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={2} sx={{ backgroundColor: lightGreen[200] }}>
                        <CardActionArea component={Link} to={`companies/private-company?filterColumn=Green%20Finance&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.private_green_finance || 0}</Typography>
                                <Typography variant="h5">
                                    Green Finance Subscribed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={2} sx={{ backgroundColor: lime[200] }}>
                        <CardActionArea component={Link} to={`companies/private-company?filterColumn=Finance%20Advice&filterOperator=is&filterValue=true`}>
                            <CardContent>
                                <Typography variant="h2" mb={4}>{data?.private_finance_advice || 0}</Typography>
                                <Typography variant="h5">
                                    Finance Advice Subscribed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography textAlign="center" variant="h3">
                                Banks
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Card elevation={2} sx={{ backgroundColor: orange[200] }}>
                                <CardActionArea component={Link} to={`companies/bank?filterColumn=Social%20Media%20Marketing&filterOperator=is&filterValue=true`}>
                                    <CardContent>
                                        <Typography variant="h2" mb={4}>{data?.bank_smm || 0}</Typography>
                                        <Typography variant="h5">
                                            Social Media Subscribed
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Card elevation={2} sx={{ backgroundColor: pink[200] }}>
                                <CardActionArea component={Link} to={`companies/bank?filterColumn=Climate%20Finance&filterOperator=is&filterValue=true`}>
                                    <CardContent>
                                        <Typography variant="h2" mb={4}>{data?.bank_climate_finance || 0}</Typography>
                                        <Typography variant="h5">
                                            Climate Finance Subscribed
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography textAlign="center" variant="h3">
                                Government Department
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card elevation={2} sx={{ backgroundColor: purple[200] }}>
                                <CardActionArea component={Link} to={`companies/government?filterColumn=Climate%20Finance&filterOperator=is&filterValue=true`}>
                                    <CardContent>
                                        <Typography variant="h2" mb={4}>{data?.government_climate_finance || 0}</Typography>
                                        <Typography variant="h5">
                                            Climate Finance Subscribed
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Dashboard