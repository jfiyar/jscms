const ajax=({url,method,data,success})=>{
    let xhr=new XMLHttpRequest();
    data=data||null;
    xhr.open(method,url,false)
    xhr.setRequestHeader("Authorization", localStorage.getItem('token'));
    xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
            success(xhr.responseText);
        }
    }
    console.log(xhr)
    xhr.send(data)

}
const get=({url,data,success})=>{
    const hasUrlData=!!url.split('?')[1]
    let dataStr=""
    for (const name in data) {
        if (data.hasOwnProperty(name)) {
            const value = data[name];
            dataStr=`&${dataStr}${name}=${value}`
        }
    }
    if(hasUrlData){
        url+=dataStr
    }else{
        url+=`?${dataStr.substr(1)}`
    }
    ajax({
        url:url,
        method:'get',
        data:false,
        success:success
    });
}

const post=()=>{

}
export {get,post,ajax}
export default ajax