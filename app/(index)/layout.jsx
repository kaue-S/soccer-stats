import Header from "@/components/header";


export default function IndexLayout({children}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}
