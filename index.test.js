const supertest = require("supertest")
// const db = require("./data/config")
const server = require("./index")

// beforeEach(async () => {
// 	await db.seed.run()
// })

// afterAll(async () => {
// 	await db.destroy()
// })

test("welcome route", async () => {
	const res = await supertest(server).get("/")
	expect(res.statusCode).toBe(200)
	expect(res.type).toBe("application/json")
	expect(res.body.message).toBe("Welcome to our API")
	expect(res.body.message).toHaveLength(18)
	expect(res.body.message).toMatch(/welcome/i)
})