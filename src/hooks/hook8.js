import React from "react";
import{Link,useParams} from 'react-router-dom';
import HookNine from "./hook9";//1.. folder back//. curent folder.

const HookEight=()=>{
    const{userid,city,name}=useParams();
return (
<div className="container mt-4">
    <div className="row">
<div className="col-lg-3">
<p><Link to ="/hook8/1/ongole/ravi">ravi</Link></p>
<p><Link to ="/hook8/2/pune/teja">teja</Link></p>
<p><Link to ="/hook8/3/goa/srikanth">srikanth</Link></p>
<p><Link to ="/hook8/4/punjab/charan">charan</Link></p>
<p><Link to ="/hook8/5/jalandhar/vishnu">vishnu</Link></p>
<p><Link to ="/hook8/6/phagwara/karthik">karthik</Link></p>
</div>
<div className="col-lg-9">
<p>Full Name:<h1>{name}</h1></p>
<p>user id:{userid}</p>
<h1>City Name:{city}</h1>
<h6>React props Example</h6>
<div className="row mt-4">

    <HookNine fullname="raviteja chowdary" age ="22" gender="male"/>
    <HookNine fullname="srikanth chowdary" age ="23" gender="male"/>
    <HookNine fullname="ramesh chowdary" age ="21" gender="male"/>
    <HookNine fullname="rambabu chowdary" age ="27" gender="male"/>
    <HookNine fullname="rakesh chowdary" age ="67" gender="male"/>
    <HookNine fullname="vishnu chowdary" age ="42" gender="male"/>
    <HookNine fullname="vijay chowdary" age ="24" gender="male"/>
    

</div>

</div>     
</div>
</div>

);
}
export default HookEight;