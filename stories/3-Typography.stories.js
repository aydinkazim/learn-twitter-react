import React from "react";

import TextTitle from "../components/text-title";

export default {
  title: "Typography",
};

export const Title = () => (
  <div>
    <TextTitle> NORMAL </TextTitle>
    <TextTitle bold={false} red={true}> NOT BOLD </TextTitle>
  </div>
);
