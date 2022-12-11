import{B as g,P as _,p as r,_ as w,c as l,a as o,d as c,t as n,b as m,i as d,n as v,j as k,F as P,r as u,o as i,g as b,h as y}from"./index.7afeda18.js";import{P as S}from"./Popup.2d4fb194.js";const C={components:{BookList:g,PostList:_,Popup:S},data(){return{book:[],post:{title:"",author:"",updatedAt:"",viewsQuantity:""},action:"none",status:"",isShowPopup:!1,isAuthor:!1}},computed:{showChangePost(){return this.isAuthor},selectedvote(){return this.action},message(){return this.status}},methods:{hidePopup(){this.isShowPopup=!1},getTime(t){var s=new Date(t);return s=s.toLocaleDateString("en-GB"),s},gotoUserView(){const t=this.post.author._id;this.$router.push({name:"user.view",params:{id:t}})},hideHeaderAndFooter(){this.$emit("isShowHeaderAndFooter",!0)},async votePost(t){try{const s={action:t},a=await r.votePost(this.post._id,s);a!==void 0&&(this.post.vote=a.point,this.action=a.action),console.log(this.action)}catch(s){console.log("\u{1F480}ERROR"),s.response.data.message==="You are not allowed to vote because you are the author"&&this.sendErrorMessage("B\u1EA1n kh\xF4ng th\u1EC3 vote khi l\xE0 ch\u1EE7 b\xE0i vi\u1EBFt")}},async deletePost(){await r.delete(this.post.slug),await this.$router.push({name:"home"})},updatePost(){const t=this.post.slug;localStorage.setItem("pwu",t),this.$router.push({name:"post.update",params:{slug:t}})},checkAuthor(){if(localStorage.User){const t=JSON.parse(localStorage.User)._id;t&&t===this.post.author._id&&(this.isAuthor=!0)}},sendErrorMessage(t){console.log("chay loi"),this.status=t,this.isShowPopup=!0}},async created(){const t=await r.get(this.$route.params.slug);this.post=t.post,this.checkAuthor(),t.myVote&&t.myVote.voter_id&&(this.action=t.myVote.action),this.book.push(await this.post.book)},mounted(){this.hideHeaderAndFooter()}};const p=t=>(b("data-v-b8f45c9e"),t=t(),y(),t),V={class:"container row mt-4"},A={class:"col-3"},B={class:"col-8 mt-1"},L={class:"info-section"},$={class:"author-section flex-center"},I={class:"avatar avatar-user"},F=["src"],H={class:"author-text ml-2"},N={class:"update-date ml-3"},T=p(()=>o("span",{class:"title-info"},"Last updated: ",-1)),U={class:"view-post ml-3"},E=p(()=>o("span",{class:"title-info"},"Views: ",-1)),M=p(()=>o("hr",null,null,-1)),D={class:"content-section mt-4 row"},R={class:"vote-container col-1"},O={class:"point-vote"},Q=["innerHTML"];function j(t,s){const a=u("BookList"),h=u("font-awesome-icon"),f=u("Popup");return i(),l(P,null,[o("div",V,[o("div",A,[c(a,{books:t.book,class:"book-container"},null,8,["books"])]),o("div",B,[o("h2",null,n(t.post.title),1),o("div",L,[o("div",$,[o("div",{class:"flex-center",onClick:s[0]||(s[0]=(...e)=>t.gotoUserView&&t.gotoUserView(...e))},[o("div",I,[o("img",{class:"h-100",alt:"avt user",src:t.post.author.avatar},null,8,F)]),o("span",H,[o("strong",null,n(t.post.author.name),1)])]),o("span",N,[T,m(" "+n(t.getTime(t.post.updatedAt)),1)]),o("span",U,[E,m(" "+n(t.post.viewsQuantity),1)]),t.showChangePost?(i(),l("span",{key:0,onClick:s[1]||(s[1]=(...e)=>t.updatePost&&t.updatePost(...e)),class:"btn btn-outline-secondary btn-round ml-3"}," S\u1EEDa b\xE0i vi\u1EBFt ")):d("",!0),t.showChangePost?(i(),l("span",{key:1,onClick:s[2]||(s[2]=(...e)=>t.deletePost&&t.deletePost(...e)),class:"btn btn-outline-danger btn-round ml-3"}," X\xF3a b\xE0i vi\u1EBFt ")):d("",!0)])]),M,o("div",D,[o("div",R,[c(h,{icon:"fa-solid fa-caret-up",class:v(t.action==="like"?"fa-vote fa-like selected":"fa-vote fa-like"),onClick:s[3]||(s[3]=e=>t.votePost("like"))},null,8,["class"]),o("p",O,n(t.post.vote),1),c(h,{icon:"fa-solid fa-caret-down ",class:v(t.action==="hate"?"fa-vote fa-hate selected":"fa-vote fa-hate"),onClick:s[4]||(s[4]=e=>t.votePost("hate"))},null,8,["class"])]),o("div",{class:"content-text col-11",innerHTML:t.post.content},null,8,Q)])])]),t.isShowPopup?(i(),k(f,{key:0,onCancel:t.hidePopup,message:t.message},null,8,["onCancel","message"])):d("",!0)],64)}const J=w(C,[["render",j],["__scopeId","data-v-b8f45c9e"]]);export{J as default};
