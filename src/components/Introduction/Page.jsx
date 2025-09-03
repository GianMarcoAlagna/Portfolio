import { useEffect, useRef, useState } from "react";
import { pages } from "./usePage";

export const Page = ({ page }) => {
  const Component = pages[page];
  return Component ? <Component /> : null;
};

/**
 * All pages will be passed a 'isActive' parameter
 * Then all pages within the list will subsequently be rendered from the array.
 *
 * It is up to the user to manage the visibility of the pages through CSS or other means
 * through the use of this parameter.
 */
export const AnimatedPages = ({ page = "" }) => {
  const [animatedPage, setAnimatedPage] = useState(null);
  const currentPage = useRef(page);

  useEffect(() => {
    //* check will only fail when the user has actuall initiated a page change
    if (!currentPage.current || currentPage.current === page) return; //* if current page matches the actual page variable, we shouldn't do anything
    setAnimatedPage(null); // If an animation was already running, cancel it immediately

    setAnimatedPage(currentPage.current); // store old page variable value
    currentPage.current = page; // match our new page
  }, [page]);

  function handleAnimationEnd(evt) {
    if (evt.target !== evt.currentTarget) return;
    if (evt.animationName !== "up-out") return;

    // Exit animation done, hide it
    setAnimatedPage(null);
  }

  return (
    <>
      {Object.entries(pages).map(([pg, Component]) => {
        const isActive = pg === page;
        const isAnimating = pg === animatedPage;

        const classes = `info-box ${
          isActive ? "active" : isAnimating ? "inactive" : "hidden"
        }`;

        return (
          <div
            key={pg}
            data-page={pg}
            className={classes}
            onAnimationEnd={handleAnimationEnd}
          >
            <Component isActive={isActive} />
          </div>
        );
      })}
    </>
  );
};
