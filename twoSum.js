const array = [2, 3, 5, 7]
const target = 9
let map = new Map()

for (let i = 0; i < array.length; i++){
    let complement = target - array[i]
    if (map.has(complement)){
        console.log(`[${map.get(complement)}, ${i}]`)
    } else {
        map.set(array[i], i)
        console.log(map)
    }
}