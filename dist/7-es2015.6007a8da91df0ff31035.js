(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PTPi:function(t,e,o){"use strict";o.r(e);var n=o("tyNb"),b=o("ofXK"),i=o("3Pt+");class r{constructor(t,e,o,n,b,i,r,c,s){this.name=t,this.lastname=e,this.password=o,this.CIF=n,this.calle=b,this.CP=i,this.poblacion=r,this.email=c,this.telefono=s}}var c=o("qfBg"),s=o("fXoL");const a=function(){return{standalone:!0}},l=[{path:"login",component:(()=>{class t{constructor(t,e){this._router=t,this._userService=e,this.user=new r("","","","","","","","","")}ngOnInit(){}ngOnDestroy(){}login(){console.log(this.user),this._userService.login(this.user).subscribe(t=>{this.identity=t.user,this.token=t.token,localStorage.setItem("identity",JSON.stringify(this.identity)),localStorage.setItem("token",this.token),this._router.navigate(["/dashboard"])},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(n.a),s.Mb(c.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-login"]],features:[s.yb([c.a])],decls:50,vars:6,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["id","email","placeholder","Email","type","email",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id"," customCheckLogin","type","checkbox",1,"custom-control-input"],["for"," customCheckLogin",1,"custom-control-label"],[1,"text-muted"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4",3,"click"],[1,"row","mt-3"],[1,"col-6"],["href","javascript:void(0)",1,"text-light"],[1,"col-6","text-right"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Rb(4,"div",4),s.Rb(5,"h1",5),s.Dc(6,"Welcome!"),s.Qb(),s.Rb(7,"p",6),s.Dc(8,"Use these awesome forms to login or create new account in your project for free."),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(9,"div",7),s.gc(),s.Rb(10,"svg",8),s.Nb(11,"polygon",9),s.Qb(),s.Qb(),s.Qb(),s.fc(),s.Rb(12,"div",10),s.Rb(13,"div",3),s.Rb(14,"div",11),s.Rb(15,"div",12),s.Rb(16,"div",13),s.Rb(17,"div",14),s.Rb(18,"small"),s.Dc(19,"Or sign in with credentials"),s.Qb(),s.Qb(),s.Rb(20,"form",15),s.Rb(21,"div",16),s.Rb(22,"div",17),s.Rb(23,"div",18),s.Rb(24,"span",19),s.Nb(25,"i",20),s.Qb(),s.Qb(),s.Rb(26,"input",21),s.dc("ngModelChange",(function(t){return e.user.email=t})),s.Qb(),s.Qb(),s.Qb(),s.Rb(27,"div",22),s.Rb(28,"div",17),s.Rb(29,"div",18),s.Rb(30,"span",19),s.Nb(31,"i",23),s.Qb(),s.Qb(),s.Rb(32,"input",24),s.dc("ngModelChange",(function(t){return e.user.password=t})),s.Qb(),s.Qb(),s.Qb(),s.Rb(33,"div",25),s.Nb(34,"input",26),s.Rb(35,"label",27),s.Rb(36,"span",28),s.Dc(37,"Remember me"),s.Qb(),s.Qb(),s.Qb(),s.Rb(38,"div",29),s.Rb(39,"button",30),s.dc("click",(function(){return e.login()})),s.Dc(40,"Sign in"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(41,"div",31),s.Rb(42,"div",32),s.Rb(43,"a",33),s.Rb(44,"small"),s.Dc(45,"Forgot password?"),s.Qb(),s.Qb(),s.Qb(),s.Rb(46,"div",34),s.Rb(47,"a",33),s.Rb(48,"small"),s.Dc(49,"Create new account"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(26),s.mc("ngModel",e.user.email)("ngModelOptions",s.pc(4,a)),s.zb(6),s.mc("ngModel",e.user.password)("ngModelOptions",s.pc(5,a)))},directives:[i.k,i.f,i.g,i.a,i.e,i.h],styles:[""]}),t})()},{path:"register",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Rb(4,"div",4),s.Rb(5,"h1",5),s.Dc(6,"Welcome!"),s.Qb(),s.Rb(7,"p",6),s.Dc(8,"Use these awesome forms to login or create new account in your project for free."),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(9,"div",7),s.gc(),s.Rb(10,"svg",8),s.Nb(11,"polygon",9),s.Qb(),s.Qb(),s.Qb(),s.fc(),s.Rb(12,"div",10),s.Rb(13,"div",3),s.Rb(14,"div",11),s.Rb(15,"div",12),s.Rb(16,"div",13),s.Rb(17,"div",14),s.Rb(18,"small"),s.Dc(19,"Sign up with"),s.Qb(),s.Qb(),s.Rb(20,"div",15),s.Rb(21,"a",16),s.Rb(22,"span",17),s.Nb(23,"img",18),s.Qb(),s.Rb(24,"span",19),s.Dc(25,"Github"),s.Qb(),s.Qb(),s.Rb(26,"a",20),s.Rb(27,"span",17),s.Nb(28,"img",21),s.Qb(),s.Rb(29,"span",19),s.Dc(30,"Google"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(31,"div",22),s.Rb(32,"div",23),s.Rb(33,"small"),s.Dc(34,"Or sign up with credentials"),s.Qb(),s.Qb(),s.Rb(35,"form",24),s.Rb(36,"div",25),s.Rb(37,"div",26),s.Rb(38,"div",27),s.Rb(39,"span",28),s.Nb(40,"i",29),s.Qb(),s.Qb(),s.Nb(41,"input",30),s.Qb(),s.Qb(),s.Rb(42,"div",25),s.Rb(43,"div",26),s.Rb(44,"div",27),s.Rb(45,"span",28),s.Nb(46,"i",31),s.Qb(),s.Qb(),s.Nb(47,"input",32),s.Qb(),s.Qb(),s.Rb(48,"div",25),s.Rb(49,"div",33),s.Rb(50,"div",27),s.Rb(51,"span",28),s.Nb(52,"i",34),s.Qb(),s.Qb(),s.Nb(53,"input",35),s.Qb(),s.Qb(),s.Rb(54,"div",36),s.Rb(55,"small"),s.Dc(56,"password strength: "),s.Rb(57,"span",37),s.Dc(58,"strong"),s.Qb(),s.Qb(),s.Qb(),s.Rb(59,"div",38),s.Rb(60,"div",39),s.Rb(61,"div",40),s.Nb(62,"input",41),s.Rb(63,"label",42),s.Rb(64,"span",43),s.Dc(65,"I agree with the "),s.Rb(66,"a",44),s.Dc(67,"Privacy Policy"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(68,"div",15),s.Rb(69,"button",45),s.Dc(70,"Create account"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb())},directives:[i.k,i.f,i.g],styles:[""]}),t})()}];o.d(e,"AuthLayoutModule",(function(){return d}));let d=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[b.b,n.d.forChild(l),i.b]]}),t})()}}]);