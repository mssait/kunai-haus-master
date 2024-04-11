import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function Companies() {
    const datatype = []
    datatype[5] = 'date'
    datatype[6] = 'dateTime'

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">All Companies</Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                ajax={{ url: "/api/companies" }}
                columns={[
                    { "headerName": "Name", "field": "Name", "width": "200", "id": "Name" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Region", "field": "Region", "width": "200", "id": "Region" },
                    { "headerName": "Province", "field": "Province", "width": "200", "id": "Province" },
                    { "headerName": "Company Type", "field": "Company Type", "width": "200", "id": "Company Type" },
                    { "headerName": "Subscribed Till", "field": "Subscribed Till", "width": "200", "id": "Subscribed Till", "type": "date" },
                    { "headerName": "Created Time", "field": "Created Time", "width": "200", "id": "Created Time", "type": "dateTime" },
                ]}
            />
        </Stack>
    )
}
