import{B as r,p as d,e as c,_ as p,c as u,d as n,a as s,l as m,v as b,r as a,o as _}from"./index.7afeda18.js";import{E as h}from"./Editor.ea107c28.js";const v={components:{BookList:r,Editor:h},data(){return{book:[],post:{},title:null,content:null}},computed:{slug(){return localStorage.getItem("bwcp")}},methods:{showHeaderAndFooter(){this.$emit("isShowHeaderAndFooter",!0)},async addPost(){const t={title:this.title,content:this.content,book:this.book[0]._id},o=(await d.create(t)).post.slug;this.$router.push({name:"post.details",params:{slug:o}})}},async created(){this.book.push(await c.get(this.slug))},mounted(){this.showHeaderAndFooter()}};const k={class:"container row mt-4"},f={class:"col-8 mt-1"},g={class:"input-group mb-3"},w={class:"input-group-append"};function y(t,o){const i=a("BookList"),l=a("editor");return _(),u("div",k,[n(i,{books:t.book,class:"col-3"},null,8,["books"]),s("div",f,[s("div",g,[m(s("input",{type:"text",class:"form-control",placeholder:"Ti\xEAu \u0111\u1EC1 b\xE0i vi\u1EBFt","aria-label":"title-post","aria-describedby":"basic-addon2","onUpdate:modelValue":o[0]||(o[0]=e=>t.title=e)},null,512),[[b,t.title]]),s("div",w,[s("button",{onClick:o[1]||(o[1]=(...e)=>t.addPost&&t.addPost(...e)),class:"btn btn-outline-primary",type:"button"}," T\u1EA1o b\xE0i vi\u1EBFt ")])]),n(l,{class:"edit-container",modelValue:t.content,"onUpdate:modelValue":o[2]||(o[2]=e=>t.content=e)},null,8,["modelValue"])])])}const P=p(v,[["render",y],["__scopeId","data-v-65c677f4"]]);export{P as default};
