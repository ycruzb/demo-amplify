import { useState, useRef } from 'react'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import { API } from 'aws-amplify';
import { createPage } from '@/graphql/mutations';
 
const Page: NextPageWithLayout = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<string | false>(false);
  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const wordCountRef = useRef<HTMLInputElement>(null);
  const crawledAtRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const url = urlRef.current?.value ?? '';
    const title = titleRef.current?.value ?? '';
    const category = categoryRef.current?.value ?? '';
    const wordCount = wordCountRef.current?.value ?? '0';
    const crawledAt = crawledAtRef.current?.value ?? '';
    console.log({crawledAt});

    try {
      const res = await API.graphql({ query: createPage, variables: { input: { url, title, category, wordCount: parseInt(wordCount), crawledAt } } })
    } catch (error) {
      console.log(error);
      setError('Something went wrong, please try again');
    } finally {
      urlRef.current!.value = '';
      titleRef.current!.value = '';
      categoryRef.current!.value = '';
      wordCountRef.current!.value = '';
      crawledAtRef.current!.value = '';
      setSending(false);
    }

  }

  return (
    <>
      <h1 className='font-bold text-xl mb-1'>Add new page</h1>
      <p className='text-gray-400 italic mb-8'>just simulating that a new page was crawled and showing how to use the mutation ;)</p>
      {error && <p className='text-red-600 mb-4'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor='title'>
            URL
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='url'
            name='url'
            type='text'
            placeholder='some url here'
            required={true}
            ref={urlRef}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor='title'>
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            name='title'
            type='text'
            placeholder='some title here'
            required={true}
            ref={titleRef}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor='title'>
            Category
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='category'
            name='category'
            type='text'
            placeholder='the category'
            required={true}
            ref={categoryRef}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor='title'>
            Words
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='wordCount'
            name='wordCount'
            type='number'
            placeholder='how many words'
            required={true}
            ref={wordCountRef}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor='title'>
            Crawled date
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='crawledAt'
            name='crawledAt'
            type='date'
            placeholder='YYYY-MM-DD'
            required={true}
            ref={crawledAtRef}
          />
        </div>
        <button disabled={sending} className='mt-2 bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800'>{sending ? 'Sending...' : 'Add'}</button>
      </form>
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