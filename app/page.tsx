import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
// import { Github, Mail, Twitter, Linkedin, Youtube, Phone } from "lucide-react";
// import { Navigation } from "./components/nav";
// import { Card } from "./components/card";
// import PostPage from "./projects/page";
// import Contact from "./contact/page";


const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-visible">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-white hover:text-cyan-500"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				BlockChain With
			</h1>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Sudharsanan
			</h1>


			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-b from-neutral-900 to-indigo-900" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-white ">
					Hi, my name is Sudharsanan Kirubanandhan, I'm researching and developing applications at{" "}
					<Link
						target="_blank"
						href="https://guardianlink.io"
						className="underline duration-500 hover:text-cyan-500"
					>
						Guardianlink
					</Link> and teaching blockchain at {" "}
					<Link
						target="_blank"
						href="https://bcwsudharsanan.in"
						className="underline duration-500 hover:text-cyan-500"
					>
						Bcwsudharsanan
					</Link>

					<br />
					and you can find my video lessons on{" "}
					<Link
						target="_blank"
						href="https://www.youtube.com/@BCWSudharsanan"
						className="underline duration-500 hover:text-cyan-500"
					>
						youtube@BCWSudharsanan
					</Link>{" "}
					.
				</h2>
			</div>
		</div>
	);
}
