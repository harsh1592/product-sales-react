import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Sales } from '../../types';

interface SalesTableProps {
  salesData: Sales[];
}

const columns: GridColDef[] = [
  { field: 'weekEnding', headerName: 'Week Ending', flex: 1 },
  { field: 'retailSales', headerName: 'Retail Sales', flex: 1 },
  { field: 'wholesaleSales', headerName: 'Wholesale Sales', flex: 1 },
  { field: 'unitsSold', headerName: 'Units Sold', flex: 1 },
  { field: 'retailerMargin', headerName: 'Retailer Margin', flex: 1 },
];

const SalesTable: React.FC<SalesTableProps> = ({ salesData }) => {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={salesData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        getRowId={(row) => row.weekEnding}
      />
    </div>
  );
};

export default SalesTable;