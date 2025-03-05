
// document.getElementById("box").value='Premalatha';
const ip=document.getElementById("box");
let val='';
const a=document.getElementById("clear");
a.onclick=clearfn;
function clearfn(){
    ip.value='';
}
const b=document.getElementById("del");
b.onclick=delfn;
function delfn(){
 val=ip.value;
 if (val.length>0){
 ip.value=val.substring(0,(val.length)-1);
 }
}
const c=document.getElementById("num1");          
c.onclick=numfn1;
function numfn1(){
    val=ip.value;
    ip.value=val+'1';
}
const d=document.getElementById("num2");
d.onclick=numfn2;
function numfn2(){
    val=ip.value;
    ip.value=val+'2';
}
const e=document.getElementById("num3");
e.onclick=numfn3;
function numfn3(){
    val=ip.value;
    ip.value=val+'3';
}
const f=document.getElementById("num4");
f.onclick=numfn4;
function numfn4(){
    val=ip.value;
    ip.value=val+'4';
}
const g=document.getElementById("num5");
g.onclick=numfn5;
function numfn5(){
    val=ip.value;
    ip.value=val+'5';
}
const h=document.getElementById("num6");
h.onclick=numfn6;
function numfn6(){
    val=ip.value;
    ip.value=val+'6';
}
const i=document.getElementById("num7");
i.onclick=numfn7;
function numfn7(){
    val=ip.value;
    ip.value=val+'7';
}
const j=document.getElementById("num8");
j.onclick=numfn8;
function numfn8(){
    val=ip.value;
    ip.value=val+'8';
}
const k=document.getElementById("num9");
k.onclick=numfn9;
function numfn9(){
    val=ip.value;
    ip.value=val+'9';
}
const l=document.getElementById("num0");
l.onclick=numfn0;
function numfn0(){
    val=ip.value;
    ip.value=val+'0';
}
let op1,op2,len;
const add=document.getElementById("add");
add.onclick=addfn;
function addfn(){
    val=ip.value;
    len=val.length;
    op1=parseFloat(val);
    ip.value=val+'+';
}
const sub=document.getElementById("sub");
sub.onclick=subfn;
function subfn(){
    val=ip.value;
    len=val.length;
    op1=parseFloat(val);
    ip.value=val+'-';
}
const mul=document.getElementById("mul");
mul.onclick=mulfn;
function mulfn(){
    val=ip.value;
    len=val.length;
    op1=parseFloat(val);
    ip.value=val+'*';
}
const div=document.getElementById("div");
div.onclick=divfn;
function divfn(){
    val=ip.value;
    len=val.length;
    op1=parseFloat(val);
    ip.value=val+'/';
}
const mod=document.getElementById("mod");
mod.onclick=modfn;
function modfn(){
    val=ip.value;
    len=val.length;
    op1=parseFloat(val);
    ip.value=val+'%';
}
const pow=document.getElementById("pow");
pow.onclick=powfn;
function powfn(){
    val=ip.value;
    len=val.length;
    op1=parseFloat(val);
    ip.value=val+'^';
}
const dot=document.getElementById("dot");
dot.onclick=dotfn;
function dotfn(){
    val=ip.value;
    ip.value=val+'.';
}
const ans=document.getElementById("eql");
ans.onclick=ansfn;
function ansfn(){
   val=ip.value;
   let str=val.substring(len+1,val.length);
   op2=parseFloat(str);
   let ch=val[len];
   let res;
   switch(ch){
    case '+':
        res=op1+op2;
    break;
    case '-':
        res=op1-op2;
    break;
    case '*':
        res=op1*op2;
    break;
    case '/':
        res=op1/op2;
    break;
    case '%':
        res=op1%op2;
    break;
    default: //^
        res=1;
        for(let i=1;i<=op2;i++){
            res*=op1;
        }
    break;
   }
   ip.value=val+"="+res;
}