import panel from "../icons/Panel.svg";
import Chevron from "../icons/Chevron.svg";
import Shape from "../icons/Shape.svg";
import Search2 from "../icons/Search2.svg";
import notification from "../icons/Notification_bell.svg";
import profile from "../icons/Ellipse 1.svg";
const Topbar = () => {
  return (
    <>
      <div className="w-full h-[48px] border flex items-center justify-between border-gray-200 py-2 px-4">
        <div className=" flex items-center  gap-4">
          <div className="flex items-center gap-2">
            <img src={panel} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center ">
            <div className="">
              <span className="mr-1 text-[14px]">Workspace</span>
              <img
                src={Chevron}
                alt="chevron"
                className="inline-block"
                width={12}
                height={12}
              />
            </div>
            <div>
              <span className="mr-1 ml-1 text-[14px]">Folder 2</span>
              <img
                src={Chevron}
                alt="chevron"
                className="inline-block"
                width={12}
                height={12}
              />
            </div>
            <div>
              <span className="mr-2 ml-1 text-[14px]">Spreadsheet 3</span>
              <img
                src={Shape}
                alt="arrow"
                className="inline-block"
                width={12}
                height={12}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="flex items-center gap-2 bg-gray-200 h-[35px] w-[165px] py-3 pl-3 rounded-md">
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
          <div >
            <img src={notification} alt="notification" width={40} height={40} />
          </div>
          <div className="flex items-center ">
            <div className="py-1.5 pl-2 pr-3 flex items-center gap-2">
              <div className="flex items-center ">
                <img src={profile} alt="profile" width={28} height={28} />
              </div>
              <div className="flex flex-col">
                <div className="text-[12px] leading-2">John Doe</div>
                <div className="text-[10px]">john.doe...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
