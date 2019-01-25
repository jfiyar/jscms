import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
  return <div>
    <div style={{padding:30,background:'#eee'}}>权限管理页面</div>
    <p><Link to="/admin/sys/user">用户管理</Link></p>
    <p><Link to="/admin/sys/auth">权限管理</Link></p>
    <p><Link to="/admin/sys/module">模块管理</Link></p>
  </div>
}
