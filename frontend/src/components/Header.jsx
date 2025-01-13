import { BusFront, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BusFront className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Move Smart</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4 items-center justify-center">
            {['Dashboard', 'Schedule', 'Reports', 'Profile'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative inline-block px-3 py-2 text-black no-underline hover:text-white"
                >
                  {item}
                  <span className="absolute inset-0 bg-blue-500 rounded-md -z-10 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <Bell className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}
