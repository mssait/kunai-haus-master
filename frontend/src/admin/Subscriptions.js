import { Card, CardContent, Chip, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'
import { IconEdit } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function Subscriptions() {
    const datatype = [
        null,
        null,
        'date',
        'date',
        'dateTime',
    ]

    const render = []
    render[0] = ({ value }) => <IconButton component={Link} to={`/admin/subscriptions/${value}/edit`}><IconEdit /></IconButton>
    render[5] = ({ value }) => {
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

    const width = [
        100
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        All Subscriptions
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                render={render}
                width={width}
                ajax={{ url: "/api/subscriptions" }}
                columns={[
                    { "headerName": "Action", "field": "Action", "width": "100", "id": "Action" },
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
