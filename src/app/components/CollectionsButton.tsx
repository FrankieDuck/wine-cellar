import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export const CollectionsButton = () => {
    const router = useRouter();

    return (
        <>
            <Button variant="white" sx={{ height: "55px", width: "300px" }} onClick={() => router.push('/example-collections')}>COLLECTIONS</Button >
        </>
    )
}