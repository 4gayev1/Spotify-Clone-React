import { Menu } from "@headlessui/react";
import { Icon } from "icons";

const Auth = () => {
  const user = {
    name: "Vahid Aghayev",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  };

  return (
    <Menu as="nav" className={"relative z-10"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2  ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-0.5 mr-1"}
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={`${open} && 'rotate-180'`}>
              <Icon name="down" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
