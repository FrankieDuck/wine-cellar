import NavHeader from "../NavHeader"
import { Box } from "@mui/material"
import { Divider } from "../LandingPageComponents/Divider"

export const MyDashboardPage = () => {
    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="DASHBOARDS" />
            <Box sx={{ backgroundColor: "#300106" }} >
                <Divider width="100%" />
            </Box>
        </Box>
    )
}