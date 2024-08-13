import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function ActiveSubscriptions() {
    const datatype = [
        null,
        'date',
        'date',
        'dateTime',
        null,
        null,
        'number',
    ]

    const width = [
        150,
        150,
        150,
        200,
        200,
        150,
        100,
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        Active Subscriptions
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                width={width}
                ajax={{ url: "/api/subscriptions/active" }}
                columns={[
                    { "headerName": "Company", "field": "Company", "width": "150", "id": "Company" },
                    { "headerName": "Start Date", "field": "Start Date", "width": "150", "id": "Start Date" },
                    { "headerName": "End Date", "field": "End Date", "width": "150", "id": "End Date" },
                    { "headerName": "Subscribed Time", "field": "Subscribed Time", "width": "200", "id": "Subscribed Time" },
                    { "headerName": "Description", "field": "Description", "width": "200", "id": "Description" },
                    { "headerName": "Method", "field": "Method", "width": "150", "id": "Method" },
                    { "headerName": "Amount", "field": "Amount", "width": "100", "id": "Amount", "type": "number" }
                ]}
            />
        </Stack>
    )
}
