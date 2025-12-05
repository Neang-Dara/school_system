import React from 'react';

const Table = ({ columns }) => {
  return (
    <table className='w-full mt-4 bg-linear-to-b from-slate-700 to-slate-600 rounded-full shadow-xl'>
        <thead>
            <tr className=' text-gray-100 text-sm'>
                {columns.map(col=>(
                    <th key={col.accessor}>{col.header}</th>
                ))}
            </tr>
        </thead>
    </table>
  );
};

export default Table;
