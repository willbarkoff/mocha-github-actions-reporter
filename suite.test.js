const { describe, it } = require("mocha")

const fail = () => { throw new Error("Task failed successfully") }
const pass = () => { }

describe("Suite 1", () => {
	it("test 1.1p", pass);

	it("test 1.2f", fail)

	describe("Subsuite 1.3", () => {
		it("test 1.3.1f", fail)
		it("test 1.3.2p", pass)

		describe("Subsuite 1.3.3", () => {
			it("test 1.3.3.1f", fail)
			it("test 1.3.3.1p", pass)
		})
	})
})

describe("Suite 2", () => {
	it("test 2.1p", pass)
})