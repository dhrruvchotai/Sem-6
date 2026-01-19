import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

async function TaskDetailPage({ params }: { params: Promise<{ id: String }> }) {
  const { id } = await params;
  const task = await prisma.tasks.findUnique({
    where:{id:Number(id)},
    include:{
        users:true,
    }
  })
  return(
    <>
        <div className="relative bg-blue-500  max-w-xs w-full p-6 border mt-1.5 ml-6 border-black border-l-4 rounded-3xl rounded-base shadow-xs">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="absolute top-2 end-2 text-body hover:text-heading bg-neutral-primary-soft box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="3"
              d="M6 12h.01m6 0h.01m5.99 0h.01"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-36 block hidden"
        >
          <ul
            className="p-2 text-sm text-body font-medium"
            aria-labelledby="dropdownButton"
          >
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded-md"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 mb-6 rounded-full"
            src="https://imgs.search.brave.com/k6jZGBbf4OJlc1wsu6Ej3Gi7We5JTYE4iysIMIAlISs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MjI2NzEwMy92ZWN0/b3IvdG8tZG8tbGlz/dC1pbi1hLXBlcnNv/bnMtaGFuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NHMw/aTZhVDNIcVQwYjAz/aENHQkFFcEtwNjRn/Q1VwWlBwSE4zNDAx/eGlhcz0"
            // alt={task?.id.toString()}
          />
          <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
            {task?.title}
          </h5>
          <span className="text-sm text-body">{task?.description}</span>
          <span className="text-sm text-body text-green-200 m-2 p-2 border rounded-2xl">{task?.status}</span>
          <div className="flex flex-row justify-around">
            <span>Assigned To : </span>
            <span className="ml-1"> {task?.users.name}</span>
          </div>
          <div className="flex mt-4 md:mt-6 gap-4">
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskDetailPage;
