"use server";

import { prisma } from "@/lib/prisma";
import prismaConfig from "@/prisma.config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { use } from "react";

export default async function addUser(formData:FormData) {
    const username = formData.get("UserName")?.toString();
    const email = formData.get("Email")?.toString();
    const age = formData.get("Age")?.toString();

    if (!username || !email || !age) {
    throw new Error("Missing required fields");
  }

    const user = await prisma.users.create({
        data:{
            name:username,
            email:email,
            age:Number(age)
        }
    });
  
  revalidatePath("/users");
  redirect("/users");
}
