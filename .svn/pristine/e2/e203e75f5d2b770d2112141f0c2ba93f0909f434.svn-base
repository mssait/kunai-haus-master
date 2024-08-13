import { LoadingButton } from '@mui/lab';
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import Loader from '../components/Loader';
import ServerAutocomplete from '../components/ServerAutocomplete';
import fetcher from '../util/fetcher';
import { constructFormData, toDateString } from '../util/util';
import moment from 'moment';
import config from '../config';

export default function NewSubscription() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const { id } = useParams();

    const [values, setValues] = useState(null)

    useEffect(() => {
        fetcher(`/api/companies/${id}`)
            .then(r => r.json())
            .then(setValues)
    }, [id])

    return values === null ? (
        <Loader />
    ) : (
        <Formik
            validationSchema={Yup.object().shape({
                years: Yup.number().min(1, 'Min 1 Years').max(3, 'Max 3 Years').required('Enter Years of Subscription'),
                description: Yup.string().required('Enter description for this Subscription'),
                method: Yup.string().required('Select Payment menthod'),
                amount: Yup.number().required("Enter Subscription Cost").min(1).max(100000),
                payment_date: Yup.string().required("Enter Payment Date").test("late-date",
                    "Date should not be in the Future", date => {
                        return !moment(date, 'yyyy-MM-DD').utcOffset(config.defaultTimezone).isAfter(new Date())
                    }),
                reference_no: Yup.string().max(100, "Maximum 100 characters"),
                bank: Yup.string().max(100, "Maximum 100 characters"),
                branch: Yup.string().max(100, "Maximum 100 characters"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                return await fetcher(`/api/companies/${id}/subscribe`,
                    { method: 'post', body: constructFormData(values) })
                    .then(res => res.json())
                    .then(({ status, message = 'Exception occurred' }) => {
                        if (status === 'success') {
                            enqueueSnackbar('Subscription added', { variant: 'success' })
                            navigate('/admin/subscriptions/active')
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
                company: values.name,
                type: values.type_id,
                years: '1',
                description: '',
                method: '',
                amount: values.subscription_cost,
                payment_date: toDateString(),
                reference_no: '',
                bank: '',
                branch: '',
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
                                        New Subscription
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth error={Boolean(touched.company && errors.company)}>
                                <TextField
                                    required
                                    id="company"
                                    type="text"
                                    value={values.company}
                                    label="Company Name"
                                    InputProps={{
                                        readOnly: true,
                                        disabled: true
                                    }}
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
                                    label="Company Type"
                                    readOnly={true}
                                    disabled={true}
                                />
                                {touched.type && errors.type && (
                                    <FormHelperText error id="error-type">
                                        {errors.type}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth error={Boolean(touched.years && errors.years)}>
                                <TextField
                                    required
                                    id="years"
                                    type="number"
                                    value={values.years}
                                    name="years"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Subscription Years"
                                />
                                {touched.years && errors.years && (
                                    <FormHelperText error id="error-years">
                                        {errors.years}
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
                                Add Subscription
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}
