(()=>{var e=document.querySelector("#form-register");e.addEventListener("submit",(function(t){t.preventDefault(),axios({method:e.method,url:e.action,data:{name:e.querySelector('[name="name"]').value,email:e.querySelector('[name="email"]').value,password:e.querySelector('[name="password"]').value}}).then((function(t){Swal.fire({icon:"success",title:"Successfully Registered",html:'<p>You can now login.</p>\n                    <p class="navigate"><a href="'.concat(APP_URL,'/login">Go to Login</a></p>')}).then((function(){$(e).trigger("reset")}))})).catch((function(e){Swal.fire({icon:"error",title:"Register Failed",html:buildErrorMessage(e.response.data)})}))}))})();
