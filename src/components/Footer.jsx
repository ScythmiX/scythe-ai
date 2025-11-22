import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const footerLinks = {
	Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
	Company: ["About", "Blog", "Careers", "Press", "Partners"],
	Resources: [
		"Documentation",
		"Help Center",
		"Community",
		"API Reference",
		"Status",
	],
	Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

const SocialButton = ({ href, children }) => (
	<a
		href={href}
		className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
	>
		{children}
	</a>
);

const Brand = () => (
	<div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
		<div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
			<img src={logo} alt="ScytheAI Logo" className="w-8 h-8" />

			<span className="text-xl font-bold">
				<span className="text-white">Scythe</span>
				<span className="text-blue-400">AI</span>
			</span>
		</div>

		<p className="text-gray-400 mb-6 max-w-xs mx-auto sm:mx-0 text-base">
			Transform your workflow with AI-powered tools and automation. Built for
			modern teams.
		</p>

		<div className="flex justify-center sm:justify-start space-x-4">
			<SocialButton href="javascript:void(0)">
				<Twitter className="w-5 h-5" />
			</SocialButton>
			<SocialButton href="javascript:void(0)">
				<Github className="w-5 h-5" />
			</SocialButton>
			<SocialButton href="javascript:void(0)">
				<Linkedin className="w-5 h-5" />
			</SocialButton>
			<SocialButton href="javascript:void(0)">
				<Mail className="w-5 h-5" />
			</SocialButton>
		</div>
	</div>
);

const FooterColumn = ({ category, links }) => (
	<div>
		<h3 className="font-semibold text-white mb-4 text-base">{category}</h3>

		<ul className="space-y-3">
			{links.map((link, index) => (
				<li key={`${category}-${index}`}>
					<a
						href="javascript:void(0)"
						className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
					>
						{link}
					</a>
				</li>
			))}
		</ul>
	</div>
);

const FooterLinks = ({ linksObj }) => (
	<div className="sm:col-span-3 lg:col-span-4">
		<div className="grid grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
			{Object.entries(linksObj).map(([category, links]) => (
				<FooterColumn key={category} category={category} links={links} />
			))}
		</div>
	</div>
);

const FooterBottom = () => (
	<div className="pt-8 border-t border-slate-800">
		<div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
			<p className="text-gray-400 text-sm">
				© 2025 ScytheAI. All rights reserved.
			</p>

			<div className="flex items-center space-x-6 text-sm">
				<a
					href="javascript:void(0)"
					className="text-gray-400 hover:text-white transition-colors duration-200"
				>
					Privacy Policy
				</a>
				<a
					href="javascript:void(0)"
					className="text-gray-400 hover:text-white transition-colors duration-200"
				>
					Terms of Service
				</a>
				<a
					href="javascript:void(0)"
					className="text-gray-400 hover:text-white transition-colors duration-200"
				>
					Cookie Settings
				</a>
			</div>
		</div>
	</div>
);

const Footer = () => (
	<footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
			{/* Hidden on mobile */}
			<div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
				<Brand />
				<FooterLinks linksObj={footerLinks} />
			</div>

			<FooterBottom />
		</div>
	</footer>
);

export default Footer;
