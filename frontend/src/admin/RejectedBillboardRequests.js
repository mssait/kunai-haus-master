import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'
import { WorkDriveImage } from '../util/util'

export default function RejectedBillboardRequests() {

    const render = [
        null,
        ({ value }) => <Stack spacing={1}>{value.map(image => <WorkDriveImage auto="width" key={image} image={image} />)}</Stack>,
    ]

    const datatype = [
        null,
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
                        Rejected Billboard Requests
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                customize={{ rowHeight: 150 }}
                render={render}
                datatype={datatype}
                ajax={{ url: '/api/billboards/requests/rejected' }}
                columns={[
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Images", "field": "Images", "width": "200", "id": "Images" },
                    { "headerName": "Remark", "field": "Remark", "width": "200", "id": "Remark" },
                    { "headerName": "Created Time", "field": "Created Time", "width": "200", "id": "Created Time", "type": "dateTime" },
                    { "headerName": "Rejected Time", "field": "Rejected Time", "width": "200", "id": "Rejected Time", "type": "dateTime" },
                ]}
            />
        </Stack>
    )
}
