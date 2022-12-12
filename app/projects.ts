import { ImageProps } from 'next/image'

import img1 from '../public/img/1.gif'
import img1Sketch from '../public/img/1_sketch.png'
import img1Cardboard from '../public/img/1_cardboard.gif'

import img2Overview from '../public/img/2_overview.jpeg'
import img2Flat from '../public/img/2_flat.jpeg'
import img2Secondary from '../public/img/2_secondary.jpeg'
import img2Portraits from '../public/img/2_portraits.jpeg'

import img3 from '../public/img/3.jpeg'
import img3Illustrator from '../public/img/3_illustrator.jpeg'

import img4Closeup from '../public/img/4_closeup.jpeg'
import img4Profile from '../public/img/4_profile.jpeg'
import img4Process1 from '../public/img/4_process1.jpeg'
import img4Process2 from '../public/img/4_process2.jpeg'

import img5Gif from '../public/img/5.gif'
import img5Overview from '../public/img/5_overview.jpeg'
import img5Side from '../public/img/5_side.jpeg'
import img5Process from '../public/img/5_process.jpeg'

export interface Project {
  week: number
  id: string
  name: string
  description: string
  url: string
  product: Array<ImageProps['src']>
  process: Array<ImageProps['src']>
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
    product: [img1],
    process: [img1Sketch, img1Cardboard],
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
    product: [img2Overview, img2Secondary, img2Flat],
    process: [img2Portraits],
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
    product: [img3],
    process: [img3Illustrator],
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
    product: [img4Profile, img4Closeup],
    process: [img4Process1, img4Process2],
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
  {
    week: 5,
    id: 'kinetic',
    name: 'DAC Diorama',
    description:
      'Direct air capture is a promising carbon removal technology to suck CO₂ out of the air. I designed a diorama of a DAC plant, with laser-cut fan blades attached to a DC motor to spin, and the renewable power, water use, heating, and end product included.',
    url: 'https://edu.lachlanjc.com/2022-12-10_fab_kinetic_diorama',
    product: [img5Overview, img5Side],
    process: [img5Gif, img5Process],
    tools: [
      'Breadboard',
      'Adobe Illustrator',
      'Laser cutter',
      'X-acto knife',
      'Hot glue gun',
    ],
    materials: [
      'Cardboard',
      'DC motor',
      'Aluminum foil',
      'Tissue paper',
      'Arduino on breadboard',
      'Found plastic',
      'Found air bladder',
      'Hot glue',
      'Week 4 project',
    ],
  },
]

export default projects
