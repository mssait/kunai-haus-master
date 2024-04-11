import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function Governments() {
    const datatype = [
        null,
        null,
        null,
        null,
        'date',
        'boolean',
        'url',
        'email',
        'phone',
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        Governments
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                ajax={{ url: "/api/companies/government" }}
                columns={[
                    { "headerName": "Name", "field": "Name", "width": "200", "id": "Name" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Region", "field": "Region", "width": "200", "id": "Region" },
                    { "headerName": "Province", "field": "Province", "width": "200", "id": "Province" },
                    { "headerName": "Subscribed Till", "field": "Subscribed Till", "width": "200", "id": "Subscribed Till" },
                    { "headerName": "Climate Finance", "field": "Climate Finance", "width": "200", "id": "Climate Finance", "type": "boolean" },
                    { "headerName": "Website", "field": "Website", "width": "200", "id": "Website" },
                    { "headerName": "Email", "field": "Email", "width": "200", "id": "Email" },
                    { "headerName": "Phone", "field": "Phone", "width": "200", "id": "Phone" }
                ]}
            />
        </Stack>
    )
}
