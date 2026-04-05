import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Potato Solutions - Site",
	description: "Potato Solutions",
};

export default function SiteLayout({ children }) {
	return (
		<div className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<Navbar></Navbar>
			<main className="min-h-full flex flex-col mt-30">{children}</main>
			<Footer></Footer>
		</div>
	);
}

