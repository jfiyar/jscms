
/**
 * 
 * @param {string} url 
 * @param {object} args
 * @param {object.url} url
 * @param {[object.tpye]|[post]} method
 * 
 */

export default function(...args){
    var baseUrl='http://10.2.13.233:8080'
    if(typeof args[0] === 'string'){
        args[0]=baseUrl+args[0];
    }else if(typeof args[0].url === 'string'){
        args[0].url = baseUrl + args[0].url;
    }
    console.log(args);
    return fetch(...args);
}