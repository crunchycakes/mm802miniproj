import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
    const client = new Client({
        user: "dishanburad",
        host: "localhost",
        database: "edmonton_data",
        password: "yourpassword",
        port: 5432,
    });

    await client.connect();
    const result = await client.query("SELECT * FROM salary_ranges LIMIT 20;");
    await client.end();

    return NextResponse.json(result.rows);
}
