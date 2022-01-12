import { gql } from "@apollo/client";
import client from "../client";
import { AboutMeInfoRes } from "../../types/about-me-info-res";

const GET_ABOUT_ME_INFO = gql`
  query ($locale: I18NLocaleCode) {
    aboutMeInfo(locale: $locale) {
      data {
        attributes {
          name
          jobTitle
          description
          picture {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const getAboutMeInfo = (locale: string) =>
  client().query<
    AboutMeInfoRes,
    {
      locale: string;
    }
  >({
    query: GET_ABOUT_ME_INFO,
    variables: {
      locale
    }
  });

export default getAboutMeInfo;
