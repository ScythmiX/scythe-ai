import { ChevronDown } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const FloatingCard = ({ card }) => {
	return (
		<div
			className={`hidden lg:block absolute bottom-4 right-4 translate-x-8 translate-y-8 w-72 ${card.bgColor} rounded-lg p-4 border ${card.borderColor} shadow-2xl/50 ${card.shadowColor} backdrop-blur-lg`}
		>
			<div className="flex items-center space-x-2 mb-2">
				<div
					className={`size-6 ${card.iconColor} flex justify-center items-center text-sm font-bold`}
				>
					{card.icon}
				</div>
				<span className={`text-sm font-medium ${card.textColor}`}>
					{card.title}
				</span>
			</div>
			<div className={`text-sm text-left ${card.contentColor}`}>
				{card.content}
			</div>
		</div>
	);
};

const IDEDisplay = ({ code }) => {
	return (
		<div className="overflow-auto">
			<SyntaxHighlighter
				language="javascript"
				style={nightOwl}
				customStyle={{
					margin: 0,
					borderRadius: "8px",
					fontSize: "10px",
					lineHeight: "1.5",
					height: "100%",
					border: "1px solid #555555",
					wordWrap: "break-word",
					whiteSpace: "pre-wrap",
					textAlign: "left",
				}}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};

const IDETab = ({ label, state, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`px-3 py-2 backdrop-blur-sm border text-xs md:text-sm lg:text-base rounded-t-lg md:rounded-t-xl whitespace-nowrap transition
				
				${state === label ? "bg-pri-d/30 text-white border-pri/40" : "bd-blur-l text-sec-l"} `}
		>
			{label}
		</button>
	);
};

const IDETabs = ({ state, setter }) => {
	return (
		<div className="flex gap-x-1 md:gap-x-2 lg:gap-x-3">
			<IDETab label="App.jsx" state={state} onClick={() => setter("App.jsx")} />
			<IDETab
				label="Hero.jsx"
				state={state}
				onClick={() => setter("Hero.jsx")}
			/>
			<IDETab
				label="Navbar.jsx"
				state={state}
				onClick={() => setter("Navbar.jsx")}
			/>
		</div>
	);
};

const IDEBody = ({ state, setter }) => {
	return (
		<div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 p-3 md:p-4 lg:p-5 h-full">
			<IDETabs state={state} setter={setter} />

			<IDEDisplay code={codeExamples[state]} />
		</div>
	);
};

const IDEHeader = () => {
	return (
		<div className="flex justify-between items-center px-3 py-2 border-b backdrop-blur-sm bd-blur-l">
			<div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
				<div className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3">
					<div className="size-2 lg:size-3 rounded-full bg-red-500" />
					<div className="size-2 lg:size-3 rounded-full bg-yellow-500" />
					<div className="size-2 lg:size-3 rounded-full bg-green-500" />
				</div>
				<span className="text-xs md:text-sm lg:text-base text-sec-l">
					ScytheAI
				</span>
			</div>
			<ChevronDown className="size-3 md:size-4 lg:size-5 text-sec" />
		</div>
	);
};

const IDEContainer = () => {
	const [activeTab, setActiveTab] = useState("App.jsx");

	return (
		<div className="relative border backdrop-blur-lg bd-blur rounded-lg p-3 md:p-4 lg:p-5 md:rounded-xl shadow-2xl my-3 md:my-6 lg:my-9 w-full md:w-120 lg:w-140 animate-slide-in animate-delay-600 no-slide-in">
			<div className="border backdrop-blur-sm bd-blur-d rounded-lg md:rounded-xl overflow-hidden h-70 md:h-100 lg:h-120">
				<IDEHeader />
				<IDEBody state={activeTab} setter={setActiveTab} />
			</div>

			<FloatingCard card={floatingCards[activeTab]} />
		</div>
	);
};

export default IDEContainer;
