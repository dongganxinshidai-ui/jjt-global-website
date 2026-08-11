import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "@/assets/images/JJT-logo.png";


const navItems = [

{
label:"Home",
path:"/",
},

{
label:"About JJT",
path:"/about",
},

{
label:"JJT Auto",
path:"/auto",
},

{
label:"JJT Steel",
path:"/steel",
},

{
label:"Machinery",
path:"/machinery",
},

{
label:"Contact",
path:"/contact",
},

];



export default function Header(){


const [mobileOpen,setMobileOpen]=useState(false);



return (

<header

className="
fixed
top-0
left-0
w-full
z-50
bg-white/95
backdrop-blur
shadow-sm
"

>


<div

className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
"

>



{/* Logo */}

<Link

to="/"

className="
flex
items-center
gap-3
"

>


<img

src={logo}

alt="JJT GLOBAL - QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD."

className="
w-14
h-14
object-contain
"

/>



<div>


<div

className="
text-xl
font-bold
text-gray-900
"

>

JJT GLOBAL

</div>



<div

className="
text-[11px]
text-gray-600
leading-tight
"

>

QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.

</div>



<div

className="
text-[11px]
text-gray-500
leading-tight
"

>

青岛君杰泰进出口贸易有限公司

</div>



</div>


</Link>








{/* Desktop Navigation */}


<nav

className="
hidden
lg:flex
items-center
gap-7
"

>


{

navItems.map((item)=>(


<NavLink

key={item.path}

to={item.path}

className={({isActive})=>


`

text-sm
font-medium
transition

${
isActive
?
"text-blue-600"
:
"text-gray-700 hover:text-blue-600"
}

`

}


>

{item.label}


</NavLink>


))

}



</nav>









{/* Mobile Button */}


<button

className="
lg:hidden
"

onClick={()=>setMobileOpen(!mobileOpen)}

>


{

mobileOpen

?

<X size={28}/>

:

<Menu size={28}/>

}


</button>




</div>









{/* Mobile Menu */}


{

mobileOpen &&


<div

className="
lg:hidden
bg-white
border-t
px-6
py-5
"

>


<nav

className="
flex
flex-col
gap-5
"

>


{

navItems.map((item)=>(


<Link

key={item.path}

to={item.path}

onClick={()=>setMobileOpen(false)}

className="
text-gray-700
font-medium
hover:text-blue-600
"

>

{item.label}


</Link>


))


}



</nav>


</div>


}



</header>


);


}