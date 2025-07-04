import panel from "../icons/Panel.svg";
import Chevron from "../icons/Chevron.svg";
import Shape from "../icons/Shape.svg";
import Search2 from "../icons/Search2.svg";
import notification from "../icons/Notification_bell.svg";
import profile from "../icons/Ellipse 1.svg";
const Topbar = () => {
  return (
      <div className="">
          <div className="h-[48px] border-b flex items-center justify-between border-border-gray py-2 px-4">
        <div className=" flex items-center  gap-4 flex-shrink-0">
          <button className="flex items-center cursor-pointer">
            <img src={panel} alt="" width={24} height={24} />
          </button>
          <div className="flex items-center gap-1">
            <button className=" flex items-center gap-1 text-[14px] cursor-pointer font-medium text-topbar-gray">
              Workspace
              <img
                src={Chevron}
                alt="chevron"
                className="inline-block "
                width={12}
                height={12}
              />
            </button>

            <button className="flex items-center gap-1 text-[14px] cursor-pointer font-medium text-topbar-gray">
              Folder 2
              <img
                src={Chevron}
                alt="chevron"
                className="inline-block"
                width={12}
                height={12}
              />
            </button>

            <button className=" flex items-center gap-2 text-[14px] cursor-pointer font-medium">
              Spreadsheet 3
              <img
                src={Shape}
                alt="arrow"
                className="inline-block"
                width={12}
                height={12}
              />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <div className="flex items-center gap-2 bg-gray-100 h-[35px] w-[165px] py-3 pl-3 rounded-md">
            <img
              src={Search2}
              alt="search"
              width={16}
              height={16}
              className="text-gray-500"
            />
            <input
              type="text"
              placeholder="Search within sheet"
              className="bg-transparent outline-none w-full text-[12px] placeholder:text-gray-500 box-border "
            />
          </div>
          <div>
            <img src={notification} alt="notification" width={40} height={40} />
          </div>
          <div className="flex items-center ">
            <div className="py-1.5 pl-2 pr-3 flex items-center gap-2">
              <div className="flex items-center ">
                <img src={profile} alt="profile" width={28} height={28} />
              </div>
              <div className="flex flex-col">
                <div className="text-[12px] leading-2">John Doe</div>
                <div className="text-[10px] text-gray-400">john.doe...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )

}

export default Topbar;
