import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export const CollectionsButton = () => {
    const router = useRouter();

    return (
        <>
            <Button sx={{
                backgroundColor: '#F9e8c0', color: "black", '&:hover': {
                    backgroundColor: '#e8d1a0',
                },
                height: "55px",
                width: "300px"
            }} onClick={() => router.push('/example-collections')}>COLLECTIONS</Button >
        </>
    )
}