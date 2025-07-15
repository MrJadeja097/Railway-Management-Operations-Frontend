import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50">

      <nav className="relative px-6 py-4 backdrop-blur-lg bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-gray-700/50 shadow-xl">

        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 via-gray-700/10 to-gray-600/10 mix-blend-overlay"></div>
        

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>

        <div className="relative flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center group space-x-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-700/80 to-gray-800/90 border border-gray-600/30 shadow-lg group-hover:shadow-gray-500/20 transition-all duration-300">
              <img 
                src="./train-logo.png" 
                // className="h-10 w-10 rounded-md object-cover"
                alt="Railway system logo "
              />
            </div>
            <div className="group-hover:text-gray-200 transition-all duration-300">
              <h1 className="text-xl font-bold text-gray-100">
                <span className="text-gray-300">Railway</span>
                <span className="text-gray-100"> Management</span>
              </h1>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700/70 text-gray-100 shadow-md shadow-gray-500/20 border border-gray-600/30"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/40 hover:shadow-gray-500/10"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/active_routes"
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700/70 text-gray-100 shadow-md shadow-gray-500/20 border border-gray-600/30"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/40 hover:shadow-gray-500/10"
                }`
              }
            >
              Active Routes
            </NavLink>
            <NavLink
              to="/rail_lines"
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700/70 text-gray-100 shadow-md shadow-gray-500/20 border border-gray-600/30"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/40 hover:shadow-gray-500/10"
                }`
              }
            >
              Rail Lines
            </NavLink>
            <NavLink
              to="/stations"
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700/70 text-gray-100 shadow-md shadow-gray-500/20 border border-gray-600/30"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/40 hover:shadow-gray-500/10"
                }`
              }
            >
              Stations
            </NavLink>
            <NavLink
              to="/trains"
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700/70 text-gray-100 shadow-md shadow-gray-500/20 border border-gray-600/30"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/40 hover:shadow-gray-500/10"
                }`
              }
            >
              Trains
            </NavLink>
            <NavLink
              to="/staff"
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700/70 text-gray-100 shadow-md shadow-gray-500/20 border border-gray-600/30"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/40 hover:shadow-gray-500/10"
                }`
              }
            >
              Staff
            </NavLink>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="#"
              className="px-4 py-2.5 rounded-lg font-medium text-sm text-gray-100 bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/30 hover:border-gray-600/50 transition-all duration-300 shadow-md hover:shadow-gray-500/20"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="px-4 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-blue-600/95 to-blue-700/95 hover:from-blue-700 hover:to-blue-800 border border-blue-600/40 hover:border-blue-500/60 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
