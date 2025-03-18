export default function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Swahili Pot Hub</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#programs" className="hover:text-blue-300">Programs</a></li>
          <li><a href="#events" className="hover:text-blue-300">Events</a></li>
          
        </ul>
      </div>
    </nav>
  );
}