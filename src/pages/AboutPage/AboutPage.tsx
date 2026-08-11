import { Link } from "react-router-dom";

import { MOCK_COMPANY } from "@/data/company";
import { MOCK_ADVANTAGES } from "@/data/advantages";

import {
  ShieldCheck,
  DollarSign,
  Ship,
  Headphones,
  Target,
  Eye,
} from "lucide-react";


import aboutBanner from "@/assets/images/about/banner.jpg";
import companyImage from "@/assets/images/about/company.jpg";
import globalImage from "@/assets/images/about/global.jpg";



const iconMap: Record<string, React.ReactNode> = {


  ShieldCheck:
    <ShieldCheck className="w-8 h-8" />,


  DollarSign:
    <DollarSign className="w-8 h-8" />,


  Ship:
    <Ship className="w-8 h-8" />,


  Headphones:
    <Headphones className="w-8 h-8" />,


};





export default function AboutPage(){



return (

<div className="bg-white">





{/* Hero Banner */}


<section

className="
relative
min-h-[600px]
flex
items-center
bg-cover
bg-center
text-white
"

style={{

backgroundImage:`url(${aboutBanner})`

}}

>


<div className="absolute inset-0 bg-black/50"/>



<div className="relative z-10 max-w-7xl mx-auto px-6">


<h1 className="
text-5xl
md:text-6xl
font-bold
mb-6
">


About JJT GLOBAL


</h1>



<p className="
text-xl
text-gray-200
max-w-3xl
leading-relaxed
">


QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.

<br/>

青岛君杰泰进出口贸易有限公司


<br/><br/>


Your trusted China export partner,
connecting quality products with global markets.


</p>



</div>


</section>









{/* Company Intro */}



<section className="py-20 px-6">


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
">



<div>


<div className="
inline-block
px-4
py-2
rounded-full
bg-blue-100
text-blue-700
mb-5
">

Who We Are

</div>




<h2 className="
text-4xl
font-bold
mb-6
">


Connecting China Quality With The World


</h2>




<p className="
text-gray-600
leading-relaxed
mb-5
">


{MOCK_COMPANY.chineseName}

<br/>

{MOCK_COMPANY.fullName}


</p>





<p className="
text-gray-600
leading-relaxed
mb-5
">


Established in {MOCK_COMPANY.foundedYear},
JJT GLOBAL is a professional China export company
specializing in international trade solutions.


</p>






<p className="
text-gray-600
leading-relaxed
">


Our main businesses include:


<br/><br/>


✓ China Used Vehicle Export

<br/>

✓ New Energy Vehicle Export

<br/>

✓ Steel Structure & Steel Products

<br/>

✓ Construction Machinery Export

<br/>

✓ Global Supply Chain Service


</p>




</div>









<div>


<img

src={companyImage}

alt="Qingdao Junjietai International Trading Company"

className="
rounded-2xl
shadow-xl
w-full
"

/>



<div className="
mt-6
bg-blue-900
text-white
rounded-xl
p-6
">


<div className="
text-4xl
font-bold
">

{MOCK_COMPANY.yearsOfExperience}+

</div>


<div>

Years Export Experience

</div>


</div>


</div>





</div>


</section>









{/* Statistics */}



<section className="
bg-blue-900
text-white
py-16
px-6
">


<div className="
max-w-7xl
mx-auto
grid
grid-cols-2
md:grid-cols-4
gap-8
text-center
">


<div>

<div className="text-4xl font-bold">

{MOCK_COMPANY.yearsOfExperience}+

</div>

<p>

Years Experience

</p>

</div>




<div>

<div className="text-4xl font-bold">

{MOCK_COMPANY.countriesServed}+

</div>

<p>

Countries Served

</p>

</div>





<div>

<div className="text-4xl font-bold">

500+

</div>

<p>

Products

</p>

</div>





<div>

<div className="text-4xl font-bold">

24h

</div>

<p>

Response

</p>

</div>



</div>


</section>









{/* Advantages */}



<section className="
py-20
px-6
">


<div className="
max-w-7xl
mx-auto
">


<h2 className="
text-4xl
font-bold
text-center
mb-12
">

Our Core Advantages

</h2>





<div className="
grid
md:grid-cols-2
gap-8
">


{

MOCK_ADVANTAGES.map((adv)=>(


<div

key={adv.id}

className="
border
rounded-xl
p-8
hover:shadow-lg
transition
"


>


<div className="
w-14
h-14
rounded-lg
bg-blue-100
text-blue-700
flex
items-center
justify-center
mb-5
">

{iconMap[adv.iconName]}


</div>




<h3 className="
text-xl
font-bold
mb-3
">

{adv.title}

</h3>



<p className="text-gray-600">

{adv.description}

</p>



</div>



))

}


</div>


</div>


</section>









{/* Global Market */}



<section className="
py-20
px-6
bg-gray-50
">


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
">



<img

src={globalImage}

alt="JJT Global Export Network"

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

Global Business Network

</h2>



<p className="
text-gray-600
leading-relaxed
">

JJT GLOBAL serves customers in:


<br/><br/>


Africa,

Middle East,

Central Asia,

Russia,

Southeast Asia,

South America.


</p>


</div>


</div>


</section>









{/* Mission Vision */}



<section className="
py-20
px-6
">


<div className="
max-w-5xl
mx-auto
grid
md:grid-cols-2
gap-8
">


<div className="
bg-gray-50
p-8
rounded-xl
">


<Target className="text-blue-700 mb-5"/>


<h3 className="text-2xl font-bold mb-4">

Our Mission

</h3>


<p className="text-gray-600">

{MOCK_COMPANY.mission}

</p>


</div>






<div className="
bg-gray-50
p-8
rounded-xl
">


<Eye className="text-blue-700 mb-5"/>


<h3 className="text-2xl font-bold mb-4">

Our Vision

</h3>


<p className="text-gray-600">

{MOCK_COMPANY.vision}

</p>


</div>


</div>


</section>









{/* CTA */}



<section className="
bg-blue-900
text-white
py-20
px-6
text-center
">


<h2 className="
text-4xl
font-bold
mb-6
">

Ready To Work With JJT?


</h2>



<Link

to="/contact"

className="
bg-white
text-blue-700
px-8
py-4
rounded-lg
font-semibold
inline-block
"

>

Contact Us


</Link>



</section>






</div>


);


}