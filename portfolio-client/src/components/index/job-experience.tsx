import { FunctionComponent } from "react";
import { JobData } from "../../types/jobs-res";
import Job from "./job";
import { Job as JobsLabel } from "../../types/labels-res";

interface Props {
  jobs: JobData[];
  labels: JobsLabel;
}

const JobExperience: FunctionComponent<Props> = ({ jobs, labels }) => {
  return (
    <section className="mb-5">
      <h3 className="font-bold text-xl mb-3">{labels?.title}</h3>
      <div className="relative rounded-xl overflow-auto">
        <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4 sm:w-48"></div>
          </div>
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
