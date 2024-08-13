import { Card, CardContent, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import fetcher from '../util/fetcher'

export default function LicenceNotification() {
    const [subscriptionCost, setSubscriptionCost] = useState(null)

    useEffect(() => {
        fetcher('/api/companies/type')
            .then(r => r.json())
            .then(({ subscription_cost }) => setSubscriptionCost(subscription_cost))
    }, [])

    return (
        <Stack spacing={2}>
            <img style={{ width: "100%", height: "auto", display: "block" }} src="/no-license.png" />
            <Card>
                <CardContent>
                    <Typography variant="h3">
                        Make payment of {subscriptionCost} Kina for one Year Subscription
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h3" mb={2}>
                        Bank Details:
                    </Typography>
                    <Typography variant="h4">
                        Name: Sharon Kunai
                    </Typography>
                    <Typography variant="h4">
                        Chq A/C # 7005693036
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    )
}
