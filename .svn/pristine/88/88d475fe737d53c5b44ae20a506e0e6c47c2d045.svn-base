import { Box } from "@mui/material";
import { DataGridPro, GridToolbar } from "@mui/x-data-grid-pro";
import { useState } from "react";

const ClientDataGrid = ({ data, customize }) => {
    const [pageSize, setPageSize] = useState(10);
    return (
        <Box color='white' style={{ width: '100%', backgroundColor: 'white' }}>
            <DataGridPro
                disableSelectionOnClick
                pagination={true}
                columns={data.columns}
                rows={data.rows}
                pageSize={pageSize}
                onPageSizeChange={setPageSize}
                rowsPerPageOptions={[10, 20, 50, 100]}
                autoHeight={true}
                components={{ Toolbar: GridToolbar }}
                experimentalFeatures={{ excelExport: true }}
                {...customize}
            />
        </Box>
    )
}
export default ClientDataGrid;