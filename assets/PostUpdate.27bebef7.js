import{B as r,p as n,_ as p,c,d as a,a as s,l as u,v as m,r as i,o as h}from"./index.7afeda18.js";import{E as _}from"./Editor.ea107c28.js";const b={components:{BookList:r,Editor:_},data(){return{book:[],post:{},title:null,content:null}},methods:{showHeaderAndFooter(){this.$emit("isShowHeaderAndFooter",!0)},async updatePost(){const t={title:this.title,content:this.content},o=(await n.update(this.post.slug,t)).post.slug;console.log(o),this.$router.push({name:"post.details",params:{slug:o}})}},async created(){this.post=(await n.get(this.$route.params.slug)).post,this.book.push(await this.post.book),this.title=this.post.title,this.content=this.post.content},mounted(){this.showHeaderAndFooter()}};const v={class:"container row mt-4"},k={class:"col-8 mt-1"},g={class:"input-group mb-3"},f={class:"input-group-append"};function w(t,o){const l=i("BookList"),d=i("editor");return h(),c("div",v,[a(l,{books:t.book,class:"col-3"},null,8,["books"]),s("div",k,[s("div",g,[u(s("input",{type:"text",class:"form-control",placeholder:"Ti\xEAu \u0111\u1EC1 b\xE0i vi\u1EBFt","aria-label":"title-post","aria-describedby":"basic-addon2","onUpdate:modelValue":o[0]||(o[0]=e=>t.title=e)},null,512),[[m,t.title]]),s("div",f,[s("button",{onClick:o[1]||(o[1]=(...e)=>t.updatePost&&t.updatePost(...e)),class:"btn btn-outline-primary",type:"button"}," C\u1EADp nh\u1EADt b\xE0i vi\u1EBFt ")])]),a(d,{class:"edit-container",modelValue:t.content,"onUpdate:modelValue":o[2]||(o[2]=e=>t.content=e)},null,8,["modelValue"])])])}const V=p(b,[["render",w],["__scopeId","data-v-e3d27c96"]]);export{V as default};
