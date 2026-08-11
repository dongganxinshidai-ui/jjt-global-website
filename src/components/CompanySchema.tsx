import { MOCK_COMPANY } from "@/data/company";


export default function CompanySchema() {


  const schema = {

    "@context": "https://schema.org",

    "@type": "Organization",


    name:
      MOCK_COMPANY.fullName,


    alternateName:
      "JJT GLOBAL",


    url:
      "https://www.jjtglobal.com",


    logo:
      "https://www.jjtglobal.com/logo.png",


    description:

      "JJT GLOBAL is a professional China export company specializing in used vehicles, new energy vehicles, steel structures, construction machinery and global supply chain solutions.",



    foundingDate:

      String(MOCK_COMPANY.foundedYear),




    address: {


      "@type":
        "PostalAddress",


      streetAddress:

        "5th floor, East Office Building, No. 15 Shanghai Road, Qianwan Bonded Port Area",


      addressLocality:

        "Qingdao",


      addressRegion:

        "Shandong",


      addressCountry:

        "China"


    },





    contactPoint: {


      "@type":

        "ContactPoint",


      telephone:

        MOCK_COMPANY.phone,


      contactType:

        "sales",


      availableLanguage:

        [

          "English",

          "Chinese",

          "Russian"

        ]


    },






    email:

      MOCK_COMPANY.email,





    areaServed:

      [


        {

          "@type":

            "Place",


          name:

            "Africa"

        },


        {

          "@type":

            "Place",


          name:

            "Central Asia"

        },


        {

          "@type":

            "Place",


          name:

            "Southeast Asia"

        },


        {

          "@type":

            "Place",


          name:

            "Middle East"

        },


        {

          "@type":

            "Place",


          name:

            "South America"

        }


      ],






    makesOffer:

      [

        {


          "@type":

            "Offer",


          itemOffered:

          {


            "@type":

              "Product",


            name:

              "China Used Cars Export"


          }


        },



        {


          "@type":

            "Offer",


          itemOffered:

          {


            "@type":

              "Product",


            name:

              "Steel Structure Buildings"


          }


        },



        {


          "@type":

            "Offer",


          itemOffered:

          {


            "@type":

              "Product",


            name:

              "Construction Machinery Export"


          }


        }


      ]



  };





  return (


    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{

        __html:

          JSON.stringify(schema)

      }}

    />


  );

}