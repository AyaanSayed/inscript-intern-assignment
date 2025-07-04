import plus from "../icons/plus.svg";

const BottomBar = () => {
  return (
    <div className="bg-white border-t border-border-gray fixed bottom-0 left-0 right-0 h-[48px] w-full pt-1 pl-9 pr-4 flex items-center z-10 justify-start">
      <div className="flex items-center ">
        <button
          className="py-2.5 px-4 border-all-orders-border border-t-2 font-semibold bg-all-orders-bg text-all-orders-text text-[16px] cursor-pointer"
          onClick={() => {
            console.log("All Orders button clicked");
          }}
        >
          All Orders
        </button>
        <button
          className="py-2.5 px-4 font-medium text-gray-text text-[16px] cursor-pointer"
          onClick={() => {
            console.log("Pending button clicked");
          }}
        >
          Pending
        </button>
        <button
          className="py-2.5 px-4 font-medium text-gray-text text-[16px] cursor-pointer"
          onClick={() => {
            console.log("Reviewed button clicked");
          }}
        >
          Reviewed
        </button>
        <button
          className="py-2.5 px-4 font-medium text-gray-text text-[16px] cursor-pointer"
          onClick={() => {
            console.log("Arrived button clicked");
          }}
        >
          Arrived
        </button>
        <button className="px-2 py-3" onClick={() => {
          console.log("Add new order button clicked");
        }}>
          <img src={plus} alt="add" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
