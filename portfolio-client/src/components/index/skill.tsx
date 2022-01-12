import React, { FunctionComponent } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
  name: string;
  years: number;
  Icon: IconType;
  gradient: string;
  textColor: string;
  yearsLabel: string;
}

const Skill: FunctionComponent<Props> = ({
  name,
  years,
  Icon,
  gradient,
  textColor,
  yearsLabel
}) => {
  return (
    <li className="pb-5">
      <div
        className={`flex ${textColor} font-medium text-base items-center mb-2`}
      >
        <Icon className="mr-3 text-2xl"></Icon>
        <span>{name}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <motion.div
          animate={{ width: ['0%', `${Math.min(100, (years / 5) * 100)}%`] }}
          transition={{ duration: 1.5 }}
          className={`bg-gradient-to-r ${gradient} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        >
          {years} {yearsLabel}
        </motion.div>
      </div>
    </li>
  );
};

export default Skill;
