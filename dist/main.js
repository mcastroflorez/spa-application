(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Error fetch",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n        <div class="error-404">\n            <h2>Error 404</h2>\n        </div>\n    ',s={"/":async()=>`\n        <div class="characters">\n\n            ${(await a()).results.map((n=>`\n                <article class="character-item">\n                    <a href="#/${n.id}/">\n                        <img src=${n.image} alt=${n.name}>\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n                `)).join("")}\n            \n        </div>\n    `,":id":async()=>{const n=e(),t=await a(n);return`\n        <div class="character-inner">\n            <article class="characters-card">\n                <img src="${t.image}" alt="${t.name}">\n                <h2>${t.name}</h2>\n            </article>\n            <article class="characters-card">\n                <section class="characters-info"> \n                    <h3>Episodes: ${t.episode.length}</h3>\n                    <h3>Status: ${t.status}</h3>\n                    <h3>Species: ${t.species}</h3>\n                    <h3>Gender: ${t.gender}</h3>\n                    <h3>Origin: ${t.origin.name}</h3>\n                    <h3>Last Location: ${t.location.name}</h3>\n                </section>\n            </article>\n        </div>\n    `},about:()=>'\n        <div class="about-main">\n\n            <a href="#/asdfg">\n                CLICK HERE AND YOU\'LL SEE ERROR PAGE\n            </a>\n        </div>\n    '},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="header-main">\n            <div class="header-logo">\n                <h1>\n                    <a href="/">\n                        Ricky Morty\n                    </a>\n                </h1>\n            </div>\n\n            <div class="header-nav">\n                <a href="#/about">\n                    about\n                </a>\n            </div>\n        </div>\n    ',console.log("cambio de hash");let c=await e();console.log("este es el hash "+c);let i=await(n=>n.length<=3?"/"===n?n:":id":`${n}`)(c);console.log(`este es route ${i}`);let r=s[i]?s[i]:t;console.log(r()),a.innerHTML=await r()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();