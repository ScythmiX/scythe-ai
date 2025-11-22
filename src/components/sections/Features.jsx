import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const featuresData = [
	{
		title: "AI Code Completion",
		description:
			"Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
		codeSnippet: `async function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
	},

	{
		title: "Automated Testing",
		description:
			"Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
		codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
	},

	{
		title: "Smart Debugging",
		description:
			"Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
		codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
	},
];

const CodeBlock = ({ title, code }) => {
	return (
		<div className="border backdrop-blur-lg bd-blur rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 w-full md:w-100 lg:w-110 shadow-2xl mb-16 md:mb-20 lg:mb-24">
			<div className="rounded-lg md:rounded-xl border backdrop-blur-sm bd-blur-d overflow-hidden h-40 md:h-50 lg:h-60">
				<div className="flex justify-between items-center px-3 py-2 border-b backdrop-blur-sm bd-blur-l">
					<div className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3">
						<div className="size-2 lg:size-3 rounded-full bg-red-500" />
						<div className="size-2 lg:size-3 rounded-full bg-yellow-500" />
						<div className="size-2 lg:size-3 rounded-full bg-green-500" />
					</div>
					<span className="text-xs md:text-sm lg:text-base text-sec-l px-1 md:px-2 lg:px-3">
						{title}
					</span>
				</div>

				<div className="h-full flex p-3 md:p-4 lg:p-5">
					<div className="w-full text-left overflow-auto">
						<SyntaxHighlighter
							language="javascript"
							style={nightOwl}
							customStyle={{
								margin: 0,
								borderRadius: "8px",
								fontSize: "10px",
								lineHeight: "1.5",
								height: "100%",
								border: "1px solid #555",
							}}
						>
							{code}
						</SyntaxHighlighter>
					</div>
				</div>
			</div>
		</div>
	);
};

const FeatureItem = ({ feature, reversed }) => {
	return (
		<div
			className={`flex flex-col items-center lg:gap-x-35 ${
				reversed ? "lg:flex-row-reverse" : "lg:flex-row"
			}`}
		>
			<div>
				<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none mb-4 md:mb-5 lg:mb-6">
					{feature.title}
				</h3>

				<p className="text-card text-sm md:text-base lg:text-lg max-w-md text-sec-l leading-relaxed mb-8 md:mb-9 lg:mb-10">
					{feature.description}
				</p>
			</div>

			<CodeBlock title={feature.title} code={feature.codeSnippet} />
		</div>
	);
};

const Features = () => {
	return (
		<section
			id="features"
			className="py-4 md:py-7 lg:py-10 text-center lg:text-left mt-16 md:mt-0 max-w-5xl mx-auto"
		>
			<h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-16 md:mb-20 lg:mb-24">
				<span className="block">Your Complete Development</span>
				<span className="block bg-gradient-to-l grad-pri bg-clip-text text-transparent">
					WORKFLOW
				</span>
			</h2>

			{featuresData.map((feature, idx) => (
				<FeatureItem
					key={feature.title}
					feature={feature}
					reversed={idx % 2 === 1}
				/>
			))}
		</section>
	);
};

export default Features;
