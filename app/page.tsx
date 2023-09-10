import FormReto from "@/components/FormReto";
import RetosHomeList from "@/components/RetosHomeList";
import { title, subtitle } from "@/components/primitives";

export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>¿Listo para un&nbsp;</h1>
				<h1 className={title({ color: "pink", fontWeigth: "bold" })}>Reto?&nbsp;</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Crea retos diarios, semanales o mensuales.
				</h2>
			</div>

			<FormReto />

			<section className="w-full mt-10">
				<p className="text-bold text-default-400 text-center mb-1">
					Últimos 10 retos
				</p>
				<RetosHomeList />
			</section>
		</section>
	);
}
