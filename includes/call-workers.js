"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("hypercritical-worker.js").catch((e=>console.log("Error:",e)))})),navigator.serviceWorker.addEventListener("controllerchange",(()=>{"complete"===document.readyState&&window.location.reload()}));