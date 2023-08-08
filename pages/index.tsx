import { useState, useRef, type ReactElement, useEffect } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import { API } from 'aws-amplify';
import { listPages, pagesByCategory } from '@/graphql/queries';
import { Page } from '@/API';
import PageCard from '@/components/pageCard';
 
const Page: NextPageWithLayout = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [pages, setPages] = useState<false | Array<Page>>(false);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  async function fetchData() {
    setSending(true);
    try {
      const res = await API.graphql({ query: listPages })
      setPages(res.data.listPages.items as Array<Page> ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDateFilterDateRange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSending(true);
      const startDate = startDateRef.current?.value ?? '';
      const endDate = endDateRef.current?.value ?? '';
      const res = await API.graphql({ query: listPages, variables: { filter: { crawledAt: { between: [startDate, endDate] } } } })
      setPages(res.data.listPages.items as Array<Page> ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  }

  async function handleClearFilterDateRange() {
    if (startDateRef.current?.value || endDateRef.current?.value) {
      startDateRef.current!.value = '';
      endDateRef.current!.value = '';
      fetchData();
    }
  }

  async function handleFilterCategory(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSending(true);
      const category = categoryRef.current?.value ?? '';
      const res = await API.graphql({ query: pagesByCategory, variables: { category } })
      setPages(res.data.pagesByCategory.items as Array<Page> ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  }

  async function handleClearFilterCategory() {
    if (categoryRef.current?.value) {
      categoryRef.current!.value = '';
      fetchData();
    }
  }

  async function handleFilterURL(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSending(true);
      const url = urlRef.current?.value ?? '';
      const res = await API.graphql({ query: listPages, variables: { url } })
      setPages(res.data.listPages.items as Array<Page> ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  }

  async function handleClearFilterURL() {
    if (urlRef.current?.value) {
      urlRef.current!.value = '';
      fetchData();
    }
  }

  return (
    <>
      <div className='text-sm italic text-gray-500 mb-4'>* The filters work independently</div>
      <div className='mb-5'>
        <form onSubmit={handleFilterURL} className='flex gap-x-4'>
          <div>URL: <input ref={urlRef} className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='string' required={true} /></div>
          <button type='submit' className='bg-teal-700 text-white text-sm px-4 py-1 rounded-2xl'>Filter</button>
          {(urlRef.current?.value) && <button type='button' onClick={handleClearFilterURL} className='bg-gray-700 text-white text-sm px-4 py-1 rounded-2xl'>Clear</button>}
        </form>
      </div>
      <div className='mb-5'>
        <form onSubmit={handleDateFilterDateRange} className='flex gap-x-4'>
          <div>Start: <input ref={startDateRef} className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='date' required={true} /></div>
          <div>End: <input ref={endDateRef} className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='date' required={true} /></div>
          <button type='submit' className='bg-teal-700 text-white text-sm px-4 py-1 rounded-2xl'>Filter</button>
          {((startDateRef.current?.value || endDateRef.current?.value)) && <button type='button' onClick={handleClearFilterDateRange} className='bg-gray-700 text-white text-sm px-4 py-1 rounded-2xl'>Clear</button>}
        </form>
      </div>
      <div className='mb-5'>
        <form onSubmit={handleFilterCategory} className='flex gap-x-4'>
          <div>Category: <input ref={categoryRef} className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='string' required={true} /></div>
          <button type='submit' className='bg-teal-700 text-white text-sm px-4 py-1 rounded-2xl'>Filter</button>
          {(categoryRef.current?.value) && <button type='button' onClick={handleClearFilterCategory} className='bg-gray-700 text-white text-sm px-4 py-1 rounded-2xl'>Clear</button>}
        </form>
      </div>
      {sending && <>
        <h1 className='font-bold text-xl mb-8'>Loading...</h1>
        <div className='mb-4 bg-gray-200 p-4 animate-pulse'>
            <div className='w-1/2 h-4 font-bold bg-gray-300 mb-4'></div>
            <div className='w-3/4 h-4 mb-2 bg-gray-300'></div>
          </div>
      </>}
      {!sending && pages && pages.length === 0 && <p className='text-center'>No pages found</p>}
      {!sending && pages && pages.length > 0 && (
        <>
        <h1 className='font-bold text-xl mb-5'>List of crawled pages</h1>
        {pages.map((page: Page, index: number) => {
          const objDate = new Date(page.crawledAt);
          const date = `${objDate.getDate() > 9 ? objDate.getDate() : `0${objDate.getDate()}`}-${objDate.getMonth() + 1 > 9 ? objDate.getMonth() + 1 : `0${objDate.getMonth() + 1}`}-${objDate.getFullYear()}`
          return (
            <PageCard key={index} page={page} />
          )})}
        </>
      )}
      
    </>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page