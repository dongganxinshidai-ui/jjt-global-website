export interface IAdvantage {

  id: string

  iconName: string

  title: string

  description: string

}



export const MOCK_ADVANTAGES: IAdvantage[] = [

  {


    id: "quality",


    iconName: "ShieldCheck",


    title: "Professional Quality Control",


    description:
      "JJT GLOBAL provides strict quality inspection and reliable sourcing services for China export products including vehicles, steel structures and machinery."


  },


  {


    id: "cost",


    iconName: "DollarSign",


    title: "Competitive China Supply Chain",


    description:
      "Direct connection with Chinese manufacturers and suppliers helps global buyers reduce purchasing costs and improve efficiency."


  },


  {


    id: "logistics",


    iconName: "Ship",


    title: "Global Export Logistics",


    description:
      "We provide professional international shipping, export documentation and delivery solutions for customers worldwide."


  },


  {


    id: "service",


    iconName: "Headphones",


    title: "Professional Export Support",


    description:
      "Our experienced team provides responsive communication and complete support from inquiry to final delivery."


  }


]