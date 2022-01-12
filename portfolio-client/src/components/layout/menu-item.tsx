import { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  name: string;
  route: string;
}

const MenuItem: FunctionComponent<Props> = ({ name, route }) => {
  return (
    <li>
      <Link href={route}>
        <a className="font-semibold text-gray-800 dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
          {name}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
