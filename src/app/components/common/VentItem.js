import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const VentItem = () => {
  return (
    <>
      <div className="p-3 w-full bg-gray-100 rounded-2xl flex flex-col gap-5">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold">Anees</h1>
            &#x2022;
            <p className="text-xs opacity-[0.5]">14-Jul-2025 (12:30 AM)</p>
          </div>
          <div className="cursor-not-allowed">
            <MoreHorizIcon/>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi minima non animi dignissimos officiis numquam, iure eaque repellat obcaecati sed natus sapiente assumenda enim omnis inventore quibusdam quasi minus.</p>
      </div>
    </>
  );
};

export default VentItem;
