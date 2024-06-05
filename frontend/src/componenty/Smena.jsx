function Smena(props) {
  return (
    <div className="grid grid-cols-3 gap-6 p-4 m-4 bg-gray-200 rounded-lg shadow-lg">
      <div className="col-span-2 font-semibold text-red-700">
        {props.timeWorked}
      </div>
      <div className="col-span-1 font-bold text-zelena">
        {props.moneyEarned} Kč
      </div>
      <div className="flex items-center">
        <svg
          className="w-4 h-4 mr-2 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <div className="text-xs">{props.date}</div>
      </div>
      <div className="flex items-center">
        <svg
          class="h-4 w-4 mr-2 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />{" "}
          <polyline points="10 17 15 12 10 7" />{" "}
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
        <span className="text-xs">{props.startTime}</span>
      </div>
      <div className="flex items-center">
        <svg
          class="h-4 w-4 mr-1 text-black"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
          <path d="M20 12h-13l3 -3m0 6l-3 -3" />
        </svg>
        <span className="text-xs">{props.endTime}</span>
      </div>
    </div>
  );
}

export default Smena;
