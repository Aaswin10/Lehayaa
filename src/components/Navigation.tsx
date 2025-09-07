
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Collections", href: "/collections" },
    { name: "Traditional", href: "/traditional" },
    { name: "Contemporary", href: "/contemporary" },
    { name: "Lookbook", href: "/lookbook" },
  ];

  return (
    <nav>
      <ul className="flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className={`text-sm font-medium transition-all duration-200 hover:text-foreground relative group ${
                location.pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full ${
                location.pathname === item.href ? "w-full" : ""
              }`}></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
