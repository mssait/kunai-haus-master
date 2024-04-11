import { LoadingButton } from "@mui/lab"
import { Box, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import { Formik } from "formik"
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import fetcher from '../util/fetcher'
import { WorkDriveImage, constructFormData } from '../util/util'

export default function BillboardRequestDetails() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    useEffect(() => {
        fetcher(`/api/billboards/requests/${id}`)
            .then(r => r.json())
            .then(setData)
    }, [id])

    return data === null ? (
        <Loader />
    ) : (
        <Formik
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true)
                const formValues = { ...values }
                if (formValues.custom_reason) {
                    formValues.reason = formValues.reason ? [...formValues.reason, formValues.custom_reason] : formValues.custom_reason
                }
                delete formValues.custom_reason
                return await fetcher(`/api/billboards/requests/${id}`, {
                    method: 'PUT',
                    body: constructFormData(formValues)
                })
                    .then(res => res.json())
                    .then(({ status, message = 'Exception occurred' }) => {
                        if (status === 'success') {
                            enqueueSnackbar('Status changed', { variant: 'success' })
                            navigate('/admin/billboards/pending')
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
                remark: '',
                status: ''
            }}>
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Stack spacing={2}>
                        <Card>
                            <CardContent>
                                <Typography variant='h1' textAlign="center">
                                    Billboard Request
                                </Typography>
                            </CardContent>
                        </Card>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={4}>
                                    {data.images.map(image => <WorkDriveImage image={image} key={image} />)}
                                </Grid>
                            </Grid>
                        </Box>
                        {data.status === 'Pending' && (
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={6} alignSelf="center">
                                        <LoadingButton
                                            onClick={handleChange}
                                            name="status"
                                            value="true"
                                            loading={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="success"
                                        >
                                            Verify
                                        </LoadingButton>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card elevation={2}>
                                            <CardContent>
                                                <Typography textAlign="center" mb={2} variant="h3">Reject?</Typography>
                                                <TextField fullWidth label="Reason to Reject" onChange={handleChange} name="remark" />
                                                <Box mt={2}>
                                                    <LoadingButton
                                                        onClick={handleChange}
                                                        name="status"
                                                        value="false"
                                                        loading={isSubmitting}
                                                        fullWidth
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                        color="error"
                                                    >
                                                        Reject
                                                    </LoadingButton>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Stack>
                </form>
            )}
        </Formik>
    )
}
