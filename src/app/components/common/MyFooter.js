import Link from "next/link";
import React from "react";

const MyFooter = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center bg-white">
      <p className="  p-2">
        developed by{" "}
        <Link href={"http://github.com/anees-r"} target="_blank">
          <span className="text-purple-600">anees-r</span>
        </Link>
      </p>
    </div>
  );
};

export default MyFooter;
