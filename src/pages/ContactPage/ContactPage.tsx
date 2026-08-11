import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Globe2,
  Car,
  Building2,
  Truck,
} from "lucide-react";


import contactBanner from "@/assets/images/contact/banner.jpg";


export default function ContactPage() {


return (

<div className="bg-white">



{/* Hero Banner */}


<section

className="
relative
min-h-[550px]
flex
items-center
bg-cover
bg-center
text-white
"

style={{

backgroundImage:`url(${contactBanner})`

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


<h1

className="
text-5xl
md:text-6xl
font-bold
mb-6
"

>

Contact JJT GLOBAL

</h1>



<p

className="
text-xl
text-gray-200
max-w-3xl
"

>

QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
is a professional China export supplier providing
used vehicles, steel structures, construction machinery
and global supply chain solutions.


</p>


</div>


</section>









{/* Contact Information */}



<section className="
py-20
px-6
">


<div className="
max-w-7xl
mx-auto
">


<div className="
grid
md:grid-cols-2
gap-10
">





{/* Company */}


<div

className="
border
rounded-2xl
p-8
shadow-sm
"


>


<h2 className="
text-3xl
font-bold
mb-8
">

Company Information

</h2>



<div className="space-y-5">


<p>

<strong>Company Name:</strong><br/>

QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.

</p>



<p>

<strong>Brand:</strong><br/>

JJT GLOBAL

</p>



<p>

<strong>Business Scope:</strong><br/>

China Used Car Export,
Steel Structure Building,
Construction Machinery Export,
Industrial Equipment Supply.


</p>



<p>

<strong>Headquarters:</strong><br/>

Qingdao, Shandong, China


</p>



</div>


</div>









{/* Contact */}



<div

className="
border
rounded-2xl
p-8
shadow-sm
"

>


<h2 className="
text-3xl
font-bold
mb-8
">

Contact Details

</h2>



<div className="
space-y-6
">



<div className="flex gap-4">


<Mail className="text-blue-600"/>


<div>

<p className="font-semibold">

Email

</p>

<p>

fanheliang2006@gmail.com

</p>

</div>


</div>






<div className="flex gap-4">


<MessageCircle className="text-blue-600"/>


<div>

<p className="font-semibold">

WhatsApp

</p>

<p>

+86 15590551259

</p>

</div>


</div>






<div className="flex gap-4">


<Phone className="text-blue-600"/>


<div>

<p className="font-semibold">

Phone

</p>

<p>

+86 15590551259

</p>

</div>


</div>








<div className="flex gap-4">


<MapPin className="text-blue-600"/>


<div>

<p className="font-semibold">

Office Address

</p>


<p>

5th Floor, East Office Building,
No.15 Shanghai Road,
Qianwan Bonded Port Area,
Qingdao Section,
China (Shandong) Pilot Free Trade Zone

</p>


</div>


</div>




</div>


</div>


</div>


</div>


</section>









{/* Business Areas SEO */}



<section className="
bg-gray-50
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

Our Export Business Areas

</h2>




<div className="
grid
md:grid-cols-3
gap-8
">


<div className="
bg-white
rounded-xl
p-8
">


<Car className="text-blue-600"/>


<h3 className="
text-xl
font-bold
mt-5
">

China Used Car Export

</h3>


<p className="
text-gray-600
mt-3
">

Professional used vehicle export service
from China to global markets.

</p>


</div>







<div className="
bg-white
rounded-xl
p-8
">


<Building2 className="text-blue-600"/>


<h3 className="
text-xl
font-bold
mt-5
">

China Steel Structure Supplier

</h3>


<p className="
text-gray-600
mt-3
">

Complete steel building solutions including
steel structures, panels and accessories.

</p>


</div>







<div className="
bg-white
rounded-xl
p-8
">


<Truck className="text-blue-600"/>


<h3 className="
text-xl
font-bold
mt-5
">

Construction Machinery Export

</h3>


<p className="
text-gray-600
mt-3
">

Chinese engineering machinery and industrial
equipment export solutions.

</p>


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


<Globe2
size={50}
className="mx-auto"
/>



<h2 className="
text-4xl
font-bold
mt-6
mb-5
">

Your Reliable China Export Partner

</h2>



<p className="text-blue-100">

Contact JJT GLOBAL for vehicles,
steel products and machinery sourcing.

</p>



</div>


</section>



</div>


)

}