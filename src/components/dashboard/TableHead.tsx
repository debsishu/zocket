const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <p className="font-medium text-sm rounded-l-lg px-4 py-2 bg-background-gray border-y border-l border-borders-grayBright text-black text-opacity-50">
            <input
              type="checkbox"
              value=""
              className="w-3.5 h-3.5 text-accent bg-gray-100 border-borders-grayBright rounded"
            />
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            On/Off
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Campaign
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Date Range
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Clicks
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Budget
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Location
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Platform
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 bg-background-gray border-y border-borders-grayBright text-black text-opacity-50">
            Status
          </p>
        </th>
        <th>
          <p className="font-medium text-sm px-4 py-2 rounded-r-lg bg-background-gray border-y border-r border-borders-grayBright text-black text-opacity-50">
            Actions
          </p>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
