import { FunctionComponent } from "react";
import { ProjectData } from "../../types/projects-res";
import Project from "./project";
import { Job as PorfolioLabels } from "../../types/labels-res";

interface Props {
  projects: ProjectData[];
  labels: PorfolioLabels;
}

const Portfolio: FunctionComponent<Props> = ({ projects, labels }) => {
  return (
    <section className="mb-5">
      <h3 className="font-bold text-xl mb-3">{labels.title}</h3>
      <div className="relative rounded-xl overflow-auto">
        <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4 sm:w-48"></div>
          </div>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
