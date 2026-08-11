export interface IProductItem {
  id: string
  name: string
  description: string
  imageUrl: string
  highlights: string[]
}

export interface IProductCategory {
  id: string
  name: string
  description: string
  keySellingPoints: string[]
  products: IProductItem[]
}

export const MOCK_PRODUCT_CATEGORIES: IProductCategory[] = [
  {
    id: 'vehicles',
    name: 'Used Vehicles',
    description:
      'Quality inspected used cars and trucks from top Chinese brands, export-ready with competitive pricing and full documentation.',
    keySellingPoints: ['Quality Inspected', 'Competitive Prices', 'Export-Ready'],
    products: [
      {
        id: 'v1',
        name: 'Sinotruk Howo Truck',
        description:
          'Heavy-duty used trucks in excellent condition for logistics and construction',
        imageUrl: '',
        highlights: ['Low mileage', 'Full service history', 'Euro V emission'],
      },
      {
        id: 'v2',
        name: 'BYD Electric Sedan',
        description: 'Reliable used electric sedans from BYD with great battery health',
        imageUrl: '',
        highlights: ['Battery health 90%+', 'Clean interior', 'Fast charging'],
      },
      {
        id: 'v3',
        name: 'SUV AWD Model',
        description: 'Versatile used SUVs suitable for various terrains and conditions',
        imageUrl: '',
        highlights: ['All-wheel drive', 'Spacious cabin', 'Good condition'],
      },
    ],
  },
  {
    id: 'machinery',
    name: 'Construction Machinery',
    description:
      'Reliable construction and engineering equipment direct from Chinese factories, with global shipping support.',
    keySellingPoints: ['Reliable Performance', 'Factory Direct Supply', 'Global Shipping'],
    products: [
      {
        id: 'm1',
        name: 'Electric Forklift',
        description: 'Efficient electric forklifts for warehouse and industrial use',
        imageUrl: '',
        highlights: ['1.5-5 ton capacity', 'Zero emission', 'Low maintenance'],
      },
      {
        id: 'm2',
        name: 'Electric Sweeper',
        description: 'Industrial electric sweepers for street and facility cleaning',
        imageUrl: '',
        highlights: ['Large cleaning width', 'Long battery life', 'Easy operation'],
      },
      {
        id: 'm3',
        name: 'Hydraulic Excavator',
        description: 'Heavy-duty excavators for construction and mining projects',
        imageUrl: '',
        highlights: ['Strong digging force', 'Durable build', 'Fuel efficient'],
      },
    ],
  },
  {
    id: 'steel',
    name: 'Steel Structure',
    description:
      'Custom-designed steel structure buildings, warehouses and workshops with fast installation and high quality steel.',
    keySellingPoints: ['Custom Design', 'Fast Installation', 'High Quality Steel'],
    products: [
      {
        id: 's1',
        name: 'Steel Structure Warehouse',
        description: 'Large-span steel warehouses for industrial storage needs',
        imageUrl: '',
        highlights: ['Custom span', 'Quick assembly', 'Corrosion resistant'],
      },
      {
        id: 's2',
        name: 'Prefab Workshop',
        description: 'Prefabricated steel workshops ready for fast construction',
        imageUrl: '',
        highlights: ['Prefabricated parts', 'Cost effective', 'Flexible layout'],
      },
      {
        id: 's3',
        name: 'Steel Structure Building',
        description: 'Multi-purpose steel buildings for commercial and industrial use',
        imageUrl: '',
        highlights: ['Wide application', 'Earthquake resistant', 'Long lifespan'],
      },
    ],
  },
  {
    id: 'autoparts',
    name: 'Auto Parts',
    description:
      'Premium quality auto spare parts for various vehicle makes and models, with original quality and bulk wholesale supply.',
    keySellingPoints: ['Original Quality', 'Wide Compatibility', 'Bulk Supply'],
    products: [
      {
        id: 'a1',
        name: 'Engine Parts',
        description: 'Complete range of engine components for trucks and passenger cars',
        imageUrl: '',
        highlights: ['Pistons & rings', 'Valves & gaskets', 'Bearings & bushings'],
      },
      {
        id: 'a2',
        name: 'Chassis Parts',
        description: 'Durable chassis components for heavy duty and commercial vehicles',
        imageUrl: '',
        highlights: ['Brake systems', 'Suspension parts', 'Steering components'],
      },
      {
        id: 'a3',
        name: 'Electrical Systems',
        description: 'Reliable electrical parts for vehicle lighting and electronics',
        imageUrl: '',
        highlights: ['LED lighting', 'Sensors & switches', 'Alternators & starters'],
      },
    ],
  },
  {
    id: 'steel-accessories',
    name: 'Steel Structure Accessories',
    description:
      'Complete range of supporting components for steel structure projects, matching standard specifications for one-stop procurement.',
    keySellingPoints: ['Matching Standards', 'Complete Range', 'One-Stop Solution'],
    products: [
      {
        id: 'sa1',
        name: 'Bolts & Fasteners',
        description: 'High-strength bolts and fasteners for steel structure connections',
        imageUrl: '',
        highlights: ['High strength grade', 'Various sizes', 'Anti-corrosion coating'],
      },
      {
        id: 'sa2',
        name: 'Sandwich Panels',
        description: 'Insulated sandwich panels for roof and wall systems',
        imageUrl: '',
        highlights: ['EPS / rock wool', 'Thermal insulation', 'Easy installation'],
      },
      {
        id: 'sa3',
        name: 'Purlins & Connectors',
        description: 'C/Z purlins and connecting fittings for steel framing',
        imageUrl: '',
        highlights: ['C & Z purlins', 'Anchor bolts', 'Connecting plates'],
      },
    ],
  },
]
