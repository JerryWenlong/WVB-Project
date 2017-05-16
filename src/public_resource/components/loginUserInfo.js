module.exports = `<%if(user.isLogin){%>
    <li><a><%=user.userName%></a></li>
<%}else{%>
    <li><a href="/login">登录</a></li>
<%}%>`