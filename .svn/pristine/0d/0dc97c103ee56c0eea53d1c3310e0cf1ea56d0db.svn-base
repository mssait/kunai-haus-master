import { LoadingButton } from '@mui/lab'
import { Card, CardContent, FormControl, FormHelperText, Grid, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import Loader from '../components/Loader'
import fetcher from '../util/fetcher'
import { constructFormData } from '../util/util'


export default function SubscriptionCost() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetcher(`/api/companies/subscription-cost`)
            .then(r => r.json())
            .then(setData)
    }, [])
    const { enqueueSnackbar } = useSnackbar();

    return data === null ? (
        <Loader />
    ) : (
        <Formik
            validationSchema={Yup.object().shape({
                "SME": Yup.number().required("Enter SME Subscription Cost").min(1).max(100000),
                "Bank": Yup.number().required("Enter Bank Subscription Cost").min(1).max(100000),
                "Government Officers": Yup.number().required("Enter Government Officers Subscription Cost").min(1).max(100000),
                "Development Partners": Yup.number().required("Enter Development Partners Subscription Cost").min(1).max(100000),
                "Private Companies": Yup.number().required("Enter Private Companies Subscription Cost").min(1).max(100000)
            })}
            onSubmit={async (values, { setSubmitting }) => {
                return await fetcher(`/api/companies/subscription-cost`,
                    { method: 'put', body: constructFormData(values) })
                    .then(res => res.json())
                    .then(({ status, message = 'Exception occurred' }) => {
                        if (status === 'success') {
                            enqueueSnackbar('Company details edited', { variant: 'success' })
                        } else {
                            enqueueSnackbar(message, { variant: 'error' })
                            setSubmitting(false)
                        }
                    })
                    .catch(() => {
                        enqueueSnackbar('Error occurred', { variant: 'error' })
                        setSubmitting(false)
                    })
            }}
            initialValues={data}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
            }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h2" textAlign="center">
                                        Edit Subscription Cost
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {[
                            "SME",
                            "Bank",
                            "Government Officers",
                            "Development Partners",
                            "Private Companies",
                        ].map((type, key) => (
                            <Grid item xs={12} md={6} key={key}>
                                <FormControl fullWidth error={Boolean(touched[type] && errors[type])}>
                                    <TextField
                                        required
                                        id={type}
                                        type="number"
                                        value={values[type]}
                                        name={type}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        label={type}
                                    />
                                    {touched[type] && errors[type] && (
                                        <FormHelperText error id={`error-${type}`}>
                                            {errors[type]}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <LoadingButton
                                loading={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Save Subscription Cost
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}
