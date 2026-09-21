import React from "react";
import { Tabs } from "antd";

export const ProgramTabs = ({ activeTab, setActiveTab }) => {

  const items = [
    { key: "program", label: "Programs" },
    { key: "application", label: "Applications" },
    { key: "agency", label: "Authorized Agency" },
    { key: "mga", label: "Authorized MGA" },
    { key: "commission", label: "Commissions" },
    { key: "template", label: "Proposal Template" },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      items={items}
      onChange={(key) => setActiveTab(key)}
    />
  );
};