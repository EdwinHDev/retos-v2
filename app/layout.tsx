import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { db } from "@/firebase/config";
import { query, collection, onSnapshot, DocumentData, getDocs } from "firebase/firestore";
import { failedStateReto, getRetos } from "@/firebase/services/retos_services";
import { checkDate } from "@/utils/dateUtils";

// No olvidarlo
async function listenRetoFails() {
	const dataRetos = await getRetos();

	if (dataRetos && dataRetos.length > 0) {
		dataRetos.map(async reto => {
			if (reto.status === "proceso" && checkDate(reto.endDate)) {
				try {
					await failedStateReto(reto.id);
				} catch (error) {
					console.log(error);
				}
			}
		})
	}
}

listenRetoFails();

setInterval(() => {
	listenRetoFails();
}, 10000);

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://tulojita.com"
								title="tulojita.com inicio"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-indigo-500">Tu Lojita</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
