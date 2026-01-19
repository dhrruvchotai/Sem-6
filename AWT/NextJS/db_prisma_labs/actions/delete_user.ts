"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function deleteUser(id: number) {
  console.log(`Id = ${id}`);
  await prisma.users.delete({
    where: {id:id},
  });
  console.log("Delete Button Called : "+id);
  revalidatePath("/users");
  redirect("/users");
}
