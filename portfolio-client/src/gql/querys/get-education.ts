import { gql } from "@apollo/client";
import client from "../client";
import { EducationsRes } from "../../types/education-res";

const GET_EDUCATION = gql`
  query ($locale: I18NLocaleCode) {
    educations(locale: $locale) {
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

const getEducation = (locale: string) =>
  client().query<
    EducationsRes,
    {
      locale: string;
    }
  >({
    query: GET_EDUCATION,
    variables: {
      locale
    }
  });

export default getEducation;
