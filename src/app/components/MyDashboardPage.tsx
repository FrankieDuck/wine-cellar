import NavHeader from "../components/NavHeader"
import { Box } from "@mui/material"
import { CustomDivider } from "./CustomDivider"

export const MyDashboardPage = () => {
    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="DASHBOARDS" />
            <Box sx={{ backgroundColor: "#300106" }} >
                <CustomDivider width="100%" />
            </Box>
        </Box>
    )
}