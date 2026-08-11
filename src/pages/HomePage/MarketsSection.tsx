import { MOCK_COMPANY } from '@/data/company'
import { MOCK_MARKETS } from '@/data/markets'


export default function MarketsSection() {


return (


<section className="py-20 md:py-28 bg-background">


<div className="container mx-auto px-4 sm:px-6 lg:px-8">





{/* Section Header */}


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

Global Markets Served by JJT GLOBAL China Export Company

</h2>





<p

className="
text-muted-foreground
text-lg
leading-relaxed
"

>

JJT GLOBAL provides professional China export services
to customers in Africa, Russia, Central Asia, Southeast Asia,
Middle East and South America through Qingdao China port.

Serving {MOCK_COMPANY.countriesServed}+ countries worldwide
with reliable international trade solutions.

</p>



</div>









{/* Markets Grid */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{


MOCK_MARKETS.map((market)=>(


<div

key={market.id}

className="
bg-white
rounded-xl
border
border-border
p-6
hover:shadow-lg
transition-shadow
"

>




<div

className="
flex
items-start
justify-between
mb-4
"

>


<h3

className="
text-xl
font-bold
text-foreground
"

>

{market.region}

</h3>



<span

className="
text-sm
font-semibold
text-primary
bg-primary/10
px-3
py-1
rounded-full
"

>

{market.exportYears} yrs


</span>


</div>







<p

className="
text-sm
text-muted-foreground
mb-3
"

>

{market.countries}

</p>






<p

className="
text-sm
font-medium
text-foreground/80
leading-relaxed
"

>

{market.highlight}


</p>





</div>


))


}


</div>







</div>


</section>


)


}