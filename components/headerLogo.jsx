import Link from "next/link";


export default function HeaderLogo() {
  return (
      <Link href={"/"}>
        <div className="hidden lg:flex">
          logo
        </div>
      </Link>   
  )
}
