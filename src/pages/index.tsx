import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import StopwatchComponent from "../components/stopwatchComponent";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>MultiStopwatch
    <StopwatchComponent /></>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>
