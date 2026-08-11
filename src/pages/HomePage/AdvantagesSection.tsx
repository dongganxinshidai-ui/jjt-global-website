import { ShieldCheck, DollarSign, Ship, Headphones } from 'lucide-react'
import { MOCK_ADVANTAGES } from '@/data/advantages'


const iconMap: Record<string, React.ReactNode> = {

  ShieldCheck: <ShieldCheck className="w-7 h-7" />,

  DollarSign: <DollarSign className="w-7 h-7" />,

  Ship: <Ship className="w-7 h-7" />,

  Headphones: <Headphones className="w-7 h-7" />,

}



export default function AdvantagesSection() {


return (


<section className="py-20 md:py-28 bg-muted/50">


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

Why Choose JJT GLOBAL as Your China Export Partner

</h2>





<p

className="
text-muted-foreground
text-lg
leading-relaxed
"

>

JJT GLOBAL provides reliable China sourcing and export services
with professional quality control, international logistics support
and global supply chain solutions for customers worldwide.

</p>



</div>









{/* Advantages Grid */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{


MOCK_ADVANTAGES.map((adv)=>(


<div

key={adv.id}

className="
text-center
bg-white
rounded-xl
p-8
hover:shadow-lg
transition
"


>


<div

className="
w-16
h-16
mx-auto
rounded-full
bg-primary/10
text-primary
flex
items-center
justify-center
mb-5
"

>


{iconMap[adv.iconName]}


</div>







<h3

className="
text-lg
font-bold
text-foreground
mb-3
"

>

{adv.title}


</h3>






<p

className="
text-sm
text-muted-foreground
leading-relaxed
"

>

{adv.description}


</p>



</div>


))


}


</div>





</div>


</section>


)


}