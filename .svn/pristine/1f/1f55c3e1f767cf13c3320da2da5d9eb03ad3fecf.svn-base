import { LoadingButton } from "@mui/lab";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import PasswordField from "../components/PasswordField";
import LogoSection from "../layout/MainLayout/LogoSection";

import fetcher from "../util/fetcher";
import { useQuery } from "../util/useQuery";
import { clearAuthLocalStorage, getHomePage, isLoggedIn } from "./AuthProvider";

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { params } = useQuery();
    const navigate = useNavigate()

    return isLoggedIn() ? (
        <Navigate to={getHomePage()} />
    ) : (
        <Box bgcolor="primary.light" height="100vh" display="flex" alignItems="center">
            <Container maxWidth="sm">
                <Card elevation={2}>
                    <CardContent>
                        <Stack spacing={2} textAlign="center" justifyContent="center">
                            <LogoSection />
                            <Typography
                                variant="caption"
                                fontSize="16px"
                                textAlign={{ md: 'center', xs: 'inherit' }}
                            >
                                Enter your credentials to continue
                            </Typography>

                            <Formik
                                validationSchema={Yup.object().shape({
                                    username: Yup.string().email('Enter valid Email').max(100).required('Enter Email'),
                                    password: Yup.string().required('Password is required')
                                })}
                                onSubmit={async (values, { setSubmitting }) => {
                                    setSubmitting(true)
                                    const body = {
                                        username: values.username,
                                        password: values.password
                                    }
                                    return await fetcher(`/authenticate`, {
                                        method: 'post',
                                        body: JSON.stringify(body),
                                        headers: { "Content-type": "application/json" }
                                    })
                                        .then(res => {
                                            if (res.status == 200) {
                                                res.json().then(({ name, phone, email, role }) => {
                                                    clearAuthLocalStorage()
                                                    localStorage.setItem("name", name);
                                                    localStorage.setItem("phone", phone);
                                                    localStorage.setItem("email", email);
                                                    localStorage.setItem("role", role)
                                                    enqueueSnackbar('Login Success', { variant: 'success' })
                                                    navigate(params.ref || getHomePage())
                                                })
                                            } else {
                                                enqueueSnackbar('Bad Credentials', { variant: 'error' })
                                            }
                                        })
                                        .catch(() => {
                                            enqueueSnackbar('Error occurred', { variant: 'error' })
                                        })
                                }}
                                initialValues={{
                                    username: '',
                                    password: ''
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
                                                <FormControl fullWidth
                                                    error={Boolean(touched.username && errors.username)}>
                                                    <TextField
                                                        required
                                                        type="email"
                                                        id="username"
                                                        value={values.username}
                                                        name="username"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Email"
                                                    />
                                                    {touched.username && errors.username && (
                                                        <FormHelperText error id="error-username">
                                                            {errors.username}
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
                                                Login
                                            </LoadingButton>
                                        </Box>
                                    </form>
                                )}
                            </Formik>
                            <Box display="flex" justifyContent="space-evenly">
                                <Button component={Link} to="/register">
                                    Register new Account
                                </Button>
                                <Button component={Link} to="/forgot-password">
                                    Forgot Password
                                </Button>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}
export default Login