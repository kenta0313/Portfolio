import Link from 'next/link'

const Header = () => {
  return (
    <div className="border-b">
      <header className="flex mx-auto justify-between items-baseline max-w-screen-md">
        <div className="px-10 py-3">
          <h2 className="text-3xl">
            <Link href="/" passHref>
              Asano
            </Link>
          </h2>
        </div>
        <div className="px-10 py-3 font-medium text-sm text-gray-500 hover:text-gray-900">
          <p className="font-medium">
            <Link href="/articles" passHref>
              Articles
            </Link>
          </p>
        </div>
      </header>
    </div>
  )
}

export default Header
