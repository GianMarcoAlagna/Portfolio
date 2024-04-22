import { Contact } from "../Contact/Contact";
import { Resume } from "../Resume/Resume";

export const Other = () => {
  return (
    <section className="Other Flex-Row-Center">
      <Resume />
      <Contact />
    </section>
  );
}