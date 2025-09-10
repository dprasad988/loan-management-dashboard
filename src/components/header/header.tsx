import React, { useState } from "react";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colors } from "@/styles/colors";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header
      style={{ backgroundColor: colors.dark }}
      className="w-full p-4 fixed top-0 left-0 right-0 z-40"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          <div
            className="text-2xl font-semibold"
            style={{ color: colors.lightText }}
          >
            DemoApp
          </div>

          <div className="hidden md:block"></div>

          <div className="flex justify-between md:justify-end items-center space-x-4">
            <div className="md:hidden">
              <Button variant="outline" onClick={toggleMenu}>
                ☰
              </Button>
            </div>

            <div className="hidden md:flex space-x-4">
              <Button variant="outline">
                <Search size={20} style={{ color: colors.accent }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="p-2 border-none w-35 focus:outline-none focus:ring-0 "
                />
              </Button>

              <Button variant="outline">
                <HelpCircle size={20} style={{ color: colors.primaryText }} />
              </Button>

              <Button variant="outline">
                <Bell size={20} style={{ color: colors.secondaryText }} />
              </Button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Button variant="outline" className="w-full">
              <Search size={20} style={{ color: colors.accent }} />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="p-2 border-none focus:outline-none focus:ring-0 "
              />
            </Button>

            <Button variant="outline" className="w-full">
              <HelpCircle size={20} style={{ color: colors.primaryText }} />
              <p>Help</p>
            </Button>

            <Button variant="outline" className="w-full">
              <Bell size={20} style={{ color: colors.secondaryText }} />
              <p>Notifications</p>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
