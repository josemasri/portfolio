import { FunctionComponent, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaSpinner } from "react-icons/fa";
import { Skills } from "../../types/skills-res";
import { iconFromText } from "../../utils/icon-from-text";

import Skill from "./skill";
import getSkills from "../../gql/querys/get-skills";
import { Skills as SkillsLabels } from "../../types/labels-res";

interface Props {
  labels: SkillsLabels;
  skills: Skills;
}

const Skills: FunctionComponent<Props> = ({ labels, skills: _skills }) => {
  const [viewAll, setViewAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState(_skills.data);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > 1) {
      loadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMore = async () => {
    const {
      data: { skills: moreSkills }
    } = await getSkills(page, 5);
    setSkills([...skills, ...moreSkills.data]);
  };

  const toggleViewMore = () => {
    setViewAll(!viewAll);
  };

  return (
    <section className="mb-8">
      <h3 className="font-bold text-xl mb-3">{labels.title}</h3>
      <ul className="lg:grid grid-cols-2 lg:gap-5">
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            name={skill.attributes.name}
            Icon={
              iconFromText[
                skill.attributes.icon.data.attributes.name as "algolia"
              ]
            }
            years={skill.attributes.years}
            gradient={skill.attributes.gradient}
            textColor={skill.attributes.textColor}
            yearsLabel={labels.years}
          />
        ))}
      </ul>
      {_skills.meta.pagination.pageCount > page && (
        <button
          onClick={() => setPage(page + 1)}
          className="flex justify-center items-center py-2 w-full bg-gradient-to-r from-green-300 via-green-500 to-green-800 shadow-lg shadow-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        >
          {isLoading ? (
            <FaSpinner className="animate-spin mr-2 text-xl font-bold" />
          ) : (
            <FaChevronDown className="mr-2 text-xl font-bold" />
          )}
          <span>{labels.loadMore}</span>
        </button>
      )}
    </section>
  );
};

export default Skills;
