'use client'

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const IssueStatusFilter = () => {
  const statutes: { label: string; value?: Status }[] = [
    { label: "All", value: "ALL" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statutes.map(status => (
            <Select.Item key={status.value} value={status.value || "ALL"}>{status.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
