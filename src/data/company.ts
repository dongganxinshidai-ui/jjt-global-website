export interface ICompany {

  id: string

  fullName: string

  chineseName: string

  brandName: string

  businessType: string

  headquarters: string

  coreMarkets: string[]

  mainProducts: string[]

  email: string

  phone: string

  whatsapp: string

  address: string

  workingHours: string

  foundedYear: number

  countriesServed: number

  yearsOfExperience: number

  shortDescription: string

  seoTitle: string

  seoDescription: string

  keywords: string[]

  mission: string

  vision: string

  values: string[]

}




export const MOCK_COMPANY: ICompany = {


  id:'1',



  // Official Company Name

  fullName:

  'QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.',



  // Chinese Company Name

  chineseName:

  '青岛君杰泰进出口贸易有限公司',



  // Brand

  brandName:

  'JJT GLOBAL',




  businessType:

  'International Trade Exporter | China Used Car Exporter | Steel Structure Supplier',




  headquarters:

  'Qingdao, Shandong, China',




  coreMarkets:[

    'Africa',

    'Central Asia',

    'Southeast Asia',

    'Russia',

    'Middle East',

    'South America',

    'Latin America'

  ],




  mainProducts:[


    'China Used Cars Export',

    'New Energy Vehicles',

    'Steel Structure Buildings',

    'China Steel Products',

    'Construction Machinery',

    'Auto Parts',

    'Industrial Equipment'


  ],




  email:

  'fanheliang2006@gmail.com',




  phone:

  '+86 15590551259',




  whatsapp:

  '+86 15590551259',




  address:

  'Qingdao, Shandong, China',




  workingHours:

  'Mon - Fri: 9:00 - 18:00 (GMT+8)',




  // Company Information

  foundedYear:

  2017,




  countriesServed:

  50,




  yearsOfExperience:

  9,





  shortDescription:


  'JJT GLOBAL (QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.) is a professional China export company specializing in used cars, new energy vehicles, steel structures, steel products, construction machinery and global supply chain solutions.',





  // Google SEO

  seoTitle:


  'JJT Global | China Used Car Exporter & Steel Structure Supplier',





  seoDescription:


  'Qingdao Junjietai International Trading Co., Ltd. is a professional China exporter supplying used vehicles, electric cars, steel structures, steel products and construction machinery to global markets.',





  keywords:[


    'China used car exporter',

    'China used vehicle supplier',

    'Used cars from China',

    'Chinese electric vehicle export',

    'China steel structure manufacturer',

    'China steel supplier',

    'Prefabricated steel building China',

    'Construction machinery exporter',

    'Qingdao international trade company'


  ],





  mission:


  'To connect global buyers with reliable Chinese products through professional export services, strict quality control and efficient international logistics.',






  vision:


  'To become a trusted global China sourcing partner providing vehicles, steel products and industrial solutions to worldwide customers.',






  values:[


    'Quality First',

    'Customer Focus',

    'Professional Service',

    'Integrity',

    'Win-Win Cooperation'


  ]



}