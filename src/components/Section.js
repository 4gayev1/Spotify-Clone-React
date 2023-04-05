import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";

const Section = ({ title, more = false, items }) => {
  return (
    <section className="pb-6">
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white tesx-semibold ">{title}</h3>
        {more && (
          <NavLink
            to={more}
            className={
              "text-sm font-semibold uppercase text-link hover:underline"
            }
          >
            Show all
          </NavLink>
        )}
      </header>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 ">
        {items.map((item) => {
          return <SongItem item={item} more={false} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Section;
