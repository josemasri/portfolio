import { gql } from "@apollo/client";
import client from "../client";
import { JobsRes } from "../../types/jobs-res";

const GET_JOBS = gql`
  query ($locale: I18NLocaleCode) {
    jobs(locale: $locale) {
      data {
        id
        attributes {
          company
          image {
            data {
              attributes {
                url
              }
            }
          }
          start
          end
          description
        }
      }
    }
  }
`;

const getJobs = (locale: string) =>
  client().query<
    JobsRes,
    {
      locale: string;
    }
  >({
    query: GET_JOBS,
    variables: {
      locale
    }
  });

export default getJobs;
