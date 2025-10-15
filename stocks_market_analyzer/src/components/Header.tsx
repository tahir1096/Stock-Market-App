'use client'
import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md header">
      <div className="container header-wrapper flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <nav className="hidden sm:block">
        <NavItems/>
        </nav>
        <UserDropdown/>
      </div>
    </header>
  )
}

export default Header
