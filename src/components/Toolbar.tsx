import ArrowAutofit from "../icons/Arrow Autofit.svg";
import ChevronDouble from "../icons/Chevron Double.svg";
import ArrowSort from "../icons/Arrow Sort.svg";
import Eye from "../icons/Eye.svg";
import Filter from "../icons/Filter.svg";
import ArrowDownload from "../icons/Arrow Download.svg";
import ArrowUpload from "../icons/Arrow Upload.svg";
import Share from "../icons/Share.svg";
import ArrowSplit from "../icons/Arrow Split.svg";

const Toolbar = () => {
  return (
    <>
      <div className="flex items-center justify-between h-[48px] w-full px-2 py-1.5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <button className="text-sm p-2 flex place-items-end gap-1 cursor-pointer">
              Tool bar
              <img
                src={ChevronDouble}
                alt=""
                width={16}
                height={16}
                className="inline-block"
              />
            </button>
          </div>
          <div className="w-[1px] h-[24px] bg-gray-200"></div>
          <div className="flex items-center gap-1 ">
            <button className="flex items-center py-2 pl-2 pr-3 gap-1 text-sm cursor-pointer">
              <img src={Eye} alt="" height={20} width={20} />
              Hide fields
            </button>
            <button className="flex items-center py-2 pl-2 pr-3 gap-1 text-sm cursor-pointer">
              <img src={ArrowSort} alt="" height={20} width={20} />
              Sort
            </button>
            <button className="flex items-center py-2 pl-2 pr-3 gap-1 text-sm cursor-pointer">
              <img src={Filter} alt="" height={20} width={20} />
              Filter
            </button>
            <button className="flex items-center py-2 pl-2 pr-3 gap-1 text-sm cursor-pointer">
              <img src={ArrowAutofit} alt="" height={20} width={20} />
              Cell view
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center py-[7px] pl-2 pr-3 border border-gray-200 rounded-md text-sm gap-1 box-border cursor-pointer">
            <img src={ArrowDownload} alt="" height={20} width={20} />
            Import
          </button>
          <button className="flex items-center py-[7px] pl-2 pr-3 border border-gray-200 rounded-md text-sm gap-1 box-border cursor-pointer">
            <img src={ArrowUpload} alt="" height={20} width={20} />
            Export
          </button>
          <button className="flex items-center py-[7px] pl-2 pr-3 border border-gray-200 rounded-md text-sm gap-1 box-border cursor-pointer">
            <img src={Share} alt="" height={20} width={20} />
            Share
          </button>
          <button className="flex items-center py-2 px-6 bg-green-800 text-white rounded-md text-sm gap-1 font-medium box-border cursor-pointer">
            <img src={ArrowSplit} alt="" height={20} width={20} />
            New Action
          </button>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
