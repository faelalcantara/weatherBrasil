var n=(s,i,a)=>new Promise((p,e)=>{var c=t=>{try{r(a.next(t))}catch(h){e(h)}},o=t=>{try{r(a.throw(t))}catch(h){e(h)}},r=t=>t.done?p(t.value):Promise.resolve(t.value).then(c,o);r((a=a.apply(s,i)).next())});export default class b{constructor(){this.apiKey="1414ba56a14dbf67746a1932cb8b6b41"}fetchWeatherData(i,a){return n(this,null,function*(){const p=`https://api.openweathermap.org/data/2.5/${a}?id=${i}&units=imperial&appid=${this.apiKey}`;return fetch(p).then(e=>e.json()).then(e=>e)})}}
