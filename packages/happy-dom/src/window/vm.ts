import type { Context, RunningScriptOptions, CreateContextOptions, } from "node:vm";
import type NodeVM from "node:vm"
declare global {
	var Deno: undefined | unknown
}


let nodeVm: typeof NodeVM = null

async function init() {
	if (typeof Deno === "undefined") {
		nodeVm = await import("node:vm")
	}
}
init()

function isContext(sandbox: Context): boolean {
	if (nodeVm) {
		return nodeVm.isContext(sandbox)
	} else
		return true
}

function createContext(sandbox?: Context, options?: CreateContextOptions): Context {
	if (nodeVm) {
		return nodeVm.createContext(sandbox, options)
	}
	let newContext = sandbox
	newContext._____isContext = true
	return newContext
}

function runInContext(code: string, contextifiedObject: Context, options?: RunningScriptOptions | string): any {
	if (nodeVm) {
		return nodeVm.runInContext(code, contextifiedObject, options)
	}
	return eval(code)
}

export default {
	isContext, createContext, runInContext
} 