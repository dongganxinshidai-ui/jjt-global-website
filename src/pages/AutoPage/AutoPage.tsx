import {
  Globe2,
  CheckCircle2,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

import autoBanner from "@/assets/images/auto/banner.jpg";
import autoAbout from "@/assets/images/auto/about-auto.jpg";

import evImage from "@/assets/images/auto/ev.jpg";
import suvImage from "@/assets/images/auto/suv.jpg";
import commercialImage from "@/assets/images/auto/commercial.jpg";
import specialImage from "@/assets/images/auto/special.jpg";

import shippingImage from "@/assets/images/auto/shipping.jpg";



export default function AutoPage() {


const vehicles = [

{
title:"China New Energy Vehicles Export",
image:evImage,
desc:
"Professional export of Chinese electric vehicles (EV), new energy vehicles and smart cars to global markets."
},


{
title:"China Used Cars Export",
image:suvImage,
desc:
"Reliable used cars from China including SUVs, passenger vehicles and popular international models."
},


{
title:"Commercial Vehicles Export",
image:commercialImage,
desc:
"China commercial vehicles including trucks, vans and transportation solutions for global buyers."
},


{
title:"Special Vehicles Supply",
image:specialImage,
desc:
"Customized special vehicles and professional automotive solutions according to different market requirements."
}

];





const advantages=[

"Official China used vehicle export qualification",

"Professional vehicle inspection and quality control",

"Reliable Chinese vehicle supplier network",

"Complete export documentation service",

"Global vehicle shipping and logistics support"

];





const process=[

"Vehicle Selection",

"Vehicle Inspection",

"Export Documentation",

"International Shipping",

"Customer Delivery"

];






return (

<div className="bg-white">



<Helmet>

<title>
China Used Car Export | New Energy Vehicle Supplier | JJT Auto
</title>


<meta
name="description"
content="
JJT Auto is a professional China used car export company providing used vehicles, new energy vehicles, commercial vehicles and complete vehicle export solutions worldwide.
"
/>


<meta
name="keywords"
content="
China Used Car Export,
Used Cars From China,
China Vehicle Export,
China New Energy Vehicle Export,
Chinese Electric Vehicle Supplier,
China Auto Export Company,
JJT Auto,
Qingdao Junjietai International Trading
"
/>


<script type="application/ld+json">

{`

{
"@context":"https://schema.org",
"@type":"Organization",
"name":"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.",
"brand":"JJT Auto",
"description":"Professional China used car export company providing vehicles, new energy vehicles and international automobile export services.",
"address":{
"@type":"PostalAddress",
"addressLocality":"Qingdao",
"addressRegion":"Shandong",
"addressCountry":"China"
},
"areaServed":[
"Africa",
"Central Asia",
"Russia",
"Middle East",
"Southeast Asia",
"South America"
]
}

`}

</script>


</Helmet>






{/* Hero Section */}


<section

className="
min-h-[650px]
flex
items-center
relative
bg-cover
bg-center
text-white
"

style={{

backgroundImage:`url(${autoBanner})`

}}

>


<div

className="
absolute
inset-0
bg-black/50
"

/>



<div

className="
relative
z-10
max-w-7xl
mx-auto
px-6
w-full
"

>


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

China Used Car Export Partner

<br/>

JJT Auto


</h1>



<p

className="
text-xl
text-gray-200
leading-relaxed
mb-8
"

>

JJT Auto, a brand of QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.,
provides professional China used car export,
new energy vehicle export and global automotive supply chain services.


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

Request Vehicle Quote


</a>



</div>


</div>


</section>








{/* About JJT Auto */}



<section

className="
py-20
px-6
"

>


<div

className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
"

>


<div>


<h2

className="
text-4xl
font-bold
mb-6
"

>

Professional China Vehicle Export Service


</h2>



<p

className="
text-gray-600
leading-relaxed
mb-5
"

>

JJT Auto specializes in China automobile export services,
supplying quality used cars, electric vehicles,
SUVs and commercial vehicles to international buyers.


</p>




<p

className="
text-gray-600
leading-relaxed
"

>

With professional sourcing,
vehicle inspection,
export documentation and global logistics support,
we help overseas dealers purchase vehicles from China efficiently.


</p>



</div>





<div>


<img

src={autoAbout}

alt="
JJT Auto China Used Car Export Service
"

className="
rounded-2xl
shadow-xl
w-full
"

/>


</div>




</div>


</section>
{/* Vehicle Categories */}


<section

className="
bg-gray-50
py-20
px-6
"

>


<div

className="
max-w-7xl
mx-auto
"

>


<h2

className="
text-4xl
font-bold
text-center
mb-12
"

>

China Vehicle Export Categories


</h2>



<p

className="
text-center
text-gray-600
max-w-3xl
mx-auto
mb-12
"

>

JJT Auto provides various China vehicle export solutions,
including used cars, electric vehicles, passenger cars,
commercial vehicles and customized vehicles for global markets.


</p>




<div

className="
grid
md:grid-cols-4
gap-6
"

>


{

vehicles.map((item,index)=>(


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
h-44
w-full
object-cover
"

/>



<div

className="
p-6
"

>


<h3

className="
text-xl
font-bold
mb-3
"

>

{item.title}


</h3>



<p

className="
text-gray-600
text-sm
leading-relaxed
"

>

{item.desc}


</p>


</div>



</div>


))


}



</div>


</div>


</section>









{/* Export Process */}



<section

className="
py-20
px-6
"

>


<div

className="
max-w-7xl
mx-auto
"

>


<h2

className="
text-4xl
font-bold
text-center
mb-12
"

>

China Used Vehicle Export Process


</h2>



<div

className="
grid
md:grid-cols-5
gap-5
"

>


{


process.map((item,index)=>(


<div

key={index}

className="
border
rounded-xl
p-6
text-center
bg-white
"

>


<div

className="
text-blue-600
font-bold
text-3xl
mb-3
"

>

0{index+1}


</div>



<h3

className="
font-semibold
"

>

{item}


</h3>



</div>


))


}



</div>


</div>


</section>









{/* Global Shipping Service */}



<section

className="
py-20
px-6
bg-gray-50
"

>


<div

className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
"

>



<div>


<img

src={shippingImage}

alt="
China Vehicle Export Shipping Service
"

className="
rounded-2xl
shadow-lg
w-full
"

/>


</div>





<div>



<h2

className="
text-4xl
font-bold
mb-6
"

>

Global China Vehicle Export Service


</h2>



<p

className="
text-gray-600
leading-relaxed
mb-6
"

>

JJT Auto provides complete international vehicle export services
from China, including sourcing, inspection,
customs documentation, shipping arrangement and delivery.


</p>




<div

className="
space-y-4
"

>


{


advantages.map((item,index)=>(


<div

key={index}

className="
flex
gap-3
items-center
"

>


<CheckCircle2

className="
text-blue-600
"

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
{/* SEO Content Section */}


<section

className="
py-20
px-6
"

>


<div

className="
max-w-5xl
mx-auto
"

>


<h2

className="
text-3xl
font-bold
mb-6
"

>

Why Choose JJT Auto as Your China Vehicle Export Partner?


</h2>



<p

className="
text-gray-600
leading-relaxed
mb-5
"

>

QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
is a professional China export company providing
international vehicle trading solutions.
Through reliable Chinese supplier networks,
strict quality inspection and efficient logistics services,
JJT Auto helps global dealers purchase vehicles from China.


</p>



<p

className="
text-gray-600
leading-relaxed
"

>

Our China used car export business covers
used passenger cars, electric vehicles,
new energy vehicles, SUVs, commercial vehicles
and special purpose vehicles.
We serve customers in Africa, Russia,
Central Asia, Southeast Asia,
Middle East and South America.


</p>


</div>


</section>








{/* Bottom CTA */}



<section

className="
bg-blue-900
text-white
py-20
px-6
"

>


<div

className="
max-w-5xl
mx-auto
text-center
"

>


<Globe2

size={50}

className="
mx-auto
"

/>



<h2

className="
text-4xl
font-bold
mt-6
mb-4
"

>

Your Trusted China Used Car Export Partner


</h2>




<p

className="
text-blue-100
text-lg
mb-8
"

>

Contact JJT Auto for China vehicle sourcing,
used car export and international automotive solutions.


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

Contact JJT Auto


</a>




</div>


</section>







</div>


);


}