import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useReducer, useState, type ReactElement } from "react";
import link from "../icons/Link.svg";
import arrowSync from "../icons/Arrow Sync.svg";
import arrowSplit from "../icons/Arrow Split (1).svg";
import shape from "../icons/Shape.svg";
import whiteArrowSplit from "../icons/Arrow Split.svg";
import add from "../icons/Add.svg";

type Person = {
  serial: number;
  jobRequest: string;
  submitted: string;
  status: ReactElement;
  submitter: number;
  url: string;
  assigned: number;
  priority: ReactElement;
  dueDate: number;
  estValue: number;
};

const defaultData: Person[] = [
  {
    serial: 1,
    jobRequest: "Website Redesign",
    submitted: "2024-01-15",
    status: (
      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
        Active
      </span>
    ),
    submitter: 1001,
    url: "https://project1.com",
    assigned: 2001,
    priority: (
      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
        High
      </span>
    ),
    dueDate: 20240215,
    estValue: 15000,
  },
  {
    serial: 2,
    jobRequest: "Mobile App Development",
    submitted: "2024-01-20",
    status: (
      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
        Pending
      </span>
    ),
    submitter: 1002,
    url: "https://project2.com",
    assigned: 2002,
    priority: (
      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
        Medium
      </span>
    ),
    dueDate: 20240301,
    estValue: 25000,
  },
  {
    serial: 3,
    jobRequest: "Database Migration",
    submitted: "2024-01-22",
    status: (
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
        In Progress
      </span>
    ),
    submitter: 1003,
    url: "https://project3.com",
    assigned: 2003,
    priority: (
      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
        Low
      </span>
    ),
    dueDate: 20240310,
    estValue: 8000,
  },
  {
    serial: 4,
    jobRequest: "API Integration",
    submitted: "2024-01-25",
    status: (
      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
        Review
      </span>
    ),
    submitter: 1004,
    url: "https://project4.com",
    assigned: 2004,
    priority: (
      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
        High
      </span>
    ),
    dueDate: 20240220,
    estValue: 12000,
  },
  {
    serial: 5,
    jobRequest: "Security Audit",
    submitted: "2024-01-28",
    status: (
      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
        Completed
      </span>
    ),
    submitter: 1005,
    url: "https://project5.com",
    assigned: 2005,
    priority: (
      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
        Medium
      </span>
    ),
    dueDate: 20240305,
    estValue: 18000,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  // Standalone: URL column with empty header
  columnHelper.accessor("serial", {
    id: "serial-number",
    header: () => "#",
    cell: (info) => info.getValue(),
    enableResizing: true,
  }),
  // Group 1: Q3 Financial Overview
  columnHelper.group({
    id: "financialOverview",
    header: () => {
      return (<div className="flex items-center gap-2 p-1">
        <div className="bg-gray-100 flex items-center p-1 gap-1 rounded-sm">
          <img src={link} alt="" width={16} height={16} />
          <span className="text-[12px] font-normal">Q3 Financial Overview</span>
        </div>
        <div>
          <img src={arrowSync} alt="" width={16} height={16} />
        </div>
      </div>)
    },
    columns: [
      columnHelper.accessor("jobRequest", {
        id: "jobRequest",
        header: "Job Request",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 256,
      }),
      columnHelper.accessor("submitted", {
        id: "submitted",
        header: "Submitted",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
      columnHelper.accessor("status", {
        id: "status",
        header: "Status",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
      columnHelper.accessor("submitter", {
        id: "submitter",
        header: "Submitter",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  // Standalone: URL column with empty header
  columnHelper.accessor("url", {
    id: "url",
    header: () => "URL",
    cell: (info) => info.getValue(),
    enableResizing: true,
    size: 125,
  }),

  // Group 2: ABC
  columnHelper.group({
    id: "abcGroup",
    header: () => {
      return (
        <div className="flex items-center justify-center px-4 gap-1">
          <img src={arrowSplit} alt="" width={16} height={16} className="text-gray-800"/>
          <div className="text-[14px] font-medium ">ABC</div>
          <img src={shape} alt="" height={16} width={16} />
        </div>
      )
    },
    columns: [
      columnHelper.accessor("assigned", {
        id: "assigned",
        header: "Assigned",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  // Group 3: Answer a question
  columnHelper.group({
    id: "answerQuestionGroup",
     header: () => {
          return (
            <div className="flex items-center justify-center gap-1 px-4"> 
              <img src={whiteArrowSplit} alt="" width={16} height={16} />
              <div className="font-medium text-[14px]">Answer a question</div>
              <img src={shape} alt="" height={16} width={16} />
            </div>
          )
        },
    columns: [
      columnHelper.accessor("priority", {
        id: "priority",
        header: "Priority",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
      columnHelper.accessor("dueDate", {
        id: "dueDate",
        header: "Due Date",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  // Group 4: Extract
  columnHelper.group({
    id: "extractGroup",
     header: () => {
          return (
            <div className="flex items-center justify-center gap-1 px-4"> 
              <img src={whiteArrowSplit} alt="" width={16} height={16} />
              <div className="font-medium text-[14px]">Extract</div>
              <img src={shape} alt="" height={16} width={16} />
            </div>
          )
        },
    columns: [
      columnHelper.accessor("estValue", {
        id: "estValue",
        header: "Est. Value",
        cell: (info) => info.getValue(),
        enableResizing: true,
        size: 125,
      }),
    ],
  }),

  // Simulated "+" Group using standalone dummy column
  // Group 5: "+" button
  columnHelper.group({
    id: "plusGroup",
    header: () => {
      return (
        <div className="flex items-center justify-center ">
          <img src={add} alt="" width={20} height={20} />
        </div>
      )
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

function Table() {
  const [data, _setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

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
    "1_abcGroup_assigned": "bg-abc-green text-abc-text",
    "1_answerQuestionGroup_priority": "bg-ans-bg text-ans-text",
    "1_extractGroup_estValue": "bg-extract-bg text-extract-text",
    "1_plusGroup_plus": "bg-gray-100 text-gray-800",

    // Sub-column headers
    "serial-number": "bg-slate-100 text-slate-700",
    jobRequest: "bg-yellow-100 text-yellow-800",
    submitted: "bg-orange-100 text-orange-800",
    status: "bg-red-100 text-red-800",
    submitter: "bg-indigo-100 text-indigo-800",
    url: "bg-teal-100 text-teal-800",
    assigned: "bg-emerald-100 text-emerald-800",
    priority: "bg-violet-100 text-violet-800",
    dueDate: "bg-rose-100 text-rose-800",
    estValue: "bg-cyan-100 text-cyan-800",
  };

  const getHeaderColor = (headerId: string): string => {
    // Debug: log the header ID to see what React Table is generating
    console.log("Header ID:", headerId);
    return headerColorMap[headerId] || "bg-gray-50 text-gray-700";
  };

  return (
    <div className="">
      <table className="min-w-full text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const baseStyles =
                  "border h-[32px] text-left border-gray-200";
                const customColor = getHeaderColor(header.id);

                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`${baseStyles} ${customColor} `}
                    style={{ width: `${header.getSize()}px` }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
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
                  className="border px-2 h-[32px] border-gray-200 text-[12px] overflow-ellipsis"
                  style={{ width: `${cell.column.getSize()}px` }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
}

export default Table;
