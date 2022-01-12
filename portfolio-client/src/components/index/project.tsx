import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ProjectData } from "../../types/projects-res";
import { Carousel } from "react-responsive-carousel";

interface Props {
  project: ProjectData;
}

const Project: FunctionComponent<Props> = ({ project }) => {
  const [isViewMore, setIsViewMore] = useState(false);
  const toggleViewMore = () => setIsViewMore(!isViewMore);
  return (
    <article className="w-60 h-100 snap-center shrink-0 first:pl-8 last:mr-8 mb-5 transform hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r p-1 shadow-lg shadow-blue-500 from-pink-500 via-blue-500 to-indigo-800">
      <div className="<flex flex-col justify-between bg-white dark:bg-gray-900 rounded-lg p-4">
        <h4 className="font-bold text-xl mb-2">{project.attributes.name}</h4>
        <div className="w-full mb-2">
          <Carousel autoPlay={true} showStatus={false} showThumbs={false}>
            {project.attributes.images.data.map((image) => (
              <div key={image.attributes.url}>
                <Image
                  width={400}
                  height={200}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${image.attributes.url}`}
                  alt="Project"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {isViewMore ? (
          <>
            <p>{project.attributes.description}</p>
            <button
              onClick={toggleViewMore}
              className="text-blue-500 flex items-center"
            >
              <FaChevronUp className="mr-2" /> View Less
            </button>
          </>
        ) : (
          <>
            <p>
              {project.attributes.description.split(" ").slice(0, 20).join(" ")}
            </p>
            <button
              onClick={toggleViewMore}
              className="text-blue-500 flex items-center"
            >
              <FaChevronDown className="mr-2" /> View More
            </button>
          </>
        )}
        <a
          rel="noreferrer"
          target="_blank"
          href={project.attributes.url}
          className="mt-2 flex justify-center items-center py-2 w-full bg-gradient-to-r from-green-300 via-green-500 to-green-800 shadow-lg shadow-green-500 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full"
        >
          <span>Enter!</span>
        </a>
      </div>
    </article>
  );
};

export default Project;
