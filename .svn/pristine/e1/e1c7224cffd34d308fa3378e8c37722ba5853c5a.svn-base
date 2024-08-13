import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardContent, Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import LogoSection from '../layout/MainLayout/LogoSection'
import fetcher from '../util/fetcher'
import { constructFormData } from '../util/util'
import { getHomePage, isLoggedIn } from './AuthProvider'

export default function ForgotPassword() {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    return (
        isLoggedIn() ? (
            <Navigate to={getHomePage()} />
        ) : (
            <Box bgcolor="primary.light" height="100vh" display="flex" alignItems="center">
                <Container maxWidth="sm">
                    <Card elevation={2}>
                        <CardContent>
                            <Grid container spacing={2} textAlign="center">
                                <Grid item xs={12}>
                                    <LogoSection />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <Typography
                                            variant="caption"
                                            fontSize="16px"
                                        >
                                            Reset your Password
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Formik
                                        validationSchema={Yup.object().shape({
                                            email: Yup.string().email('Invalid Email').max(100).required('Enter Email'),
                                        })}
                                        onSubmit={async (values, { setSubmitting }) => {
                                            setSubmitting(true)
                                            return await fetcher('/forgot-password', {
                                                method: 'post',
                                                body: constructFormData(values)
                                            })
                                                .then(r => r.json())
                                                .then(({ status, message = "Try again" }) => {
                                                    if (status === "success") {
                                                        enqueueSnackbar('Password reset link sent to registered email', { variant: 'success' })
                                                        navigate("/login")
                                                    } else {
                                                        enqueueSnackbar(message, { variant: 'error' })
                                                    }
                                                })
                                                .catch(() => {
                                                    enqueueSnackbar('Error occurred', { variant: 'error' })
                                                })
                                        }}
                                        initialValues={{
                                            email: ''
                                        }}>
                                        {({
                                            errors,
                                            handleBlur,
                                            handleChange,
                                            handleSubmit,
                                            isSubmitting,
                                            touched,
                                            values
                                        }) => (
                                            <form noValidate onSubmit={handleSubmit}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <FormControl fullWidth
                                                            error={Boolean(touched.email && errors.email)}>
                                                            <TextField
                                                                required
                                                                id="email"
                                                                type="email"
                                                                value={values.email}
                                                                name="email"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                label="Email"
                                                            />
                                                            {touched.email && errors.email && (
                                                                <FormHelperText error id="error-email">
                                                                    {errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                                {errors.submit && (
                                                    <Box mt={3}>
                                                        <FormHelperText id='error-submit'
                                                            error>{errors.submit}</FormHelperText>
                                                    </Box>
                                                )}
                                                <Box mt={2}>
                                                    <LoadingButton
                                                        loading={isSubmitting}
                                                        fullWidth
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                    >
                                                        Submit
                                                    </LoadingButton>
                                                </Box>
                                            </form>
                                        )}
                                    </Formik>
                                </Grid>
                                <Grid item xs={12} textAlign="center">
                                    Know you password? <Button component={Link} to="/login">
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        )
    )
}
