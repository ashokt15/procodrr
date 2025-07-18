console.log('im for users')

const firstName = "ashok"
const lastName = "tirlangi"
const age = 89
const getFullName = () => {
    return `my full name is ${firstName + lastName}`
}
export { firstName as fN, lastName };
// export default getFullName;