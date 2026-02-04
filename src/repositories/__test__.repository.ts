import db from "../db";

class TestRepository {
    async createNewTest(element: { text: string }) {
        const query = "INSERT INTO test VALUES (DEFAULT, $1)"
        await db.query(query, [element.text])
    }

    async readTest() {
        const query = "SELECT * FROM test"
        const res = await db.query(query)
        return res.rows
    }

    async readTestPerID(id: string) {
        const query = "SELECT * FROM test WHERE id = $1"
        const res = await db.query(query, [id])
        return res.rows
    }
}

export default TestRepository