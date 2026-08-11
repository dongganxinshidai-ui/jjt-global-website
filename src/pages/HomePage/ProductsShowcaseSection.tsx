import { Link } from "react-router-dom";
import { Building2, Truck, Factory, Wrench, Layers } from "lucide-react";
import { MOCK_PRODUCT_CATEGORIES } from "@/data/products";

import autoImage from "@/assets/images/auto/banner.jpg";
import machineryImage from "@/assets/images/machinery/banner.jpg";
import steelImage from "@/assets/images/steel/banner.jpg";


const categoryIcons: Record<string, React.ReactNode> = {

  vehicles: <Truck className="w-8 h-8" />,

  machinery: <Factory className="w-8 h-8" />,

  steel: <Building2 className="w-8 h-8" />,

  autoparts: <Wrench className="w-8 h-8" />,

  "steel-accessories": <Layers className="w-8 h-8" />,

};



const categoryImages: Record<string,string> = {

  vehicles: autoImage,

  machinery: machineryImage,

  steel: steelImage,

};



export default function ProductsShowcaseSection() {


return (

<section className="py-20 md:py-28 bg-background">


<div className="container mx-auto px-4 sm:px-6 lg:px-8">


<div className="text-center max-w-4xl mx-auto mb-16">


<h2
className="
text-3xl
md:text-4xl
font-bold
text-foreground
mb-4
"
>

China Export Products & Global Supply Solutions

</h2>


<p
className="
text-muted-foreground
text-lg
leading-relaxed
"
>

JJT GLOBAL provides professional China export solutions,
including used vehicles, new energy vehicles, steel structure buildings,
construction machinery and industrial products for worldwide customers.

</p>


</div>





<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{

MOCK_PRODUCT_CATEGORIES.map((category)=>(


<div

key={category.id}

className="
group
bg-white
rounded-xl
overflow-hidden
border
border-border
hover:shadow-xl
transition-all
duration-300
"


>


{/* Image */}

{

categoryImages[category.id] && (

<img

src={categoryImages[category.id]}

alt={category.name}

className="
w-full
h-52
object-cover
group-hover:scale-105
transition-transform
duration-500
"

/>

)

}



<div className="p-8">


<div

className="
w-16
h-16
rounded-lg
bg-primary/10
text-primary
flex
items-center
justify-center
mb-6
"

>

{categoryIcons[category.id]}

</div>





<h3

className="
text-xl
font-bold
text-foreground
mb-3
"

>

{category.name}

</h3>



<p

className="
text-muted-foreground
text-sm
mb-6
leading-relaxed
"

>

{category.description}

</p>





<ul className="space-y-2 mb-6">

{

category.keySellingPoints.map((point,idx)=>(


<li

key={idx}

className="
flex
items-center
gap-2
text-sm
text-foreground/80
"

>


<span
className="
w-1.5
h-1.5
rounded-full
bg-primary
"
/>


{point}


</li>


))

}

</ul>





<Link

to={

category.id==="vehicles"

?"/auto"

:

category.id==="steel"

?"/steel"

:

category.id==="machinery"

?"/machinery"

:

"/contact"

}

className="
inline-flex
items-center
gap-2
text-primary
font-medium
text-sm
hover:gap-3
transition-all
"

>

Explore Solutions →

</Link>


</div>


</div>


))

}


</div>


</div>


</section>

)

}