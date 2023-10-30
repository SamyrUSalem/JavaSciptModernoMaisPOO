function group() {
    console.log('Export nomeado não-inline (agrupado)')
}

function a() { }
function b() { }
function c() { }
function d() { }

function exportDefault() {
    console.log('Export default não-inline')
}

//Com isso posso exportar varisa funções de uma vez´, de forma agrupada
export { group, a, b, c, d }

export default exportDefault