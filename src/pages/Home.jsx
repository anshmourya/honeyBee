import React, { useState } from "react";
import Data from "../data.json";

const Home = () => {
  const [filterOption, setFilterOption] = useState("");

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  // Function to filter and sort the data based on selected options
  const filteredData = () => {
    if (filterOption === "asc") {
      // Sort in ascending order based on name
      return Data.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (filterOption === "dsc") {
      // Sort in descending order based on name
      return Data.sort((a, b) => b.Name.localeCompare(a.Name));
    } else if (
      filterOption === "Category 1" ||
      filterOption === "Category 2" ||
      filterOption === "Category 3"
    ) {
      // Filter based on selected category
      return Data.filter((item) => item.Category === filterOption);
    } else {
      // Return all data if no filter option is selected
      return Data;
    }
  };

  return (
    <>
      {/* Dropdown to select filter options */}
      <select
        onChange={handleFilterChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      >
        <option value="">All</option>
        <optgroup label="Category">
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </optgroup>
        <optgroup label="Name wise">
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </optgroup>
      </select>

      <div className="container m-auto">
        {/* Table to display the filtered data */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* Table header */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email id</th>
              <th className="px-6 py-3">Mobile no.</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Category</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows based on filtered data */}
            {filteredData().map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{item.Name}</td>
                  <td className="px-6 py-4">{item["Email id"]}</td>
                  <td className="px-6 py-4">{item["Mobile no"]}</td>
                  <td className="px-6 py-4">{item.City}</td>
                  <td className="px-6 py-4">{item.Category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
