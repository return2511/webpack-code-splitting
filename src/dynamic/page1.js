import _ from 'lodash';
import( /* webpackChunkName: [name] */ './subPage1').then(function (res) {
    console.log('import()', res)
})
import( /* webpackChunkName: 'subPage2' */ './subPage2').then(function (res) {
    console.log('import()', res)
})

console.log('this is in page1 js')
export default 'page1';