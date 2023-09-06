import SignInForm from "@/components/SignInForm";
import { title, subtitle } from "@/components/primitives";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Inicio de&nbsp;</h1>
				<h1 className={title({ color: "pink", fontWeigth: "bold" })}>Sesión&nbsp;</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Entra con tus credenciales o alguna red social. O <Link href="/signup" className="text-danger-500 font-medium">Registrate aquí</Link>
				</h2>
			</div>

			<SignInForm />

			<section className="w-full mt-10">

			</section>
		</section>
  )
}
