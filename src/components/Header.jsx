import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const NavLink = ({ href, label, onClick }) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className="flex justify-center w-full lg:w-auto lg:border-none py-3 text-sec active:text-white text-sm border-b border-border md:text-base lg:text-lg transition duration-100"
		>
			{label}
		</a>
	);
};

const NavLinks = ({ state, setter }) => {
	return (
		<ul
			className={`
				flex absolute left-0 top-[calc(100%+0.9px)] flex-col w-full lg:static lg:flex-row lg:w-auto lg:bg-transparent lg:gap-x-10 lg:px-6 bg-bg transition lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto
			
				${state ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
			`}
		>
			<li>
				<NavLink
					href="#features"
					label="Features"
					onClick={() => setter(false)}
				/>
			</li>
			<li>
				<NavLink
					href="#pricing"
					label="Pricing"
					onClick={() => setter(false)}
				/>
			</li>
			<li>
				<NavLink
					href="#testimonials"
					label="Testimonials"
					onClick={() => setter(false)}
				/>
			</li>
		</ul>
	);
};

const MenuButton = ({ state, setter }) => {
	return (
		<button
			onClick={() => setter((prev) => !prev)}
			className="px-2 text-sec active:text-white lg:hidden md:px-4 lg:px-6 transition"
		>
			{state ? (
				<X className="size-5 md:size-6 lg:size-7" />
			) : (
				<Menu className="size-5 md:size-6 lg:size-7" />
			)}
		</button>
	);
};

const Brand = () => {
	return (
		<a
			href="/"
			className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3 font-medium text-lg md:text-xl lg:text-2xl"
		>
			<img src={logo} alt="ScytheAI" className="size-6 md:size-7 lg:size-8" />
			<span>
				Scythe
				<span className="bg-gradient-to-b bg-clip-text text-transparent grad-bg">
					AI
				</span>
			</span>
		</a>
	);
};

const Navbar = () => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

	return (
		<nav>
			<Brand />
			<MenuButton state={mobileMenuIsOpen} setter={setMobileMenuIsOpen} />
			<NavLinks state={mobileMenuIsOpen} setter={setMobileMenuIsOpen} />
		</nav>
	);
};

const Header = () => {
	return (
		<header className="bg-bg border-b border-border">
			<Navbar />
		</header>
	);
};

export default Header;
