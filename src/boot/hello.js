import hello from 'hellojs'

export default ({ Vue }) => {
    hello.init({
        facebook: '479392293022172'
    })
    Vue.prototype.$hello = hello
}