import Image from 'next/image'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen pt-[50px] border-hfg-black border-r w-[20vw] flex flex-col bg-hfg-white">
      <div className="image-wrapper overflow-hidden p-6">
        <Image src="/me.jpg" alt="me" width="1000" height="1000" />
      </div>

      <div className="profile px-6 uppercase">
        <h2 className="text-[1.25vw] font-machina-bold">HI, I'M Hafiz Fattah! </h2>
        <p className="mt-4 text-justify text-[1vw]">PASSIONATE ABOUT WEB TECHNOLOGIES. COMMITTED TO HELPING AMBITIOUS COMPANIES AND BRANDS BY BUILDING UNIQUE, SCALABLE AND PERFORMANCE-FRIENDLY WEBSITES; ALL WHILE DELIVERING A MEMORABLE WEB EXPERIENCES.</p>
      </div>

      <div className="absolute bottom-[50px] left-0 w-full ">
        <div className="relative h-[2.5vw] w-full overflow-hidden flex items-center bg-hfg-black">
          <div className="track absolute marquee--ltr whitespace-nowrap">
            <div className="text-[1vw] text-hfg-white font-machina-bold uppercase">&nbsp;Javascript // Typescript // Vue // NUXT // VUEX // React // nextjs // REDUX // HTML // SCSS // Tailwind // Node js // Express // Javascript // Typescript // Vue // NUXT // VUEX // React // nextjs // REDUX // HTML // SCSS // Tailwind // Node js // Express //</div>
          </div>
        </div>
        <div className="relative h-[2.5vw] w-full overflow-hidden flex items-center bg-hfg-black mt-1">
          <div className="track absolute marquee--rtl whitespace-nowrap">
            <div className="text-[1vw] text-hfg-white font-machina-bold uppercase">&nbsp;MongoDB // MySQL // JEST // Git // CI/CD // NGINX // DOCKER // Webpack // Gulp // WORDPRESS // Webflow // User Experience // MongoDB // MySQL // JEST // Git // CI/CD // NGINX // DOCKER // Webpack // Gulp // WORDPRESS // Webflow // User Experience //</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-hfg-black border-t h-[50px] flex justify-end items-center px-4">
        <p>© 2022 HAFIZFATTAH.COM</p>
      </div>
    </aside>
  )
}