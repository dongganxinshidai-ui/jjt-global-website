import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MOCK_COMPANY } from "@/data/company";


import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner2.jpg";
import banner3 from "@/assets/banner/banner3.jpg";



export default function HeroSection() {


const banners = [
banner1,
banner2,
banner3,
];


const [current,setCurrent] = useState(0);



useEffect(()=>{


const timer=setInterval(()=>{


setCurrent(prev=>

prev===banners.length-1

?

0

:

prev+1

);


},5000);



return ()=>clearInterval(timer);


},[]);




return (

<section

className="
relative
min-h-screen
flex
items-center
justify-center
overflow-hidden
"

aria-label="JJT GLOBAL China Export Supplier"


>


{/* Background */}

<div

className="
absolute
inset-0
bg-cover
bg-center
transition-all
duration-1000
"

style={{

backgroundImage:`url(${banners[current]})`

}}


/>



{/* Overlay */}

<div

className="
absolute
inset-0
bg-black/55
"

/>





<div

className="
relative
z-10
container
mx-auto
px-6
py-32
"

>


<div

className="
max-w-5xl
mx-auto
text-center
"

>



<h1

className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
font-bold
text-white
leading-tight
mb-6
"

>


QINGDAO JUNJIETAI


<br/>


<span className="text-amber-400">

INTERNATIONAL TRADE

</span>


<br/>


China Export Supplier


</h1>





<p

className="
text-lg
md:text-xl
text-white/90
leading-relaxed
max-w-4xl
mx-auto
mb-10
"

>


JJT GLOBAL is a professional China export company
specializing in


<strong>

&nbsp;China Used Cars Export,
New Energy Vehicles,
Steel Structure Buildings,
Construction Machinery
and Industrial Products.

</strong>



<br/>


We provide reliable sourcing,
quality inspection,
export documentation
and international logistics solutions
for global buyers.


</p>





<div

className="
flex
flex-col
sm:flex-row
justify-center
gap-5
mb-16
"

>



<Link

to="/auto"

className="
inline-flex
items-center
justify-center
gap-2
rounded-lg
bg-amber-400
text-black
px-8
py-4
font-semibold
hover:bg-amber-300
transition
"

>


Explore Used Cars Export


<ArrowRight

className="w-5 h-5"

/>


</Link>





<Link

to="/contact"

className="
inline-flex
items-center
justify-center
gap-2
rounded-lg
border-2
border-white/60
text-white
px-8
py-4
font-semibold
hover:bg-white/20
transition
"

>


Request Export Quote


</Link>



</div>







{/* Statistics */}


<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-6
"

>


<Stat

number={`${MOCK_COMPANY.yearsOfExperience}+`}

text="Years China Export Experience"

/>



<Stat

number={`${MOCK_COMPANY.countriesServed}+`}

text="Countries Served"

/>



<Stat

number="500+"

text="Product Categories"

/>



<Stat

number="24H"

text="Fast Response Service"

/>



</div>




</div>


</div>






{/* Banner dots */}


<div

className="
absolute
bottom-24
left-0
right-0
flex
justify-center
gap-3
"

>


{

banners.map((_,index)=>(


<button

key={index}

onClick={()=>setCurrent(index)}

aria-label={`Switch banner ${index+1}`}


className={`

w-3
h-3
rounded-full

${

current===index

?

"bg-amber-400"

:

"bg-white/50"

}

`}

/>


))

}



</div>






{/* Bottom Wave */}

<div

className="
absolute
bottom-0
left-0
right-0
"

>


<svg

viewBox="0 0 1440 120"

fill="none"

xmlns="http://www.w3.org/2000/svg"

>


<path

d="
M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z
"

className="fill-background"

/>


</svg>


</div>




</section>


)

}





function Stat({

number,

text

}:{

number:string,

text:string

}){


return (

<div

className="
text-white
text-center
"

>


<div

className="
text-3xl
font-bold
"

>

{number}


</div>



<div

className="
text-sm
text-white/70
mt-2
"

>

{text}


</div>


</div>


)


}