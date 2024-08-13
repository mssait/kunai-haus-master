import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'
import { WorkDriveImage } from '../util/util'

export default function BillboardRequests() {

    const color = {
        "Pending": "warning",
        "Approved": "success",
        "Rejected": "error",
    }

    const render = [
        ({ value }) => <Stack height="100%" spacing={1}>{value.map(image => <WorkDriveImage auto="width" key={image} image={image} />)}</Stack>,
        ({ value }) => <Chip color={color[value]} label={value} />
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
                        Billboard Requests
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                customize={{ rowHeight: 150 }}
                render={render}
                datatype={datatype}
                ajax={{ url: '/api/billboards/requests/my' }}
                columns={[
                    { "headerName": "Images", "field": "Images", "width": "200", "id": "Images" },
                    { "headerName": "Status", "field": "Status", "width": "200", "id": "Status" },
                    { "headerName": "Remark", "field": "Remark", "width": "200", "id": "Remark" },
                    { "headerName": "Created Time", "field": "Created Time", "width": "200", "id": "Created Time", "type": "dateTime" },
                    { "headerName": "Modified Time", "field": "Modified Time", "width": "200", "id": "Modified Time", "type": "dateTime" },
                ]}
            />
        </Stack>
    )
}
