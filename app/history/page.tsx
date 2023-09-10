"use client";

import RetosHistoryList from "@/components/RetosHistoryList";
import { subtitle, title } from "@/components/primitives";
import { useState } from "react";

export default function AboutPage() {

	const [countRetos, setCountRetos] = useState(0);

	return (
		<section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Historial de&nbsp;</h1>
				<h1 className={title({ color: "pink", fontWeigth: "bold" })}>Retos&nbsp;</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Todos los retos creados hasta ahora.
				</h2>
			</div>

			{/* <FormReto /> */}

			<section className="w-full mt-10">
				<RetosHistoryList />
			</section>
		</section>
	);
}
