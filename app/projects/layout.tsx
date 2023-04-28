export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-blue-500 to-violet-900">
			{children}
		</div>
	);
}
