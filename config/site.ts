export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Retos personales",
	description: "Crea retos y manten un control de ellos",
	navItems: [
		{
			label: "Ranking",
			href: "/ranking",
		},
		{
			label: "Historial",
			href: "/history",
		},
	],
	navMenuItems: [
		{
			label: "Ranking",
			href: "/ranking",
		},
		{
			label: "Historial",
			href: "/history",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
