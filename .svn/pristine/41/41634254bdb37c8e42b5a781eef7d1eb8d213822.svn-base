import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'
import { WorkDriveImage } from '../util/util'

export default function ApprovedBillboardRequests() {

    const render = [
        null,
        ({ value }) => <Stack height="100%" spacing={1}>{value.map(image => <WorkDriveImage auto="width" key={image} image={image} />)}</Stack>,
    ]

    const datatype = [
        null,
        null,
        'dateTime',
        'dateTime',
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        Approved Billboard Requests
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                customize={{ rowHeight: 150 }}
                render={render}
                datatype={datatype}
                ajax={{ url: '/api/billboards/requests/approved' }}
                columns={[
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Images", "field": "Images", "width": "200", "id": "Images" },
                    { "headerName": "Created Time", "field": "Created Time", "width": "200", "id": "Created Time", "type": "dateTime" },
                    { "headerName": "Approved Time", "field": "Approved Time", "width": "200", "id": "Approved Time", "type": "dateTime" },
                ]}
            />
        </Stack>
    )
}
