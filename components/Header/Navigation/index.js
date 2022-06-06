import React from "react";
import { navItems } from "../../mocks/navItems";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = (props) => {
  const { toggleNav } = props;
  const router = useRouter();
  const renderMethod = () => {
    return navItems?.map((el, i) => (
      <Link
        className={router.pathname == el?.path ? "active" : ""}
        key={i}
        href={el?.path}
      >
        <a
          href="#"
          className={`${router.pathname === el?.path ? "active" : ""} nav-item`}
          onClick={toggleNav}
        >
          {el?.name}
        </a>
      </Link>
    ));
  };

  return <nav className="navigation">{renderMethod()}</nav>;
};

export default React.memo(Navigation);
