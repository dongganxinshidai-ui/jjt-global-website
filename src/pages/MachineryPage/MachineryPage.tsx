import {
  Truck,
  Factory,
  Globe2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";


import machineryBanner from "@/assets/images/machinery/banner.jpg";

import excavatorImage from "@/assets/images/machinery/excavator.jpg";
import loaderImage from "@/assets/images/machinery/loader.jpg";
import miningImage from "@/assets/images/machinery/mining.jpg";
import generatorImage from "@/assets/images/machinery/generator.jpg";
import shippingImage from "@/assets/images/machinery/shipping.jpg";



export default function MachineryPage() {


const products=[

{
title:"Excavators",
image:excavatorImage,
desc:
"China excavator export service including crawler excavators and construction machines for global projects."
},


{
title:"Wheel Loaders",
image:loaderImage,
desc:
"Reliable Chinese wheel loaders and heavy equipment solutions for construction and mining industries."
},


{
title:"Mining Equipment",
image:miningImage,
desc:
"Mining machinery, crushing equipment and industrial solutions supplied from China."
},


{
title:"Diesel Generator Sets",
image:generatorImage,
desc:
"Large mining generators and industrial power equipment for international markets."
}

];



const advantages=[

"Authorized Chinese machinery brands cooperation",

"Professional machinery sourcing and inspection",

"Competitive factory direct pricing",

"Complete export documentation service",

"Global shipping and logistics support"

];



return (

<div className="bg-white">



{/* Hero Banner */}


<section

className="
relative
min-h-[650px]
flex
items-center
bg-cover
bg-center
text-white
"

style={{

backgroundImage:`url(${machineryBanner})`

}}

>


<div className="
absolute
inset-0
bg-black/50
"/>



<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
w-full
">


<div className="max-w-4xl">


<h1

className="
text-5xl
md:text-6xl
font-bold
leading-tight
mb-6
"

>

China Construction Machinery Export Partner

<br/>

JJT Global Machinery Solutions


</h1>


<p

className="
text-xl
text-gray-200
leading-relaxed
mb-8
"

>

QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
provides professional China construction machinery export
services, including excavators, loaders, mining equipment,
generators and industrial machinery.


</p>


<a

href="/contact"

className="
inline-block
bg-white
text-blue-700
px-8
py-4
rounded-lg
font-semibold
"

>

Request Machinery Quote

</a>


</div>


</div>


</section>









{/* Introduction */}



<section className="py-20 px-6">


<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">



<div>


<h2 className="
text-4xl
font-bold
mb-6
">

Professional Chinese Heavy Equipment Supplier


</h2>


<p className="
text-gray-600
leading-relaxed
mb-5
">

JJT Global specializes in exporting Chinese construction
machinery and industrial equipment to overseas markets.


</p>


<p className="
text-gray-600
leading-relaxed
">

We cooperate with reliable Chinese manufacturers and
provide complete solutions including machinery sourcing,
quality inspection, export documents and international
transportation.


</p>


</div>



<div className="
bg-gray-100
rounded-2xl
p-10
">


<h3 className="
text-2xl
font-bold
mb-6
">

Machinery Export Capability

</h3>


<div className="space-y-4">


{

advantages.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-3
"

>


<CheckCircle2

className="text-blue-600"

/>


<span>

{item}

</span>


</div>


))

}


</div>


</div>


</div>


</section>









{/* Products */}


<section className="
bg-gray-50
py-20
px-6
">


<div className="max-w-7xl mx-auto">


<h2 className="
text-4xl
font-bold
text-center
mb-12
">

Construction Machinery Products


</h2>


<div className="
grid
md:grid-cols-4
gap-6
">


{

products.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"

>


<img

src={item.image}

alt={item.title}

className="
w-full
h-48
object-cover
"

/>



<div className="p-6">


<h3 className="
text-xl
font-bold
mb-3
">

{item.title}

</h3>


<p className="
text-gray-600
text-sm
">

{item.desc}

</p>


</div>


</div>


))


}


</div>


</div>


</section>









{/* Export Service */}



<section className="py-20 px-6">


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
">


<img

src={shippingImage}

alt="China machinery shipping"

className="
rounded-2xl
shadow-lg
"

/>



<div>


<h2 className="
text-4xl
font-bold
mb-6
">

Global Machinery Export Service


</h2>


<p className="
text-gray-600
leading-relaxed
mb-6
">

JJT Global serves customers in Africa,
Middle East, Central Asia, Southeast Asia,
Russia and South America.


</p>


<div className="grid grid-cols-2 gap-5">


<div>

<Truck/>

<h3 className="font-bold mt-3">

International Logistics

</h3>

</div>


<div>

<Globe2/>

<h3 className="font-bold mt-3">

Global Markets

</h3>

</div>


<div>

<Factory/>

<h3 className="font-bold mt-3">

Factory Supply

</h3>

</div>


<div>

<ShieldCheck/>

<h3 className="font-bold mt-3">

Quality Control

</h3>

</div>


</div>


</div>


</div>


</section>









{/* CTA */}


<section className="
bg-blue-900
text-white
py-20
px-6
">


<div className="
max-w-5xl
mx-auto
text-center
">


<h2 className="
text-4xl
font-bold
mb-5
">

Your Trusted China Machinery Export Partner

</h2>


<p className="text-blue-100">

Contact JJT Global for construction machinery,
mining equipment and industrial solutions.

</p>


</div>


</section>



</div>


)

}