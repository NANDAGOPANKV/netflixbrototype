import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full absolute flex items-center justify-between px-3 py-2 min-w-[340px]">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">
        Netflix
      </h1>
      <div>
        <h1 className="text-white text-3xl font-semibold">User</h1>
      </div>
    </div>
  );
};
