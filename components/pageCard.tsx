import { Page } from "@/API"

interface PageCardProps {
  page: Page
}

function PageCard({page}: PageCardProps) {
  const objDate = new Date(page.crawledAt);
  const date = `${objDate.getDate() > 9 ? objDate.getDate() : `0${objDate.getDate()}`}-${objDate.getMonth() + 1 > 9 ? objDate.getMonth() + 1 : `0${objDate.getMonth() + 1}`}-${objDate.getFullYear()}`

  return (
    <div className='mb-4 bg-gray-200 p-4 rounded-lg'>
      <div className='flex gap-x-3 items-center mb-2'>
        <h2 className='font-bold text-lg'>{page.title} </h2>
        <span className='text-xs bg-teal-700 text-white px-2 py-[1px] rounded-full mr-2'>{page.wordCount} words</span>
      </div>
      <div className='flex justify-between'>
        <div className='text-gray-500 w-full'>{page.url}</div>
        <div className='text-gray-500 w-full text-center'>{date}</div>
        <div className='text-gray-500 w-full text-right'>{page.category}</div>
      </div>
    </div>
  )
}

export default PageCard