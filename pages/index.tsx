/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import React from "react";
import Head from "next/head";

export default function Home() {
	interface Project {
		brand: string;
		project: string;
		client: string;
		scope: string;
		tech: string;
		url: string;
		image: string;
	}

	const projects = [
		{
			brand: "PESTAPORA",
			project: "PESTAPORA",
			client: "BOSSCREATOR",
			scope: "FULLSTACK",
			tech: "VUE, NUXT, TAILWIND, PWA",
			url: "https://pestapora.com",
			image: "https://i.postimg.cc/WzTFrz13/pestapora.jpg",
		},
		{
			brand: "MAKA",
			project: "MAKA.ID",
			client: "PT MAKA",
			scope: "FULLSTACK",
			tech: "VUE, NUXT, TAILWIND, NODEJS, MONGODB, EXPRESS",
			url: "https://maka.id/en",
			image: "https://i.postimg.cc/2y7WXvKh/maka-jpg.jpg",
		},
		{
			brand: "SIPLAH",
			project: "innolaku and Bizone",
			client: "Ministry of Education and Culture",
			scope: "FRONTEND",
			tech: "VUE, NUXT, TAILWIND",
			url: "https://siplah.bizone.co.id/",
			image: "https://i.postimg.cc/bYC170CN/bizone.jpg",
		},
		{
			brand: "SUZUKI",
			project: "SUZUKI ALL NEW ERTIGA",
			client: "OMEOO",
			scope: "FULLSTACK",
			tech: "SPA, HTML, CSS, JS, WEBPACK",
			url: "https://www.suzuki.co.id/automobile/all-new-ertiga",
			image: "https://i.postimg.cc/kXRRL0Rf/ertiga.jpg",
		},
		{
			brand: "MERRIES",
			project: "MERRIES.co.id",
			client: "OMEOO",
			scope: "FRONTEND",
			tech: "HTML, CSS, JS, WEBPACK",
			url: "https://merries.co.id/",
			image: "https://i.postimg.cc/cLMCS0xM/merries.jpg",
		},
		{
			brand: "ATTACK",
			project: "SOLUSI IBU ATTACK",
			client: "OMEOO",
			scope: "FRONTEND",
			tech: "HTML, CSS, JS, GULP",
			url: "https://solusiibuattack.com/",
			image: "https://i.postimg.cc/pVpZkXxS/attack.jpg",
		},
		{
			brand: "KAVA",
			project: "KAVA-ID.COM",
			client: "PT KELUARGA BAHAGIA KAVA",
			scope: "FULLSTACK",
			tech: "VUE, VUEX, NUXT, PWA, TAILWIND",
			url: "https://kava-id.com/",
			image: "https://i.postimg.cc/HxjQSBGM/kava.jpg",
		},
		{
			brand: "WUJUD",
			project: "WUJUD.ID",
			client: "WUJUD",
			scope: "FULLSTACK",
			tech: "WORDPRESS,  PHP, MYSQL",
			url: "https://wujud.id/",
			image: "https://i.postimg.cc/8PdrmqF3/wujud.jpg",
		},
		{
			brand: "UNIQLO",
			project: "UNIQLO BEST WINTER",
			client: "HUDHUD",
			scope: "FULLSTACK",
			tech: "PARCELJS, GSAP, HTML, SCSS",
			url: null,
			image: "https://i.postimg.cc/kGsqBF4j/uniqlo.jpg",
		},
		{
			brand: "SMARTFREN",
			project: "SMARTFREN GENG GAUL",
			client: "SMARTFREN",
			scope: "FRONTEND",
			tech: "HTML, CSS, JS, WEBPACK",
			url: null,
			image: "https://i.postimg.cc/rmWpFrxb/smartfren.jpg",
		},
		{
			brand: "CAAYA",
			project: "CAAYA TEA",
			client: "-",
			scope: "FULLSTACK",
			tech: "PARCELJS, GSAP, HTML, SCSS, JAVASCRIPT",
			url: null,
			image: "https://i.postimg.cc/44PgvPfP/caaya.jpg",
		},
	];

	const [activeProject, setActiveProject] = useState<Project>({
		brand: "",
		project: "",
		client: "",
		scope: "",
		tech: "",
		url: "",
		image: "",
	});

	const el = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const q = gsap.utils.selector(el);

		gsap.from(q(".box"), {
			x: "-100%",
			duration: 0.5,
			stagger: 0.1,
		});
		gsap.from(q(".box a"), {
			y: "100%",
			duration: 1,
			delay: 0.5,
			stagger: 0.1,
		});
	}, []);

	const onMouseMove = (e: any) => {
		gsap.to(".showcase", 0.3, {
			x: 0,
			autoAlpha: 1,
		});
		gsap.to(".showcase", 0.5, {
			css: {
				left: e.pageX,
				top: e.pageY,
			},
		});
	};
	const onMouseOut = () => {
		gsap.to(".showcase", 0.3, {
			autoAlpha: 0,
			x: "100%",
		});
	};

	const changeDetailProjectInfo = (portfolio: any) => {
		setActiveProject(portfolio);
	};

	const goToLink = (link: string) => {
		if (!link) return;
		window.open(link);
	};

	return (
		<div>
			<Head>
				<title>Hafiz fattah | Coder for hire</title>
				<meta name='description' content='Code for Hire' />
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, frontend, website, wordpress'
				/>
				<meta property='og:site_name' content='Hafiz fattah | Coder for hire' />
				<meta property='og:url' content='https://hafizfattah.com' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Hafiz fattah | Coder for hire' />
				<meta
					property='og:description'
					content='Hafiz fattah | Coder for hire'
				/>
				<meta
					property='og:image'
					content='https://i.postimg.cc/tCfjCFW5/me.jpg'
				/>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=G-YDT17PCFS3`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-YDT17PCFS3', {
							page_path: window.location.pathname,
							});
						`,
					}}
				/>
			</Head>
			<div className='relative'>
				<div className='overflow-x-hidden flex flex-row w-full relative overflow-y-auto'>
					<ul ref={el} className='list-none text-[3vw] leading-normal w-full	'>
						{projects.map((portfolio: any, index) => (
							<li
								className='box border-b border-hfg-black relative px-6 overflow-hidden py-4 hover:bg-hfg-black hover:text-hfg-white'
								key={index}
								onMouseMove={(e) => {
									onMouseMove(e);
								}}
								onMouseEnter={() => changeDetailProjectInfo(portfolio)}
								onMouseLeave={onMouseOut}
							>
								<div
									className={`block ${
										portfolio.url === null
											? "cursor-not-allowed"
											: "cursor-pointer"
									}`}
									onClick={() => goToLink(portfolio.url)}
								>
									{portfolio.brand}
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className='showcase absolute bg-hfg-white border-r border-l border-hfg-black'>
					<div className='flex flex-row justify-between p-2  text-hfg-white bg-hfg-black'>
						<div className='flex flex-col'>
							<span className='text-xs'>PROJECT</span>
							<h3 className='font-machina-bold text-sm'>
								{activeProject.project}
							</h3>
						</div>
						<div className='flex flex-col text-right  '>
							<span className='text-xs'>CLIENT</span>
							<h3 className='font-machina-bold text-sm'>
								{activeProject.client}
							</h3>
						</div>
					</div>
					<div className='image-project-wrapper overflow-hidden'>
						<img
							src={activeProject.image}
							alt='Landscape picture'
							className='previewProject w-full'
						/>
					</div>
					<div className='flex flex-row justify-between border-t border-hfg-black border-b'>
						<div className='w-[50%] p-2 border-r border-hfg-black'>
							<span className='text-xs'>SCOPE</span>
							<h3 className='font-machina-bold text-sm'>
								{activeProject.scope}
							</h3>
						</div>
						<div className='w-[50%] p-2 text-right'>
							<span className='text-xs'>TECH</span>
							<h3 className='font-machina-bold text-sm'>
								{activeProject.tech}
							</h3>
						</div>
					</div>
				</div>

				<div className='py-[8vw]'>
					<h3 className='text-[3vw] block text-center'>
						Have a Project in mind?{" "}
						<a
							href='mailto:hafizxfattah@gmail.com'
							className=' underline'
							target='_blank'
							onClick={() => goToLink("mailto:hafizxfattah@gmail.com")}
							rel='noreferrer'
						>
							{`Let's talk`}
						</a>
					</h3>
				</div>
			</div>
		</div>
	);
}
