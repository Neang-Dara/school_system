import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import Image from 'next/image'
import React from 'react'

// type Teacher = {
//   id: number;
//   teacherId: string;
//   name:string;
//   email?:string;
//   photo:string;
//   subjests: String[];
//   classes:string[];
//   address:String;
// }
const columns = [
  {
    header:"Info", accessor:"infor"
  },
  {
    header:"Teacher ID",
    accessor:"teacher id", 
    className:"hidden md:table-cell"
  },
  {
    header:"Subjects",
    accessor:"subject", 
    className:"hidden md:table-cell"
  },
  {
    header:"Classes",
    accessor:"classes", 
    className:"hidden md:table-cell"
  },  {
    header:"Phone",
    accessor:"phone", 
    className:"hidden md:table-cell"
  },
  {
    header:"Address",
    accessor:"address", 
    className:"hidden md:table-cell"
  },
  {
    header:"Action",
    accessor:"action", 
  },
]
const TeacherListpage = () => {
  // const renderRow = (item:Teacher) => {
  //   <tr>
  //     <td>
  //       <Image src={item.photo} alt="" width={40} height={40} className='md:hidden xl:block w-10 h-10 rounded-full object-cover'/>
  //       <div className='flex flex-col'>
  //         <h3 className='font-semibold'>{item.name}</h3>
  //         <p className='text-xs text-gray-500'>{item?.email}</p>
  //       </div>
  //     </td>
  //     <td className='hidden md:table-cell'>{item.teacherId}</td>
  //     <td className='hidden md:table-cell'>{item.subjests.join(',')}</td>
  //     <td className='hidden md:table-cell'>{item.classes.join(",")}</td>
  //     <td className='hidden md:table-cell'>{item.phone}</td>
  //     <td className='hidden md:table-cell'>{item.address}</td>
  //     <td>
  //       <div className='flex items-center gap-2'>
  //         <Link href={'dashboard/list/teachers/'}></Link>
  //       </div>
  //     </td>
  //   </tr>
  // }
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-5 shadow-xl'>
      {/* Top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
        <div className='flex flex-col md:flex-row itmes-center gap-4  w-full md:w-auto'>
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
      <Table columns={columns}/>
      {/* PAGINATION */}
      <Pagination/>
    </div>
  )
}

export default TeacherListpage