import React from "react"
import { GlobalContextProvider } from "./src/context/GlobalContext"
import "./src/styles/global.css"
require("prismjs/themes/prism-tomorrow.css")

// import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
// deckDeckGoHighlightElement();

// move this to css or somewhere
{
  /* <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link> */
}

if (process.env.NODE_ENV === "development") {
  require("./src/styles/dev.css")
}

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
