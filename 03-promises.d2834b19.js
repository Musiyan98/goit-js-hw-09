!function(){var e=document.querySelector(".form"),n=1,t=Number(0);function o(e,n){var t=Math.random()>.3;return new Promise((function(o,c){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):c("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}function c(e,n,t){e.then((function(){console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(){console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}e.addEventListener("submit",(function(u){u.preventDefault();for(var i=Number(e.elements.step.value),m=Number(e.elements.delay.value),a=Number(e.elements.amount.value),r=0;r<a;r++)c(o(n,t+=1===n?m:i),n,t),n++}))}();
//# sourceMappingURL=03-promises.d2834b19.js.map