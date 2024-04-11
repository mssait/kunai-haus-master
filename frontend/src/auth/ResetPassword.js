import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardContent, Container, FormControl, FormHelperText, Grid, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import * as Yup from "yup"
import PasswordField from '../components/PasswordField'
import LogoSection from '../layout/MainLayout/LogoSection'
import fetcher from '../util/fetcher'
import { constructFormData } from '../util/util'
import { getHomePage, isLoggedIn } from './AuthProvider'

export default function ResetPassword() {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const { code } = useParams()

    return (
        isLoggedIn() ? (
            <Navigate to={getHomePage()} />
        ) : (
            <Box bgcolor="primary.light" height="100vh" display="flex" alignItems="center">
                <Container maxWidth="sm">
                    <Card elevation={2}>
                        <CardContent>
                            <Grid container spacing={2} textAlign="center" justifyContent="center">
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
                                            password: Yup.string().nullable().min(6, 'Password should be minimum 6 characters')
                                                .notOneOf([Yup.ref('old')], 'Password cannot be the same')
                                                .max(100).required('Enter New Password'),
                                            retype: Yup.string().nullable().oneOf([Yup.ref('password')], 'Password must match')
                                                .max(100).required('Retype Password')
                                        })}
                                        onSubmit={async (values, { setSubmitting }) => {
                                            setSubmitting(true)
                                            return await fetcher('/reset-password', {
                                                method: 'post',
                                                body: constructFormData({ code, password: values.password })
                                            })
                                                .then(r => r.json())
                                                .then(({ status, message = "Try again" }) => {
                                                    if (status === "success") {
                                                        enqueueSnackbar('Password reset', { variant: 'success' })
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
                                            password: '',
                                            retype: ''
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
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <FormControl fullWidth error={Boolean(touched.password && errors.password)}>
                                                            <PasswordField
                                                                required
                                                                id="new-password"
                                                                value={values.password}
                                                                name="password"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                label="New Password"
                                                            />
                                                            {touched.password && errors.password && (
                                                                <FormHelperText error id="error-password">
                                                                    {errors.password}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControl fullWidth error={Boolean(touched.retype && errors.retype)}>
                                                            <PasswordField
                                                                required
                                                                id="retype-password"
                                                                value={values.retype}
                                                                name="retype"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                label="Retype Password"
                                                            />
                                                            {touched.retype && errors.retype && (
                                                                <FormHelperText error id="error-retype">
                                                                    {errors.retype}
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
                                                        Reset Now
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
