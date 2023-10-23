'use client'

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const IssueStatusFilter = () => {
    const router = useRouter()

  const statutes: { label: string; value?: Status }[] = [
    { label: "All", value: "ALL" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <Select.Root onValueChange={(status) => {
        const query = status ? `?status=${status}` : 'ALL'
        router.push('/issues/list' + query)
    }}>
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
