import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-A92OCY9B.js";const s=document.querySelector(".form"),m=document.querySelector("input[name=delay]");s.addEventListener("submit",n);function n(e){e.preventDefault();const o=Number(m.value),i=document.querySelector('input[name="state"]:checked').value;u(o,i).then(({delay:t})=>{r.success({timeout:2e3,position:"topRight",title:"OK",message:`✅ Fulfilled promise  in ${t}ms`})}).catch(({delay:t})=>{r.error({timeout:2e3,position:"topRight",title:"Error",message:`❌ Rejected promise  in ${t}ms`})}),s.reset()}function u(e,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i({delay:e}):t({delay:e})},e)})}
//# sourceMappingURL=2-snackbar.js.map
