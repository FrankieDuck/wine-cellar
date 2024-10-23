import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export const DashboardButton = () => {
    const router = useRouter();

    return (
        <>
            <Button variant="white" sx={{
                height: "55px",
                width: "300px"
            }} onClick={() => router.push('/example-dashboards')}>DASHBOARDS</Button >
        </>
    )
}