import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import companyImage from "@/assets/images/about/company.jpg";

const highlights = [
  "Official used vehicle export qualification",
  "Steel structure and building material supply",
  "Multi-brand construction machinery sourcing",
  "Global logistics and export support",
];

export default function CompanyIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-background">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


          {/* Left Content */}

          <div>

            <div
              className="
              inline-block
              px-4
              py-1.5
              rounded-full
              bg-primary/10
              text-primary
              text-sm
              font-medium
              mb-6
              "
            >
              About JJT GLOBAL
            </div>



            <h2
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-foreground
              mb-6
              "
            >
              Your Reliable China Export Partner
            </h2>



            <p
              className="
              text-muted-foreground
              text-lg
              mb-6
              leading-relaxed
              "
            >
              Qingdao Junjietai International Trading Co., Ltd.
              is a professional China export company specializing in
              used vehicles, steel structures, construction machinery
              and industrial products.
            </p>



            <p
              className="
              text-muted-foreground
              text-lg
              mb-8
              leading-relaxed
              "
            >
              With professional export qualifications and global
              supply chain resources, JJT GLOBAL provides reliable
              sourcing, inspection, logistics and delivery solutions
              for international customers.
            </p>




            <ul className="space-y-4 mb-10">

              {highlights.map((item, index) => (

                <li
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >

                  <CheckCircle2
                    className="
                    w-5
                    h-5
                    text-primary
                    flex-shrink-0
                    "
                  />

                  <span className="text-foreground/90">
                    {item}
                  </span>


                </li>

              ))}

            </ul>




            <Link
              to="/about"
              className="
              inline-flex
              items-center
              gap-2
              text-primary
              font-semibold
              hover:gap-3
              transition-all
              "
            >

              Learn More About Us

              <span>
                →
              </span>

            </Link>


          </div>





          {/* Right Image */}

          <div className="relative">


            <img
              src={companyImage}
              alt="JJT GLOBAL Company"
              className="
              w-full
              aspect-[4/3]
              object-cover
              rounded-2xl
              shadow-xl
              "
            />


          </div>



        </div>


      </div>


    </section>
  );
}