import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import { amber, blue, blueGrey, brown } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import fetcher from '../util/fetcher'

export default function Dashboard() {

  const [data, setData] = useState(null)
  useEffect(() => {
    fetcher('/api/dashboard')
      .then(r => r.json())
      .then(setData)
  }, [])

  return data === null ? (
    <Loader />
  ) : (
    <Grid container spacing={2}>

      <Grid item md={3} xs={12}>
        <Card elevation={2} sx={{ backgroundColor: amber[200] }}>
          <CardActionArea component={Link} to="/region/new-guinea-islands">
            <CardContent>
              <Typography variant="h2" mb={4}>{data.new_guinea_islands || 0}</Typography>
              <Typography variant="h5">
                New Guinea Islands
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item md={3} xs={12}>
        <Card elevation={2} sx={{ backgroundColor: blue[200] }}>
          <CardActionArea component={Link} to="/region/momase">
            <CardContent>
              <Typography variant="h2" mb={4}>{data.momase_islands || 0}</Typography>
              <Typography variant="h5">
                Momase Region
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item md={3} xs={12}>
        <Card elevation={2} sx={{ backgroundColor: blueGrey[200] }}>
          <CardActionArea component={Link} to="/region/southern">
            <CardContent>
              <Typography variant="h2" mb={4}>{data.southern_region || 0}</Typography>
              <Typography variant="h5">
                Southern Region
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item md={3} xs={12}>
        <Card elevation={2} sx={{ backgroundColor: brown[200] }}>
          <CardActionArea component={Link} to="/region/highland">
            <CardContent>
              <Typography variant="h2" mb={4}>{data.highland_region || 0}</Typography>
              <Typography variant="h5">
                Highland Region
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
  )
}