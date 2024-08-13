import { LoadingButton } from '@mui/lab'
import { Box, Card, CardContent, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { IconBrandFacebook, IconBrandInstagram, IconBrandSnapchat, IconBrandX } from '@tabler/icons-react'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import Loader from '../components/Loader'
import ServerAutocomplete from '../components/ServerAutocomplete'
import fetcher from '../util/fetcher'
import { constructFormData, nonull } from '../util/util'
import { IconInfoCircle } from '@tabler/icons-react'
import PhoneNumberField from '../components/PhoneNumberField'

export default function SMEDetails() {
  const [values, setValues] = useState(null)
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetcher('/api/companies/sme/my')
      .then(r => r.json())
      .then(setValues)
  }, [])

  return values === null ? (
    <Loader />
  ) : (
    <Formik
      validationSchema={Yup.object().shape({
        company: Yup.string().max(200).required('Enter Company Name'),
        address_1: Yup.string().max(200).required('Enter Address Line 1'),
        address_2: Yup.string().max(200).required('Enter Address Line 2'),
        phone: Yup.number().min(1000000, 'Invalid number').max(99999999, 'Invalid number').required('Enter Phone Number'),
        email: Yup.string().email().max(100).required('Enter Email'),
        website: Yup.string().url('Enter a valid url')
          .transform(currentValue => currentValue && !(currentValue.startsWith('http://')
            || currentValue.startsWith('https://'))
            ? `http://${currentValue}`
            : currentValue).max(150),
        province: Yup.number().required('Select your Province'),
        year: Yup.number().min(1000, 'Invalid date').max(new Date().getFullYear(), 'Invalid year').required('Enter Year of Establishment'),
        emp_male: Yup.number().min(0).max(99999999).required('Enter Male Employee count'),
        emp_female: Yup.number().min(0).max(99999999).required('Enter Female Employee count'),
        latitude: Yup.number().nullable(true).max(90).min(-90),
        longitude: Yup.number().nullable(true).max(180).min(-180),
        description: Yup.string().max(200).required('Enter Short description of the business'),
        finance_advice: Yup.boolean().required('Select Yes/No'),
        green_finance: Yup.boolean().required('Select Yes/No'),
        smm: Yup.boolean().required('Select Yes/No'),
        women_led: Yup.boolean().required('Select Yes/No'),
        facebook: Yup.string().max(200),
        instagram: Yup.string().max(200),
        twitter: Yup.string().max(200),
        snapchat: Yup.string().max(200),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        return await fetcher("/api/companies/sme/my", {
          method: 'put',
          body: constructFormData(values)
        })
          .then(res => res.json())
          .then(({ status, message = 'Exception occurred' }) => {
            if (status === 'success') {
              enqueueSnackbar('Details updated', { variant: 'success' })
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
      initialValues={nonull({
        company: values.name,
        type: values.type_id,
        address_1: values.address_1,
        address_2: values.address_2,
        phone: values.phone,
        email: values.email,
        website: values.website,
        province: values.province_id,
        year: values.year,
        emp_male: values.emp_male,
        emp_female: values.emp_female,
        latitude: values.latitude,
        longitude: values.longitude,
        description: values.description,
        finance_advice: values.finance_advice,
        green_finance: values.green_finance,
        smm: values.smm,
        women_led: values.women_led,
        facebook: values.facebook,
        instagram: values.instagram,
        twitter: values.twitter,
        snapchat: values.snapchat
      })}>
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
                    Edit Details
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
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              <FormControl fullWidth error={Boolean(touched.address_1 && errors.address_1)}>
                <TextField
                  required
                  id="address_1"
                  type="text"
                  value={values.address_1}
                  name="address_1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Flat, House no., Building, Company, Apartment"
                />
                {touched.address_1 && errors.address_1 && (
                  <FormHelperText error id="error-address_1">
                    {errors.address_1}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={Boolean(touched.address_2 && errors.address_2)}>
                <TextField
                  required
                  id="address_2"
                  type="text"
                  value={values.address_2}
                  name="address_2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Street Name, Area"
                />
                {touched.address_2 && errors.address_2 && (
                  <FormHelperText error id="error-address_2">
                    {errors.address_2}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl fullWidth error={Boolean(touched.phone && errors.phone)}>
                <PhoneNumberField
                  required
                  id="phone"
                  type="tel"
                  value={values.phone}
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Company Phone No"
                />
                {touched.phone && errors.phone && (
                  <FormHelperText error id="error-phone">
                    {errors.phone}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
                <TextField
                  required
                  id="email"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Company Email"
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="error-email">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl fullWidth error={Boolean(touched.website && errors.website)}>
                <TextField
                  id="website"
                  type="text"
                  value={values.website}
                  name="website"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Website"
                  InputProps={{
                    startAdornment: (
                      <Typography>https://</Typography>
                    )
                  }}
                />
                {touched.website && errors.website && (
                  <FormHelperText error id="error-website">
                    {errors.website}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.province && errors.province)}>
                <ServerAutocomplete
                  required
                  id="province"
                  select="province"
                  value={values.province}
                  name="province"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Province"
                />
                {touched.province && errors.province && (
                  <FormHelperText error id="error-province">
                    {errors.province}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.year && errors.year)}>
                <TextField
                  required
                  id="year"
                  type="number"
                  value={values.year}
                  label="Year of Establishment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.year && errors.year && (
                  <FormHelperText error id="error-year">
                    {errors.year}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={3} xs={6}>
              <FormControl fullWidth error={Boolean(touched.emp_male && errors.emp_male)}>
                <TextField
                  required
                  id="emp_male"
                  type="number"
                  value={values.emp_male}
                  label="Employee Count (Male)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.emp_male && errors.emp_male && (
                  <FormHelperText error id="error-emp_male">
                    {errors.emp_male}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={3} xs={6}>
              <FormControl fullWidth error={Boolean(touched.emp_female && errors.emp_female)}>
                <TextField
                  required
                  id="emp_female"
                  type="number"
                  value={values.emp_female}
                  label="Employee Count (Female)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.emp_female && errors.emp_female && (
                  <FormHelperText error id="error-emp_female">
                    {errors.emp_female}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Stack direction="row" container spacing={2}>
                <FormControl fullWidth error={Boolean(touched.latitude && errors.latitude)}>
                  <TextField
                    id="latitude"
                    type="number"
                    value={values.latitude}
                    name="latitude"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Latitude"
                  />
                  {touched.latitude && errors.latitude && (
                    <FormHelperText error id="error-latitude">
                      {errors.latitude}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth error={Boolean(touched.longitude && errors.longitude)}>
                  <TextField
                    id="longitude"
                    type="number"
                    value={values.longitude}
                    name="longitude"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Longitude"
                  />
                  {touched.longitude && errors.longitude && (
                    <FormHelperText error id="error-longitude">
                      {errors.longitude}
                    </FormHelperText>
                  )}
                </FormControl>
                <Box alignSelf="center">
                  <Typography variant="h5" component="a" href="https://support.google.com/maps/answer/18539" target='_blank'>
                    How to find Latitude & Longitude
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth error={Boolean(touched.description && errors.description)}>
                <TextField
                  multiline
                  minRows={2}
                  id="description"
                  type="text"
                  value={values.description}
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Description"
                  helperText="Short description of the business"
                />
                {touched.description && errors.description && (
                  <FormHelperText error id="error-description">
                    {errors.description}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.finance_advice && errors.finance_advice)}>
                <FormLabel required>
                  Would you like to be included in our monthly SME financial advice services?
                </FormLabel>
                <RadioGroup
                  row
                  id="finance_advice"
                  value={values.finance_advice}
                  name="finance_advice"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <FormControlLabel value="true" label="Yes" control={<Radio />} />
                  <FormControlLabel value="false" label="No" control={<Radio />} />
                </RadioGroup>
                {touched.finance_advice && errors.finance_advice && (
                  <FormHelperText error id="error-finance_advice">
                    {errors.finance_advice}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.green_finance && errors.green_finance)}>
                <FormLabel required>
                  Would you like to know more on green finance?
                </FormLabel>
                <RadioGroup
                  row
                  id="green_finance"
                  value={values.green_finance}
                  name="green_finance"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <FormControlLabel value="true" label="Yes" control={<Radio />} />
                  <FormControlLabel value="false" label="No" control={<Radio />} />
                </RadioGroup>
                {touched.green_finance && errors.green_finance && (
                  <FormHelperText error id="error-green_finance">
                    {errors.green_finance}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.smm && errors.smm)}>
                <FormLabel required>
                  Would you like assistance with social media advertisement?
                </FormLabel>
                <RadioGroup
                  row
                  id="smm"
                  value={values.smm}
                  name="smm"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <FormControlLabel value="true" label="Yes" control={<Radio />} />
                  <FormControlLabel value="false" label="No" control={<Radio />} />
                </RadioGroup>
                {touched.smm && errors.smm && (
                  <FormHelperText error id="error-smm">
                    {errors.smm}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.women_led && errors.women_led)}>
                <FormLabel required>
                  Identified as Women-Led?
                </FormLabel>
                <RadioGroup
                  row
                  id="women_led"
                  value={values.women_led}
                  name="women_led"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <FormControlLabel value="true" label="Yes" control={<Radio />} />
                  <FormControlLabel value="false" label="No" control={<Radio />} />
                </RadioGroup>
                {touched.women_led && errors.women_led && (
                  <FormHelperText error id="error-women_led">
                    {errors.women_led}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.facebook && errors.facebook)}>
                <TextField
                  id="facebook"
                  type="text"
                  value={values.facebook}
                  name="facebook"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Facebook Username"
                  InputProps={{
                    startAdornment: (
                      <IconBrandFacebook />
                    )
                  }}
                />
                {touched.facebook && errors.facebook && (
                  <FormHelperText error id="error-facebook">
                    {errors.facebook}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.instagram && errors.instagram)}>
                <TextField
                  id="instagram"
                  type="text"
                  value={values.instagram}
                  name="instagram"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Instagram Username"
                  InputProps={{
                    startAdornment: (
                      <IconBrandInstagram />
                    )
                  }}
                />
                {touched.instagram && errors.instagram && (
                  <FormHelperText error id="error-instagram">
                    {errors.instagram}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.twitter && errors.twitter)}>
                <TextField
                  id="twitter"
                  type="text"
                  value={values.twitter}
                  name="twitter"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Twitter Username"
                  InputProps={{
                    startAdornment: (
                      <IconBrandX />
                    )
                  }}
                />
                {touched.twitter && errors.twitter && (
                  <FormHelperText error id="error-twitter">
                    {errors.twitter}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth error={Boolean(touched.snapchat && errors.snapchat)}>
                <TextField
                  id="snapchat"
                  type="text"
                  value={values.snapchat}
                  name="snapchat"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Snapchat Username"
                  InputProps={{
                    startAdornment: (
                      <IconBrandSnapchat />
                    )
                  }}
                />
                {touched.snapchat && errors.snapchat && (
                  <FormHelperText error id="error-snapchat">
                    {errors.snapchat}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                loading={isSubmitting}
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
