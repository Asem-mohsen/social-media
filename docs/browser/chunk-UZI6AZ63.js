import{$a as i,Ca as n,Da as f,Jb as y,S as c,Ua as u,Ub as E,Ya as v,Z as l,Za as g,_a as C,ab as a,bb as h,ib as s,jb as p,pb as x,qb as I,rb as S,za as d}from"./chunk-T3CNMHQW.js";import"./chunk-TMC7WMLO.js";function _(t,e){if(t&1&&(i(0,"div",1)(1,"div",2),h(2,"img",3),i(3,"h5"),s(4),a(),i(5,"span",4),s(6),I(7,"date"),a()(),i(8,"p"),s(9),a()()),t&2){let r=e.$implicit;n(2),u("src",r.commentCreator.photo,d),n(2),p(r.commentCreator.name),n(2),p(S(7,4,r.createdAt)),n(3),p(r.content)}}var w=(()=>{let e=class e{constructor(o){this._commentService=o,this.postId="",this.allComments=[]}ngOnChanges(){this._commentService.getComments(this.postId).subscribe({next:o=>{this.allComments=o.comments}})}};e.\u0275fac=function(m){return new(m||e)(f(E))},e.\u0275cmp=c({type:e,selectors:[["app-post-comments"]],inputs:{postId:"postId"},standalone:!0,features:[l,x],decls:3,vars:0,consts:[[1,"flex","flex-col","gap-3"],[1,"bg-slate-200","p-5","rounded-lg"],[1,"flex","gap-1","items-center"],[1,"w-8","rounded-full",3,"src"],[1,"text-gray-500","font-light"]],template:function(m,F){m&1&&(i(0,"div",0),g(1,_,10,6,"div",1,v),a()),m&2&&(n(),C(F.allComments))},dependencies:[y]});let t=e;return t})();export{w as PostCommentsComponent};
