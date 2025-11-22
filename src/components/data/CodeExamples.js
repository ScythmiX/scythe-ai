export const codeExamples = {
	"App.jsx": `import { useState } from "react";
import { ScytheAI } from "@scytheai/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await ScytheAI.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}`,
	"Hero.jsx": `import { useState, useEffect } from "react";
import { ScytheAI } from "@scytheai/ai";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAISuggestion = async () => {
    const suggestion = await ScytheAI.suggest("hero component");
    return suggestion;
  };

  return (
    <section className="hero">
      <h1 className="text-4xl font-bold">
        {isTyping ? "AI-Powered Development" : "Loading..."}
      </h1>
      <button onClick={handleAISuggestion}>
        Get AI Suggestion
      </button>
    </section>
  );
}`,
	"Navbar.jsx": `import { useState } from "react";
import { ScytheAI } from "@scytheai/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const results = await ScytheAI.search(searchQuery);
    return results;
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>ScytheAI</h2>
      </div>
      
      <div className="nav-search">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search code..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}`,
};

export const floatingCards = {
	"App.jsx": {
		bgColor: "bg-blue-500/30",
		iconColor: "text-blue-400",
		textColor: "text-blue-200",
		contentColor: "text-blue-300",
		borderColor: "border-blue-400/40",
		shadowColor: "shadow-blue-500",
		icon: "AI",
		title: "Smart Completion",
		content: "AI-powered code suggestions in real-time",
	},
	"Hero.jsx": {
		bgColor: "bg-purple-500/30",
		iconColor: "text-purple-400",
		textColor: "text-purple-200",
		contentColor: "text-purple-300",
		borderColor: "border-purple-400/40",
		shadowColor: "shadow-purple-500",
		icon: "⚡",
		title: "Auto Animation",
		content: "Dynamic typing effects generated automatically",
	},
	"Navbar.jsx": {
		bgColor: "bg-emerald-500/30",
		iconColor: "text-emerald-400",
		textColor: "text-emerald-200",
		contentColor: "text-emerald-300",
		borderColor: "border-emerald-400/40",
		shadowColor: "shadow-emerald-500",
		icon: "🔍",
		title: "Smart Search",
		content: "Intelligent code search across your project",
	},
};
