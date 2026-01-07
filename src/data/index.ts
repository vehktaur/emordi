import { Church, MessageSquare } from 'lucide-react'
import type { Hymn, ProgramSection } from '@/types'
import HandHeartIcon from '@/components/ui/hand-heart-icon'
import MessageCircleIcon from '@/components/ui/message-circle-icon'

export const hymns: Array<Hymn> = [
  {
    number: 131,
    title: '"What God Has Yoked Together"',
    scripture: '(Matthew 19:5, 6)',
    verses: [
      {
        number: 1,
        lines: [
          'With dignity and joy,',
          'A threefold cord is bound.',
          'With God and men to witness,',
          'These sacred vows resound.',
        ],
      },
      {
        number: 2,
        lines: [
          "They both have searched God's Word",
          'To learn to do his will,',
          'And now they seek his blessing,',
          'Their promise to fulfill.',
        ],
      },
    ],
    chorus: [
      {
        number: 1,
        lines: [
          'He vowed before Jehovah',
          'To love her from the heart.',
          '"What God has yoked together,',
          'Let no man put apart."',
        ],
      },
      {
        number: 2,
        lines: [
          'She vowed before Jehovah',
          'To love him from the heart.',
          '"What God has yoked together,',
          'Let no man put apart."',
        ],
      },
    ],
    seeAlso: 'Gen. 2:24; Eccl. 4:12; Eph. 5:22-33',
  },
  {
    number: 132,
    title: 'Now We Are One',
    scripture: '(Genesis 2:23, 24)',
    verses: [
      {
        number: 1,
        lines: [
          'This is at last bone of my bone,',
          "Flesh of my flesh; now I'm not alone.",
          'God has provided a partner,',
          'Someone to call my own.',
        ],
      },
      {
        number: 2,
        lines: [
          'Now we are one; now there can be',
          'Blessings to share for you and for me.',
          'As man and woman together,',
          'We are a family.',
        ],
      },
      {
        number: 3,
        lines: [
          "Ev'ry day we'll serve our God above.",
          "As he shows the way, Unfailing love we'll display.",
        ],
      },
      {
        number: 4,
        lines: [
          'As we have vowed, so may it be.',
          'Seasons of joy, may we come to see.',
          'Oh, may we honor Jehovah,',
        ],
      },
      {
        number: 5,
        lines: ['And may you always be my love.'],
      },
    ],
    showVersesNumbers: false,
    seeAlso: 'Gen. 29:18; Eccl. 4:9, 10; 1 Cor 13:8',
  },
]

export const programSections: Array<ProgramSection> = [
  {
    title: 'Officiating Ministers',
    items: [
      {
        num: 1,
        title: 'Bro Isichei',
      },
      {
        num: 2,
        title: 'Bro Timothy Uangboje - Chairman',
      },
      {
        num: 3,
        title: 'Bro Emmanuel Akinkugbe - Speaker',
      },
    ],
  },

  {
    title: 'Order of Events',
    subtitle: 'Join us as we celebrate this special day',
    items: [
      {
        num: 1,
        title: 'Opening Song (131) and Prayer',
        subtitle: '(Opening prayer by Brother Ezekiel Ebhodaghe)',
        icon: Church,
      },
      {
        num: 2,
        title: 'Wedding Discourse',
        icon: MessageCircleIcon,
      },
      {
        num: 3,
        title: 'Exchange of Vows',
        icon: HandHeartIcon,
      },
      {
        num: 4,
        title: 'Announcements',
        icon: MessageSquare,
      },
      {
        num: 5,
        title: 'Closing Song (132) and Prayer',
        icon: Church,
        subtitle: '(Closing prayer by )',
      },
    ],
  },
]

export const receptionProgram = [
  {
    number: '1',
    title: 'Introduction of Chairman',
    subtitle: 'Recognition of Guests',
  },
  {
    number: '2',
    title: "Arrival of the Bride and Groom's Parents",
  },
  {
    number: '3',
    title: 'Arrival of the Bride & Groom',
  },
  {
    number: '4',
    title: 'Opening Prayer',
  },
  {
    number: '5',
    title: "Chairman's Opening Address",
  },
  {
    number: '6',
    title: 'Cutting of the Cake',
  },
  {
    number: '7',
    title: 'Nuptial Dance',
  },
  {
    number: '8',
    title: 'Toast to the Bride and Groom',
  },
  {
    number: '9',
    title: 'Presentation of Gifts',
  },
  {
    number: '10',
    title: "Chairman's Closing Remark",
  },
  {
    number: '11',
    title: 'Vote of Thanks by Groom',
  },
  {
    number: '12',
    title: 'Closing Prayers',
  },
]
