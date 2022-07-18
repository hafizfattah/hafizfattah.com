export default function Footer() {
  return (
    <footer className="relative md:fixed w-full md:w-[80vw] md:h-[50px] h-auto left-0 md:left-[20vw] bottom-0 border-hfg-black border-t bg-hfg-white flex flex-col-reverse md:flex-row justify-between md:px-4 px-0 items-center">
      <div className="w-full p-4 md:p-0 text-center md:text-left  bg-hfg-black text-white md:bg-hfg-white md:text-hfg-black">
        <p>ALL RIGHTS RESERVED. ALL WRONG TOO</p>
      </div>
      <div className="p-4 md:p-0 m-0 list-none flex flex-row w-full justify-around md:justify-end">
        <a href="https://www.instagram.com/hafizfattah/" target="_blank" className="mx-2" rel="noreferrer">
          INSTAGRAM
        </a>
        <a href="https://www.linkedin.com/in/hafiz-fattah-a4494277/" target="_blank" className="mx-2" rel="noreferrer">
          LINKEDIN
        </a>
        <a href="https://github.com/hafizfattah" target="_blank" className="mx-2" rel="noreferrer">
          GITHUB
        </a>
      </div>
    </footer>
  );
}
