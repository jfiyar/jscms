
function toParamString(obj){
    let str="";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            str=`${str}&${key}=${value}`;
        }
    }
    return str.substr(1);
}

const request=function(...args){
    const baseUrl='http://localhost:8080'
    if(typeof args[0] === 'string'){
        args[0]=baseUrl+args[0];
    }else if(typeof args[0].url === 'string'){
        args[0].url = baseUrl + args[0].url;
    }
    return fetch(...args);
}


const get=(url,data)=>{
    const token=localStorage.getItem("token");
    let header={
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization:token,
    }
    data=toParamString(data);
    return request(`${url}?${data}`,{
        headers: header,
        method:'get',
        mode:'no-cors'
    }).then(resp=>{
        console.log(resp)
        return resp.text();
    }).then(d=>{
        console.log(d)
    })
}

const post=(url,data)=>{
    let header={'Content-Type': 'application/x-www-form-urlencoded'}
    const token=localStorage.getItem("token");
    if(token){
        header.Authorization=token;
    }
    data=toParamString(data);
    return request(url, {
        method: 'post',
        body: data,
        headers: header
    }).then(resp=>resp.json())
}


export {get,post,request}

export default request
