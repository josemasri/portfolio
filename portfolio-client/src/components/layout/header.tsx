import Image from "next/image";
import { FunctionComponent, useContext, useEffect } from "react";
import { FaHamburger, FaMoon, FaSun } from "react-icons/fa";
import MenuItem from "./menu-item";
import enImage from "../../../public/images/en.png";
import esImage from "../../../public/images/es.png";
import { SettingsContext } from "../../context/settings-context";
import { useRouter } from "next/router";



const Header: FunctionComponent = () => {
  const { darkMode, setDarkMode } = useContext(SettingsContext);
  const router = useRouter();

  const setLanguage = async (language: string) => {
    await router.push(router.pathname, {
      query: {
        language
      }
    });
    router.reload();
  };
  return (
    <header className="p-2 flex justify-between">
      {/* <button className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
        <FaHamburger size={20} />
      </button> */}

      {/* <ul className="hidden md:flex">
        <MenuItem name="Home" route="/" />
        <MenuItem name="Skills" route="/" />
        <MenuItem name="Portfolio" route="/" />
        <MenuItem name="Experience" route="/" />
        <MenuItem name="Contact" route="/" />
      </ul> */}

      {router.query.language === "en" || !router.query.language ? (
        <button
          onClick={() => setLanguage("es")}
          className="p-1 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          <Image width={32} height={20} src={enImage} alt="US Flag" />
          <span className="ml-1">EN</span>
        </button>
      ) : (
        <button
          onClick={() => setLanguage("en")}
          className="p-1 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          <Image width={32} height={20} src={esImage} alt="Spain Flag" />
          <span className="ml-1">ES</span>
        </button>
      )}

      {darkMode ? (
        <button
          onClick={() => setDarkMode(false)}
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          <FaSun />
        </button>
      ) : (
        <button
          onClick={() => setDarkMode(true)}
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          <FaMoon />
        </button>
      )}
    </header>
  );
};

export default Header;
