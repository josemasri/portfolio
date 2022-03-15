import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { JobData } from "../../types/jobs-res";

interface Props {
  job: JobData;
}

const Job: FunctionComponent<Props> = ({ job }) => {
  const [isViewMore, setIsViewMore] = useState(false);
  const toggleViewMore = () => setIsViewMore(!isViewMore);
  return (
    <article className="w-60 snap-center shrink-0 first:pl-8 last:mr-8 mb-5 transform hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r p-1 shadow-lg shadow-blue-500 from-pink-500 via-blue-500 to-indigo-800">
      <div className="h-[28rem] flex flex-col justify-between overflow-scroll bg-white dark:bg-gray-900 rounded-lg p-4">
        <h4 className="font-bold text-xl mb-2">{job.attributes.company}</h4>
        <div className="h-24 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${job.attributes.image.data.attributes.url}`}
            alt="Job"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h5>
          {job.attributes.start} - {job.attributes.end}
        </h5>
        {job.attributes.description.split(" ").length > 20 ? (
          <>
            {isViewMore ? (
              <>
                <p>{job.attributes.description}</p>
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
                  {job.attributes.description.split(" ").slice(0, 20).join(" ")}
                </p>
                <button
                  onClick={toggleViewMore}
                  className="text-blue-500 flex items-center"
                >
                  <FaChevronDown className="mr-2" /> View More
                </button>
              </>
            )}
          </>
        ) : (
          <p>{job.attributes.description}</p>
        )}
      </div>
    </article>
  );
};

export default Job;
