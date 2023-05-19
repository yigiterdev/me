import {Source_Sans_Pro} from "next/font/google";

const sourceCodePro400 = Source_Sans_Pro({weight: "400", subsets: ["latin"]});
const sourceCodePro700 = Source_Sans_Pro({
  weight: "700",
  variable: "--code-pro-bold",
  subsets: ["latin"]
});

export {sourceCodePro400, sourceCodePro700};
