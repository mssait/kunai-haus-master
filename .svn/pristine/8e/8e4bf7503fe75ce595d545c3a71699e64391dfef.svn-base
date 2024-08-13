import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ServerDataGrid from '../components/ServerDataGrid'

export default function SMEs() {
    const datatype = []
    datatype[4] = 'date'
    datatype[5] = 'number'
    datatype[6] = 'number'
    datatype[7] = 'number'
    datatype[8] = 'boolean'
    datatype[9] = 'boolean'
    datatype[10] = 'boolean'
    datatype[11] = 'boolean'
    datatype[12] = 'url'
    datatype[13] = 'email'
    datatype[14] = 'phone'

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        SMES
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                datatype={datatype}
                ajax={{ url: "/api/companies/sme" }}
                columns={[
                    { "headerName": "Name", "field": "Name", "width": "200", "id": "Name" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Region", "field": "Region", "width": "200", "id": "Region" },
                    { "headerName": "Province", "field": "Province", "width": "200", "id": "Province" },
                    { "headerName": "Subscribed Till", "field": "Subscribed Till", "width": "200", "id": "Subscribed Till" },
                    { "headerName": "Year Founded", "field": "Year Founded", "width": "200", "id": "Year Founded" },
                    { "headerName": "Male Employees", "field": "Male Employees", "width": "200", "id": "Male Employees", "type": "number" },
                    { "headerName": "Female Employees", "field": "Female Employees", "width": "200", "id": "Female Employees", "type": "number" },
                    { "headerName": "Women Led", "field": "Women Led", "width": "200", "id": "Women Led", "type": "boolean" },
                    { "headerName": "Finance Advice", "field": "Finance Advice", "width": "200", "id": "Finance Advice", "type": "boolean" },
                    { "headerName": "Green Finance", "field": "Green Finance", "width": "200", "id": "Green Finance", "type": "boolean" },
                    { "headerName": "Social Media Marketing", "field": "Social Media Marketing", "width": "200", "id": "Social Media Marketing", "type": "boolean" },
                    { "headerName": "Website", "field": "Website", "width": "200", "id": "Website" },
                    { "headerName": "Email", "field": "Email", "width": "200", "id": "Email" },
                    { "headerName": "Phone", "field": "Phone", "width": "200", "id": "Phone" }
                ]}
            />
        </Stack>
    )
}
