"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  isLoading?: boolean;
}

export default function DataTable<T extends { _id: string }>({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  isLoading = false,
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-[#50AEDF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-[#A8B3C7]">
        Nincs adat megjelenítésre
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden lg:block rounded-lg border border-[rgba(255,255,255,0.1)] overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)]">
                {columns.map((column) => (
                  <TableHead key={String(column.key)} className="text-[#A8B3C7]">
                    {column.label}
                  </TableHead>
                ))}
                {(onEdit || onDelete || onView) && (
                  <TableHead className="text-[#A8B3C7] text-right">Műveletek</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <motion.tr
                  key={row._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)]"
                >
                  {columns.map((column) => (
                    <TableCell key={String(column.key)} className="text-[#EAF0FF]">
                      {column.render
                        ? column.render(
                            typeof column.key === "string"
                              ? (row as any)[column.key]
                              : row[column.key],
                            row
                          )
                        : typeof column.key === "string"
                        ? (row as any)[column.key]
                        : String(row[column.key])}
                    </TableCell>
                  ))}
                  {(onEdit || onDelete || onView) && (
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {onView && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onView(row)}
                            className="h-8 w-8 p-0 hover:bg-[rgba(255,255,255,0.1)]"
                          >
                            <Eye className="w-4 h-4 text-[#50AEDF]" />
                          </Button>
                        )}
                        {onEdit && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEdit(row)}
                            className="h-8 w-8 p-0 hover:bg-[rgba(255,255,255,0.1)]"
                          >
                            <Edit className="w-4 h-4 text-[#7C5CFF]" />
                          </Button>
                        )}
                        {onDelete && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDelete(row)}
                            className="h-8 w-8 p-0 hover:bg-[rgba(255,255,255,0.1)]"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  )}
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-3">
        {data.map((row, index) => (
          <motion.div
            key={row._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-lg p-4 space-y-3"
          >
            {columns.map((column) => (
              <div key={String(column.key)} className="flex flex-col gap-1">
                <div className="text-xs text-[#A8B3C7] font-medium">{column.label}</div>
                <div className="text-sm text-[#EAF0FF]">
                  {column.render
                    ? column.render(
                        typeof column.key === "string"
                          ? (row as any)[column.key]
                          : row[column.key],
                        row
                      )
                    : typeof column.key === "string"
                    ? (row as any)[column.key]
                    : String(row[column.key])}
                </div>
              </div>
            ))}
            {(onEdit || onDelete || onView) && (
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-[rgba(255,255,255,0.1)]">
                {onView && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onView(row)}
                    className="h-8 w-8 p-0 hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <Eye className="w-4 h-4 text-[#50AEDF]" />
                  </Button>
                )}
                {onEdit && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(row)}
                    className="h-8 w-8 p-0 hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <Edit className="w-4 h-4 text-[#7C5CFF]" />
                  </Button>
                )}
                {onDelete && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(row)}
                    className="h-8 w-8 p-0 hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}
