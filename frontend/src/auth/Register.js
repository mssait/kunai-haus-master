import { LoadingButton } from '@mui/lab'
import { Box, Card, CardContent, Container, FormControl, FormHelperText, Grid, Stack, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import PasswordField from "../components/PasswordField"
import PhoneNumberField from '../components/PhoneNumberField'
import ServerAutocomplete from '../components/ServerAutocomplete'
import LogoSection from '../layout/MainLayout/LogoSection'
import fetcher from '../util/fetcher'
import { constructFormData } from '../util/util'
import { getHomePage, isLoggedIn } from './AuthProvider'

export default function Register() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    return isLoggedIn() ? (
        <Navigate to={getHomePage()} />
    ) : (
        <Box bgcolor="primary.light" height="100vh" display="flex" alignItems="center">
            <Container maxWidth="md">
                <Card elevation={2}>
                    <CardContent>
                        <Stack spacing={2} textAlign="center" justifyContent="center">
                            <LogoSection />
                            <Typography
                                variant="caption"
                                fontSize="16px"
                                textAlign={{ md: 'center', xs: 'inherit' }}
                            >
                                Register yourself
                            </Typography>
                            <Formik
                                validationSchema={Yup.object().shape({
                                    name: Yup.string().max(100).required('Enter Name'),
                                    phone: Yup.number().min(1000000, 'Invalid number').max(99999999, 'Invalid number').required('Enter Phone Number'),
                                    email: Yup.string().email('Invalid Email').max(100).required('Enter Email'),
                                    company: Yup.string().max(100).required('Enter Company Name'),
                                    type: Yup.string().nullable(true).required('Select your Company Type'),
                                    password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
                                })}
                                onSubmit={async (values, { validateForm, setSubmitting }) => {
                                    setSubmitting(true)
                                    return await fetcher('/register', {
                                        method: 'post',
                                        body: constructFormData(values)
                                    })
                                        .then(r => r.json())
                                        .then(({ status, message = "Exception Occurred" }) => {
                                            if (status === 'success') {
                                                enqueueSnackbar('Account created', { variant: 'success' })
                                                navigate('/login')
                                            } else {
                                                enqueueSnackbar(message, { variant: 'warning' })
                                            }
                                        })
                                        .catch(() => {
                                            enqueueSnackbar('Error occurred', { variant: 'error' })
                                        })
                                }}
                                initialValues={{
                                    name: '',
                                    phone: '',
                                    email: '',
                                    company: '',
                                    type: '',
                                    password: '',
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
                                                <FormControl fullWidth error={Boolean(touched.name && errors.name)}>
                                                    <TextField
                                                        fullWidth={true}
                                                        required
                                                        id="name"
                                                        type="text"
                                                        value={values.name}
                                                        name="name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Name"
                                                    />
                                                    {touched.name && errors.name && (
                                                        <FormHelperText error id="error-name">
                                                            {errors.name}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth
                                                    error={Boolean(touched.phone && errors.phone)}>
                                                    <PhoneNumberField
                                                        required
                                                        id="phone"
                                                        type="tel"
                                                        value={values.phone}
                                                        name="phone"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Phone"
                                                    />
                                                    {touched.phone && errors.phone && (
                                                        <FormHelperText error id="error-phone">
                                                            {errors.phone}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
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
                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth error={Boolean(touched.company && errors.company)}>
                                                    <TextField
                                                        fullWidth={true}
                                                        required
                                                        id="company"
                                                        type="company"
                                                        value={values.company}
                                                        name="company"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Company Name"
                                                    />
                                                    {touched.company && errors.company && (
                                                        <FormHelperText error id="error-company">
                                                            {errors.company}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth error={Boolean(touched.type && errors.type)}>
                                                    <ServerAutocomplete
                                                        required
                                                        id="type"
                                                        select="company-type"
                                                        value={values.type}
                                                        name="type"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Company Type"
                                                    />
                                                    {touched.type && errors.type && (
                                                        <FormHelperText error id="error-type">
                                                            {errors.type}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl fullWidth
                                                    error={Boolean(touched.password && errors.password)}>
                                                    <PasswordField
                                                        required
                                                        id="password"
                                                        value={values.password}
                                                        name="password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Password" />
                                                    {touched.password && errors.password && (
                                                        <FormHelperText error id="error-password">
                                                            {errors.password}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LoadingButton
                                                    loading={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                >
                                                    Register
                                                </LoadingButton>
                                            </Grid>
                                        </Grid>
                                    </form>
                                )}
                            </Formik>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box >
    )
}
