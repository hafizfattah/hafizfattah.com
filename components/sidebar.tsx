/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import useIsMobileHooks from '../hooks/isMobileHooks';

export default function Sidebar() {
  const isMobile = useIsMobileHooks();

  return (
    <aside className="relative md:fixed left-0 top-0 h-auto md:h-screen pt-[50px] border-hfg-black border-r w-full md:w-[20vw] flex flex-col bg-hfg-white">
      <div className="overflow-hidden md:p-4 flex items-center">
        <Image src="/me.jpg" alt="hafiz fattah" width="718" height="771" className="w-[170px] md:w-auto" />
        <h1 className=" font-machina-bold text-4xl ml-4 md:hidden ">
          HI,
          <br />
          I'M HAFIZ FATTAH
        </h1>
      </div>

      <div className="pb-0 md:pb-[105px] px-4 pt-2 md:px-6 uppercase">
        <h2 className="text-[1.25vw] font-machina-bold md:block hidden">{"HI, I'M HAFIZ FATTAH"}</h2>
        <p className="mt-4 text-justify md:text-[1vw] ">
          PASSIONATE ABOUT WEB TECHNOLOGIES. COMMITTED TO HELPING AMBITIOUS COMPANIES AND BRANDS BY BUILDING UNIQUE, SCALABLE AND
          PERFORMANCE-FRIENDLY WEBSITES; ALL WHILE DELIVERING A MEMORABLE WEB EXPERIENCES.
        </p>
      </div>
      {!isMobile && (
        <>
          <div className="relative bottom-[50px] left-0 w-full md:block hidden">
            <div className="relative h-[2.5vw] w-full overflow-hidden flex items-center bg-hfg-black">
              <div className="track absolute marquee--ltr whitespace-nowrap">
                <div className="text-[1vw] text-hfg-white font-machina-bold uppercase">
                  Javascript // Typescript // Vue // NUXT // VUEX // React // nextjs // REDUX // HTML // SCSS // Tailwind // Node js //
                  Express // Javascript // Typescript // Vue // NUXT // VUEX // React // nextjs // REDUX // HTML // SCSS // Tailwind // Node
                  js // Express //
                </div>
              </div>
            </div>
            <div className="relative h-[2.5vw] w-full overflow-hidden flex items-center bg-hfg-black mt-1">
              <div className="track absolute marquee--rtl whitespace-nowrap">
                <div className="text-[1vw] text-hfg-white font-machina-bold uppercase">
                  MongoDB // MySQL // JEST // Git // CI/CD // NGINX // DOCKER // Webpack // Gulp // WORDPRESS // Webflow // User Experience
                  // MongoDB // MySQL // JEST // Git // CI/CD // NGINX // DOCKER // Webpack // Gulp // WORDPRESS // Webflow // User
                  Experience //
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full border-hfg-black border-t h-[50px] hidden md:flex justify-end items-center px-4">
            <p>© 2022 HAFIZFATTAH.COM</p>
          </div>
        </>
      )}
    </aside>
  );
}
