// const fruits = ["apple", "grapes", 'muskmelon', 'dragon']
// const [, f1, , f2] = fruits //destrcutring
// console.log(f1, f2)

const garments = {
    kids: {
        boys: 'pant',
        girls: 'gown'
    },
    adults: {
        men: "jeans",
        women: {
            formal: 'saree',
            casual: 'frock'
        }
    }
}
const { kids: { boys: boydress, girls: girldress }, adults: { women: { casual: t } } } = garments