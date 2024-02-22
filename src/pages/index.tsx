import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MultiStopwatchComponent from "../components/multiStopwatchComponent";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      MultiStopwatch
      <MultiStopwatchComponent />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
