import { gql } from "@apollo/client";
import client from "../client";
import { LabelsRes } from "../../types/labels-res";

const GET_LABELS = gql`
  query ($locale: I18NLocaleCode) {
    label(locale: $locale) {
      data {
        attributes {
          skills {
            title
            loadMore
            years
          }
          job {
            title
          }
          portfolio {
            title
          }
          education {
            title
          }
          contact {
            title
            name
            email
            message
            send
          }
        }
      }
    }
  }
`;

const getLabels = (locale: string) =>
  client().query<
    LabelsRes,
    {
      locale: string;
    }
  >({
    query: GET_LABELS,
    variables: {
      locale
    }
  });

export default getLabels;
