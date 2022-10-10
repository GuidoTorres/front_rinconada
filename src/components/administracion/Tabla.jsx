import React from "react";
import DataTable from "react-data-table-component";

function Tabla({ columns, table }) {
  return (
    <div className="table-container">
      <DataTable
        columns={columns}
        data={table}
        pagination
        fixedHeader
        striped
        highlightOnHover
      />
    </div>
  );
}

export default Tabla;
