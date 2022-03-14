import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
  PreviewData
} from "next";

import Head from "next/head";
import AboutMe from "../components/index/about-me";
import Skills from "../components/index/skills";
import JobExperience from "../components/index/job-experience";
import Portfolio from "../components/index/portfolio";
import { Contact } from "../components/index/contact";
import getAboutMeInfo from "../gql/querys/get-about-me-info";
import { ParsedUrlQuery } from "querystring";
import getSkills from "../gql/querys/get-skills";
import getLabels from "../gql/querys/get-labels";
import getJobs from "../gql/querys/get-jobs";
import getProjects from "../gql/querys/get-projects";
import Education from "../components/index/education";
import getEducation from "../gql/querys/get-education";

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const language = (context.query.language as string) ?? "en";
  const {
    data: { aboutMeInfo }
  } = await getAboutMeInfo(language);
  const {
    data: { skills }
  } = await getSkills(1, 5);

  const {
    data: { label }
  } = await getLabels(language);

  const {
    data: { jobs }
  } = await getJobs(language);

  const {
    data: { projects }
  } = await getProjects(language);

  const {
    data: { educations }
  } = await getEducation(language);

  return {
    props: {
      data: {
        aboutMeInfo,
        skills,
        label,
        jobs,
        projects,
        educations
      }
    }
  };
};

function Home({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Jose Masri</title>
        <meta name="description" content="Senior Fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe {...data.aboutMeInfo.data.attributes} />
      <Skills labels={data.label.data.attributes.skills} skills={data.skills} />
      <JobExperience labels={data.label.data.attributes.job} jobs={data.jobs.data} />
      <Portfolio labels={data.label.data.attributes.portfolio} projects={data.projects.data} />
      <Education labels={data.label.data.attributes.education} education={data.educations.data} />
      <Contact labels={data.label.data.attributes.contact} />
      <footer></footer>
    </div>
  );
}

export default Home;
