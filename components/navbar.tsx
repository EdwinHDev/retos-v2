"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import { LogoRetos } from "@/components/icons";
import { useContext } from "react";
import { AuthContext } from "@/context/auth";
import { Button } from "@nextui-org/react";
import { signOut } from "@/firebase/services/auth_services";

export const Navbar = () => {

	const { isLogged } = useContext(AuthContext);

	const signOutSession = async () => {
		await signOut();
	}

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-3" href="/">
						<LogoRetos />
						<p className="font-bold text-inherit text-xl">Retos</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden lg:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link> */}
					<ul className="hidden lg:flex gap-4 justify-start mr-4">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						))}
						<NavbarItem>
							{
								isLogged ? (
									<Link
										className={clsx(
											linkStyles({ color: "danger" }),
											"data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
										)}
										color="danger"
										onPress={signOutSession}
									>
										Salir
									</Link>
								) : (
									<NextLink
										className={clsx(
											linkStyles({ color: "danger" }),
											"data-[active=true]:text-primary data-[active=true]:font-medium"
										)}
										color="danger"
										href="/signin"
									>
										Entrar
									</NextLink>
								)
							}
						</NavbarItem>
					</ul>
					<ThemeSwitch />
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
            isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem> */}
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				{/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link> */}
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{/* {searchInput} */}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color="foreground"
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem>
						{
							isLogged ? (
								<Link
									color="danger"
									size="lg"
									onPress={signOutSession}
									className="cursor-pointer"
								>
									Salir
								</Link>
							) : (
								<Link
									href="/signin"
									color="danger"
									size="lg"
								>
									Entrar
								</Link>
							)
						}
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
