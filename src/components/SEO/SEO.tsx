import { Helmet } from "react-helmet-async"


interface SEOProps {

  title?: string

  description?: string

  keywords?: string

  canonical?: string

}



export default function SEO({

  title = "JJT GLOBAL | China Export Partner",

  description =
  "JJT GLOBAL (QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.) provides China export solutions including used vehicles, steel structures, construction machinery and industrial products.",

  keywords =
  "China used car exporter, China used vehicle supplier, China steel structure manufacturer, construction machinery exporter, China export company",

  canonical,

}: SEOProps){


return (

<Helmet>


<title>{title}</title>


<meta

name="description"

content={description}

/>


<meta

name="keywords"

content={keywords}

/>



{

canonical &&

<link

rel="canonical"

href={canonical}

/>

}



</Helmet>


)

}