import logo from '../assets/logo.png'; // Import the logo

export default function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Swahili Pot Hub Logo" className="h-12" /> {/* Adjust height as needed */}
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#programs" className="hover:text-blue-300">Programs</a></li>
          <li><a href="#events" className="hover:text-blue-300">Events</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>

        {/* Call-to-Action Button */}
        <a href="https://medium.com/@swahilipotengineering" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100">Blog</a>
      </div>
    </nav>
  );
}