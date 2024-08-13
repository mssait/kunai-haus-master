import { Card, CardContent, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { IconReportMoney } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ServerDataGrid from '../components/ServerDataGrid'

export default function InactiveSubscriptions() {
    const render = []

    render[0] = ({ value }) => (
        <Tooltip title="Add Subscription" placement="top">
            <IconButton component={Link} to={`/admin/companies/${value}/subscribe`}>
                <IconReportMoney />
            </IconButton>
        </Tooltip>
    )

    const datatype = []
    datatype[3] = datatype[4] = 'date'
    datatype[5] = 'dateTime'
    datatype[8] = 'number'

    return (
        <Stack spacing={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" textAlign="center">
                        Inactive Subscriptions
                    </Typography>
                </CardContent>
            </Card>
            <ServerDataGrid
                render={render}
                ajax={{ url: "/api/subscriptions/inactive" }}
                columns={[
                    { "headerName": "Action", "field": "Action", "width": "200", "id": "Action" },
                    { "headerName": "Company", "field": "Company", "width": "200", "id": "Company" },
                    { "headerName": "Company Type", "field": "Company Type", "width": "200", "id": "Company Type" },
                    { "headerName": "Start Date", "field": "Start Date", "width": "200", "id": "Start Date", "type": "date" },
                    { "headerName": "End Date", "field": "End Date", "width": "200", "id": "End Date", "type": "date" },
                    { "headerName": "Subscribed Time", "field": "Subscribed Time", "width": "200", "id": "Subscribed Time", "type": "dateTime" },
                    { "headerName": "Description", "field": "Description", "width": "200", "id": "Description" },
                    { "headerName": "Method", "field": "Method", "width": "200", "id": "Method" },
                    { "headerName": "Amount", "field": "Amount", "width": "200", "id": "Amount", "type": "number" }
                ]}
            />
        </Stack>
    )
}
