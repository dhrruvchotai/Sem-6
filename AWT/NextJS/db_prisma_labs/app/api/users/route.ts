import pool from "@/lib/db";

export default async function GET() {
  try {
    const result = await pool.query("SELECT * FROM users");
    return Response.json(result.rows);
  } catch (error: any) {
    console.error("API ERROR:", error);
    return Response.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
