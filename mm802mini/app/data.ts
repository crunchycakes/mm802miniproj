import sql from './db'

async function testGet() {
    const getter = await sql`
        select * from public.occur1
        limit 10
    `
    return getter
}

