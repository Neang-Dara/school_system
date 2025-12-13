import React from 'react';

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4 overflow-hidden rounded-xl">
      <thead className="bg-linear-to-b from-slate-700 to-slate-600 text-left text-gray-100 lg:h-[35px]">
        <tr className="text-sm">
          {columns.map((col, index) => (
            <th
              key={col.accessor}
              className={
                `${col.className || ""} p-3 ` +
                (index === 0 ? "rounded-l-xl" : "") +
                (index === columns.length - 1 ? "rounded-r-xl" : "")
              }
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className=''>
    {data.map((item, index) => renderRow({...item, _rowKey: item.id || index}))}
      </tbody>
    </table>
  );
};

export default Table;
