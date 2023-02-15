import classNames from "classnames";
import React from "react";
import { TextTypes } from "../../types/Text.types";

export const Text = ({ text, extraClasses }: TextTypes) => {
  const textClasses = classNames("", {}, extraClasses);
  return <p className={textClasses}>{text}</p>;
};
