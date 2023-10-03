
import RankingList from "@/components/RankingList";
import RetosHistoryList from "@/components/RetosHistoryList";
import { subtitle, title } from "@/components/primitives";

export default function RankingPage() {

	return (
		<section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Top&nbsp;</h1>
				<h1 className={title({ color: "pink", fontWeigth: "bold" })}>Ranking&nbsp;</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Lista de retadores con mayor score.
				</h2>
			</div>

			<section className="w-full mt-10">
				<p className="text-bold text-default-400 text-center mb-1">
					Top 100 de retadores
				</p>
				<RankingList />
			</section>
		</section>
	);
}
