module.exports = `<%if(user.isLogin){%>
    <li><a><%=user.userName%></a></li>
    <li><a href="/logout">退出</a></li>
<%}else{%>
    <li><a href="/login">登录</a></li>
    <li><a href="/regist">注册</a></li>
<%}%>`