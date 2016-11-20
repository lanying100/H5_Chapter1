/**
 * Created by lanying on 2016/11/20.
 */
var enroll = document.getElementById("enroll");
/*alert(enroll);*/
enroll.onclick = function (e) {
    e.preventDefault();/*阻止 默认的URL跳转*/
    enroll.innerHTML="报名成功";
    enroll.style.background="#27cb8b";/*鲜绿色*/
    enroll.style.borderColor="#27cb8b";
}