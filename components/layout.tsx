import Header from './header'
import Footer from './footer'
import { Authenticator } from '@aws-amplify/ui-react'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}
 
export default function Layout({ children }: LayoutProps) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <Head>
            <title>Amplify Demo</title>
            <meta name="description" content="Amplify Demo" />
            <meta name="keywords" content="titla, meta, nextjs" />
            <meta name="author" content="Syamlal CM" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Header user={user} signOut={signOut} />
          <main className='max-w-6xl mx-auto px-6 py-4'>{children}</main>
          <Footer />
        </>
      )}
    </Authenticator>
  )
}