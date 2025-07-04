import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, type ReactElement } from "react";
import link from "../icons/Link.svg";
import arrowSync from "../icons/Arrow Sync.svg";
import arrowSplit from "../icons/Arrow Split (1).svg";
import shape from "../icons/Shape.svg";
import whiteArrowSplit from "../icons/Arrow Split.svg";
import add from "../icons/Add.svg";
import serialIcon from "../icons/Icon+Title.svg";
import briefcase from "../icons/Briefcase.svg";
import Calendar from "../icons/Calendar.svg";
import person from "../icons/Person.svg";
import globe from "../icons/Globe.svg";
import dropdown from "../icons/Dropdown.svg";
import emoji from "../icons/Emoji.svg";
import circle from "../icons/Chevron Circle.svg";
import rupee from "../icons/Rupee.svg";

type Person = {
  serial: number;
  jobRequest: string;
  submitted: string;
  status: ReactElement;
  submitter: string;
  url: string;
  assigned: string;
  priority: ReactElement;
  dueDate: string;
  estValue: string;
};

const defaultData: Person[] = [
  {
    serial: 1,
    jobRequest: "Launch social media campaign for product XYZ",
    submitted: "15-11-2024",
    status: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 bg-in-progress-bg text-in-progress-text rounded-full text-xs font-medium">
          In-process
        </span>
      </div>
    ),
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 text-medium-text text-xs font-semibold">
          Medium
        </span>
      </div>
    ),
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    serial: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 bg-need-to-start-bg text-need-to-start-text rounded-full text-xs font-medium">
          Need to start
        </span>
      </div>
    ),
    submitter: "Irfan Khan",
    url: "www.irfankhanportfolio.com",
    assigned: "Tejas Pandey",
    priority: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 text-high-text text-xs font-semibold">
          High
        </span>
      </div>
    ),
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    serial: 3,
    jobRequest: "Finalize user testing feedback for app update",
    submitted: "05-12-2024",
    status: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 bg-in-progress-bg text-in-progress-text rounded-full text-xs font-medium">
          In-process
        </span>
      </div>
    ),
    submitter: "Mark Johnson",
    url: "www.markjohnsondesigns.com",
    assigned: "Rachel Lee",
    priority: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 text-medium-text text-xs font-semibold">
          Medium
        </span>
      </div>
    ),
    dueDate: "10-12-2024",
    estValue: "4,750,000",
  },
  {
    serial: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 bg-completed-bg text-completed-text rounded-full text-xs font-medium">
          Complete
        </span>
      </div>
    ),
    submitter: "Emily Green",
    url: "www.emilygreenart.com",
    assigned: "Tom Wright",
    priority: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 text-low-text text-xs font-semibold">
          Low
        </span>
      </div>
    ),
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    serial: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 bg-blocked-bg text-blocked-text rounded-full text-xs font-medium">
          Blocked
        </span>
      </div>
    ),
    submitter: "Jessica Brown",
    url: "www.jessicabrowncreative.com",
    assigned: "Kevin Smith",
    priority: (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 text-low-text text-xs font-semibold">
          Low
        </span>
      </div>
    ),
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("serial", {
    id: "serial-number",
    header: () => {
      return (
        <div className="flex items-center justify-center pl-2 pr-1 ">
          <img src={serialIcon} alt="" width={16} height={20} />
        </div>
      );
    },
    cell: (info) => info.getValue(),
    enableResizing: true,
    size: 32,
  }),

  columnHelper.group({
    id: "financialOverview",
    header: () => {
      return (
        <div className="flex items-center gap-2 p-1">
          <div className="bg-gray-100 flex items-center p-1 gap-1 rounded-sm">
            <img src={link} alt="" width={16} height={16} />
            <span className="text-[12px] font-normal">
              Q3 Financial Overview
            </span>
          </div>
          <div>
            <img src={arrowSync} alt="" width={16} height={16} />
          </div>
        </div>
      );
    },
    columns: [
      columnHelper.accessor("jobRequest", {
        id: "jobRequest",
        header: () => {
          return (
            <div className="flex items-center justify-between pl-2 pr-1 ">
              <div className="flex items-center gap-1">
                <img src={briefcase} alt="" width={16} height={16} />
                <div className="text-[12px] font-semibold">Job Request</div>
              </div>
              <div>
                <img src={dropdown} alt="" width={20} height={20} />
              </div>
            </div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 256,
      }),
      columnHelper.accessor("submitted", {
        id: "submitted",
        header: () => {
          return (
            <div className="flex items-center justify-between pl-2 pr-1">
              <div className="flex items-center gap-1">
                <img src={Calendar} alt="" width={16} height={16} />
                <div className="text-[12px] font-semibold ">Submitted</div>
              </div>
              <div>
                <img src={dropdown} alt="" width={20} height={20} />
              </div>
            </div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
      columnHelper.accessor("status", {
        id: "status",
        header: () => {
          return (
            <div className="flex items-center justify-between pl-2 pr-1">
              <div className="flex items-center gap-1">
                <img src={circle} alt="" width={16} height={16} />
                <div className="text-[12px] font-semibold ">Status</div>
              </div>
              <div>
                <img src={dropdown} alt="" width={20} height={20} />
              </div>
            </div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
      columnHelper.accessor("submitter", {
        id: "submitter",
        header: () => {
          return (
            <div className="flex items-center justify-between pl-2 pr-1">
              <div className="flex items-center gap-1">
                <img src={person} alt="" width={16} height={16} />
                <div className="text-[12px] font-semibold ">Submitter</div>
              </div>
              <div>
                <img src={dropdown} alt="" width={20} height={20} />
              </div>
            </div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  columnHelper.accessor("url", {
    id: "url",
    header: () => {
      return (
        <div className="flex items-center justify-between pl-2 pr-1">
          <div className="flex items-center gap-1">
            <img src={globe} alt="" width={16} height={16} />
            <div className="text-[12px] font-semibold ">URL</div>
          </div>
          <div>
            <img src={dropdown} alt="" width={20} height={20} />
          </div>
        </div>
      );
    },
    cell: (info) => info.getValue(),
    enableResizing: true,
    size: 125,
  }),

  columnHelper.group({
    id: "abcGroup",
    header: () => {
      return (
        <div className="flex items-center justify-center px-4 gap-1">
          <img
            src={arrowSplit}
            alt=""
            width={16}
            height={16}
            className="text-gray-800"
          />
          <div className="text-[14px] font-medium ">ABC</div>
          <img src={shape} alt="" height={16} width={16} className="m-1" />
        </div>
      );
    },
    columns: [
      columnHelper.accessor("assigned", {
        id: "assigned",
        header: () => {
          return (
            <div className="flex items-center  pl-2 pr-1 gap-1">
              <img src={emoji} alt="" width={16} height={16} />
              <div className="text-[12px] font-semibold ">Assigned</div>
            </div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  columnHelper.group({
    id: "answerQuestionGroup",
    header: () => {
      return (
        <div className="flex items-center justify-center gap-1 px-4">
          <img src={whiteArrowSplit} alt="" width={16} height={16} />
          <div className="font-medium text-[14px]">Answer a question</div>
          <img src={shape} alt="" height={16} width={16} className="m-1" />
        </div>
      );
    },
    columns: [
      columnHelper.accessor("priority", {
        id: "priority",
        header: () => {
          return (
            <div className="text-[12px] font-semibold pl-2 pr-1">Priority</div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
      columnHelper.accessor("dueDate", {
        id: "dueDate",
        header: () => {
          return (
            <div className="text-[12px] font-semibold pl-2 pr-1">Due Date</div>
          );
        },
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  columnHelper.group({
    id: "extractGroup",
    header: () => {
      return (
        <div className="flex items-center justify-center gap-1 px-4">
          <img src={whiteArrowSplit} alt="" width={16} height={16} />
          <div className="font-medium text-[14px]">Extract</div>
          <img src={shape} alt="" height={16} width={16} className="m-1" />
        </div>
      );
    },
    columns: [
      columnHelper.accessor("estValue", {
        id: "estValue",
        header: () => {
          return (
            <div className="text-[12px] font-semibold pl-2 pr-1">
              Est. Value
            </div>
          );
        },
        cell: (info) => {
          const value = info.getValue();
          return value ? (
            <div className="flex gap-1 items-center justify-end">
              <span>{value}</span>
              <img src={rupee} alt="rupee" width={7} height={16} />
            </div>
          ) : (
            ""
          );
        },
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  columnHelper.group({
    id: "plusGroup",
    header: () => {
      return (
        <div className="flex items-center justify-center ">
          <img src={add} alt="" width={20} height={20} />
        </div>
      );
    },
    columns: [
      columnHelper.accessor(() => null, {
        id: "plus",
        header: "",
        cell: () => null, // no data
        enableResizing: true,
        size: 125,
      }),
    ],
  }),
];

const createEmptyRow = (serial: number): Person => ({
  serial,
  jobRequest: "",
  submitted: "",
  status: <div></div>,
  submitter: "",
  url: "",
  assigned: "",
  priority: <div></div>,
  dueDate: "",
  estValue: "",
});

// Generate data with empty rows
const generateDataWithEmptyRows = (
  filledData: Person[],
  totalRows: number
): Person[] => {
  const emptyRowsNeeded = totalRows - filledData.length;
  const emptyRows = Array.from({ length: emptyRowsNeeded }, (_, index) =>
    createEmptyRow(filledData.length + index + 1)
  );

  return [...filledData, ...emptyRows];
};

function Table() {
  const [data, _setData] = useState(() =>
    generateDataWithEmptyRows(defaultData, 50)
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    enableColumnResizing: true,
    defaultColumn: {
      size: 32,
      minSize: 32,
      maxSize: 200,
    },
  });

  // Custom background color mapping
  const headerColorMap: Record<string, string> = {
    // Group headers
    "1_financialOverview_jobRequest": "bg-gray-200 text-gray-500",
    "1_abcGroup_assigned": "bg-abc-bg text-abc-text",
    "1_answerQuestionGroup_priority": "bg-ans-bg text-ans-text",
    "1_extractGroup_estValue": "bg-extract-bg text-extract-text",
    "1_plusGroup_plus": "bg-gray-100 text-gray-800",

    // Sub-column headers
    "serial-number": "bg-gray-100 text-gray-text",
    jobRequest: "bg-gray-100 text-gray-text",
    submitted: "bg-gray-100 text-gray-text",
    status: "bg-gray-100 text-gray-text",
    submitter: "bg-gray-100 text-gray-text",
    url: "bg-gray-100 text-gray-text",
    assigned: "bg-assigned-bg text-assigned-text",
    priority: "bg-priority-bg text-priority-text",
    dueDate: "bg-dueDate-bg text-dueDate-text",
    estValue: "bg-estValue-bg text-estValue-text",
  };

  const getHeaderColor = (headerId: string): string => {
    return headerColorMap[headerId] || "bg-gray-50 text-gray-700";
  };

  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full text-sm  border-collapse"
        style={{
          tableLayout: "fixed",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const baseStyles =
                  "border h-[32px] text-left border-border-gray";
                const customColor = getHeaderColor(header.id);

                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`${baseStyles} ${customColor}`}
                    style={{
                      width: `${header.getSize()}px`,
                      maxWidth: `${header.getSize()}px`,
                      minWidth: `${header.getSize()}px`,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      className="overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`border h-[32px] border-border-gray text-[12px]  hover:shadow-[inset_0_0_0_1px_#6C8B70] hover:drop-shadow-green-200 hover:drop-shadow-xs ${
                    cell.column.id === "serial-number"
                      ? "text-center"
                      : cell.column.id === "priority" ||
                        cell.column.id === "dueDate" ||
                        cell.column.id === "estValue" ||
                        cell.column.id === "submitted"
                      ? "text-right px-2"
                      : "text-left px-2"
                  }`}
                  style={{
                    width: `${cell.column.getSize()}px`,
                    maxWidth: `${cell.column.getSize()}px`,
                    minWidth: `${cell.column.getSize()}px`,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
