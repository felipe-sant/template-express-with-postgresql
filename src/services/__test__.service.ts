import TestRepository from "../repositories/__test__.repository"

class TestService {
    private testRepository = new TestRepository()

    async create(body: { text: string}) {
        await this.testRepository.createNewTest(body)
        
        return {
            message: "Resource created successfully!"
        }
    }

    async read() {
        const res = await this.testRepository.readTest()
        return {
            message: "Retrieved resources successfully!",
            test: res
        }
    }

    async readOne(id: string) {
        const res = await this.testRepository.readTestPerID(id)
        return {
            message: `Retrieved resource with ID ${id} successfully!`,
            test: res
        }
    }

    update(id: string, body: unknown, query?: unknown) {
        return {
            message: `Updated resource with ID ${id} successfully!`,
            query: query,
            body: body
        }
    }

    patch(id: string, body: unknown, query?: unknown) {
        return {
            message: `Patched resource with ID ${id} successfully!`,
            query: query,
            body: body
        }
    }

    delete(id: string, query?: unknown) {
        return {
            message: `Deleted resource with ID ${id} successfully!`,
            query: query
        }
    }

    public __test__() {
        return true
    }
}

export default TestService