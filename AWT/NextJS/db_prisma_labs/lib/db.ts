import {Pool} from "pg";

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    // host:process.env.DB_HOST,
    // user:process.env.USER,
    // password:process.env.DB_PASSWORD,
    // database:process.env.DB_NAME,
    // port:Number(process.env.PORT),
})

export default pool;