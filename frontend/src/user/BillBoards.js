import { LoadingButton } from '@mui/lab';
import { Box, Card, CardContent, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IconX } from '@tabler/icons-react';
import { useSnackbar } from "notistack";
import React, { forwardRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSortable } from "react-sortablejs";
import HionImageUpload from '../components/HionImageUpload';
import Loader from '../components/Loader';
import fetcher from '../util/fetcher';
import { WorkDriveImage } from '../util/util';

const HStack = forwardRef(({ children }, ref) => (
  <Stack sx={{ flexWrap: 'wrap' }} spacing={2} ref={ref} direction='row'>{children}</Stack>)
)

export default function BillBoards() {
  const [billboards, setBillboards] = useState(null)
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const [reload, setReload] = useState(0)
  const [reordering, setReordering] = useState(false)
  const [loading, setLoading] = useState(true)

  function reorder() {
    setReordering(true)

    const body = new FormData();
    billboards.forEach(({ image }) => body.append('images', image))

    fetcher(`/api/billboards/reorder`, { method: 'PUT', body })
      .then(r => r.json())
      .then(res => {
        if (res.status === 'success') {
          enqueueSnackbar('Reordered Successfully', { variant: 'success' })
        } else {
          enqueueSnackbar('Exception occurred', { variant: 'error' })
        }
        setReordering(false)
      })
      .catch(() => {
        enqueueSnackbar('Error occurred', { variant: 'error' })
        setReordering(false)
      })
  }

  function addImages({ target }) {
    const body = new FormData()
    target.value.forEach(image => body.append('images', image))
    setLoading(true)
    fetcher('/api/billboards', { method: 'POST', body })
      .then(r => r.json())
      .then(({ status, message = 'Exception occurred' }) => {
        if (status === 'success') {
          enqueueSnackbar('Billboards Added Successfully', { variant: 'success' })
          navigate('/dashboard/billboard/requests')
          setLoading(false)
        } else {
          enqueueSnackbar(message, { variant: 'error' })
        }
      })
      .catch(() => {
        enqueueSnackbar('Error occurred', { variant: 'error' })
      })
  }

  function remove(image) {
    const body = new FormData()
    body.append('image', image)
    fetcher(`/api/billboards`, { method: 'delete', body })
      .then(r => r.json())
      .then(({ status, message = 'Exception occurred' }) => {
        if (status === 'success') {
          enqueueSnackbar('Image Removed Successfully', { variant: 'success' })
          setReload(reload => reload + 1)
        } else {
          enqueueSnackbar(message, { variant: 'error' })
        }
      })
      .catch(() => {
        enqueueSnackbar('Error occurred', { variant: 'error' })
      })
  }

  useEffect(() => {
    setLoading(true)
    fetcher('/api/billboards')
      .then(r => r.json())
      .then(({ billboards }) => {
        setBillboards(billboards)
        setLoading(false)
      })
  }, [reload])

  return loading ? (
    <Loader />
  ) : (
    <Stack spacing={2}>

      <Card>
        <CardContent>
          <Typography variant="h2" textAlign="center">
            Billboards
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4" textAlign="center">
            Upload Billboard images here
          </Typography>
        </CardContent>
      </Card>

      <HionImageUpload
        multiple
        maxNumber={1}
        buttonText="Choose image"
        handleChange={addImages}
      />

      <Card>
        <CardContent>
          <Typography variant="h4" textAlign="center">
            For best results use Billboards of same Resolution
          </Typography>
        </CardContent>
      </Card>

      {billboards.length > 0 && (
        <Card>
          <CardContent>
            <ReactSortable tag={HStack} list={billboards} setList={setBillboards}>
              {billboards.map(({ image }) => (
                <Box key={image} position='relative' width={250}>
                  <Box position='absolute' zIndex={1}>
                    <Tooltip title="Remove Image">
                      <IconButton
                        sx={{ bgcolor: grey[300] }}
                        size='small'
                        onClick={() => { remove(image) }}
                      ><IconX /></IconButton>
                    </Tooltip>
                  </Box>
                  <WorkDriveImage image={image} alt="" />
                </Box>
              ))}
            </ReactSortable>
          </CardContent>
        </Card>
      )}

      {billboards.length > 0 && (
        <LoadingButton
          fullWidth
          size='large'
          loading={reordering}
          variant='contained'
          onClick={reorder}>
          Update Order
        </LoadingButton>
      )}
    </Stack>
  )
}
