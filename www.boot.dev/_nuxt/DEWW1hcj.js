import{_ as R}from"./CsS1LiK0.js";import{d as q}from"./BQ1Pr_bT.js";import{_ as A,a as V}from"./BQuN4aJL.js";import{d as $,E as B,I as F,N as W,j as a,r as G,u as H,l as J,c as p,w as u,o as m,b as l,a as o,A as _,n as v,C as i,e as c,_ as M,P as Q}from"./Djz0RQIo.js";import{_ as z}from"./BNUTj2TH.js";import{_ as Y}from"./CHlI8V3o.js";import{_ as X}from"./HT-jZiGK.js";import"./D6Ho5i_A.js";import"./CeWElIlH.js";import"./BUi9Q6PF.js";import"./CeI-xotQ.js";import"./mEd-U4yU.js";import"./BqYrpIRu.js";import"./DMbg0n8b.js";import"./CBLkfl4i.js";import"./DZoQ3b5Q.js";import"./DFdf6COF.js";import"./DvE5EybM.js";import"./0YUWycGk.js";import"./CSmVOpRL.js";import"./I2833azj.js";import"./Hp647MZf.js";const K={class:"relative"},Z={class:"right-4 top-2 z-elevated m-4 flex flex-row justify-center md:absolute md:block"},ee={class:"flex max-w-3xl flex-col gap-4 p-4 text-left md:p-8"},ke=$({__name:"[lang]",setup(te){const{isLoggedIn:h}=B(F()),d=t=>t==="go"?[{Name:"main.go",Content:`package main

import "fmt"

func main(){
	fmt.Println("hello, world")
	fmt.Println(add(1, 2))
}
`},{Name:"utils.go",Content:`package main

func add(a int, b int) int {
	return a + b
}
`}]:t==="js"?[{Name:"main.js",Content:`console.log("hello, world")
`}]:t==="ts"?[{Name:"main.ts",Content:`const exampleVariable: string = "hello, world"
console.log(exampleVariable)
`},{Name:"tsconfig.json",IsReadonly:!0,Content:`{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowJs": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noImplicitAny": false
  }
}
`}]:t==="py"?[{Name:"main.py",Content:`print("hello, world")

# We use a Python interpreter that's compiled to Web Assembly
# to run code right in your browser using a web worker
`}]:t==="sql"?[{Name:"main.sql",Content:`CREATE TABLE users (id INTEGER, name TEXT, age INTEGER, is_admin BOOLEAN);
INSERT INTO users (id, name, age, is_admin) VALUES (1, 'John Doe', 21, false);
INSERT INTO users (id, name, age, is_admin) VALUES (2, 'Sally Rae', 18, true);
SELECT * FROM users;
`}]:t==="c"?[{Name:"main.c",Content:`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`}]:t==="lua"?[{Name:"main.lua",Content:'print("hello, world")'}]:[],w=W(),e=a(()=>w.params.lang),s=G(d(e.value)),g={py:{name:"Python",link:{path:"/playground/py"}},go:{name:"Golang",link:{path:"/playground/go"}},js:{name:"JavaScript",link:{path:"/playground/js"}},ts:{name:"TypeScript",link:{path:"/playground/ts"}},sql:{name:"SQL",link:{path:"/playground/sql"}},c:{name:"C",link:{path:"/playground/c"}},lua:{name:"Lua",link:{path:"/playground/lua"}}},C=Object.values(g),E=a(()=>{switch(e.value){case"py":return"Python 3 and web assembly";case"go":return"Golang and web assembly";case"js":return"JavaScript that runs in your browser";case"ts":return"TypeScript that runs in your browser";case"sql":return"SQLite that runs on our server";case"c":return"C and web assembly";case"lua":return"Lua and web assembly";default:return"404"}}),f=a(()=>{switch(e.value){case"py":return"Online Python Compiler - Interpreter and Playground";case"go":return"Online Golang Playground - Compiler, Interpreter and Editor";case"js":return"Online JavaScript Compiler - Interpreter and Playground";case"ts":return"Online TypeScript Playground - Compiler, Interpreter and Editor";case"sql":return"Online SQL Editor - Compiler, IDE, and Playground";case"c":return"Online C Compiler - IDE, Editor and Playground";case"lua":return"Online Lua Compiler - Interpreter, Playground and IDE";default:return"404"}}),y=a(()=>{switch(e.value){case"py":return"/courses/learn-code-python";case"go":return"/courses/learn-golang";case"js":return"/courses/learn-javascript";case"ts":return"/courses/learn-typescript";case"sql":return"/courses/learn-sql";case"c":return"/courses/learn-memory-management-c";case"lua":return;default:return}}),k=a(()=>{switch(e.value){case"py":return;case"go":return"3b39d0f6-f944-4f1b-832d-a1daba32eda4";case"js":return"2af5c197-21eb-48b4-bd90-b0d59adb311e";case"ts":return"95d9af8c-aabb-4c13-b68a-d4b05c4ec959";case"sql":return"bc0dc34b-025a-4d97-b7a0-382aa21533aa";case"c":return"8926592f-99b6-4398-a02f-f52e20677f64";case"lua":return;default:return}}),r=a(()=>g[e.value]),I=a(()=>r.value?.name?`Compile and run ${r.value?.name} code in the browser in our free code playground. Debug, edit and execute your programs in a syntax-highlighted online IDE.`:"");H({title:f,description:I,featuredImageURL:"https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/a0YjLIB.png"}),J(()=>{e.value&&(s.value=d(e.value))});const x=()=>{s.value=d(e.value)},N=t=>{t.link&&Q(t.link)};return(t,n)=>{const S=R,L=q,b=A,T=M,P=z,O=Y,D=V,j=X;return m(),p(j,null,{default:u(()=>[l("div",K,[l("div",Z,[o(S,{options:v(C),"default-selection":r.value,class:"max-w-full rounded-sm border border-gray-500 md:w-auto","onUpdate:modelValue":N},null,8,["options","default-selection"])]),s.value.length>0?(m(),p(L,{key:0,"source-type":"lesson","current-files":s.value,class:"bg-image-blue h-[75vh] border-b border-gray-600","reset-callback":x,"prog-lang":e.value,"enable-lsp":e.value==="py","onUpdate:currentFiles":n[0]||(n[0]=U=>s.value=U)},null,8,["current-files","prog-lang","enable-lsp"])):_("",!0)]),o(b,{gem:""}),o(O,{title:f.value,subtitle:`Edit, run and debug ${r.value.name} code online for free! Powered by ${E.value}`,"is-h1":"",class:"bg-image-black pt-16 md:pt-0"},{main:u(()=>[l("div",ee,[l("p",null," Customize the "+i(r.value.name)+" code above and run it! We built this online "+i(e.value)+" code runner as a place to quickly execute "+i(r.value.name)+" scripts online in the browser. I hope you find it useful too! ",1),l("p",null,[n[1]||(n[1]=c(" If you'd like to improve your skills, we also have a ",-1)),o(T,{class:"textlink",to:y.value??"/"},{default:u(()=>[c("full "+i(y.value?r.value.name:"")+" course here",1)]),_:1},8,["to"]),n[2]||(n[2]=c(" for you to check out. You can demo the course without logging in by clicking below. ",-1))]),v(h)?_("",!0):(m(),p(P,{key:0,courseUUID:k.value},{default:u(()=>[...n[3]||(n[3]=[c("DEMO THE COURSE FREE",-1)])]),_:1},8,["courseUUID"]))])]),_:1},8,["title","subtitle"]),o(b),o(D)]),_:1})}}});export{ke as default};
