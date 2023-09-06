import SignUpForm from "@/components/SignUpForm";
import { title, subtitle } from "@/components/primitives";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Crea una&nbsp;</h1>
				<h1 className={title({ color: "pink", fontWeigth: "bold" })}>Cuenta&nbsp;</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Crea una nueva cuenta con credenciales o <Link href="/signin" className="text-danger-500 font-medium">Inicia sesión aquí</Link>
				</h2>
			</div>

			<SignUpForm />

			<section className="w-full mt-10">

			</section>
		</section>
  )
}
