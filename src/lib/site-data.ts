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
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
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
  phone: "+971 50 123 4567",
  phoneHref: "+971501234567",
  whatsapp: "+971 50 123 4567",
  whatsappHref: "971501234567",
  email: "bookings@emiratespremiermovers.ae",
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
    keywords: ["House Shifting UAE", "Movers in Sharjah", "Moving Company UAE"],
    description: "Careful door-to-door house shifting for families across Sharjah, Ajman, Dubai, Abu Dhabi and the Northern Emirates.",
    overview:
      "Our home moving team plans every detail: survey, packing, furniture protection, loading, transport, unloading and room-by-room placement. We are built for UAE communities where building permissions, elevator timings and parking access matter as much as careful handling.",
    benefits: ["Dedicated move coordinator", "Protected furniture and appliances", "Flexible 24/7 scheduling", "Transparent UAE-wide pricing"],
    process: ["Free survey and move plan", "Professional packing and labelling", "Safe loading in covered trucks", "Delivery, placement and final inspection"],
    faqs: serviceFaqs("home moving"),
  },
  {
    slug: "apartment-moving",
    title: "Apartment Moving Services",
    shortTitle: "Apartment Moving",
    icon: Building2,
    keywords: ["Apartment Movers UAE", "Packers and Movers Sharjah", "Movers Ajman"],
    description: "Efficient apartment relocations for studios, flats and high-rise residences with elevator and building coordination.",
    overview:
      "Apartment moves require precise timing, lift booking and careful movement through corridors. Our crews handle compact spaces, fragile interiors and tower restrictions with disciplined packing and clean execution.",
    benefits: ["Lift and access coordination", "Compact-space packing expertise", "Fast studio to 4-bedroom moves", "Clean handling in shared buildings"],
    process: ["Confirm inventory and access", "Pack fragile and daily-use items", "Move via approved lift routes", "Unpack essentials and remove debris"],
    faqs: serviceFaqs("apartment moving"),
  },
  {
    slug: "villa-moving",
    title: "Villa Moving Services in the UAE",
    shortTitle: "Villa Moving",
    icon: House,
    keywords: ["Villa Movers UAE", "Villa Movers Dubai", "House Shifting UAE"],
    description: "Premium villa shifting for large homes, garden furniture, majlis rooms, wardrobes, appliances and delicate décor.",
    overview:
      "Villa moving needs more manpower, better sequencing and protection for premium furniture. We assign trained supervisors, larger trucks and specialist packing for bedrooms, kitchens, outdoor furniture and family valuables.",
    benefits: ["Large crew capacity", "Room-by-room move sequencing", "Special care for luxury furniture", "Assembly support for beds and wardrobes"],
    process: ["Pre-move villa survey", "Colour-coded packing zones", "Protected loading of large items", "Reassembly and placement at the new villa"],
    faqs: serviceFaqs("villa moving"),
  },
  {
    slug: "office-relocation",
    title: "Office Relocation Services",
    shortTitle: "Office Relocation",
    icon: BriefcaseBusiness,
    keywords: ["Office Movers Dubai", "Commercial Relocation UAE", "Moving Company UAE"],
    description: "Business relocation with minimal downtime for offices, workstations, IT assets, documents and meeting rooms.",
    overview:
      "We plan office moves around operational continuity. Our supervisors label workstations, protect IT equipment, coordinate after-hours schedules and help your team restart quickly in the new premises.",
    benefits: ["Weekend and overnight moves", "IT and document handling", "Department-wise labelling", "Minimal business disruption"],
    process: ["Site walk-through and relocation map", "Asset labelling and secure packing", "After-hours transport", "Desk placement and handover checklist"],
    faqs: serviceFaqs("office relocation"),
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
    benefits: ["Commercial move planning", "Inventory-safe handling", "Supervisor-led crews", "Flexible fleet allocation"],
    process: ["Operational impact review", "Inventory and equipment packing", "Staged truck loading", "Setup support at destination"],
    faqs: serviceFaqs("commercial relocation"),
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
    benefits: ["Scratch and edge protection", "Careful dismantling", "Heavy-item lifting support", "Blanketed truck interiors"],
    process: ["Inspect and photograph key items", "Wrap, pad and secure furniture", "Load with weight balance", "Place and inspect after delivery"],
    faqs: serviceFaqs("furniture moving"),
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
    benefits: ["High-quality materials", "Fragile-item specialists", "Clear carton labelling", "Optional unpacking service"],
    process: ["Assess fragile and priority items", "Pack room by room", "Label every carton", "Unpack essentials at destination"],
    faqs: serviceFaqs("packing services"),
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
    benefits: ["Trained moving manpower", "Safe stacking techniques", "Building area protection", "Hourly or project pricing"],
    process: ["Confirm access and item list", "Protect floors and corners", "Load or unload safely", "Place items as directed"],
    faqs: serviceFaqs("loading and unloading"),
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
    benefits: ["Skilled assembly technicians", "Organised hardware packing", "Wardrobe and bed expertise", "Post-move stability checks"],
    process: ["Inspect furniture joints", "Dismantle and pack hardware", "Transport safely", "Reassemble and align"],
    faqs: serviceFaqs("furniture assembly"),
  },
  {
    slug: "warehouse-storage",
    title: "Warehouse Storage Solutions",
    shortTitle: "Warehouse Storage",
    icon: Warehouse,
    keywords: ["Storage UAE", "Moving Company UAE", "Commercial Relocation UAE"],
    description: "Short-term and long-term storage coordination for furniture, cartons, office assets and seasonal inventory.",
    overview:
      "If your new property is not ready, storage keeps the move on schedule. We pack, inventory and transport goods to secure storage options suited to homes and businesses.",
    benefits: ["Short and long-term options", "Inventory-based intake", "Protected packing for storage", "Pickup and redelivery support"],
    process: ["Define storage duration", "Pack for extended protection", "Inventory and load", "Redeliver when ready"],
    faqs: serviceFaqs("warehouse storage"),
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
    benefits: ["Same-city move expertise", "Affordable local packages", "Quick team dispatch", "Covered moving trucks"],
    process: ["Book time slot", "Pack and protect items", "Transport locally", "Unload and arrange"],
    faqs: serviceFaqs("local moving"),
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
    benefits: ["UAE-wide coverage", "Highway-safe packing", "Route and timing planning", "Single point of coordination"],
    process: ["Confirm emirate-to-emirate route", "Pack for longer transit", "Secure truck loading", "Deliver and inspect"],
    faqs: serviceFaqs("long distance moving"),
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
    benefits: ["Export-grade packing", "Detailed packing lists", "Fragile protection", "Shipment coordination support"],
    process: ["Survey shipment volume", "Prepare export packing", "Create inventory lists", "Coordinate collection and handover"],
    faqs: serviceFaqs("international relocation"),
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
    benefits: ["HR-friendly coordination", "Confidential handling", "Multi-move scheduling", "Service reporting on request"],
    process: ["Confirm employee move scope", "Schedule survey and quote", "Execute managed relocation", "Collect feedback and close report"],
    faqs: serviceFaqs("corporate relocation"),
  },
];

export const areas: Area[] = [
  {
    slug: "sharjah",
    name: "Sharjah",
    title: "Movers and Packers in Sharjah",
    keywords: ["Movers in Sharjah", "Packers and Movers Sharjah", "Furniture Movers Sharjah"],
    description: "Premium movers in Sharjah for apartments, villas, offices and furniture shifting with fast 24/7 support.",
    intro:
      "Sharjah families and businesses trust our crews for careful packing, building coordination and reliable local moving from Al Majaz to Muwaileh. We understand busy residential towers, villa communities and inter-emirate routes into Dubai and Ajman.",
    highlights: ["Experienced Sharjah-based moving crews", "Fast response for Al Nahda, Muwaileh and Al Majaz", "Affordable packages for apartments and villas", "Furniture protection for UAE humidity and heat"],
    neighborhoods: ["Al Majaz", "Muwaileh", "Al Nahda", "Al Khan", "Al Qasimia", "University City"],
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
