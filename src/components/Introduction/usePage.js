import { useState } from "react";
import { Hero } from "./Hero";
import { Contact } from "./Contact/Contact";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
export const pages = { Hero, Contact, About, Projects };

export const usePage = () => {
  const [activePage, setActivePage] = useState("Hero");
  const setPage = (page) => {
    if (typeof page !== "string" || !(page in pages)) {
      return;
    } else if (activePage === page) {
      setActivePage("Hero");
    } else {
      setActivePage(page);
    }
  };
  return { activePage, setActivePage: setPage };
};
