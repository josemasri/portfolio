import { gql } from "@apollo/client";
import client from "../client";
import { LabelsRes } from "../../types/labels-res";
import { ProjectsRes } from "../../types/projects-res";

const GET_PROJECTS = gql`
  query ($locale: I18NLocaleCode) {
    projects(locale: $locale) {
      data {
        id
        attributes {
          name
          description
          images {
            data {
              attributes {
                url
              }
            }
          }
          url
        }
      }
    }
  }
`;

const getLabels = (locale: string) =>
  client().query<
    ProjectsRes,
    {
      locale: string;
    }
  >({
    query: GET_PROJECTS,
    variables: {
      locale
    }
  });

export default getLabels;
