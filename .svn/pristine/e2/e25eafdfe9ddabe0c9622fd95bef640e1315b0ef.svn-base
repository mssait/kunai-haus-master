import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function DevelopmentPartners() {
    const datatype = [
        null,
        null,
        null,
        null,
        'date',
        'url',
        'email',
        'phone',
    ]

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        Development Partners
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                ajax={{ url: "/api/companies/development-partner" }}
                columns={[
                    { "headerName": "Name", "field": "Name", "width": "200", "id": "Name" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Region", "field": "Region", "width": "200", "id": "Region" },
                    { "headerName": "Province", "field": "Province", "width": "200", "id": "Province" },
                    { "headerName": "Subscribed Till", "field": "Subscribed Till", "width": "200", "id": "Subscribed Till" },
                    { "headerName": "Website", "field": "Website", "width": "200", "id": "Website" },
                    { "headerName": "Email", "field": "Email", "width": "200", "id": "Email" },
                    { "headerName": "Phone", "field": "Phone", "width": "200", "id": "Phone" }
                ]}
            />
        </Stack>
    )
}
