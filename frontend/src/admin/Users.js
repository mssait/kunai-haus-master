import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function Users() {

    const datatype = [
        null,
        'phone',
        'email'
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">All Users</Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                ajax={{ url: "/api/users" }}
                columns={[
                    { "headerName": "Name", "field": "Name", "width": "200", "id": "Name" },
                    { "headerName": "Phone", "field": "Phone", "width": "200", "id": "Phone" },
                    { "headerName": "Email", "field": "Email", "width": "200", "id": "Email" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                ]}
            />
        </Stack>
    )
}
