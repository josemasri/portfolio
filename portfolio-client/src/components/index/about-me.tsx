import Image from "next/image";
import { FunctionComponent } from "react";
import { AboutMeInfoAttributes } from "../../types/about-me-info-res";

const AboutMe: FunctionComponent<AboutMeInfoAttributes> = ({
  name,
  jobTitle,
  description,
  picture
}) => {
  return (
    <main className="mt-5">
      <div className="w-1/4 mb-5">
        <Image
          className="overflow-hidden rounded-full grayscale"
          width={200}
          height={200}
          src={`${process.env.NEXT_PUBLIC_API_URL}${picture.data.attributes.url}`}
          alt="Me"
        />
      </div>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white typewriter">
        {name}
      </h1>
      <h2 className="text-gray-700 dark:text-gray-200 mb-4">{jobTitle}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-16">{description}</p>
    </main>
  );
};

export default AboutMe;
