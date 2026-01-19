"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteTask(id: number) {
  await prisma.tasks.delete({
    where: {id:id},
  });
  console.log("Delete Button Called : "+id);
  revalidatePath("/tasks");
  redirect("/tasks");
}
