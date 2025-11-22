import { Features, Pricing, Testimonials } from "./sections";
import IDEContainer from "./widgets/IDEContainer";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const ActionButtons = () => {
	return (
		<div className="py-2 md:py-5 lg:py-8 flex flex-wrap justify-center lg:justify-start gap-2 md:gap-5 lg:gap-8">
			<button className="group px-6 py-4 bg-gradient-to-b grad-bg rounded-lg font-semibold text-sm md:text-base lg:text-lg flex gap-x-2 md:gap-x-3 lg:gap-x-4 justify-center items-center active:scale-105 transition duration-100 md:rounded-xl animate-slide-in animate-delay-400 no-slide-in whitespace-nowrap">
				Start Coding Free
				<ArrowRight className="size-4 lg:size-5 group-active:translate-x-2 transition" />
			</button>
			<button className="group px-6 py-4 backdrop-blur-sm border bd-blur-l rounded-lg font-semibold text-sm md:text-base lg:text-lg flex gap-x-2 md:gap-x-3 lg:gap-x-4 items-center justify-center active:bg-white/12 active:scale-105 transition duration-100 md:rounded-xl animate-slide-in animate-delay-500 no-slide-in whitespace-nowrap">
				<div className="p-2 bg-sec/20 rounded-full">
					<Play className="size-4 lg:size-5 fill-white" />
				</div>
				Watch Demo
			</button>
		</div>
	);
};

const HeroText = () => {
	return (
		<div className="py-2 md:py-5 lg:py-8 text-center lg:text-left">
			<h1 className="text-5xl font-semibold mb-4 md:mb-7 lg:mb-10 leading-tight md:text-6xl lg:text-7xl">
				<span className="block bg-gradient-to-b grad-sec bg-clip-text text-transparent animate-slide-in no-slide-in animate-delay-100">
					Code Faster
				</span>
				<span className="block bg-gradient-to-b grad-pri bg-clip-text text-transparent no-slide-in animate-slide-in animate-delay-200">
					Build Better
				</span>
			</h1>
			<p className="animate-slide-in animate-delay-300 text-card text-base md:text-lg lg:text-xl max-w-lg text-sec-l leading-relaxed no-slide-in">
				Accelerate your development workflow with intelligent code completion,
				automated testing, and smart debugging. Ship production-ready code 10x
				faster.
			</p>
		</div>
	);
};

const HeroBadge = () => {
	return (
		<div className="py-2 md:py-5 lg:py-8 md:translate-y-4 lg:translate-y-6 mt-4 md:mt-0 no-slide-in animate-slide-in">
			<div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4 px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 bg-slate-900 border border-border rounded-full">
				<Sparkles className="size-4 md:size-5 lg:size-6 text-pri-l fill-blue-100" />
				<span className="text-sm text-pri-l md:text-base lg:text-lg">
					Introducing ScytheAI
				</span>
			</div>
		</div>
	);
};

const HeroContent = () => {
	return (
		<div className="flex items-center lg:items-start flex-col py-3 md:py-6 lg:py-9 lg:-translate-y-10">
			<HeroBadge />
			<HeroText />
			<ActionButtons />
		</div>
	);
};

const Hero = () => {
	return (
		<section className="hero">
			<HeroContent />
			<IDEContainer />
		</section>
	);
};

const Main = () => {
	return (
		<main>
			<Hero />
			<Features />
			<Pricing />
			<Testimonials />
		</main>
	);
};

export default Main;
