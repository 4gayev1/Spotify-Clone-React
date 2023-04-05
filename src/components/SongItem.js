import { Icon } from "icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setCurrent } from "stores/player";

const SongItem = ({ item, more }) => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);

  function imageStyle(item) {
    switch (item.type) {
      case "artist":
        return "rounded-full";
        break;
      case "podcast":
        return "rounded-lg";
        break;
      default:
        return "rounded";
        break;
    }
  }

  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };

  return (
    <NavLink
      key={item.id}
      to="/"
      className={"bg-footer p-4 rounded hover:bg-active group"}
    >
      <div className="pt-[100%] relative ">
        <img
          src={item.image}
          className={`absolute inset-0 object-cover w-full h-full  ${imageStyle(
            item
          )}`}
          alt="music"
        />

        <button
          onClick={updateCurrent}
          className="w-10 h-10 rounded-full bg-space bg-primary absolute bottom-2 right-2  items-center justify-center hidden group-hover:flex"
        >
          <Icon name={current?.id === item.id ? "pause" : "play"} size={16} />
        </button>
      </div>

      <li  key={item.id} to="/alma">
        <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold hover:underline">
          {item.title}
        </h6>
      </li>

      <p className="text-link text-xs mt-2">{item.description}</p>
    </NavLink>
  );
};

export default SongItem;
