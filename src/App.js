import React from 'react';
import {HashRouter,Routes,Route,Link} from 'react-router-dom';
//routes child of hashrouter ..
//route is the child of route ..
//link is the child of route
import Myuser from './user.js';
import Mybook from './book.js';
import Productlist from './product.js';
import Myitem from './item.js';
import Home from './home.js';
import Footer from './footer.js';
import HookOne from './hooks/hook1.js';
import HookTwo from './hooks/hook2.js';
import HookThree from './hooks/hook3.js';
import HookFour from './hooks/hook4.js';
import HookFive from './hooks/hook5.js';
import HookSix from './hooks/hook6.js';
import HookSeven from './hooks/hook7.js';
import HookEight from './hooks/hook8.js';
import Hooknine from './hooks/hook9.js';
import HookNine from './hooks/hook9.js';
import HookEleven from './hooks/hook11.js';
import HookTwelve from './hooks/hook12.js';
import HookThirteen from './hooks/hook13.js';
import HookFourteen from './hooks/Hook14.js';
import ClassOne from './class/class1.js';
import ClassTwo from './class/class2.js';


function App(){
	return( 
<HashRouter>
	<header id ="topnav">
<nav id ="leftnav">
<Link className='mylink' to ="/"> HOME</Link>
<Link className='mylink' to ="/hook1"> HOOK-1</Link>
<Link className='mylink' to ="/hook2"> HOOK-2</Link>
<Link className='mylink' to ="/hook3"> HOOK-3</Link>
<Link className='mylink' to ="/myhook4"> HOOK-4</Link>
<Link className='mylink' to ="/myhook5"> HOOK-5</Link>
<Link className='mylink' to ="/myhook6"> HOOK-6</Link>
<Link className='mylink' to ="/myhook7"> HOOK-7</Link>
<Link className='mylink' to ="/hook8/1/ongole/ravi"> HOOK-8</Link>
<Link className='mylink' to="/user">USER</Link>
<Link className='mylink' to= "/book">BOOKS</Link>
<Link className='mylink' to ="/product">PRODUCTS</Link>
<Link className='mylink' to ="/item">ITEM</Link>
<Link className='mylink' to ="/hook12">HOOK-12</Link>
<Link className='mylink' to ="/hook13">HOOK-13</Link>
</nav>
<nav id ="rightnav">
<Link className='mylink' to='/class1'>CLASS-1</Link>
<Link className='mylink' to='/class2'>CLASS-2</Link>	
<Link className='mylink' to ="/hook9"> PROPS</Link>
<Link className='mylink' to ="/hook11">API</Link>
</nav>
</header>
<section id ="pagedata">
<Routes>
           <Route exact path ="/" element ={<Home/>}/>
		   <Route exact path ="/hook1" element ={<HookOne/>}/>
		   <Route exact path ="/hook2" element ={<HookTwo/>}/>
		   <Route exact path ="/hook3" element ={<HookThree/>}/>
		   <Route exact path ="/myhook4" element ={<HookFour/>}/>
		   <Route exact path ="/myhook5" element ={<HookFive/>}/>
		   <Route exact path ="/myhook6" element ={<HookSix/>}/>
		   <Route exact path ="/myhook7" element ={<HookSeven/>}/>
		   <Route exact path ="/hook8/:userid/:city/:name" element ={<HookEight/>}/>
		   <Route exact path ="/hook9" element ={<HookNine/>}/>
		   <Route exact path ="/hook11" element ={<HookEleven/>}/>
		   <Route exact path ="/hook12" element ={<HookTwelve/>}/>
		   <Route exact path ="/hook14/:bookid" element ={<HookFourteen/>}/>
		   <Route exact path ="/class1" element ={<ClassOne/>}/>
		   <Route exact path ="/class2" element ={<ClassTwo/>}/>


			<Route exact path ="/user" element ={<Myuser/>}/>
			<Route exact path ="/book" element ={<Mybook/>}/>                         
			<Route exact path ="/product" element ={<Productlist/>}/>                                
			<Route exact path ="/item"   element ={<Myitem/>}/>
			</Routes>
</section>
		<Footer/>
		</HashRouter>
	)
}

export default App;
