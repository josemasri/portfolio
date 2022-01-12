import { gql } from "@apollo/client";
import client from "../client";
import { SkillsRes } from "../../types/skills-res";

const GET_SKILLS = gql`
  query ($page: Int, $pageSize: Int) {
    skills(pagination: { page: $page, pageSize: $pageSize }, sort: ["id"]) {
      data {
        id
        attributes {
          name
          icon {
            data {
              attributes {
                name
              }
            }
          }
          years
          gradient
          textColor
        }
      }
      meta {
        pagination {
          pageCount
        }
      }
    }
  }
`;

const getSkills = (page: number, pageSize: number) =>
  client().query<
    SkillsRes,
    {
      page: number;
      pageSize: number;
    }
  >({
    query: GET_SKILLS,
    variables: {
      page,
      pageSize
    }
  });

export default getSkills;
