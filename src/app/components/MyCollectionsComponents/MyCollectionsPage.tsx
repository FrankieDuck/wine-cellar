import NavHeader from "../NavHeader"
import { Box } from "@mui/material"
import { Divider } from "../LandingPageComponents/Divider"

export const MyCollectionsPage = () => {
    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="COLLECTION" />
            <Box sx={{ backgroundColor: "#300106" }} >
                <Divider width="100%" />
            </Box>
        </Box>
    )
}