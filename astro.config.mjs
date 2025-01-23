// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Vulpy",
			social: {
				github: "https://github.com/CodeDenHub/Vulpy",
			},
			sidebar: [
				{
					label: "Hello Vulpy",
					collapsed: true,
					items: [
						{
							label: "Comment ça marche ?",
							slug: "home/how-to-use",
						},
					],
				},
				{
					label: "Les bases du web",
					items: [
						{
							label: "Introduction",
							slug: "bases/introduction",
						},
						{
							label: "HTML",
							slug: "bases/html",
							badge: {
								text: "WIP",
								variant: "caution",
							},
						},
						{
							label: "CSS",
							slug: "bases/css",
							badge: {
								text: "WIP",
								variant: "caution",
							},
						},
						{
							label: "JavaScript",
							slug: "bases/javascript",
							badge: {
								text: "WIP",
								variant: "caution",
							},
						},
					],
				},
				// {
				// 	label: "Reference",
				// 	autogenerate: { directory: "reference" },
				// },
			],
		}),
	],
});
