import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function Subscriptions() {
    const datatype = [
        null,
        'date',
        'date',
        'dateTime',
    ]

    const render = []

    render[4] = ({ value }) => {
        if (value === 'Active') {
            return (
                <Chip label={value} color='success' />
            )
        } else {
            return (
                <Chip label={value} color='error' />
            )
        }
    }

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        My Subscriptions
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                render={render}
                ajax={{ url: "/api/subscriptions/my" }}
                columns={[
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Start Date", "field": "Start Date", "width": "200", "id": "Start Date" },
                    { "headerName": "End Date", "field": "End Date", "width": "200", "id": "End Date" },
                    { "headerName": "Subscribed Time", "field": "Subscribed Time", "width": "200", "id": "Subscribed Time" },
                    { "headerName": "Status", "field": "Status", "width": "200", "id": "Status" }
                ]}
            />
        </Stack>
    )
}
