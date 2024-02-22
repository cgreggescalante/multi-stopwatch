import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MultiStopwatchComponent from "../components/multiStopwatchComponent";
import {Box} from "@chakra-ui/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box bgColor={'#1B1342'} color={'#F5EFED'} minHeight={'100vh'} width={'auto'} overflowX={'auto'}>
      <MultiStopwatchComponent />
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
