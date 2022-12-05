export interface Project {
  week: number
  id: string
  name: string
  description: string
  url: string
  images: Array<string>
  materials: Array<string>
  tools: Array<string>
}

const projects: Project[] = [
  {
    week: 1,
    id: 'flashlight',
    name: 'Bluelight',
    description:
      'A simple pressure-activated flashlight, enclosing a small LED and a replaceable battery. I used a 3-layer wood construction for the body, with the natural give of the tape allowing pressure to connect an LED lede to the battery.',
    url: 'https://edu.lachlanjc.com/2022-11-06_fab_turning_on_and_off',
    images: [
      'https://cloud-htx69na44-lachlanjc.vercel.app/wood.gif',
      'https://cloud-a88vbqwi1-lachlanjc.vercel.app/2022-11-06_img_0100.png',
      'https://cloud-htx69na44-lachlanjc.vercel.app/cardboard.gif',
    ],
    materials: ['Wood', 'Cardboard', 'Masking tape', 'CR2032 battery', 'LED'],
    tools: ['Band saw', 'Hand drill'],
  },
  {
    week: 2,
    id: 'blockheads',
    name: 'Blockheads',
    description:
      '5 men who’ve held up progress on climate action around the world, rendered as identical rectangular wooden heads on sticks. I cut up scrap wood into the heads, rounded the top corners with the belt sander, rounded every edge with a sanding block, then used hot glue and plastic wrap for the hair. The heads are mounted on dowels, set into a base.',
    url: 'https://edu.lachlanjc.com/2022-11-13_fab_five_identical_blockheads',
    images: [
      'https://cloud-c1cx99geg-lachlanjc.vercel.app/4_hairy.jpg',
      'https://cloud-c1cx99geg-lachlanjc.vercel.app/portraits.jpg',
      'https://cloud-c1cx99geg-lachlanjc.vercel.app/5_overhead.jpg',
      'https://cloud-6r6ed5bfl-lachlanjc.vercel.app/blockheads_high.jpeg',
    ],
    materials: [
      'Wood',
      'MDF',
      'Plastic bag',
      'Lock of wig',
      'Dowel',
      'Pencil',
      'Hot glue',
    ],
    tools: [
      'Band saw',
      'Sanding block',
      'Belt sander',
      'Hand drill',
      'Drill press',
      'Hot glue gun',
    ],
  },
  {
    week: 3,
    id: 'solar',
    name: '2010 vs 2020 in Solar',
    description:
      'Photovoltaic panels have gotten dramatically cheaper since 2010. I designed a PV panel in Illustrator then used a laser cutter to cut out the relative sizes you could buy for the same price in 2010 vs 2020.',
    url: 'https://edu.lachlanjc.com/2022-11-18_fab_laser_cutting',
    images: [
      'https://cloud-d5zdaj2fg-lachlanjc.vercel.app/2.jpeg',
      'https://cloud-qysuwfiz6-lachlanjc.vercel.app/2022-11-18_img_0620.jpeg',
      'https://cloud-d5zdaj2fg-lachlanjc.vercel.app/4.jpeg',
    ],
    materials: ['Cardboard', 'Wood', 'Spray paint'],
    tools: ['Laser cutter', 'Adobe Illustrator'],
  },
  {
    week: 4,
    id: 'magnet',
    name: 'Magnet-Mounted Solar',
    description:
      'As a prototype for a board game piece, I mounted a wooden solar panel with the previous week’s design to a base with a magnet enclosed inside. The base uses a 3-layer construction similar to Bluelight.',
    url: 'https://edu.lachlanjc.com/2022-11-27_fab_enclosing_a_magnet',
    images: [
      'https://cloud-njiereckz-lachlanjc.vercel.app/8_underside.jpeg',
      'https://cloud-njiereckz-lachlanjc.vercel.app/6_halfway.jpeg',
      'https://cloud-njiereckz-lachlanjc.vercel.app/3_sanded.jpeg',
    ],
    tools: [
      'Paint booth',
      'Sanding block',
      'Laser cutter',
      'Adobe Illustrator',
      'Hot glue gun',
      'Hand drill',
      'X-acto knife',
      'Sand paper',
      'Miter saw',
      'Band saw',
    ],
    materials: ['Wood', 'Spray paint', 'Magnet', 'Masking tape', 'Hot glue'],
  },
]

export default projects
