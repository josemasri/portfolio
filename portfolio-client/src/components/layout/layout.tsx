import { FunctionComponent, useContext } from "react";
import { SettingsContext } from "../../context/settings-context";
import Footer from "./footer";
import Header from "./header";

const Layout: FunctionComponent = ({ children }) => {
  const { darkMode } = useContext(SettingsContext);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 dark:bg-black dark:text-gray-50 px-8 pt-5 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
