import Link from "next/link";
import { useRouter } from "next/router";

import Header from "components/header";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";

export default function DefaultLayout({children}:any) {
  const router = useRouter()
  console.log(router)
  
  return (
    <div className="text-hfg-black bg-hfg-white">
     
      <Header />
      <Sidebar />

      <main className="main fixed bg-hfg-white">
        <nav className="absolute top-0 right-0 bottom-0 left-0 z-10 flex uppercase text-base">
          <Link href="/">
            <div className={`nav-item flex border-hfg-black border-r ${router.asPath === '/' ? 'is-active' : ''}`}>
              <div className="tab block hover:bg-hfg-black hover:text-hfg-white">
                <span>Work</span>
              </div>
              {router.asPath === '/' && <div className="content w-full p-6">{children}</div>}
            </div>
          </Link>
          <Link href="/resume">
            <div className={`nav-item flex ${router.asPath === '/resume' ? 'is-active' : ''}`}>
              <div className="tab block hover:bg-hfg-black hover:text-hfg-white">
                <span>Resume</span>
              </div>
              {router.asPath === '/resume' && <div className="content w-full p-6">{children}</div>}
            </div>
          </Link>
        </nav>
      </main>
      <Footer/>
    </div>
  )
}
