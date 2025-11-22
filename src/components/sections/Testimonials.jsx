const testimonials = [
	{
		id: 1,
		name: "Sarah Chen",
		role: "Senior Developer",
		image:
			"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
		content:
			"This AI-powered development platform has changed how we write code. The intelligent suggestions save hours every day.",
	},
	{
		id: 2,
		name: "Marcus Rodriguez",
		role: "Tech Lead",
		image:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
		content:
			"The automated testing and debugging features are game-changers. We ship faster and with more confidence.",
	},
	{
		id: 3,
		name: "Emily Watson",
		role: "CTO",
		image:
			"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
		content:
			"Our development velocity increased by 300% after adopting this platform. It's like having a senior engineer paired with every dev.",
	},
];

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
			<div className="flex items-start space-x-3 sm:space-x-4">
				<div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
					"
				</div>

				<div className="flex-grow">
					<p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
						{testimonial.content}
					</p>

					<div className="flex items-center space-x-2 sm:space-x-3">
						<img
							src={testimonial.image}
							alt={testimonial.name}
							className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
						/>

						<div>
							<h4 className="font-semibold text-white text-sm sm:text-base">
								{testimonial.name}
							</h4>
							<p className="text-xs sm:text-sm text-gray-400">
								{testimonial.role}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const TestimonialsList = ({ items }) => {
	return (
		<div className="space-y-6 sm:space-y-8">
			{items.map((t) => (
				<TestimonialCard key={t.id} testimonial={t} />
			))}
		</div>
	);
};

const TestimonialsHeader = () => {
	return (
		<h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-16 md:mb-20 lg:mb-24">
			<span className="block">What developers are saying</span>
			<span className="block bg-gradient-to-l grad-pri bg-clip-text text-transparent">
				ABOUT US
			</span>
		</h2>
	);
};

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="py-4 md:py-7 lg:py-10 text-center lg:text-left"
		>
			<div className="max-w-7xl mx-auto mb-16 md:mb-20 lg:mb-24">
				<div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
					<TestimonialsHeader />
					<div className="lg:w-1/2 w-full">
						<TestimonialsList items={testimonials} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
