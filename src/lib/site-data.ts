import type { LucideIcon } from "lucide-react";
import {
  Archive,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Home,
  House,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sofa,
  Truck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  icon: LucideIcon;
  keywords: string[];
  benefits: { title: string; description: string }[];
  process: string[];
  faqs: { question: string; answer: string }[];
  lastUpdated: string;
};

export type Area = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  neighborhoods: string[];
  keywords: string[];
  faqs: { question: string; answer: string }[];
  lastUpdated: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  faqs: { question: string; answer: string }[];
  sections: { heading: string; body: string[] }[];
};

export const company = {
  name: "Emirates Premier Movers",
  legalName: "Emirates Premier Movers LLC",
  phone: "+971 52 383 4103",
  phoneHref: "+971523834103",
  whatsapp: "+971 52 383 4103",
  whatsappHref: "971523834103",
  email: "mshoaibjarwar1256@gmail.com",
  address: "Office 1204, King Faisal Street, Sharjah, United Arab Emirates",
  hours: "Open 24 hours, 7 days a week",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.emiratespremiermovers.ae",
  tagline: "Premium movers and packers across Sharjah, Ajman, Dubai and the UAE.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceFaqs = (service: string) => [
  {
    question: `How quickly can you arrange ${service.toLowerCase()} in the UAE?`,
    answer:
      "Most local moves can be scheduled the same day or next day, subject to crew availability, access permissions and building move-in rules.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We provide cartons, stretch film, bubble wrap, wardrobe boxes, blankets, labels and specialist protection for fragile furniture and electronics.",
  },
  {
    question: "Can I get a fixed quote before booking?",
    answer:
      "Yes. We assess the inventory, access, distance and special handling needs, then provide a clear written quote with no hidden charges.",
  },
];

export const services: Service[] = [
  {
    slug: "home-moving",
    title: "Home Moving Services in the UAE",
    shortTitle: "Home Moving",
    icon: Home,
    keywords: ["House Shifting UAE", "House Movers Sharjah", "Movers in Sharjah", "Moving Company UAE"],
    description: "Careful door-to-door house shifting for families across Sharjah, Ajman, Dubai, Abu Dhabi and the Northern Emirates.",
    overview:
      "Our home moving team plans every detail: survey, packing, furniture protection, loading, transport, unloading and room-by-room placement. We are built for UAE communities where building permissions, elevator timings and parking access matter as much as careful handling.",
    benefits: [
      { title: "Dedicated move coordinator", description: "One coordinator manages your survey, packing plan, crew and delivery, so you always have a single point of contact instead of juggling several." },
      { title: "Protected furniture and appliances", description: "Sofas, wardrobes, appliances and electronics are wrapped, padded and loaded in a set order so nothing shifts or scratches in transit." },
      { title: "Flexible 24/7 scheduling", description: "Book an early morning, evening, weekend or overnight slot depending on your building's move-in rules and your own timetable." },
      { title: "Transparent UAE-wide pricing", description: "Every quote breaks down manpower, truck size, packing materials and distance before you book, with nothing added on move day." },
    ],
    process: ["Free survey and move plan", "Professional packing and labelling", "Safe loading in covered trucks", "Delivery, placement and final inspection"],
    faqs: serviceFaqs("home moving"),
    lastUpdated: "2026-01-25",
  },
  {
    slug: "apartment-moving",
    title: "Apartment Moving Services",
    shortTitle: "Apartment Moving",
    icon: Building2,
    keywords: ["Apartment Movers UAE", "Apartment Movers Sharjah", "Packers and Movers Sharjah", "Movers Ajman"],
    description: "Efficient apartment relocations for studios, flats and high-rise residences with elevator and building coordination.",
    overview:
      "Apartment moves require precise timing, lift booking and careful movement through corridors. Our crews handle compact spaces, fragile interiors and tower restrictions with disciplined packing and clean execution.",
    benefits: [
      { title: "Lift and access coordination", description: "We confirm service-lift bookings, corridor widths and building move hours in advance so the crew arrives ready, not waiting at reception." },
      { title: "Compact-space packing expertise", description: "Built-in wardrobes, shared-wall furniture and tight kitchens are packed to avoid damage to fittings and finishes in rented units." },
      { title: "Fast studio to 4-bedroom moves", description: "Crew size and truck capacity scale to the unit, so a studio move and a four-bedroom apartment both get an appropriately sized team." },
      { title: "Clean handling in shared buildings", description: "Corridors, lift interiors and lobby floors are protected with covers and blankets to keep shared building areas clean." },
    ],
    process: ["Confirm inventory and access", "Pack fragile and daily-use items", "Move via approved lift routes", "Unpack essentials and remove debris"],
    faqs: serviceFaqs("apartment moving"),
    lastUpdated: "2026-01-25",
  },
  {
    slug: "villa-moving",
    title: "Villa Moving Services in the UAE",
    shortTitle: "Villa Moving",
    icon: House,
    keywords: ["Villa Movers UAE", "Villa Movers Sharjah", "Villa Movers Dubai", "House Shifting UAE"],
    description: "Premium villa shifting for large homes, garden furniture, majlis rooms, wardrobes, appliances and delicate décor.",
    overview:
      "Villa moving needs more manpower, better sequencing and protection for premium furniture. We assign trained supervisors, larger trucks and specialist packing for bedrooms, kitchens, outdoor furniture and family valuables.",
    benefits: [
      { title: "Large crew capacity", description: "Larger villas get a bigger crew and additional trucks so the whole property, including garages and storage rooms, moves in one coordinated day." },
      { title: "Room-by-room move sequencing", description: "Bedrooms, majlis areas, kitchens and outdoor furniture are loaded and delivered in a planned order rather than mixed into one load." },
      { title: "Special care for luxury furniture", description: "Imported furniture, chandeliers, mirrors and upholstered pieces get extra padding and dedicated lifting technique." },
      { title: "Assembly support for beds and wardrobes", description: "Beds, wardrobes and dining sets are dismantled with labelled hardware and reassembled correctly at the new villa." },
    ],
    process: ["Pre-move villa survey", "Colour-coded packing zones", "Protected loading of large items", "Reassembly and placement at the new villa"],
    faqs: serviceFaqs("villa moving"),
    lastUpdated: "2026-01-25",
  },
  {
    slug: "office-relocation",
    title: "Office Relocation Services",
    shortTitle: "Office Relocation",
    icon: BriefcaseBusiness,
    keywords: ["Office Movers Dubai", "Office Movers Sharjah", "Commercial Relocation UAE", "Moving Company UAE"],
    description: "Business relocation with minimal downtime for offices, workstations, IT assets, documents and meeting rooms.",
    overview:
      "We plan office moves around operational continuity. Our supervisors label workstations, protect IT equipment, coordinate after-hours schedules and help your team restart quickly in the new premises.",
    benefits: [
      { title: "Weekend and overnight moves", description: "Relocations are scheduled outside business hours so your team returns to a fully set-up office on the next working day." },
      { title: "IT and document handling", description: "Computers, monitors, servers and sensitive files are labelled by user or department and tracked separately from general furniture." },
      { title: "Department-wise labelling", description: "Every desk, cabinet and carton is tagged by department, so the new office is arranged exactly to your floor plan." },
      { title: "Minimal business disruption", description: "Staged loading and a clear handover checklist keep downtime to hours rather than days." },
    ],
    process: ["Site walk-through and relocation map", "Asset labelling and secure packing", "After-hours transport", "Desk placement and handover checklist"],
    faqs: serviceFaqs("office relocation"),
    lastUpdated: "2026-01-25",
  },
  {
    slug: "commercial-relocation",
    title: "Commercial Relocation Services",
    shortTitle: "Commercial Relocation",
    icon: Users,
    keywords: ["Commercial Relocation UAE", "Movers Dubai", "Movers in Sharjah"],
    description: "Structured relocation for showrooms, clinics, retail units, small warehouses and professional facilities.",
    overview:
      "Commercial moves need safe handling, schedule control and clear accountability. We relocate fixtures, inventory, files, furniture and equipment with detailed planning for operational deadlines.",
    benefits: [
      { title: "Commercial move planning", description: "We map the move around your operating hours and deadlines so showrooms, clinics and retail units stay open as long as possible." },
      { title: "Inventory-safe handling", description: "Stock, fixtures and equipment are counted and packed against an inventory list so nothing is misplaced between locations." },
      { title: "Supervisor-led crews", description: "A supervisor oversees loading order and crew coordination rather than leaving sequencing to chance." },
      { title: "Flexible fleet allocation", description: "Truck size and crew numbers are adjusted to the scale of the unit, from a single showroom to a small warehouse." },
    ],
    process: ["Operational impact review", "Inventory and equipment packing", "Staged truck loading", "Setup support at destination"],
    faqs: serviceFaqs("commercial relocation"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "furniture-moving",
    title: "Furniture Moving Services",
    shortTitle: "Furniture Moving",
    icon: Sofa,
    keywords: ["Furniture Movers Sharjah", "Furniture Movers UAE", "Movers Ajman"],
    description: "Safe movement of sofas, beds, wardrobes, dining sets, cabinets and delicate furniture pieces.",
    overview:
      "Furniture damage is preventable with the right materials and crew technique. We wrap surfaces, protect corners, dismantle when needed and move heavy items using safe lifting methods.",
    benefits: [
      { title: "Scratch and edge protection", description: "Corners, edges and polished surfaces are padded before loading so sofas, tables and cabinets arrive without new scratches." },
      { title: "Careful dismantling", description: "Beds, wardrobes and modular pieces are taken apart only when it improves safety, with every screw and fitting labelled." },
      { title: "Heavy-item lifting support", description: "Heavy items like wardrobes and dining sets are moved using proper lifting technique to avoid strain injuries or drops." },
      { title: "Blanketed truck interiors", description: "Trucks are lined with moving blankets so furniture doesn't shift or rub against hard surfaces in transit." },
    ],
    process: ["Inspect and photograph key items", "Wrap, pad and secure furniture", "Load with weight balance", "Place and inspect after delivery"],
    faqs: serviceFaqs("furniture moving"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "packing-services",
    title: "Professional Packing Services",
    shortTitle: "Packing Services",
    icon: PackageCheck,
    keywords: ["Packing Services UAE", "Packers and Movers Sharjah", "Moving Company UAE"],
    description: "Premium packing and unpacking for homes, offices, fragile goods, kitchens, wardrobes and electronics.",
    overview:
      "Our packing service is designed to reduce stress and prevent damage. We use graded cartons, protective wrap, labels and item-specific techniques for glassware, TVs, art, appliances and sensitive documents.",
    benefits: [
      { title: "High-quality materials", description: "We use graded cartons, bubble wrap, stretch film and wardrobe boxes rather than generic materials that risk damage." },
      { title: "Fragile-item specialists", description: "Glassware, mirrors, artwork and electronics are individually wrapped by packers experienced with fragile items." },
      { title: "Clear carton labelling", description: "Every carton is labelled by room and content so unloading and unpacking are fast and organised." },
      { title: "Optional unpacking service", description: "Ask us to unpack essentials at the new address so you're not surrounded by boxes on your first night." },
    ],
    process: ["Assess fragile and priority items", "Pack room by room", "Label every carton", "Unpack essentials at destination"],
    faqs: serviceFaqs("packing services"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "loading-unloading",
    title: "Loading & Unloading Services",
    shortTitle: "Loading & Unloading",
    icon: Boxes,
    keywords: ["Loading Unloading UAE", "Movers Dubai", "Movers in Sharjah"],
    description: "Reliable manpower for truck loading, container unloading, apartment moves and furniture handling.",
    overview:
      "When you already have transport but need trained hands, our loading team provides the muscle and method. We protect common areas, stack safely and reduce the risk of damage during movement.",
    benefits: [
      { title: "Trained moving manpower", description: "Our crew is trained specifically in furniture handling, not general labour, so lifting and carrying is done safely." },
      { title: "Safe stacking techniques", description: "Cartons and furniture are stacked by weight and shape in the truck to prevent shifting or crushing during the trip." },
      { title: "Building area protection", description: "Floors, walls and lift interiors in shared buildings are covered before loading or unloading begins." },
      { title: "Hourly or project pricing", description: "Choose an hourly rate for small jobs or a fixed project price for larger loads, whichever suits your move." },
    ],
    process: ["Confirm access and item list", "Protect floors and corners", "Load or unload safely", "Place items as directed"],
    faqs: serviceFaqs("loading and unloading"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "furniture-assembly",
    title: "Furniture Assembly Services",
    shortTitle: "Furniture Assembly",
    icon: Wrench,
    keywords: ["Furniture Assembly UAE", "Furniture Movers Sharjah", "Villa Movers UAE"],
    description: "Dismantling and reassembly for beds, wardrobes, desks, cabinets, shelving and modular furniture.",
    overview:
      "Our assembly technicians help furniture travel safely and fit correctly in the new space. We handle screws, hinges, panels and fittings with organised labelling and reinstallation care.",
    benefits: [
      { title: "Skilled assembly technicians", description: "Technicians experienced with modular and flat-pack furniture handle dismantling and reassembly correctly the first time." },
      { title: "Organised hardware packing", description: "Screws, hinges and brackets are bagged and labelled per item so nothing is missing when it's time to rebuild." },
      { title: "Wardrobe and bed expertise", description: "Wardrobes, bed frames and cabinet systems are among the most common assembly jobs, and our team knows their fittings well." },
      { title: "Post-move stability checks", description: "After reassembly, we check that furniture is level, stable and properly secured before the crew leaves." },
    ],
    process: ["Inspect furniture joints", "Dismantle and pack hardware", "Transport safely", "Reassemble and align"],
    faqs: serviceFaqs("furniture assembly"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "warehouse-storage",
    title: "Warehouse Storage Solutions",
    shortTitle: "Warehouse Storage",
    icon: Warehouse,
    keywords: ["Storage UAE", "Storage Companies Sharjah", "Moving Company UAE", "Commercial Relocation UAE"],
    description: "Short-term and long-term storage coordination for furniture, cartons, office assets and seasonal inventory.",
    overview:
      "If your new property is not ready, storage keeps the move on schedule. We pack, inventory and transport goods to secure storage options suited to homes and businesses.",
    benefits: [
      { title: "Short and long-term options", description: "Store items for a few weeks during a property gap or for several months during renovation or relocation abroad." },
      { title: "Inventory-based intake", description: "Every item is logged against an inventory list when it goes into storage, so nothing is lost track of." },
      { title: "Protected packing for storage", description: "Furniture and cartons headed for storage get extra protective wrapping suited to longer periods without handling." },
      { title: "Pickup and redelivery support", description: "We collect items from your current address and redeliver them to the new one whenever you're ready." },
    ],
    process: ["Define storage duration", "Pack for extended protection", "Inventory and load", "Redeliver when ready"],
    faqs: serviceFaqs("warehouse storage"),
    lastUpdated: "2026-01-25",
  },
  {
    slug: "local-moving",
    title: "Local Moving Services",
    shortTitle: "Local Moving",
    icon: Truck,
    keywords: ["Movers in Sharjah", "Movers Ajman", "Movers Dubai"],
    description: "Fast local moving within the same city or emirate with careful packing and reliable covered trucks.",
    overview:
      "Local moves still need professional planning. We help residents shift between communities, towers and villas with affordable packages and responsive scheduling.",
    benefits: [
      { title: "Same-city move expertise", description: "Moving within the same emirate still needs planning — we know the local towers, villa communities and traffic patterns." },
      { title: "Affordable local packages", description: "Local packages are priced for shorter distances so you're not paying for capacity you don't need." },
      { title: "Quick team dispatch", description: "Because the trip is short, we can often confirm a crew within a day or two of your call." },
      { title: "Covered moving trucks", description: "Even short trips use covered trucks to protect furniture from sun, dust and unexpected weather." },
    ],
    process: ["Book time slot", "Pack and protect items", "Transport locally", "Unload and arrange"],
    faqs: serviceFaqs("local moving"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "long-distance-moving",
    title: "Long Distance Moving Across the UAE",
    shortTitle: "Long Distance Moving",
    icon: MapPin,
    keywords: ["House Shifting UAE", "Moving Company UAE", "Movers Dubai"],
    description: "Inter-emirate relocation between Sharjah, Dubai, Abu Dhabi, Ajman, Fujairah, RAK and Umm Al Quwain.",
    overview:
      "Long-distance moves require stronger packing, route planning and clear timing. We secure items for highway transport and coordinate handover at the destination emirate.",
    benefits: [
      { title: "UAE-wide coverage", description: "We regularly move households and offices between every emirate, not just within one city." },
      { title: "Highway-safe packing", description: "Extra padding, stretch film and secure strapping are used for the longer, faster journeys between emirates." },
      { title: "Route and timing planning", description: "We plan departure time and route around traffic and delivery windows at the destination address." },
      { title: "Single point of coordination", description: "One coordinator manages both ends of the move, so you're not repeating details to a different team on arrival." },
    ],
    process: ["Confirm emirate-to-emirate route", "Pack for longer transit", "Secure truck loading", "Deliver and inspect"],
    faqs: serviceFaqs("long distance moving"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "international-relocation",
    title: "International Relocation Support",
    shortTitle: "International Relocation",
    icon: Globe2,
    keywords: ["International Relocation UAE", "Moving Company UAE", "Packing Services UAE"],
    description: "Export-ready packing, inventory preparation and relocation coordination for international moves from the UAE.",
    overview:
      "For international relocation, documentation and packing standards are critical. We prepare export-grade packing, detailed inventories and coordination support for shipment partners.",
    benefits: [
      { title: "Export-grade packing", description: "Items are packed to the standard shipping and freight partners expect, reducing the risk of rejected or damaged shipments." },
      { title: "Detailed packing lists", description: "A full itemised inventory is prepared for customs, insurance and your own records." },
      { title: "Fragile protection", description: "Fragile and valuable items get reinforced packing suited to sea or air freight handling." },
      { title: "Shipment coordination support", description: "We coordinate collection timing with your shipping or relocation partner so nothing waits around unpacked." },
    ],
    process: ["Survey shipment volume", "Prepare export packing", "Create inventory lists", "Coordinate collection and handover"],
    faqs: serviceFaqs("international relocation"),
    lastUpdated: "2026-01-05",
  },
  {
    slug: "corporate-relocation",
    title: "Corporate Relocation Services",
    shortTitle: "Corporate Relocation",
    icon: Archive,
    keywords: ["Corporate Relocation UAE", "Office Movers Dubai", "Commercial Relocation UAE"],
    description: "Relocation support for employees, executive moves, staff housing and corporate mobility programs.",
    overview:
      "Corporate relocation needs consistency, privacy and service reporting. We support HR teams, facilities managers and executives with dependable move coordination across the UAE.",
    benefits: [
      { title: "HR-friendly coordination", description: "We work directly with HR and facilities teams to fit around onboarding dates, lease timelines and staff schedules." },
      { title: "Confidential handling", description: "Personal and company belongings are handled discreetly, with no unnecessary exposure to other staff or visitors." },
      { title: "Multi-move scheduling", description: "Multiple employee moves can be scheduled and tracked together rather than booked one at a time." },
      { title: "Service reporting on request", description: "A summary report of completed moves is available on request for HR or facilities records." },
    ],
    process: ["Confirm employee move scope", "Schedule survey and quote", "Execute managed relocation", "Collect feedback and close report"],
    faqs: serviceFaqs("corporate relocation"),
    lastUpdated: "2026-01-05",
  },
];

export const areas: Area[] = [
  {
    slug: "sharjah",
    name: "Sharjah",
    title: "Movers and Packers in Sharjah",
    keywords: [
      "Movers in Sharjah",
      "Best Moving Company in Sharjah",
      "Packers and Movers Sharjah",
      "House Movers Sharjah",
      "House Shifting Sharjah",
      "Furniture Movers Sharjah",
      "Villa Movers Sharjah",
      "Office Movers Sharjah",
      "Apartment Movers Sharjah",
      "Cheap Movers Sharjah",
      "Affordable Movers and Packers Sharjah",
      "Storage Companies Sharjah",
      "Movers Sharjah to Dubai",
      "Movers Sharjah to Ajman",
    ],
    description: "Trusted movers and packers in Sharjah for apartments, villas and offices — affordable pricing, transparent quotes and fast 24/7 support across every district.",
    intro:
      "Sharjah is our home base, and it's where we've built the deepest local knowledge of any market we serve. Families in Al Majaz towers overlooking the Corniche, villa owners in Al Taawun and Al Khan, and tenants moving between apartments in Al Nahda, Muwaileh and Al Qasimia all deal with the same practicalities: booking a service lift, clearing a move-in or move-out approval with building or community management, and getting a truck close enough to the entrance without blocking a shared driveway or a narrow street near Al Rolla or the old souk area. We plan around all of it as a matter of routine, not an afterthought.\n\nApartment moves in Sharjah usually centre on residential towers along Al Wahda Street, King Faisal Street and Al Taawun Road, where lift bookings and loading-bay timing decide how smoothly the day goes. Newer communities like Aljada and Alzahya bring their own considerations too — many buildings there are still finishing handover snagging or shared-facility construction nearby, so we coordinate delivery timing around site access rather than assuming a finished, quiet street. Many buildings ask tenants to arrange a move-in or move-out approval — sometimes called an NOC — with the building management or community office before a crew is allowed to bring a truck onto the property, and some communities also register the moving company's vehicle at the gate. We're used to working within these requirements and can advise on what to expect once we know your building.\n\nVilla moves are a different job entirely. Family villas in Al Taawun, Al Khan, Al Nud and the university housing areas around University City tend to involve more furniture per move — majlis seating, dining sets, garden furniture, and sometimes a maid's room or storage area — which calls for a larger crew, a bigger truck and a sequenced loading plan rather than treating it like a scaled-up apartment move. Commercial and office relocations are common too, particularly for businesses along Al Wahda Street and near the Sharjah Expo Centre and Airport Road corridor, where after-hours scheduling keeps operations running.\n\nBecause Sharjah sits directly between Dubai and Ajman, a large share of our Sharjah bookings are actually inter-emirate moves — residents relocating for work, school catchment areas or simply better value housing. These routes are common enough that we treat them as standard jobs with predictable timing, not special long-distance projects. Whichever part of Sharjah you're moving to, from or within, our coordinators plan the practical details — access, approvals, packing and timing — so the parts you can't see in advance don't become the parts that go wrong on move day.",
    highlights: [
      "Experienced Sharjah-based moving crews who know local buildings and traffic patterns",
      "Fast response for Al Nahda, Muwaileh, Al Majaz, Al Taawun and Al Khan",
      "Affordable, transparent packages for apartments and villas alike",
      "Furniture protection suited to UAE humidity and summer heat",
      "Regular Sharjah to Dubai and Sharjah to Ajman relocation routes",
    ],
    neighborhoods: ["Al Majaz", "Muwaileh", "Al Nahda", "Al Khan", "Al Qasimia", "University City", "Al Taawun", "Al Nud", "Al Rolla", "Muweilah Commercial", "Aljada", "Alzahya", "Abu Shagara"],
    faqs: [
      {
        question: "How much do movers cost in Sharjah?",
        answer:
          "Pricing depends on the size of the home, how much packing is needed, floor level and distance. A studio or one-bedroom apartment move typically starts from around AED 499, while villa and multi-bedroom moves are quoted after a short survey. We always provide a written price before booking, so there are no surprises on move day.",
      },
      {
        question: "Do you provide same-day movers in Sharjah?",
        answer:
          "Yes, in most cases. Because our crews are based in Sharjah, we can often arrange a same-day or next-day move depending on truck and team availability, especially for smaller apartment moves. For villas or larger homes, a short lead time helps us bring the right crew size and packing materials.",
      },
      {
        question: "Can you move me from Sharjah to Dubai or Abu Dhabi?",
        answer:
          "Yes. Inter-emirate moves from Sharjah to Dubai, Abu Dhabi, Ajman and the Northern Emirates are one of our most common jobs, given how many residents commute between them. We plan the route, secure furniture for the longer highway leg and coordinate delivery timing at the other end.",
      },
      {
        question: "Do Sharjah buildings need a moving permit or NOC?",
        answer:
          "Many Sharjah towers and gated villa communities require a move-in or move-out approval (sometimes called an NOC) from building or community management, plus a service lift booking. Requirements vary by building, so we recommend confirming with your management office a few days ahead — our coordinators can also help you check what's needed once we know your address.",
      },
      {
        question: "Do you handle both apartments and villas in Sharjah?",
        answer:
          "Yes. We regularly move apartments in towers across Al Majaz and Al Nahda as well as villas in Al Taawun, Al Khan and other family communities, adjusting crew size, truck type and packing approach to match the property.",
      },
      {
        question: "What should I look for in the best moving company in Sharjah?",
        answer:
          "A written, itemised quote before booking, a real Sharjah address and phone number rather than a call centre only, clear answers about packing materials and dismantling, and 24/7 availability for urgent or same-day requests. We're happy to answer any of these questions directly before you decide.",
      },
      {
        question: "Do you move to or from Aljada and Alzahya?",
        answer:
          "Yes. These newer Sharjah communities sometimes involve coordinating around handover snagging or nearby construction access, which our crews plan for in advance rather than discovering on move day.",
      },
    ],
    lastUpdated: "2026-01-25",
  },
  {
    slug: "sharjah-to-dubai",
    name: "Sharjah to Dubai",
    title: "Movers from Sharjah to Dubai",
    keywords: ["Movers Sharjah to Dubai", "Sharjah Dubai Relocation", "Inter-Emirate Movers UAE"],
    description: "Dedicated Sharjah to Dubai moving service for apartments, villas and offices, with route planning and same-day scheduling.",
    intro:
      "The Sharjah to Dubai route is one of the most common moves we handle, driven by residents relocating for work, school catchment areas or simply a change of community. Because both cities border each other, many of these moves can be completed within a single day, but the trip still benefits from planning around Sheikh Mohammed Bin Zayed Road traffic patterns, Dubai building access rules and Sharjah move-out approvals on the departure end.",
    highlights: [
      "Same-day Sharjah to Dubai moves for most apartment sizes",
      "Familiar with both Sharjah move-out and Dubai move-in building requirements",
      "Secure packing for the highway leg between emirates",
      "One coordinator managing pickup and delivery on both ends",
    ],
    neighborhoods: ["Downtown Dubai", "Business Bay", "Dubai Marina", "Al Nahda Dubai", "Deira", "JVC"],
    faqs: [
      {
        question: "How long does a Sharjah to Dubai move take?",
        answer:
          "Most apartment moves are completed within a single day, including loading in Sharjah, transport and delivery in Dubai. Villa moves or larger homes may need a full day for packing and a second day for the move itself.",
      },
      {
        question: "Is moving from Sharjah to Dubai more expensive than a local move?",
        answer:
          "It's typically priced slightly higher than a same-city move due to distance and timing, but still far more affordable than many people expect. We provide a written quote based on your inventory and both addresses before you book.",
      },
    ],
    lastUpdated: "2026-01-22",
  },
  {
    slug: "sharjah-to-ajman",
    name: "Sharjah to Ajman",
    title: "Movers from Sharjah to Ajman",
    keywords: ["Movers Sharjah to Ajman", "Sharjah Ajman Relocation", "Inter-Emirate Movers UAE"],
    description: "Reliable Sharjah to Ajman moving service for apartments, villas and small offices with affordable, same-day scheduling.",
    intro:
      "Sharjah and Ajman sit close enough together that many families move between them for a change of building, a shorter commute or more affordable rent, without changing their daily routine much at all. We run this route regularly, which means predictable timing and pricing rather than treating it as a special long-distance job.",
    highlights: [
      "Short, predictable transit time between Sharjah and Ajman",
      "Affordable pricing suited to a short inter-emirate hop",
      "Experience with Ajman communities like Al Nuaimiya and Al Rashidiya",
      "Same crew handles loading in Sharjah and unloading in Ajman",
    ],
    neighborhoods: ["Al Nuaimiya", "Al Rashidiya", "Al Jurf", "Ajman Corniche", "Mushairif"],
    faqs: [
      {
        question: "Can I get a same-day move from Sharjah to Ajman?",
        answer:
          "Yes, this is usually possible for apartment moves given the short distance, subject to crew and truck availability on your preferred date.",
      },
      {
        question: "Do you move furniture and boxes together, or separately?",
        answer:
          "One crew and truck typically handle both in a single trip for this route, since the short distance rarely requires splitting the load across multiple runs.",
      },
    ],
    lastUpdated: "2026-01-22",
  },
  {
    slug: "ajman",
    name: "Ajman",
    title: "Movers and Packers in Ajman",
    keywords: ["Movers Ajman", "Packers and Movers Ajman", "House Shifting UAE"],
    description: "Affordable Ajman movers for homes, apartments, offices and furniture transport across the emirate and UAE.",
    intro:
      "Ajman moves often need quick scheduling, cost control and dependable crews. We provide well-planned packing and moving for families in Al Nuaimiya, Al Rashidiya, Al Jurf and coastal communities.",
    highlights: ["Budget-conscious moving options", "Same-day survey availability", "Reliable Ajman to Sharjah and Dubai routes", "Careful handling for compact apartments"],
    neighborhoods: ["Al Nuaimiya", "Al Rashidiya", "Al Jurf", "Ajman Corniche", "Mushairif", "Al Mowaihat"],
    faqs: [
      { question: "Do you offer affordable movers in Ajman?", answer: "Yes. Ajman moves are priced with local budgets in mind, and we provide a clear written quote before booking so there are no surprises." },
      { question: "Can you move furniture from Ajman to Sharjah or Dubai?", answer: "Yes, this is one of our most frequent routes given how many Ajman residents work or study in neighbouring emirates." },
    ],
    lastUpdated: "2026-01-06",
  },
  {
    slug: "al-quoz",
    name: "Al Quoz",
    title: "Movers in Al Quoz Dubai",
    keywords: ["Movers Al Quoz", "Office Movers Dubai", "Commercial Relocation UAE"],
    description: "Specialist moving services in Al Quoz for warehouses, offices, villas and commercial units.",
    intro:
      "Al Quoz requires movers who understand mixed residential, industrial and commercial access. Our teams handle office assets, showroom furniture, warehouse cartons and villa moves with efficient fleet planning.",
    highlights: ["Commercial and warehouse moving experience", "After-hours office relocation", "Easy dispatch across central Dubai", "Furniture assembly and packing support"],
    neighborhoods: ["Al Quoz 1", "Al Quoz 2", "Al Quoz 3", "Al Quoz 4", "Alserkal Avenue", "Oasis Centre Area"],
    faqs: [
      { question: "Do you move warehouses and showrooms in Al Quoz?", answer: "Yes. We regularly relocate showroom furniture, warehouse inventory and office equipment across Al Quoz's mixed commercial and industrial units." },
      { question: "Can office moves in Al Quoz happen after hours?", answer: "Yes, evening and weekend office moves are common here and help avoid disruption during business hours." },
    ],
    lastUpdated: "2026-01-06",
  },
  {
    slug: "dubai",
    name: "Dubai",
    title: "Movers and Packers in Dubai",
    keywords: ["Movers Dubai", "Office Movers Dubai", "Villa Movers Dubai"],
    description: "Dubai moving company for apartments, villas, offices and premium furniture relocation with 24/7 booking.",
    intro:
      "From Downtown high-rises to Jumeirah villas and Business Bay offices, Dubai moves demand timing, permits and disciplined execution. We coordinate access, protect interiors and keep your relocation on schedule.",
    highlights: ["Dubai tower and villa community expertise", "Office moves outside business hours", "Premium furniture protection", "Inter-emirate moves from Dubai to all UAE cities"],
    neighborhoods: ["Downtown Dubai", "Business Bay", "Dubai Marina", "Jumeirah", "Arabian Ranches", "JVC"],
    faqs: [
      { question: "Do you move villas in Dubai communities like Arabian Ranches or JVC?", answer: "Yes. We handle villa moves across Dubai's family communities, including garden furniture, majlis rooms and larger inventories." },
      { question: "Can you relocate a Dubai office overnight?", answer: "Yes. Overnight and weekend office moves are common for Business Bay and Downtown businesses that need minimal downtime." },
    ],
    lastUpdated: "2026-01-06",
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    title: "Movers and Packers in Abu Dhabi",
    keywords: ["Movers Abu Dhabi", "Moving Company UAE", "Villa Movers UAE"],
    description: "Professional moving services in Abu Dhabi for villas, apartments, offices and long-distance UAE relocation.",
    intro:
      "Our Abu Dhabi service supports capital-city residents and businesses with careful packing, long-distance transport and scheduled delivery from or to any emirate.",
    highlights: ["Long-distance UAE route planning", "Villa and apartment moving crews", "Office relocation coordination", "Secure packing for highway transit"],
    neighborhoods: ["Khalifa City", "Al Reem Island", "Corniche Area", "Mohammed Bin Zayed City", "Yas Island", "Al Khalidiyah"],
    faqs: [
      { question: "Can you move between Abu Dhabi and other emirates?", answer: "Yes. Abu Dhabi to Dubai, Sharjah or the Northern Emirates is a regular route for us, with packing suited to the longer highway distance." },
      { question: "Do you handle villa moves on Yas Island or Al Reem Island?", answer: "Yes, including community access coordination and garden or balcony furniture." },
    ],
    lastUpdated: "2026-01-06",
  },
  {
    slug: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    title: "Movers and Packers in Ras Al Khaimah",
    keywords: ["Movers Ras Al Khaimah", "House Shifting UAE", "Moving Company UAE"],
    description: "Reliable RAK movers for homes, villas, offices and inter-emirate relocations throughout the UAE.",
    intro:
      "Ras Al Khaimah relocations benefit from careful route planning and packing that protects furniture over longer road journeys. We serve family villas, apartments and business locations across RAK.",
    highlights: ["Inter-emirate moving to and from RAK", "Strong protection for longer transit", "Flexible crew sizes", "Clear pricing before booking"],
    neighborhoods: ["Al Hamra", "Mina Al Arab", "Khuzam", "Al Nakheel", "Julfar", "Dafan Al Khor"],
    faqs: [
      { question: "Do you serve villa communities like Al Hamra and Mina Al Arab?", answer: "Yes, including coordination with community security and gate access common in these areas." },
      { question: "How far in advance should I book a RAK move?", answer: "A few days' notice helps for local moves, while inter-emirate moves benefit from a week or more so we can plan the route and truck size." },
    ],
    lastUpdated: "2026-01-06",
  },
  {
    slug: "fujairah",
    name: "Fujairah",
    title: "Movers and Packers in Fujairah",
    keywords: ["Movers Fujairah", "Packing Services UAE", "House Shifting UAE"],
    description: "Fujairah moving services for apartments, villas and businesses requiring safe packing and UAE-wide transport.",
    intro:
      "Moving to or from Fujairah requires dependable scheduling and secure packing for mountain and coastal routes. Our crews support families and companies with careful door-to-door relocation.",
    highlights: ["Fujairah to Dubai and Sharjah moving", "Careful fragile-item packing", "Covered trucks for long routes", "24/7 support for urgent moves"],
    neighborhoods: ["Fujairah City", "Dibba", "Mirbah", "Sakamkam", "Al Faseel", "Khor Fakkan"],
    faqs: [
      { question: "Do you cover both Fujairah City and Khor Fakkan?", answer: "Yes, we serve Fujairah City, Khor Fakkan, Dibba and surrounding coastal and mountain-route communities." },
      { question: "How do you protect furniture on the longer route to Fujairah?", answer: "We use covered trucks and reinforced packing suited to the mountain and coastal roads connecting Fujairah to the rest of the UAE." },
    ],
    lastUpdated: "2026-01-06",
  },
  {
    slug: "umm-al-quwain",
    name: "Umm Al Quwain",
    title: "Movers and Packers in Umm Al Quwain",
    keywords: ["Movers Umm Al Quwain", "Movers Ajman", "Moving Company UAE"],
    description: "Trusted Umm Al Quwain movers for local and inter-emirate home, apartment and office relocation.",
    intro:
      "Umm Al Quwain customers choose us for practical pricing, responsive scheduling and safe moving between the Northern Emirates, Sharjah, Ajman and Dubai.",
    highlights: ["Northern Emirates route expertise", "Affordable local moving packages", "Apartment and villa moving", "Friendly support from quote to delivery"],
    neighborhoods: ["UAQ City", "Al Salamah", "Al Raas", "Falaj Al Mualla", "Al Dar Al Baida", "Emirates Modern Industrial Area"],
    faqs: [
      { question: "Do you move between Umm Al Quwain and Sharjah or Ajman?", answer: "Yes, this is a regular route for us, priced affordably given the relatively short distance." },
      { question: "Are your Umm Al Quwain moving packages budget-friendly?", answer: "Yes. We keep pricing practical for local and inter-emirate moves alike, with a written quote before you commit." },
    ],
    lastUpdated: "2026-01-06",
  },
];

export const stats = [
  { value: "12+", label: "Years UAE moving experience" },
  { value: "18k+", label: "Homes and offices moved" },
  { value: "24/7", label: "Moving support and booking" },
  { value: "98%", label: "Customer satisfaction focus" },
];

export const testimonials = [
  {
    name: "Aisha M.",
    location: "Al Majaz, Sharjah",
    quote:
      "The team packed our apartment carefully, labelled every carton and finished ahead of the building lift timing. Very professional service.",
  },
  {
    name: "Rohit S.",
    location: "Business Bay, Dubai",
    quote:
      "Our office relocation was completed overnight with no disruption to the next working day. The inventory process was excellent.",
  },
  {
    name: "Noura K.",
    location: "Ajman",
    quote:
      "Clear price, polite movers and no damage to our furniture. The WhatsApp updates made the move easy to follow.",
  },
];

export const pricing = [
  {
    name: "Studio / Small Apartment",
    price: "From AED 499",
    description: "Ideal for compact homes with essential packing and a focused moving crew.",
    features: ["2-3 trained movers", "Covered moving truck", "Basic packing materials", "Loading and unloading", "Same-city relocation"],
  },
  {
    name: "Family Apartment / Villa",
    price: "From AED 1,199",
    description: "A complete packing and moving package for larger homes and family furniture.",
    features: ["Supervisor-led crew", "Premium packing materials", "Furniture dismantling", "Room-by-room labelling", "Reassembly support"],
    featured: true,
  },
  {
    name: "Office / Commercial",
    price: "Custom Quote",
    description: "Structured relocation for workstations, documents, IT assets and business equipment.",
    features: ["Site survey", "After-hours scheduling", "Asset labelling", "Department-wise planning", "Dedicated coordinator"],
  },
];

export const faqs = [
  {
    question: "Are you available for urgent moves in Sharjah, Ajman and Dubai?",
    answer:
      "Yes. Our team operates 24/7 and can often support same-day or next-day moves depending on truck and crew availability.",
  },
  {
    question: "Do you dismantle and assemble furniture?",
    answer:
      "Yes. Beds, wardrobes, desks and modular furniture can be dismantled, packed and reassembled at the destination by trained technicians.",
  },
  {
    question: "Is the moving quote fixed?",
    answer:
      "We provide a clear written quote after checking volume, access, distance, packing requirements and any special handling needs.",
  },
  {
    question: "Do you move offices outside business hours?",
    answer:
      "Yes. Office relocation can be scheduled in evenings, weekends or overnight to reduce downtime for your team.",
  },
  {
    question: "Which UAE locations do you serve?",
    answer:
      "We serve Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi, Ras Al Khaimah, Fujairah, Umm Al Quwain and inter-emirate routes across the UAE.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-moving-house-sharjah",
    title: "Complete Guide to Moving House in Sharjah",
    seoTitle: "Complete Guide to Moving House in Sharjah | Movers in Sharjah",
    description: "Plan a smooth Sharjah house move with expert packing, building coordination, costs, timing and local moving advice.",
    date: "2026-01-08",
    readTime: "12 min read",
    category: "Moving Guides",
    faqs: [
      { question: "How early should I book movers in Sharjah?", answer: "Book at least one week ahead for weekends and month-end dates. For urgent moves, request a same-day survey." },
      { question: "Do Sharjah buildings require move permits?", answer: "Many towers require management approval and lift booking. Always check before move day." },
    ],
    sections: [
      {
        heading: "Start with a realistic moving plan",
        body: [
          "A successful house move in Sharjah begins before the cartons arrive. Confirm the new tenancy date, building move-in rules, elevator booking requirements and parking access for the truck. Sharjah communities such as Al Majaz, Muwaileh and Al Nahda can be busy at peak hours, so the right timing makes a major difference.",
          "Create an inventory of furniture, appliances, fragile items and documents. Share photos or videos with your moving company so the quote reflects real volume and access conditions. This avoids surprises on move day and helps the crew bring the right packing materials.",
        ],
      },
      {
        heading: "Protect furniture from damage",
        body: [
          "Professional packers and movers in Sharjah use carton grades, bubble wrap, stretch film, moving blankets and corner guards. Kitchens, mirrors, glass tables, televisions and wardrobes need dedicated protection. If a sofa, bed or wardrobe must be dismantled, screws and fittings should be labelled immediately.",
          "UAE heat and humidity can affect wood, leather and electronics. Avoid leaving packed items in direct sun and use covered trucks for transport. A supervisor should check loading order so heavy items sit securely at the base of the truck while fragile cartons stay protected.",
        ],
      },
      {
        heading: "Coordinate buildings and utilities",
        body: [
          "Ask both buildings about allowed moving hours, service lift access, deposit requirements and security registration. Many delays happen because a tenant arrives with movers but without approval from management. Confirm DEWA or SEWA connections, internet installation and access cards before moving essentials.",
          "For families, pack a first-night carton with chargers, toiletries, basic cookware, school items, medicines and documents. This small step keeps the first evening calm even if unpacking takes longer than expected.",
        ],
      },
      {
        heading: "Choose a mover based on process, not only price",
        body: [
          "The cheapest quote is not always the most affordable move. Look for a licensed moving company UAE customers can reach easily by phone and WhatsApp. Ask about crew size, packing materials, truck type, dismantling, reassembly, timing and what happens if the move takes longer than expected.",
          "Emirates Premier Movers supports home moving, apartment moving, villa moving and packing services across Sharjah and the UAE. Request a written quote and a clear service scope before confirming your date.",
        ],
      },
    ],
  },
  {
    slug: "best-packers-movers-ajman",
    title: "Choosing the Best Packers and Movers in Ajman",
    seoTitle: "Choosing the Best Packers and Movers in Ajman",
    description: "Learn how Ajman residents can compare movers, avoid hidden fees and book safe packing and moving services.",
    date: "2026-01-10",
    readTime: "11 min read",
    category: "Moving Advice",
    faqs: [
      { question: "What should Ajman movers include in a quote?", answer: "A quote should include manpower, truck, packing materials, dismantling, distance, floors, access and reassembly." },
      { question: "Can movers handle Ajman to Dubai relocation?", answer: "Yes. Professional movers regularly handle Ajman to Dubai and Ajman to Sharjah inter-emirate moves." },
    ],
    sections: [
      {
        heading: "Compare more than the headline price",
        body: [
          "Ajman customers often want practical pricing, but a strong quote should explain what is included. Check whether cartons, bubble wrap, wardrobe boxes, dismantling, reassembly and additional trips are covered. A low price can become expensive if essential services are added later.",
          "Ask the mover to confirm crew size, truck size and expected duration. A professional moving company will be transparent about access challenges in Al Nuaimiya, Al Rashidiya, Al Jurf and other residential zones.",
        ],
      },
      {
        heading: "Review packing standards",
        body: [
          "Good packing protects your belongings and saves time during unpacking. Fragile kitchen items should be wrapped individually, furniture should be padded and electronics should be boxed securely. Labels should identify the room, contents and handling priority.",
          "If you are moving from Ajman to Dubai or Sharjah, longer travel distance makes packing quality even more important. Covered trucks and careful stacking reduce movement during transit.",
        ],
      },
      {
        heading: "Check communication and availability",
        body: [
          "Reliable movers answer calls, confirm details on WhatsApp and provide a written booking summary. Because many UAE moves happen during weekends, evenings and month-end periods, 24/7 support can be a real advantage.",
          "Before booking, share photos of bulky furniture, narrow stairs, parking restrictions and any items that need special care. This helps the team arrive prepared and keeps the move efficient.",
        ],
      },
      {
        heading: "Book a team that understands Ajman homes",
        body: [
          "Ajman has a mix of family apartments, villas and compact buildings where careful handling matters. Choose movers who protect common areas, manage lift timing and handle furniture assembly properly.",
          "Emirates Premier Movers provides Ajman moving, packing services, furniture moving and inter-emirate relocation with clear pricing and professional crews.",
        ],
      },
    ],
  },
  {
    slug: "office-relocation-checklist-dubai-businesses",
    title: "Office Relocation Checklist for Dubai Businesses",
    seoTitle: "Office Relocation Checklist for Dubai Businesses | Office Movers Dubai",
    description: "A practical office moving checklist for Dubai companies planning desks, IT assets, documents and staff communication.",
    date: "2026-01-12",
    readTime: "13 min read",
    category: "Office Moving",
    faqs: [
      { question: "When should a Dubai office start planning relocation?", answer: "Start planning 4 to 8 weeks ahead for larger offices and at least 2 weeks ahead for smaller teams." },
      { question: "Can office movers work overnight?", answer: "Yes. Overnight and weekend office moves reduce downtime and keep operations running." },
    ],
    sections: [
      {
        heading: "Assign a relocation owner",
        body: [
          "Every Dubai office move needs one internal decision maker. This person approves layouts, timing, building access, IT sequencing and communication with staff. Without a single owner, small decisions can delay the move and create unnecessary downtime.",
          "Create a relocation file with floor plans, department lists, vendor contacts, move permits and asset inventories. Share the final plan with your office movers so each desk, chair, cabinet and box has a destination.",
        ],
      },
      {
        heading: "Plan IT and confidential documents carefully",
        body: [
          "Computers, monitors, servers and network equipment should be labelled by user or department. Back up essential data before moving day. Sensitive documents should be boxed, sealed and tracked by a responsible staff member or supervisor.",
          "Office movers Dubai businesses trust will use workstation labels, numbered cartons and staged loading. This makes setup faster and avoids mixing departments during unpacking.",
        ],
      },
      {
        heading: "Coordinate buildings and downtime",
        body: [
          "Dubai commercial towers often have strict moving windows, loading bay rules, lift protection requirements and insurance documents. Confirm these early with both old and new buildings. Evening or weekend moves are often the best choice for business continuity.",
          "Notify employees about packing responsibilities, desk clearing deadlines and first-day arrangements at the new office. A simple communication plan reduces confusion and keeps the move professional.",
        ],
      },
      {
        heading: "Use a checklist-based handover",
        body: [
          "At the new site, check desk placement, meeting rooms, reception furniture, files and priority equipment before dismissing the moving crew. Keep a small team available to make immediate placement decisions.",
          "Emirates Premier Movers supports office relocation and commercial relocation across Dubai, Al Quoz, Business Bay, Downtown and the wider UAE with structured planning and after-hours execution.",
        ],
      },
    ],
  },
  {
    slug: "professional-packing-tips-prevent-furniture-damage",
    title: "Professional Packing Tips to Prevent Furniture Damage",
    seoTitle: "Professional Packing Tips to Prevent Furniture Damage",
    description: "Protect sofas, tables, wardrobes, electronics and fragile furniture during UAE moves with professional packing tips.",
    date: "2026-01-14",
    readTime: "10 min read",
    category: "Packing Tips",
    faqs: [
      { question: "Should furniture be dismantled before moving?", answer: "Large beds, wardrobes and modular pieces should be dismantled when it improves safety and access." },
      { question: "What materials protect furniture best?", answer: "Moving blankets, bubble wrap, stretch film, corner guards and strong cartons protect most household items." },
    ],
    sections: [
      {
        heading: "Inspect before packing",
        body: [
          "Before wrapping furniture, inspect existing scratches, loose legs, weak joints and glass sections. Photograph valuable items so everyone understands their condition before transport. This also helps the moving crew choose the safest handling method.",
          "Remove loose shelves, cushions, drawers and detachable parts. Pack hardware in labelled bags and tape the bag to a protected section or keep it in a parts carton.",
        ],
      },
      {
        heading: "Use layers of protection",
        body: [
          "Professional packing services UAE customers rely on use more than one material. A polished dining table may need soft sheet protection, bubble wrap, corner guards and stretch film. Sofas should be protected without trapping moisture for long periods.",
          "Glass tops, mirrors and framed art require upright handling and edge protection. Televisions should be boxed when possible and never laid flat under heavy items.",
        ],
      },
      {
        heading: "Load the truck correctly",
        body: [
          "Even excellent packing can fail if the truck is loaded poorly. Heavy furniture should sit securely, cartons should be stacked by weight and fragile items should not carry pressure. Straps and blankets reduce shifting during turns and braking.",
          "In the UAE, covered trucks are important because direct sun, dust and humidity can affect furniture. Avoid leaving wrapped furniture outside while waiting for lift access.",
        ],
      },
      {
        heading: "Let specialists handle complex items",
        body: [
          "Large wardrobes, imported furniture, office partitions and delicate antiques deserve specialist handling. Professional furniture movers know when dismantling is safer than forcing an item through a tight corridor.",
          "Emirates Premier Movers offers furniture moving, furniture assembly and packing services designed to reduce damage risk and keep relocation stress low.",
        ],
      },
    ],
  },
  {
    slug: "common-moving-mistakes-uae",
    title: "Common Moving Mistakes in the UAE",
    seoTitle: "Common Moving Mistakes in the UAE and How to Avoid Them",
    description: "Avoid hidden costs, lift delays, poor packing and scheduling problems with this UAE moving mistakes guide.",
    date: "2026-01-16",
    readTime: "12 min read",
    category: "Moving Advice",
    faqs: [
      { question: "What is the biggest moving mistake in the UAE?", answer: "Not confirming building permissions and lift booking is one of the most common causes of delays." },
      { question: "Is month-end a busy moving period?", answer: "Yes. Month-end and weekends are high demand, so book early when possible." },
    ],
    sections: [
      {
        heading: "Leaving building approvals until the last day",
        body: [
          "Many UAE buildings require move-out or move-in approvals, elevator reservations, security registration and sometimes deposits. If these are missing, movers may wait for hours or the move may need to be rescheduled.",
          "Contact both building management teams early and ask for written confirmation of allowed moving hours, loading area rules and lift protection requirements.",
        ],
      },
      {
        heading: "Choosing only by the lowest price",
        body: [
          "A very low quote may exclude packing materials, dismantling, extra manpower, additional trips or long carry distances. The result can be stress and higher final costs. Compare scope, reviews, communication and process before booking.",
          "A professional moving company UAE residents can trust will ask the right questions and provide a clear written estimate.",
        ],
      },
      {
        heading: "Packing too late or without labels",
        body: [
          "Unlabelled cartons slow down unloading and make unpacking frustrating. Label by room and priority. Keep documents, medicines, chargers and daily essentials separate so they do not disappear into general boxes.",
          "If time is limited, hire packing services. Experienced packers can safely complete in hours what may take a family several evenings.",
        ],
      },
      {
        heading: "Ignoring access and furniture size",
        body: [
          "Measure lifts, doorways, staircases and large furniture. Villas, towers and older buildings can all have access challenges. Share photos with movers so they can bring the right tools and crew size.",
          "Emirates Premier Movers helps customers across Sharjah, Ajman, Dubai and Abu Dhabi avoid these mistakes through careful planning and responsive support.",
        ],
      },
    ],
  },
  {
    slug: "complete-villa-moving-guide-dubai",
    title: "Complete Villa Moving Guide for Dubai",
    seoTitle: "Complete Villa Moving Guide for Dubai | Villa Movers UAE",
    description: "Dubai villa moving guide covering planning, packing, garden furniture, community rules, costs and move-day preparation.",
    date: "2026-01-18",
    readTime: "14 min read",
    category: "Villa Moving",
    faqs: [
      { question: "How long does a Dubai villa move take?", answer: "Most villa moves take one full day, while larger villas may need packing one day and moving the next." },
      { question: "Do villa movers handle outdoor furniture?", answer: "Yes. Outdoor furniture, grills, planters and storage items can be packed and moved with the right plan." },
    ],
    sections: [
      {
        heading: "Survey every area of the villa",
        body: [
          "Dubai villas often include bedrooms, majlis spaces, kitchens, storage rooms, garden furniture, balconies, maid rooms and garage items. A detailed survey helps estimate cartons, crew size, truck capacity and move duration accurately.",
          "Share details about community access, parking, gate approvals and any oversized items. Villas in Arabian Ranches, Jumeirah, JVC and other communities can have different access rules.",
        ],
      },
      {
        heading: "Pack in zones",
        body: [
          "Villa moves become easier when each area is packed as a zone. Use colour labels for bedrooms, kitchen, outdoor furniture, office, children’s rooms and storage areas. This speeds up placement at the new villa and reduces misplaced cartons.",
          "Fragile décor, chandeliers, mirrors, art and imported furniture need special attention. Ask your movers what materials they will use and how delicate pieces will be loaded.",
        ],
      },
      {
        heading: "Plan dismantling and reassembly",
        body: [
          "Beds, wardrobes, large dining tables, shelving and outdoor structures may need dismantling. A good villa moving team labels hardware, protects panels and checks stability after reassembly.",
          "Because villa moves involve more items than apartments, supervision matters. A move coordinator should manage loading order, truck dispatch and room-by-room delivery.",
        ],
      },
      {
        heading: "Prepare for move day",
        body: [
          "Keep children, pets and essential documents away from active moving zones. Reserve parking, clear pathways and confirm that utilities are ready at the new property. Take final meter readings and check all rooms before leaving.",
          "Emirates Premier Movers provides villa moving services in Dubai and across the UAE with careful packing, furniture assembly and 24/7 support for families who want a premium relocation experience.",
        ],
      },
    ],
  },
  {
    slug: "cost-of-movers-sharjah-2026",
    title: "Cost of Movers in Sharjah in 2026: A Practical Price Guide",
    seoTitle: "Cost of Movers in Sharjah in 2026",
    description: "See what affects the cost of movers and packers in Sharjah in 2026, from studio apartments to full villas, and how to get an accurate quote.",
    date: "2026-01-20",
    readTime: "9 min read",
    category: "Moving Guides",
    faqs: [
      { question: "What is the average cost of movers in Sharjah?", answer: "Small apartment moves often start from around AED 499, while villa and multi-bedroom moves are priced after a short survey based on volume, access and distance." },
      { question: "Are Sharjah to Dubai or Ajman moves priced differently?", answer: "Inter-emirate moves are usually priced slightly higher than a same-city move due to distance and timing, but a written quote is still provided before booking." },
    ],
    sections: [
      {
        heading: "What actually drives the price",
        body: [
          "The cost of movers in Sharjah is rarely just about square footage. The number of rooms, how much needs packing versus how much is already boxed, floor level and lift access, parking distance from the truck to the entrance, and whether furniture needs dismantling all factor into the final price. Two identical two-bedroom apartments can have quite different quotes if one has full lift access at ground level and the other is up three flights with no service lift.",
          "Timing matters too. Weekend and month-end dates are in higher demand across Sharjah, so booking a week or more ahead generally gives you more flexibility on both price and available time slots.",
        ],
      },
      {
        heading: "Typical price ranges by home size",
        body: [
          "As a rough guide for 2026, studio and one-bedroom apartments in Sharjah typically start from around AED 499 for a same-city move with basic packing. Two and three-bedroom apartments or family villas move into a wider range depending on inventory and packing scope, which is why we recommend a short survey rather than a phone estimate for anything beyond a small apartment.",
          "Office and commercial moves are quoted individually, since workstation counts, IT equipment and after-hours scheduling vary considerably between a small clinic and a full office floor.",
        ],
      },
      {
        heading: "How to get an accurate quote, not just a low one",
        body: [
          "Share photos of your furniture, stairs or lift access, and any oversized items when you request a quote. This lets the moving company price the job accurately instead of guessing, which is where low phone estimates often go wrong once the crew actually arrives.",
          "Ask what's included: packing materials, dismantling, reassembly and disposal of packing waste are sometimes billed separately by other companies. Our quotes for home moving, villa moving and apartment moving in Sharjah spell out what's covered before you confirm a date.",
        ],
      },
      {
        heading: "Get a written quote for your Sharjah move",
        body: [
          "If you're planning a move in Sharjah, Al Nahda, Muwaileh, Al Taawun or anywhere nearby, our Sharjah movers page has more detail on local coverage, and you can request a free, written quote whenever you're ready to compare real numbers rather than estimates.",
        ],
      },
    ],
  },
  {
    slug: "best-time-to-move-house-sharjah",
    title: "Best Time to Move House in Sharjah (And How to Avoid Delays)",
    seoTitle: "Best Time to Move House in Sharjah",
    description: "Find the best time of day, week and month to move house in Sharjah, and how to avoid common lift, traffic and booking delays.",
    date: "2026-01-24",
    readTime: "8 min read",
    category: "Moving Advice",
    faqs: [
      { question: "What is the best day of the week to move in Sharjah?", answer: "Weekdays, particularly mid-week, tend to have more crew and lift availability than weekends, which are the busiest booking days." },
      { question: "Is month-end a difficult time to move in Sharjah?", answer: "Yes, month-end dates coincide with many tenancy renewals and are typically the busiest period, so booking early is worthwhile." },
    ],
    sections: [
      {
        heading: "Weekday moves are usually smoother",
        body: [
          "In Sharjah, weekends and month-end dates are consistently the busiest times for both moving companies and building service lifts. If your tenancy dates allow any flexibility, a mid-week move often means faster lift access, less competition for loading bay space, and more choice in available time slots.",
          "Early morning slots also tend to avoid the worst of Sharjah's daytime heat for the crew and reduce the time furniture spends exposed while waiting for lift access.",
        ],
      },
      {
        heading: "Plan around your building's approval process",
        body: [
          "Many Sharjah towers and villa communities require a move-in or move-out approval before movers are allowed on site, and this can take a day or two to process depending on the building. Starting this step as soon as your move date is confirmed avoids a last-minute scramble that pushes your actual move later than planned.",
          "If you're relocating between Sharjah and Dubai or Ajman, also factor in typical traffic patterns on routes like Sheikh Mohammed Bin Zayed Road, particularly during school-term rush hours.",
        ],
      },
      {
        heading: "Give yourself a realistic packing runway",
        body: [
          "Even a fast, well-organised move benefits from starting packing a few days early rather than the night before. Non-essential items, seasonal clothing and books can be boxed well ahead of time, leaving only daily-use items for the final day.",
          "If time is tight, our packing services in Sharjah can take on some or all of this, which is often the single biggest factor in whether move day feels calm or rushed.",
        ],
      },
      {
        heading: "Book early for the date that actually suits you",
        body: [
          "Whichever day works best for your move, the main advantage of booking early is choice — of date, of time slot and of crew size. Visit our Sharjah movers page for local coverage details, or request a free quote to lock in your preferred date.",
        ],
      },
    ],
  },
];

export const trustPoints = [
  { icon: ShieldCheck, title: "Licensed & careful", text: "Professional crews, covered trucks and accountable supervision on every move." },
  { icon: Clock3, title: "24/7 availability", text: "Move early morning, evening, weekend or overnight when your building allows." },
  { icon: CheckCircle2, title: "Transparent quotes", text: "Clear pricing based on access, volume, distance and packing scope." },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
