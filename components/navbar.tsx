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
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth";
import { Avatar, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { signOut } from "@/firebase/services/auth_services";
import { useRouter } from "next/navigation";

export const Navbar = () => {

	const router = useRouter();

	const { isLogged, user } = useContext(AuthContext);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const signOutSession = async () => {
		await signOut();
		setIsMenuOpen(false);
	}

	return (
		<NextUINavbar
			maxWidth="xl"
			position="sticky"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex justify-start items-center gap-3"
						href="/"
						onClick={() => setIsMenuOpen(false)}
					>
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
					<ul className="hidden lg:flex gap-4 justify-start items-center mr-4">
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
									<Dropdown placement="bottom-end">
										<DropdownTrigger>
											<Avatar
												isBordered
												size="sm"
												showFallback
												name={user?.displayName}
												src={user?.photoURL}
												className="cursor-pointer"
											/>
										</DropdownTrigger>
										<DropdownMenu aria-label="Perfil de usuario" variant="flat">
											<DropdownItem key="registred" className="h-14 gap-2 dark:bg-zinc-800 cursor-default" isReadOnly>
												<p className="font-bold">Registrado como</p>
												<p className="font-bold">{user?.displayName}</p>
											</DropdownItem>
											<DropdownItem
												key="profile"
												onClick={() => {
													router.push("/profile")
													setIsMenuOpen(false)
												}}
											>
												Perfil
											</DropdownItem>
											<DropdownItem
												key="logout"
												color="danger"
												onPress={signOutSession}
											>
												Salir
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
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
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				{
					isLogged ? (
						<Avatar
							isBordered
							size="sm"
							showFallback
							name={user?.displayName}
							src={user?.photoURL}
							className="cursor-pointer"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						/>
					) : (
						<NavbarMenuToggle />
					)
				}
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								color="foreground"
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
					{
						isLogged && (
							<>
								<Divider />
								<NavbarMenuItem>
									<NextLink
										color="foreground"
										href="/profile"
										onClick={() => setIsMenuOpen(false)}
									>
										Perfil
									</NextLink>
								</NavbarMenuItem>
							</>
						)
					}
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
