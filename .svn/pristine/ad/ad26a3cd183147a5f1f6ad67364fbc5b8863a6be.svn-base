import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
import { IconList } from '@tabler/icons-react'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'
import { WorkDriveImage } from '../util/util'
import { Link } from 'react-router-dom'

export default function PendingBillboardRequests() {

    const render = [
        ({ value }) => <IconButton component={Link} to={`/admin/billboards/${value}`}><IconList /></IconButton>,
        null,
        ({ value }) => <Stack height="100%" spacing={1}>{value.map(image => <WorkDriveImage auto="width" key={image} image={image} />)}</Stack>,
    ]

    const datatype = [
        null,
        null,
        null,
        'dateTime',
    ]

    const width = [
        100
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        Pending Billboard Requests
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                customize={{ rowHeight: 150 }}
                width={width}
                render={render}
                datatype={datatype}
                ajax={{ url: '/api/billboards/requests/pending' }}
                columns={[
                    { "headerName": "Action", "field": "Action", "width": "100", "id": "Action" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Images", "field": "Images", "width": "200", "id": "Images" },
                    { "headerName": "Created Time", "field": "Created Time", "width": "200", "id": "Created Time", "type": "dateTime" },
                ]}
            />
        </Stack>
    )
}
