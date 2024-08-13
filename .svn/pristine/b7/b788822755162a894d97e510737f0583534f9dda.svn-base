import { LoadingButton } from '@mui/lab';
import { Card, CardContent, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import Loader from '../components/Loader';
import config from '../config';
import fetcher from '../util/fetcher';
import { constructFormData } from '../util/util';

export default function EditSubscription() {
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    const [values, setValues] = useState(null)

    useEffect(() => {
        fetcher(`/api/subscriptions/${id}`)
            .then(r => r.json())
            .then(setValues)
    }, [id])

    const toDate = time => moment(new Date(time)).utcOffset(config.defaultTimezone).format('yyyy-MM-DD')
    const toLong = time => moment(time, 'yyyy-MM-DD').utcOffset(config.defaultTimezone).toDate() * 1

    return values === null ? (
        <Loader />
    ) : (
        <Formik
            validationSchema={Yup.object().shape({
                description: Yup.string().required('Enter description for this Subscription'),
                method: Yup.string().required('Select Payment menthod'),
                amount: Yup.string().required('Enter Subscription amount paid'),
                start_date: Yup.date().required('Enter Start Date'),
                end_date: Yup.date().required('Enter End Date'),
                payment_date: Yup.string().required("Enter Payment Date").test("late-date",
                    "Date should not be in the Future", date => {
                        return !moment(date, 'yyyy-MM-DD').utcOffset(config.defaultTimezone).isAfter(new Date())
                    }),
                reference_no: Yup.string().max(100, "Maximum 100 characters"),
                bank: Yup.string().max(100, "Maximum 100 characters"),
                branch: Yup.string().max(100, "Maximum 100 characters"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                return await fetcher(`/api/subscriptions/${id}`, {
                    method: 'put',
                    body: constructFormData({
                        ...values,
                        start_date: toLong(values.start_date),
                        end_date: toLong(values.end_date),
                    })
                })
                    .then(res => res.json())
                    .then(({ status, message = 'Exception occurred' }) => {
                        if (status === 'success') {
                            enqueueSnackbar('Subscription edited', { variant: 'success' })
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
            initialValues={{
                ...values,
                start_date: toDate(values.start_date),
                end_date: toDate(values.end_date),
                payment_date: toDate(values.payment_date)
            }}
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
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h2" textAlign="center">
                                        Edit Subscription
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth
                                error={Boolean(touched.start_date && errors.start_date)}>
                                <TextField
                                    required
                                    id="start_date"
                                    type="date"
                                    value={values.start_date}
                                    name="start_date"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Start Date"
                                />
                                {touched.start_date && errors.start_date && (
                                    <FormHelperText error id="error-start_date">
                                        {errors.start_date}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <FormControl fullWidth
                                error={Boolean(touched.end_date && errors.end_date)}>
                                <TextField
                                    required
                                    id="end_date"
                                    type="date"
                                    value={values.end_date}
                                    name="end_date"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="End Date"
                                />
                                {touched.end_date && errors.end_date && (
                                    <FormHelperText error id="error-end_date">
                                        {errors.end_date}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth error={Boolean(touched.description && errors.description)}>
                                <TextField
                                    required
                                    id="description"
                                    type="text"
                                    value={values.description}
                                    name="description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description"
                                    helperText="Max 250 characters"
                                />
                                {touched.description && errors.description && (
                                    <FormHelperText error id="error-description">
                                        {errors.description}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.method && errors.method)}>
                                <FormLabel required>Payment Method</FormLabel>
                                <RadioGroup
                                    row
                                    id="method"
                                    value={values.method}
                                    name="method"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Payment Method">
                                    <FormControlLabel value="Online Banking" label="Online Banking" control={<Radio />} />
                                    <FormControlLabel value="SMS Banking" label="SMS Banking" control={<Radio />} />
                                    <FormControlLabel value="Bank Deposit" label="Bank Deposit" control={<Radio />} />
                                </RadioGroup>
                                {touched.method && errors.method && (
                                    <FormHelperText error id="error-method">
                                        {errors.method}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.amount && errors.amount)}>
                                <TextField
                                    required
                                    id="amount"
                                    type="number"
                                    value={values.amount}
                                    name="amount"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Deposited Amount"
                                />
                                {touched.amount && errors.amount && (
                                    <FormHelperText error id="error-amount">
                                        {errors.amount}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.payment_date && errors.payment_date)}>
                                <TextField
                                    required
                                    type="date"
                                    id="payment_date"
                                    value={values.payment_date}
                                    name="payment_date"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Payment Date"
                                />
                                {touched.payment_date && errors.payment_date && (
                                    <FormHelperText error id="error-payment_date">
                                        {errors.payment_date}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.reference_no && errors.reference_no)}>
                                <TextField
                                    id="reference_no"
                                    value={values.reference_no}
                                    name="reference_no"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Reference No"
                                />
                                {touched.reference_no && errors.reference_no && (
                                    <FormHelperText error id="error-reference_no">
                                        {errors.reference_no}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.bank && errors.bank)}>
                                <TextField
                                    id="bank"
                                    value={values.bank}
                                    name="bank"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Bank"
                                />
                                {touched.bank && errors.bank && (
                                    <FormHelperText error id="error-bank">
                                        {errors.bank}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.branch && errors.branch)}>
                                <TextField
                                    id="branch"
                                    value={values.branch}
                                    name="branch"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Branch"
                                />
                                {touched.branch && errors.branch && (
                                    <FormHelperText error id="error-branch">
                                        {errors.branch}
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
                                Update
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}
