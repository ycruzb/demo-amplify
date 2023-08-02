import Link from "next/link"
import { useRouter } from "next/router"

interface HeaderProps {
  user: any
  signOut: any
}

export default function Header({user, signOut}: HeaderProps) {
  const router = useRouter()
  const currentRoute = router.pathname;

  return (
    <header className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
      <div>
        <Link href={'/'}><span className="font-semibold">Demo</span></Link>
      </div>
      <div className="flex justify-between gap-x-4">
          <Link href={'/'}><span className={`${currentRoute === '/' ? 'text-teal-700' : ''}`}>List</span></Link>
          <Link href={'/add'}><span className={`${currentRoute === '/add' ? 'text-teal-700' : ''}`}>Add</span></Link>
      </div>
      <div className="">
          <span className="mr-4">{user.attributes.email}</span>
          <button onClick={signOut} className="bg-red-500 text-white px-4 py-1 rounded-2xl hover:bg-red-600">Sign out</button>
      </div>
    </header>
  )
}