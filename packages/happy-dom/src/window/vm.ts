declare global {
    var Deno: undefined | unknown
}
function isContext(_a: any) {
    return false
}

function createContext(_a: any) {

}

function runInContext(_script: string, _a: any) {

}
export default {
    isContext, createContext, runInContext
}