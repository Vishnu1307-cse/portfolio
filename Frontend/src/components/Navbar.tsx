export function Navbar() {
return (
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between items-center">
<h1 className="text-2xl font-semibold tracking-tight">Vishnu S</h1>
<div className="flex gap-8 opacity-80 hover:opacity-100 transition-all">
<a href="#about" className="hover:text-white transition">About</a>
<a href="#projects" className="hover:text-white transition">Projects</a>
<a href="#contact" className="hover:text-white transition">Contact</a>
</div>
</nav>
);
}