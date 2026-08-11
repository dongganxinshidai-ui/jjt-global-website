import {
  ShieldCheck,
  Globe2,
  Truck,
  CheckCircle2,
} from "lucide-react";

import steelBanner from "@/assets/images/steel/banner.jpg";
import factoryImage from "@/assets/images/steel/factory.jpg";
import warehouseImage from "@/assets/images/steel/warehouse.jpg";
import workshopImage from "@/assets/images/steel/workshop.jpg";
import frameImage from "@/assets/images/steel/frame.jpg";
import shippingImage from "@/assets/images/steel/shipping.jpg";


export default function SteelPage() {


const solutions = [

{
title:"Prefabricated Steel Warehouse",
image:warehouseImage,
desc:
"Durable prefabricated steel warehouse buildings designed for industrial storage and commercial applications."
},


{
title:"Industrial Steel Workshop",
image:workshopImage,
desc:
"Customized steel structure workshops for factories, manufacturing plants and industrial projects."
},


{
title:"Steel Frame Building",
image:frameImage,
desc:
"High-strength steel frame construction solutions with professional engineering support."
},


{
title:"Customized Steel Buildings",
image:factoryImage,
desc:
"Complete steel building solutions based on customer requirements and project specifications."
}

];



const process=[

"Project Requirement",

"Engineering Design",

"Steel Fabrication",

"Quality Inspection",

"International Shipping"

];




return (

<div className="bg-white">



{/* Hero Banner */}

<section

className="
relative
min-h-[680px]
flex
items-center
bg-cover
bg-center
text-white
"

style={{

backgroundImage:`url(${steelBanner})`

}}

>


<div className="
absolute
inset-0
bg-black/50
"
/>



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

China Steel Structure Manufacturer
<br/>

Complete Steel Building Solutions


</h1>



<p

className="
text-xl
text-gray-200
leading-relaxed
mb-8
"

>

JJT GLOBAL is a professional China steel structure exporter.
QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
(青岛君杰泰进出口贸易有限公司)
provides prefabricated steel buildings,
industrial workshops, steel warehouses and complete
construction solutions for global markets.

</p>



<a

href="/contact"

className="
inline-block
bg-white
text-blue-800
px-8
py-4
rounded-lg
font-semibold
hover:bg-blue-50
"

>

Get Steel Project Quote

</a>



</div>


</div>


</section>





{/* Company Introduction */}


<section className="py-20 px-6">


<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


<div>


<h2 className="
text-4xl
font-bold
mb-6
">

Professional Steel Structure Export Partner From China

</h2>


<p className="
text-gray-600
leading-relaxed
mb-5
">

QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
(青岛君杰泰进出口贸易有限公司)
is a professional international trade exporter
specializing in China steel structure manufacturing,
steel products export and global construction solutions.

</p>



<p className="
text-gray-600
leading-relaxed
">

Our services include steel structure design,
factory manufacturing,
building materials supply,
quality inspection,
export packaging and international logistics.

</p>



</div>



<img

src={factoryImage}

alt="China steel structure manufacturer factory"

className="
rounded-2xl
shadow-xl
w-full
"

/>



</div>


</section>
{/* Steel Structure Solutions */}

<section className="bg-gray-50 py-20 px-6">


<div className="max-w-7xl mx-auto">


<h2

className="
text-4xl
font-bold
text-center
mb-12
"

>

Steel Structure Products & Building Solutions

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

JJT GLOBAL provides complete steel building solutions,
including prefabricated steel buildings,
steel warehouses,
industrial workshops,
steel frame structures and customized construction projects.

</p>




<div

className="
grid
md:grid-cols-4
gap-6
"

>


{

solutions.map((item,index)=>(


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

alt={item.title + " China steel structure supplier"}

className="
h-48
w-full
object-cover
"

/>



<div className="p-6">


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







{/* Complete Supply Chain */}



<section className="py-20 px-6">


<div className="max-w-7xl mx-auto">


<h2

className="
text-4xl
font-bold
text-center
mb-12
"

>

Complete Steel Building Material Supply Chain

</h2>



<div

className="
grid
md:grid-cols-3
gap-8
"

>


{


[

"Main Steel Frame Structure",

"Roofing And Wall Panels",

"Steel Doors And Windows",

"Steel Structure Accessories",

"Insulation Materials",

"Complete Building Package"

]

.map((item,index)=>(



<div

key={index}

className="
border
rounded-xl
p-6
bg-white
"

>


<CheckCircle2

className="
text-blue-600
mb-3
"

/>



<h3

className="
font-semibold
text-lg
"

>

{item}

</h3>



<p

className="
text-gray-500
text-sm
mt-2
"

>

Professional China steel supplier providing
complete construction materials for global projects.

</p>



</div>


))


}



</div>


</div>


</section>







{/* Export Process */}



<section

className="
bg-blue-900
text-white
py-20
px-6
"

>


<div className="max-w-7xl mx-auto">


<h2

className="
text-4xl
font-bold
text-center
mb-12
"

>

Steel Structure Export Process

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
bg-white/10
rounded-xl
p-6
text-center
"

>


<div

className="
text-3xl
font-bold
mb-3
"

>

0{index+1}

</div>



<p>

{item}

</p>


</div>



))


}



</div>


</div>


</section>








{/* Global Export Advantages */}



<section className="py-20 px-6">


<div className="max-w-7xl mx-auto">


<div

className="
grid
md:grid-cols-3
gap-10
"

>


<div>


<ShieldCheck size={45}/>


<h3

className="
text-2xl
font-bold
mt-5
"

>

Quality Control

</h3>


<p

className="
text-gray-600
mt-3
leading-relaxed
"

>

Strict quality inspection during steel fabrication
ensures reliable products for international customers.

</p>


</div>






<div>


<Globe2 size={45}/>


<h3

className="
text-2xl
font-bold
mt-5
"

>

Global Steel Export Service

</h3>


<p

className="
text-gray-600
mt-3
leading-relaxed
"

>

JJT GLOBAL exports steel structures and construction
materials to Africa, Middle East, Central Asia,
Southeast Asia and South America.

</p>


</div>







<div>


<Truck size={45}/>


<h3

className="
text-2xl
font-bold
mt-5
"

>

International Logistics Support

</h3>


<p

className="
text-gray-600
mt-3
leading-relaxed
"

>

Professional export packaging,
container loading and global delivery solutions.

</p>


</div>



</div>


</div>


</section>








{/* Shipping Image Section */}



<section className="
py-20
px-6
bg-gray-50
">


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



<img

src={shippingImage}

alt="Steel structure export shipping from China"

className="
rounded-2xl
shadow-xl
w-full
"

/>



<div>


<h2

className="
text-4xl
font-bold
mb-6
"

>

China Steel Structure Export Partner

</h2>



<p

className="
text-gray-600
leading-relaxed
mb-6
"

>

From steel structure design to manufacturing,
inspection and international transportation,
JJT GLOBAL provides one-stop steel building solutions
for overseas customers.

</p>



<a

href="/contact"

className="
inline-block
bg-blue-700
text-white
px-8
py-4
rounded-lg
font-semibold
"

>

Contact JJT GLOBAL

</a>



</div>



</div>


</section>









{/* Bottom SEO CTA */}



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



<h2

className="
text-4xl
font-bold
mb-5
"

>

Your Trusted China Steel Structure Supplier

</h2>



<p

className="
text-blue-100
text-lg
leading-relaxed
"

>

JJT GLOBAL -
QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
(青岛君杰泰进出口贸易有限公司)

is committed to providing reliable
steel structure buildings,
prefabricated steel warehouses,
industrial workshops and complete construction solutions
for global markets.

</p>



</div>


</section>





</div>

);

}