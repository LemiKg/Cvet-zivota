import Link from "next/link";
import React from "react";
import Title from "../TextCard/Title";

const ResponsiveTextCard = (props) => {
  const { title, id, page } = props;

  return (
    <Link href={`${page}/[id]`} as={`${page}/${id}`}>
      <div className="single-page-text-card">
        <Title text={title} />
      </div>
    </Link>
  );
};

export default React.memo(ResponsiveTextCard);
