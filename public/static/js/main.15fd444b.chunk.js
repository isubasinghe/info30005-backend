(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},119:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);a(54),a(55),a(56);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),s=(a(62),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),d=a(7),h=a(13),p=a(49),g=a.n(p),b=a(15),v=a(12),E=a.n(v),f=a(30),w=a.n(f),N=function(){return localStorage.getItem("token")},x=function(){localStorage.removeItem("token")},y=function(){var e=localStorage.getItem("token");if(null===e)return!1;var t=w()(e);console.log(t);var a=(new Date).getTime()/1e3;return console.log(a),a<t.exp},O=function(){var e=localStorage.getItem("token");if(null===e)return 0;var t=w()(e);console.log(t);var a=(new Date).getTime()/1e3;return console.log(a),t.exp-a},j=(a(84),a(20)),k=a.n(j),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={show:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"alert-container"},r.a.createElement(k.a,{show:this.state.show,variant:"warning"},r.a.createElement(k.a.Heading,null," Invalid "),this.props.msg,r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{onClick:function(){return e.setState({show:!1})},variant:"outline-success"}," Close"))),!this.state.show)}}]),t}(n.Component),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={email:"",password:"",userValid:!1,valid:!1,msg:""},e.handleEmailChange=e.handleEmailChange.bind(Object(b.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/auth/signin",{email:this.state.email,password:this.state.password}).then(function(e){var t;t=e.data.token,localStorage.setItem("token",t),console.log("LOGGED IN, now in my kitchen"),window.location="/"}).catch(function(e){var a=t.state.valid;t.setState({valid:!a,msg:e.response.data.msg}),console.log(e.response.data.msg)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"signin-container"},r.a.createElement("div",{className:"col mt-5 pl-5 pr-5 pt-2 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-lowercase bg-blue rounded"},"Sign In "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-4 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Email"),r.a.createElement("input",{type:"email",className:"form-control border-primary text-center text-blue font-weight-light",id:"email",placeholder:"enter your email",required:!0,onChange:this.handleEmailChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-4 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"password",placeholder:"enter your password",required:!0,onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white text-dark\r bg-bground m-3 mb-5"},"Sign In"),this.state.valid&&r.a.createElement(S,{msg:this.state.msg}))))))}}]),t}(n.Component);var A=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(a){function n(e){var t;return Object(s.a)(this,n),(t=Object(o.a)(this,Object(m.a)(n).call(this,e))).state={loggedIn:y()},t.state.loggedIn&&setTimeout(function(){t.setState({loggedIn:y()})},1e3*O()+1e3),t.state.handleLogOut=t.handleLogOut.bind(Object(b.a)(t)),t}return Object(u.a)(n,a),Object(i.a)(n,[{key:"handleLogOut",value:function(){this.setState({loggedIn:!1}),x()}},{key:"handleLogIn",value:function(){var e=this;this.setState({loggedIn:!0}),setTimeout(function(){e.setState({loggedIn:y()})},1e3*O()+1e3)}},{key:"render",value:function(){return!this.state.loggedIn&&t?r.a.createElement(C,null):r.a.createElement(e,this.state)}}]),n}(n.Component)},I=(a(112),A(function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e)),console.log(a.state),console.log(a.props),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getRender",value:function(){return this.props.loggedIn?r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement(d.c,{to:"/my-recipes",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn btn-active text-dark "},"my recipes"),r.a.createElement(d.c,{exact:!0,to:"/",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn btn-active text-dark"},"my kitchen"),r.a.createElement(d.c,{to:"/my-account",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn btn-active text-dark"},"my account"),r.a.createElement(d.c,{to:"/logout",type:"button",className:"btn btn-secondary text-white mt-2 btn-logout",activeClassName:"btn btn-active text-dark",onClick:this.props.handleLogOut},"logout")):r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Navigation bar"},r.a.createElement(d.c,{to:"/sign-in",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn text-dark btn-active"},"sign in"),r.a.createElement(d.c,{to:"/sign-up",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn text-dark btn-active"},"sign up"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-container"},this.getRender())}}]),t}(n.Component),!1)),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={show:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{show:this.state.show,variant:"warning"},r.a.createElement(k.a.Heading,null," Error signing up "),r.a.createElement("p",null," ",this.props.msg," "),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{onClick:function(){return e.setState({show:!1})},variant:"outline-success"}," Close"))),!this.state.show)}}]),t}(n.Component),T=(a(119),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleEmail=function(t){e.setState({email:t.target.value})},e.handleName=function(t){e.setState({name:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.handleVerifyPW=function(t){e.setState({verify_pw:t.target.value})},e.handleAddress=function(t){e.setState({address:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,address:e.state.address};E.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/auth/signup",a).then(function(t){console.log(t),e.setState({redirect:!0})}).catch(function(t){var a=e.state.valid;e.setState({valid:!a,errMsg:t.response.data.msg}),console.log(t.response)})},e.state={name:"",email:"",password:"",address:"",valid:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{push:!0,to:"sign-up/check-email"}):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"col mt-5 pl-5 pr-5 pt-3 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-lowercase bg-blue rounded"},"Sign Up "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Name"),r.a.createElement("input",{type:"text",className:"form-control border-primary text-center text-blue font-weight-light",id:"name",placeholder:"please enter your name",onChange:this.handleName,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Email"),r.a.createElement("input",{type:"email",className:"form-control border-primary text-center text-blue font-weight-light",id:"email",placeholder:"please enter your email",onChange:this.handleEmail,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"password",placeholder:"please enter your password",onChange:this.handlePassword,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Address"),r.a.createElement("input",{type:"text",className:"form-control border-primary text-center text-blue font-weight-light",id:"address",placeholder:"please enter your address",onChange:this.handleAddress,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Sign Up"),this.state.valid&&r.a.createElement(F,{msg:this.state.errMsg}))))))}}]),t}(n.Component)),D=a(22),P=a.n(D),q=a(27),L=a.n(q),B=(a(46),a(47),a(135),{infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!0}),V={infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!0},W=function(e){var t=new Date,a=new Date(e.expiry);return a.getDate()-t.getDate()<=2&&a.getYear()===t.getYear()&&a.getMonth()===t.getMonth()&&(console.log(a.getDate()-t.getDate()),!0)},K=function(e){var t=new Date;if(new Date(e.expiry).getTime()>t.getTime())return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.name),r.a.createElement("hr",null),r.a.createElement("h5",null,e.category),r.a.createElement("p",null,e.expiry),r.a.createElement("p",null,function(e){if(W(e))return r.a.createElement("span",{class:"badge badge-primary badge-pill","text-center":!0},"expiring soon")}(e))))},R=function(e,t){var a=B;return"mobile"===e&&(a=V),r.a.createElement(L.a,a,t.map(function(e,t){return r.a.createElement("div",{className:"slider-item-container",key:t},K(e))}))},U=function(){return r.a.createElement("div",{className:"jumbotron-container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Recipe preview"),r.a.createElement("hr",{className:"my-4"})))},J=function(e){return e.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-6"},function(e){if(e.length<1)return r.a.createElement(n.Fragment,null);var t=r.a.createElement("li",{"data-target":"#carouselExampleControls","data-slide-to":"0",class:"active"}),a=r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100",src:"https://placekitten.com/200/300",alt:"Slide"}));return e.shift(),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},t,e.map(function(e,t){return r.a.createElement("li",{key:t,"data-target":"#carouselExampleControls","data-slide-to":t+1})})),r.a.createElement("div",{className:"carousel-inner"},a,e.map(function(e,t){return r.a.createElement("div",{className:"carousel-item",key:t},r.a.createElement("img",{className:"d-block w-100",src:"https://placekitten.com/200/300",alt:"Slide"}))})),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))}(e)),r.a.createElement("div",{className:"col-md-6"},U())):r.a.createElement("div",{className:"col"},U())},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={inventory:[],expired:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=N();E.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/inventory/listAllItems",{token:t}).then(function(t){if(null===t.data.items||void 0===t.data.items)throw new Error("Unable to obtain data.items from fetch call");var a=[],n=[];t.data.items.forEach(function(e){!function(e){var t=new Date;return new Date(e.expiry).getTime()<t.getTime()}(e)?a.push(e):n.push(e)}),e.setState({inventory:a,expired:n})}).catch(function(e){alert("Could not retrieve data"),console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},(e=this.state.inventory).length<2?r.a.createElement(n.Fragment,null,R("mobile",e)):r.a.createElement(n.Fragment,null,r.a.createElement(P.a,{query:"(min-width: 1224px)"},R("desktop",e)),r.a.createElement(P.a,{query:"(max-width: 1224px)"},r.a.createElement("div",{className:"slick-mobile"},R("mobile",e)))))),r.a.createElement("div",{className:"row bottom-row"},J(this.state.expired)));var e}}]),t}(n.Component),z=(a(48),a(52)),Y=a.n(z),H=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Homepage"},y()?r.a.createElement(M,null):r.a.createElement("div",{className:"d-flex justify-content-center bg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"homepage-container"},r.a.createElement("img",{className:"img-fluid",src:Y.a,alt:"hompageimg"})))))}}]),t}(n.Component),Q=(a(136),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={verified:null,returnText:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;E.a.get("http://foodspan.ap-southeast-1.elasticbeanstalk.com/auth/verify/"+this.props.match.params.key).then(function(t){console.log(t.data),"Verified user"===t.data.msg?e.setState({verified:!0}):e.setState({verified:!1,returnText:"Invalid verify key was supplied"})}).catch(function(t){e.setState({verified:!1,returnText:"Internal server error occurred"})})}},{key:"renderAfterPost",value:function(){return!0===this.state.verified?r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Email Verified"),r.a.createElement("p",{className:"lead"},"Welcome to FoodSpan"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"FoodSpan is guranteed to provide you with a great experience in reducing your food wastage"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"/",role:"button"},"Show me more"))):!1===this.state.verified?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.returnText):r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"verified-container"},this.renderAfterPost())}}]),t}(n.Component)),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){a.props.history.push("/sign-in")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-4 mt-5 pl-5 pr-5 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-uppercase bg-blue"},"Check your email to verify your account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Sign In")))),r.a.createElement("div",{className:"col-sm"}))}}]),t}(n.Component),X=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleEmail=function(t){e.setState({email:t.target.value})},e.state={email:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-4 mt-5 pl-5 pr-5 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-uppercase bg-blue"},"Reset password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-uppercase"},"Email"),r.a.createElement("input",{type:"email",className:"form-control border-primary text-center text-blue font-weight-light",id:"email",placeholder:"Please enter you email",onChange:this.handleEmail,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"FormField"},r.a.createElement(d.b,{to:"/sign-in",className:"btn text-center text-blue font-weight-light  m-4"},"Back to sign in")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Reset password")))),r.a.createElement("div",{className:"col-sm"}))}}]),t}(n.Component),Z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleEmail=function(t){e.setState({email:t.target.value})},e.state={password:"",verify_password:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-4 mt-5 pl-5 pr-5 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-uppercase bg-blue"},"Change password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-uppercase"},"Password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"password",placeholder:"Enter your password",required:!0,onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-uppercase"},"Verify Password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"verify_password",placeholder:"Enter your password",required:!0,onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"FormField"},r.a.createElement(d.b,{to:"/sign-in",className:"btn text-center text-blue font-weight-light  m-4"},"Back to sign in")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Reset password")))),r.a.createElement("div",{className:"col-sm"}))}}]),t}(n.Component),_=(a(137),{infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!0}),$={infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!0},ee=function(e,t){var a=_;return"mobile"===e&&(a=$),r.a.createElement(L.a,a,t.map(function(e,t){return r.a.createElement("div",{className:"card mt-5",key:e.index},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("hr",null),r.a.createElement("h7",null,"Publisher: ",e.publisher),r.a.createElement("p",null,r.a.createElement("a",{href:e.f2f_url},"Go to recipe")),r.a.createElement("img",{className:"d-block",src:e.image_url,alt:"A food recipe"})))}))},te=A(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={recipes:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=N();E.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/recipe/generate",{token:t}).then(function(t){console.log(t),e.setState({recipes:t.data.recipes})}).catch(function(e){alert("Could not retrieve data"),console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},(e=this.state.recipes,r.a.createElement(n.Fragment,null,r.a.createElement(P.a,{query:"(min-width: 1224px)"},ee("desktop",e)),r.a.createElement(P.a,{query:"(max-width: 1224px)"},r.a.createElement("div",{className:"slick-mobile"},ee("mobile",e))))))),r.a.createElement("div",{className:"row bottom-row"},r.a.createElement("div",{className:"col-md-6"}),r.a.createElement("div",{className:"col-md-6"})));var e}}]),t}(n.Component)),ae=A(function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hello World")}}]),t}(n.Component)),ne=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row p-4 bg-primary"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"media"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{className:"m-0",src:g.a,alt:"Logo"})))),r.a.createElement("div",{className:"col-"},r.a.createElement(I,null))),r.a.createElement(h.b,{exact:!0,path:"/",component:H}),r.a.createElement(h.b,{exact:!0,path:"/sign-up",component:T}),r.a.createElement(h.b,{exact:!0,path:"/sign-up/check-email",component:G}),r.a.createElement(h.b,{exact:!0,path:"/sign-in",component:C}),r.a.createElement(h.b,{path:"/verify/:key",component:Q}),r.a.createElement(h.b,{exact:!0,path:"/forgot-password",component:X}),r.a.createElement(h.b,{path:"/forgot-password/reset-password",component:Z}),r.a.createElement(h.b,{exact:!0,path:"/my-recipes",component:te}),r.a.createElement(h.b,{exact:!0,path:"/account",component:ae})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){},49:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA3BAMAAAC/R8hcAAAAMFBMVEVwdqT////Q0OLy8/h4fKjn5/DGxtza2+mYmb28vdWytM+qqsiQkbeAg62gocOIirJPWnMdAAACWUlEQVRYw+2Vz0sbQRTHX7cxUevWbNK4qWnBwZbizTWNQnvotlAKPTW09FhSqIdCCwmFnrVFz01LD6VQshDoNUL/gE3Buwoi3qL+A1FPevLNzFtlf6AGMQedd5mX+b43n50f7wWUKVOm7IJY7EfuVHFa8iwUzfzdBcrsN+gCpdruBoWBoiiKopy29A3jJsDgX+O1SzPXH3jafiXzQTib1sQ/j7JV8/qf2eLfOG9N1cXEF2uKB2nJ9eKkG6DsWb/+AFTN9yxly5keg6Q+4/N34w46q+mx6cwOUYo0Pk39HEbKE9TSM/h7zcCg/0jJ5sdYLurEtKEliDmv5ETvG0/5CPA8Y4OebwDMFWj1uZYcF1pwD2NeovY1C6BbdRmkpd+BXmxHUJwaX930C/3D4kTLkLjFD8hKRt0nE1rexi1wp4gUvkyzFqbocv3qjE9YLotjy0JTdO2NAOVtW2Q3hNaA7RJ3mkmJe1wKU66hwKURn7AgoLEUOOIurwYouw9tnr3E/StlCupBym0+MRKmxG8ILzHu/1hbDJ+A2VEvebAyhAuPUiZFx/kbi6YIIbwOo4GcvgAFBhiWwF3K9IKI0vleyAlXpY6Xwvx70Q4pHd8LOuF7EVPjwFzKpKAgJfzGnKg31p+FbZEy66forjyokqwdCto4pHRcL3EqBZ+auI9f/kLWi14AiOeoqIjSae0joB6u/V5sSFW8lwqv/UcggxYLx1BO6mPPeItaCfQxZ3I6RX0s43pBO8dQTuzJ89ZEK9iTB0bNBmaLVnwUFEEhO5d/J0VRFEVRpuyS2gH2l42wE+CbSwAAAABJRU5ErkJggg=="},52:function(e,t,a){e.exports=a.p+"static/media/Homepage.5e17db1a.png"},53:function(e,t,a){e.exports=a(138)},55:function(e,t,a){},62:function(e,t,a){},84:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.15fd444b.chunk.js.map