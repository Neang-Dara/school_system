"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({ table, type, data, id }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const size = type === "plus" ? "w-8 h-8" : "w-7 h-7";

  const bgColor =
    type === "plus"
      ? "bg-yellow-200"
      : type === "edit"
      ? "bg-yellow-400"
      : type === "delete"
      ? "bg-red-500"
      : "bg-gray-200";

  if (!mounted) return null; // for Next.js portal

  const renderForm = () => {
    if (type === "delete" && id) {
      return (
        <form className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this <strong>{table}</strong>?
          </span>
          <div className="flex justify-center gap-2">
            <button type="submit" className="px-4 py-2 rounded-md bg-red-500 text-white">
              Delete
            </button>
          </div>
        </form>
      );
    } else if (type === "plus") {
      return (
        <TeacherForm type="plus"/>
      );
    } else if (type === "edit" && id) {
      return (
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-center font-semibold text-lg">Edit {table}</h2>
          <input
            type="text"
            placeholder={`Update ${table} name`}
            className="border p-2 rounded-md w-full"
            defaultValue={data?.name || ""}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-md bg-sky-400 text-white">Update</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/icons/${type}.png`} alt={type} width={16} height={16} />
      </button>

      {/* Portal Modal */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/40 "
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-white p-6 rounded-md relative w-[90%] md:w-[70%] lg:w-[50%] 2xl:w-[40%] shadow-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Close button */}
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Image src="/icons/close.png" alt="Close" width={25} height={25} />
              </div>

              {/* Form content */}
              {renderForm()}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default FormModal;
