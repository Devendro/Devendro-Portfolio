"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  SimpleIcon,
  ICloud,
} from "react-icon-cloud";

// Define the icon data type
interface IconData {
  simpleIcons: { [key: string]: SimpleIcon };
}

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: true,
  },
};

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<IconData | null>(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);


  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => {
      return renderSimpleIcon({
        icon,
        minContrastRatio: 0.5,
        size: 42,
        aProps: {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        },
      });
    });
  }

  return [<a key="loading">Loading</a>];
};

const slugs = [
  "android",
  "androidstudio",
  "react",
  "typescript",
  "redux",
  "nodedotjs",
  "nodemon",
  "passport",
  "npm",
  "html5",
  "css3",
  "javascript",
  "mongodb",
  "mongoose",
  "python",
  "greensock",
  "springboot",
  "figma",
  "formik",
  "mysql",
  "sass",
  "reactrouter",
  "leetcode",
  "tailwindcss",
  "apachekafka",
  "elasticsearch",
  "bootstrap",
  "axios",
];

const Skills = () => {
  const icons = useIcons(slugs);
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Technical Skills</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <Cloud {...cloudProps}>{icons}</Cloud>
      </div>
    </div>
  );
};

export default Skills;
