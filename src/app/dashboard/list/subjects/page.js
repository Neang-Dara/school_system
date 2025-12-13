import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { studentData, subjectData, teacherData } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const columns = [
  {
    header:"Subject Names",
    accessor:"student id", 
    className:"hidden md:table-cell"
  },
  {
    header:"Teachers",
    accessor:"teacher", 
    className:"hidden md:table-cell"
  },
  {
    header:"Action",
    accessor:"action", 
  },
]

const SubjectListpage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-300'>
      <td className='flex items-center gap-4 p-4'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.subjectName}</h3>
        </div>
      </td>
        <td className='hidden md:table-cell'>{item.teachers.join(",")}</td>
      <td>
        <div className='flex items-center gap-2'>
          <Link href={`/dashboard/list/teachers/${item.id}`}>
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-gray-300'>
              <Image src="/icons/view.png" alt="" width={16} height={16}/>
            </button>
          </Link>
          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-yellow-100'>
            <Image src="/icons/edit.png" alt="" width={16} height={16}/>
          </button>
          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-red-400'>
            <Image src="/icons/delete.png" alt="" width={16} height={16}/>
          </button>
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-5 shadow-xl'>
      {/* Top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>

        <div className='flex flex-col md:flex-row itmes-center gap-4 w-full md:w-auto'>
          <TableSearch/>

          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
              <Image src="/icons/filter.png" alt="" width={14} height={14}/>
            </button>

            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
              <Image src="/icons/sort.png" alt="" width={14} height={14}/>
            </button>

            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
              <Image src="/icons/plus.png" alt="" width={14} height={14}/>
            </button>            
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={subjectData}/>

      {/* Pagination */}
      <Pagination/>
    </div>
  )
}

export default SubjectListpage
