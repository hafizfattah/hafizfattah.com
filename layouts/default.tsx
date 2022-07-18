import Link from 'next/link';
import {useRouter} from 'next/router';

import Footer from '../components/footer';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function DefaultLayout({children}: any) {
  const router = useRouter();
  return (
    <div className="text-hfg-black bg-hfg-white">
      <Header />
      <Sidebar />
      <main className="main relative md:fixed bg-hfg-white md:h-[calc(100vh-100px)] w-full md:w-[80vw] left-0 md:left-[20vw] top-0 md:top-[50px]">
        <nav className="relative md:absolute top-0 right-0 bottom-0 left-0 z-10 flex uppercase text-base overflow-hidden">
          <Link href="/">
            <div
              className={`nav-item mt-4 md:mt-0 flex md:flex-row flex-col w-full md:border-hfg-black md:border-r  ${
                router.asPath === '/' ? 'is-active' : ''
              }`}
            >
              <div className="tab block hover:bg-hfg-black hover:text-hfg-white bg-hfg-black text-white p-4">
                <span className="font-machina-bold text-3xl">Work</span>
              </div>
              {router.asPath === '/' && <div className="content w-full overflow-y-auto hide-scrollbar">{children}</div>}
            </div>
          </Link>
          {/* <Link href='/resume'>
						<div
							className={`nav-item flex ${
								router.asPath === "/resume" ? "is-active" : ""
							}`}
						>
							<div className='tab block hover:bg-hfg-black hover:text-hfg-white'>
								<span>Resume</span>
							</div>
							{router.asPath === "/resume" && (
								<div className='content w-full p-6'>{children}</div>
							)}
						</div>
					</Link> */}
        </nav>
      </main>
      <Footer />
    </div>
  );
}
