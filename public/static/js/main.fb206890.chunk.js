(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);a(63),a(64),a(65);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=a(7),s=(a(18),a(70),a(2)),i=a(3),m=a(6),u=a(4),d=a(5),p=a(11),h=a(17),g=a(57),b=a.n(g),v=a(13),E=a(8),f=a.n(E),y=a(31),N=a.n(y),w=function(){return localStorage.getItem("token")},x=function(){localStorage.removeItem("token")},j=function(){var e=localStorage.getItem("token");if(null===e)return!1;var t=N()(e);console.log(t);var a=(new Date).getTime()/1e3;return console.log(a),a<t.exp},O=function(){var e=localStorage.getItem("token");if(null===e)return 0;var t=N()(e);console.log(t);var a=(new Date).getTime()/1e3;return console.log(a),t.exp-a},k=function(){var e=localStorage.getItem("token");return null!==e&&N()(e).defaultloc},C=(a(92),a(23)),S=a.n(C),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={show:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(S.a,{show:this.state.show,variant:"warning"},r.a.createElement(S.a.Heading,null," Invalid "),this.props.msg,r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{onClick:function(){return e.setState({show:!1})},variant:"outline-success"}," close"))),!this.state.show)}}]),t}(n.Component),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={email:"",password:"",userValid:!1,valid:!1,msg:""},e.handleEmailChange=e.handleEmailChange.bind(Object(v.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/auth/signin",{email:this.state.email,password:this.state.password}).then(function(e){var t;t=e.data.token,localStorage.setItem("token",t),console.log("LOGGED IN, now in my kitchen"),window.location="/",Object(o.a)("Signed in")}).catch(function(e){var a=t.state.valid;t.setState({valid:!a,msg:e.response.data.msg}),Object(o.a)(e.response.data.msg)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"signin-container"},r.a.createElement("div",{className:"col mt-5 pl-5 pr-5 pt-2 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-lowercase bg-blue rounded"},"sign in "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-4 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"email"),r.a.createElement("input",{type:"email",className:"form-control border-primary text-center text-blue font-weight-light",id:"email",placeholder:"enter your email",required:!0,onChange:this.handleEmailChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-4 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"password",placeholder:"enter your password",required:!0,onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white text-dark\r bg-bground m-3 mb-5"},"sign in"),this.state.valid&&r.a.createElement(A,{msg:this.state.msg.toLowerCase()}))))))}}]),t}(n.Component);var F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(a){function n(e){var t;return Object(s.a)(this,n),(t=Object(m.a)(this,Object(u.a)(n).call(this,e))).state={loggedIn:j()},t.state.loggedIn&&setTimeout(function(){t.setState({loggedIn:j()})},1e3*O()+1e3),t.state.handleLogOut=t.handleLogOut.bind(Object(v.a)(t)),t}return Object(d.a)(n,a),Object(i.a)(n,[{key:"handleLogOut",value:function(){this.setState({loggedIn:!1}),x()}},{key:"handleLogIn",value:function(){var e=this;this.setState({loggedIn:!0}),setTimeout(function(){e.setState({loggedIn:j()})},1e3*O()+1e3)}},{key:"render",value:function(){return!this.state.loggedIn&&t?r.a.createElement(I,null):r.a.createElement(e,this.state)}}]),n}(n.Component)},D=(a(118),F(function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e)),console.log(a.state),console.log(a.props),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getRender",value:function(){return this.props.loggedIn?r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement(p.c,{to:"/my-recipes",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn btn-active text-dark "},"my recipes"),r.a.createElement(p.c,{exact:!0,to:"/",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn btn-active text-dark"},"my kitchen"),r.a.createElement(p.c,{to:"/my-account",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn btn-active text-dark"},"my account"),r.a.createElement(p.c,{to:"/logout",type:"button",className:"btn btn-secondary text-white mt-2 btn-logout",activeClassName:"btn btn-active text-dark",onClick:this.props.handleLogOut},"logout")):r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Navigation bar"},r.a.createElement(p.c,{to:"/sign-in",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn text-dark btn-active"},"sign in"),r.a.createElement(p.c,{to:"/sign-up",type:"button",className:"btn btn-secondary text-white mt-2",activeClassName:"btn text-dark btn-active"},"sign up"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-container"},this.getRender())}}]),t}(n.Component),!1)),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={show:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(S.a,{show:this.state.show,variant:"warning"},r.a.createElement(S.a.Heading,null," Error signing up "),r.a.createElement("p",null," ",this.props.msg," "),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{onClick:function(){return e.setState({show:!1})},variant:"outline-success"},"close"))),!this.state.show)}}]),t}(n.Component),T=(a(125),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleEmail=function(t){e.setState({email:t.target.value})},e.handleName=function(t){e.setState({name:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.handleVerifyPW=function(t){e.setState({verify_pw:t.target.value})},e.handleAddress=function(t){e.setState({address:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,address:e.state.address};f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/auth/signup",a).then(function(t){console.log(t),e.setState({redirect:!0}),Object(o.a)("Please check your email")}).catch(function(t){var a=e.state.valid;e.setState({valid:!a,errMsg:t.response.data.msg}),console.log(t.response)})},e.state={name:"",email:"",password:"",address:"",valid:!1},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{push:!0,to:"sign-up/check-email"}):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"col mt-5 pl-5 pr-5 pt-3 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-lowercase bg-blue rounded"},"sign up "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"Name"),r.a.createElement("input",{type:"text",className:"form-control border-primary text-center text-blue font-weight-light",id:"name",placeholder:"please enter your name",onChange:this.handleName,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"email"),r.a.createElement("input",{type:"email",className:"form-control border-primary text-center text-blue font-weight-light",id:"email",placeholder:"please enter your email",onChange:this.handleEmail,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"password",placeholder:"please enter a password",onChange:this.handlePassword,required:!0}),r.a.createElement("div",{className:"help-block with-errors text-center text-blue"},"minimum of 6 characters + include a lowercase, uppercase and a special character"),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-3 pl-5 pr-5"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-lowercase"},"address"),r.a.createElement("input",{type:"text",className:"form-control border-primary text-center text-blue font-weight-light",id:"address",placeholder:"please enter your address",onChange:this.handleAddress,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"sign up"),this.state.valid&&r.a.createElement(q,{msg:this.state.errMsg.toLowerCase()}))))))}}]),t}(n.Component)),L=a(26),M=a(25),B=a.n(M),P=a(146),R=(a(126),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={recipes:[],showSpinner:!0,loaded:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getFirstDescription",value:function(e){return console.log(e),!0===this.state.showSpinner?r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))):r.a.createElement("div",{className:"jumbotron-container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"d-flex justify-content-end"},"recipe preview"),r.a.createElement("p",null,e[0].title)),r.a.createElement("div",{className:"col"},r.a.createElement(P.a,{className:"previewButton",variant:"primary",href:e[0].f2f_url},"Go to recipe"))))))}},{key:"componentDidMount",value:function(){var e=this,t=w();f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/recipe/generate",{token:t}).then(function(t){console.log(t),t.data.recipes.length>0&&(e.setState({recipes:t.data.recipes,showSpinner:!1}),e.setState({loaded:!0}))}).catch(function(e){Object(o.a)(e.response.data.msg),console.log(e.data),console.log(e)})}},{key:"render",value:function(){return console.log("RENDERING PREVIEW"),r.a.createElement("div",null,this.state.loaded&&this.getFirstDescription(this.state.recipes))}}]),t}(n.Component)),V=(a(39),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){console.log("handle submit"),e.preventDefault();var t={name:a.state.name,category:a.state.category,location:a.state.location,expiry:a.state.expiry,quantity:parseInt(a.state.quantity,10),units:"piece"},n=w();console.log(t),f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/inventory/addItem",{token:n,item:t}).then(function(e){console.log(e.data);var n=a.props.inventory;n.push(t),a.props.setInventory(n),Object(o.a)("Added item to inventory"),document.getElementById("close-modal").click(),a.props.setShowModal(!1)}).catch(function(e){Object(o.a)(e.response.data.msg)})},a.handleNameChange=function(e){a.setState({name:e.target.value})},a.handleCategoryChange=function(e){a.setState({category:e.target.value})},a.handleExpiryChange=function(e){a.setState({expiry:e.target.value})},a.handleQuantityChange=function(e){a.setState({quantity:e.target.value})},a.handleUnitsChange=function(e){a.setState({units:e.target.value})},a.state={showModal:!0,name:"",category:"FRUIT",expiry:"",location:k(),quantity:0,units:"",failed:!1,errMsg:""},console.log(e),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"item-name",className:"col-form-label"},"name of item"),r.a.createElement("input",{type:"text",className:"form-control text-blue",id:"item-name",required:!0,onChange:this.handleNameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"item-category",className:"col-form-label"},"category"),r.a.createElement("select",{className:"form-control text-blue",id:"item-category",onChange:this.handleCategoryChange},r.a.createElement("option",null,"FRUIT"),r.a.createElement("option",null,"VEG"),r.a.createElement("option",null,"MEAT"),r.a.createElement("option",null,"FISH"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"item-quantity",className:"col-form-label"},"quantity"),r.a.createElement("input",{type:"number",className:"form-control text-blue",id:"item-quantity",required:!0,onChange:this.handleQuantityChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlor:"item-units",className:"col-form-label"},"units"),r.a.createElement("select",{className:"form-control text-blue",id:"item-units",onChange:this.handleUnitsChange},r.a.createElement("option",null,"piece"),r.a.createElement("option",null,"g"),r.a.createElement("option",null,"kg"),r.a.createElement("option",null,"mL"),r.a.createElement("option",null,"L"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"expiry-date",className:"col-form-label"},"expiry date"),r.a.createElement("div",null,r.a.createElement("input",{className:"form-control text-blue",type:"date",id:"expiry-date",onChange:this.handleExpiryChange}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-center",onClick:this.handleSubmit},"add"))))}}]),t}(n.Component)),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){var t=w();console.log(a.props.item._id),f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/inventory/increaseQuantity",{token:t,id:a.props.item._id}).then(function(e){console.log(e);var t=a.props.item;t.quantity+=1;var n=a.props.inventory;n[a.props.index]=t,a.props.setInventory(n),Object(o.a)("Increased quanity for item "+t.name)}).catch(function(e){Object(o.a)(e.response.data.msg)})},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-success",style:{backgroundColor:"transparent",color:"green"},onClick:this.handleSubmit},"+")}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){var t=w();console.log(a.props.item._id),f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/inventory/decreaseQuantity",{token:t,id:a.props.item._id}).then(function(e){console.log(e);var t=a.props.item;t.quantity-=1;var n=a.props.inventory;0==t.quantity?n.splice(a.props.index,1):n[a.props.index]=t,a.props.setInventory(n),Object(o.a)("Removed quanitity for item "+t.name)}).catch(function(e){Object(o.a)(e.response.data.msg),console.log(e.data),console.log(e)})},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-danger",style:{backgroundColor:"transparent",color:"red"},onClick:this.handleSubmit},"-")}}]),t}(n.Component),K=a(30),J=a.n(K);a(54),a(55),a(142);function Q(e){var t=e.className,a=e.style,n=e.onClick;return r.a.createElement("div",{className:t,style:Object(L.a)({},a),onClick:n})}function Y(e){var t=e.className,a=e.style,n=e.onClick;return r.a.createElement("div",{className:t,style:Object(L.a)({},a),onClick:n})}var z={infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!0,nextArrow:r.a.createElement(Q,null),prevArrow:r.a.createElement(Y,null)},H={infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!0,nextArrow:r.a.createElement(Q,null),prevArrow:r.a.createElement(Y,null)},G=function(e,t,a){return r.a.createElement("div",{className:"modal fade bd-add-modal-lg",tabIndex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalScrollableTitle"},"add new item"),r.a.createElement("button",{id:"close-modal",type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(V,{setShowModal:a,inventory:e,setInventory:t})))))},X=function(e){var t=new Date;return new Date(e.expiry).getTime()<t.getTime()},_=function(e){var t=new Date,a=new Date(e.expiry);return a.getDate()-t.getDate()<=2&&a.getYear()===t.getYear()&&a.getMonth()===t.getMonth()&&(console.log(a.getDate()-t.getDate()),!0)},Z=function(e,t,a,n){var l=new Date,c=new Date(e.expiry);if(c.getTime()>l.getTime())return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-center"},e.name.toLowerCase()," ",function(e){if(_(e))return r.a.createElement("span",{className:"badge badge-primary badge-pill","text-center":"true"},"expiring soon")}(e)),r.a.createElement("hr",null),r.a.createElement("h5",null,e.category),r.a.createElement("p",null,"expiring on: ",c.toDateString()),r.a.createElement("p",null,"quantity: ",e.quantity),r.a.createElement("p",null,"units: ",e.units),r.a.createElement("hr",{className:"hr"}),r.a.createElement("div",{className:"d-flex justify-content-between quantity-group"},r.a.createElement(W,{index:t,inventory:a,setInventory:n,item:e}),r.a.createElement("p",null,"quantity: ",e.quantity),r.a.createElement(U,{index:t,inventory:a,setInventory:n,item:e}))))},$=function(e,t,a){var n=z;return"mobile"===e&&(n=H),r.a.createElement(J.a,n,t.map(function(e,n){return r.a.createElement("div",{className:"slider-item-container",key:n},Z(e,n,t,a))}))},ee=function(e){var t=new Date(e.expiry),a=new Date;return X(e)?a.getDate()-t.getDate():0},te=function(e){var t=new Date(e.expiry),a=new Date;return X(e)?a.getMonth()-t.getMonth():0},ae=function(e){var t=new Date(e.expiry),a=new Date;return X(e)?a.getYear()-t.getYear():0},ne=function(){return r.a.createElement(R,null)},re=function(e,t){return e.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-6"},function(e){if(e.length<1)return r.a.createElement(n.Fragment,null);var t=r.a.createElement("li",{"data-target":"#carouselExampleControls","data-slide-to":"0",className:"active"}),a=r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://steamuserimages-a.akamaihd.net/ugc/776155680297657535/02F0EABF17FE99701D05F371387381E3DD696C6C/",alt:"Slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement("h5",{className:"h5-responsive"},e[0].name.toLowerCase()),r.a.createElement("p",null,"expired ",ee(e[0])," days, ",te(e[0])," months, and ",ae(e[0])," years ago")));return e.shift(),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},t,e.map(function(e,t){return r.a.createElement("li",{key:t,"data-target":"#carouselExampleControls","data-slide-to":t+1})})),r.a.createElement("div",{className:"carousel-inner"},a,e.map(function(e,t){return r.a.createElement("div",{className:"carousel-item",key:t},r.a.createElement("img",{className:"d-block w-100",src:"https://steamuserimages-a.akamaihd.net/ugc/776155680297657535/02F0EABF17FE99701D05F371387381E3DD696C6C/",alt:"Slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement("h5",{className:"h5-responsive"},e.name.toLowerCase()),r.a.createElement("p",null,"expired ",ee(e)," days, ",te(e)," months, and ",ae(e)," years ago")))})),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))}(e)),r.a.createElement("div",{className:"col-md-6"},t.length>0&&ne())):null!=t.length&&t.length>0?r.a.createElement("div",{className:"col"},ne()):void 0},le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).setInventory=function(e){a.setState({inventory:e})},a.setExpired=function(e){a.setState({expired:e})},a.setShowModal=function(e){setTimeout(function(){a.setState({showModal:e})},300)},a.state={inventory:[],expired:[],showModal:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=w();f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/inventory/listAllItems",{token:t}).then(function(t){if(null===t.data.items||void 0===t.data.items)throw new Error("Unable to obtain data.items from fetch call");var a=[],n=[];t.data.items.forEach(function(e){X(e)?n.push(e):a.push(e)}),console.log(a.length),e.setState({inventory:a,expired:n})}).catch(function(e){Object(o.a)(e.response.data.msg),console.log(e)})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,(e=this.state.inventory,t=this.setInventory,a=this.state.showModal,l=this.setShowModal,r.a.createElement(n.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){l(!0)},className:"btn btn-secondary add-button","data-toggle":"modal","data-target":".bd-add-modal-lg"},"+"),a&&G(e,t,l))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},function(e,t){return e.length<2?r.a.createElement(n.Fragment,null,$("mobile",e,t)):r.a.createElement(n.Fragment,null,r.a.createElement(B.a,{query:"(min-width: 1224px)"},$("desktop",e,t)),r.a.createElement(B.a,{query:"(max-width: 1224px)"},r.a.createElement("div",{className:"slick-mobile"},$("mobile",e,t))))}(this.state.inventory,this.setInventory))),r.a.createElement("div",{className:"row bottom-row"},re(this.state.expired,this.state.inventory))));var e,t,a,l}}]),t}(n.Component),ce=(a(56),a(61)),oe=a.n(ce),se=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Homepage"},j()?r.a.createElement(le,null):r.a.createElement("div",{className:"d-flex justify-content-center bg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"homepage-container"},r.a.createElement("img",{className:"img-fluid",src:oe.a,alt:"hompageimg"})))))}}]),t}(n.Component),ie=(a(143),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={verified:null,returnText:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("http://foodspan.ap-southeast-1.elasticbeanstalk.com/auth/verify/"+this.props.match.params.key).then(function(t){console.log(t.data),"Verified user"===t.data.msg?e.setState({verified:!0}):e.setState({verified:!1,returnText:"Invalid verify key was supplied"})}).catch(function(t){e.setState({verified:!1,returnText:"Internal server error occurred"})})}},{key:"renderAfterPost",value:function(){return!0===this.state.verified?r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Email Verified"),r.a.createElement("p",{className:"lead"},"Welcome to FoodSpan"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"FoodSpan is guranteed to provide you with a great experience in reducing your food wastage"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"/",role:"button"},"Show me more"))):!1===this.state.verified?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.returnText):r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"verified-container"},this.renderAfterPost())}}]),t}(n.Component)),me=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){a.props.history.push("/sign-in")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-4 mt-5 pl-5 pr-5 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-uppercase bg-blue"},"Check your email to verify your account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Sign In")))),r.a.createElement("div",{className:"col-sm"}))}}]),t}(n.Component),ue=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleEmail=function(t){e.setState({email:t.target.value})},e.state={email:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-4 mt-5 pl-5 pr-5 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-uppercase bg-blue"},"Reset password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-uppercase"},"Email"),r.a.createElement("input",{type:"email",className:"form-control border-primary text-center text-blue font-weight-light",id:"email",placeholder:"Please enter you email",onChange:this.handleEmail,required:!0}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"FormField"},r.a.createElement(p.b,{to:"/sign-in",className:"btn text-center text-blue font-weight-light  m-4"},"Back to sign in")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Reset password")))),r.a.createElement("div",{className:"col-sm"}))}}]),t}(n.Component),de=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleEmail=function(t){e.setState({email:t.target.value})},e.state={password:"",verify_password:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-4 mt-5 pl-5 pr-5 bg-white"},r.a.createElement("h2",{className:"text-center p-3 mt-5 text-white font-weight-lighter text-uppercase bg-blue"},"Change password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-uppercase"},"Password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"password",placeholder:"Enter your password",required:!0,onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("p",{className:"text-center text-blue font-weight-lighter text-uppercase"},"Verify Password"),r.a.createElement("input",{type:"password",className:"form-control border-primary text-center text-blue font-weight-light",id:"verify_password",placeholder:"Enter your password",required:!0,onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"invalid-tooltip"}," ")),r.a.createElement("div",{className:"FormField"},r.a.createElement(p.b,{to:"/sign-in",className:"btn text-center text-blue font-weight-light  m-4"},"Back to sign in")),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn text-center btn-white font-weight-light border-white bg-bground m-4"},"Reset password")))),r.a.createElement("div",{className:"col-sm"}))}}]),t}(n.Component);a(144);function pe(e){var t=e.className,a=e.style,n=e.onClick;return r.a.createElement("div",{className:t,style:Object(L.a)({},a),onClick:n})}function he(e){var t=e.className,a=e.style,n=e.onClick;return r.a.createElement("div",{className:t,style:Object(L.a)({},a),onClick:n})}var ge={infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!0,nextArrow:r.a.createElement(pe,null),prevArrow:r.a.createElement(he,null)},be={infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!1,nextArrow:r.a.createElement(pe,null),prevArrow:r.a.createElement(he,null)},ve=function(e,t){var a=ge;return"mobile"===e&&(a=be),t.length>0?r.a.createElement(J.a,a,t.map(function(e,t){return r.a.createElement("div",{className:"card mt-5",key:e.index},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title bg-primary text-white p-3"},e.title),r.a.createElement("hr",null),r.a.createElement("h7",null,"publisher: ",e.publisher),r.a.createElement("p",null,r.a.createElement("a",{className:"button-bground",href:e.f2f_url,target:"_blank"},"go to recipe")),r.a.createElement("div",{className:"media"},r.a.createElement("img",{className:"d-flex bg-bground justify-content-center",src:e.image_url,alt:"a food recipe"}))))})):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"we're having troubles generating recipes for now"),r.a.createElement("p",{className:"lead"},"additionally, please ensure you have added some items in my kitchen"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"head back over to my kitchen to see what items you have"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"/",role:"button"},"my kitchen")))},Ee=F(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={recipes:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=w();f.a.post("http://foodspan.ap-southeast-1.elasticbeanstalk.com/api/v1/recipe/generate",{token:t}).then(function(t){console.log(t),e.setState({recipes:t.data.recipes})}).catch(function(e){Object(o.a)(e.response.data.msg)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},(e=this.state.recipes,r.a.createElement(n.Fragment,null,r.a.createElement(B.a,{query:"(min-width: 1224px)"},ve("desktop",e)),r.a.createElement(B.a,{query:"(max-width: 1224px)"},r.a.createElement("div",{className:"slick-mobile"},ve("mobile",e))))))));var e}}]),t}(n.Component)),fe=F(function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hello World")}}]),t}(n.Component)),ye=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row p-4 bg-primary"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"media"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"m-0",src:b.a,alt:"Logo"})))),r.a.createElement("div",{className:"col-"},r.a.createElement(D,null))),r.a.createElement(h.b,{exact:!0,path:"/",component:se}),r.a.createElement(h.b,{exact:!0,path:"/sign-up",component:T}),r.a.createElement(h.b,{exact:!0,path:"/sign-up/check-email",component:me}),r.a.createElement(h.b,{exact:!0,path:"/sign-in",component:I}),r.a.createElement(h.b,{path:"/verify/:key",component:ie}),r.a.createElement(h.b,{exact:!0,path:"/forgot-password",component:ue}),r.a.createElement(h.b,{path:"/forgot-password/reset-password",component:de}),r.a.createElement(h.b,{exact:!0,path:"/my-recipes",component:Ee}),r.a.createElement(h.b,{exact:!0,path:"/account",component:fe}),r.a.createElement(h.b,{exact:!0,path:"/logout",component:se})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.configure(),c.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){},57:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA3BAMAAAC/R8hcAAAAMFBMVEVwdqT////Q0OLy8/h4fKjn5/DGxtza2+mYmb28vdWytM+qqsiQkbeAg62gocOIirJPWnMdAAACWUlEQVRYw+2Vz0sbQRTHX7cxUevWbNK4qWnBwZbizTWNQnvotlAKPTW09FhSqIdCCwmFnrVFz01LD6VQshDoNUL/gE3Buwoi3qL+A1FPevLNzFtlf6AGMQedd5mX+b43n50f7wWUKVOm7IJY7EfuVHFa8iwUzfzdBcrsN+gCpdruBoWBoiiKopy29A3jJsDgX+O1SzPXH3jafiXzQTib1sQ/j7JV8/qf2eLfOG9N1cXEF2uKB2nJ9eKkG6DsWb/+AFTN9yxly5keg6Q+4/N34w46q+mx6cwOUYo0Pk39HEbKE9TSM/h7zcCg/0jJ5sdYLurEtKEliDmv5ETvG0/5CPA8Y4OebwDMFWj1uZYcF1pwD2NeovY1C6BbdRmkpd+BXmxHUJwaX930C/3D4kTLkLjFD8hKRt0nE1rexi1wp4gUvkyzFqbocv3qjE9YLotjy0JTdO2NAOVtW2Q3hNaA7RJ3mkmJe1wKU66hwKURn7AgoLEUOOIurwYouw9tnr3E/StlCupBym0+MRKmxG8ILzHu/1hbDJ+A2VEvebAyhAuPUiZFx/kbi6YIIbwOo4GcvgAFBhiWwF3K9IKI0vleyAlXpY6Xwvx70Q4pHd8LOuF7EVPjwFzKpKAgJfzGnKg31p+FbZEy66forjyokqwdCto4pHRcL3EqBZ+auI9f/kLWi14AiOeoqIjSae0joB6u/V5sSFW8lwqv/UcggxYLx1BO6mPPeItaCfQxZ3I6RX0s43pBO8dQTuzJ89ZEK9iTB0bNBmaLVnwUFEEhO5d/J0VRFEVRpuyS2gH2l42wE+CbSwAAAABJRU5ErkJggg=="},61:function(e,t,a){e.exports=a.p+"static/media/Homepage.700f23d8.png"},62:function(e,t,a){e.exports=a(145)},64:function(e,t,a){},70:function(e,t,a){},92:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.fb206890.chunk.js.map