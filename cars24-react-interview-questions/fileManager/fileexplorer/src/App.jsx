import React, { useState } from "react";
import "./styles.css";

const explorerData = {
  name: "Projects",
  isFolder: true,
  items: [
    {
      name: "Documents",
      isFolder: true,
      items: [
        {
          name: "Reports",
          isFolder: true,
          items: [
            {
              name: "Q1_Report.docx",
              isFolder: false,
            },
            {
              name: "Q2_Report.docx",
              isFolder: false,
            },
          ],
        },
        {
          name: "Invoices",
          isFolder: true,
          items: [
            {
              name: "Invoice_2023_001.pdf",
              isFolder: false,
            },
            {
              name: "Invoice_2023_002.pdf",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "Projects",
      isFolder: true,
      items: [
        {
          name: "ProjectA",
          isFolder: true,
          items: [
            {
              name: "src",
              isFolder: true,
              items: [
                {
                  name: "MainComponent.js",
                  isFolder: false,
                },
                {
                  name: "HelperFunctions.js",
                  isFolder: false,
                },
              ],
            },
            {
              name: "README.md",
              isFolder: false,
            },
          ],
        },
        {
          name: "ProjectB",
          isFolder: true,
          items: [
            {
              name: "src",
              isFolder: true,
              items: [
                {
                  name: "App.js",
                  isFolder: false,
                },
                {
                  name: "styles.css",
                  isFolder: false,
                },
              ],
            },
            {
              name: "package.json",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

const Explorer = ({ explorerDataCurrent }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="explorer-item">
      {explorerDataCurrent.isFolder ? (
        <>
          <span
            className="folder"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {explorerDataCurrent.name} ⬇
          </span>

          {!isCollapsed && (
            <div className="folder-content">
              {explorerDataCurrent.items.map((explorerData, index) => (
                <Explorer key={index} explorerDataCurrent={explorerData} />
              ))}
            </div>
          )}
        </>
      ) : (
        <span className="file">{explorerDataCurrent.name}</span>
      )}
    </div>
  );
};

const App = () => (
  <div className="app">
    <h1>File Explorer</h1>
    <Explorer explorerDataCurrent={explorerData} />
  </div>
);

export default App;
