import type { Hymn, ProgramSection } from '@/types'
import { Church, Heart, MessageSquare } from 'lucide-react'

export const hymns: Hymn[] = [
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

export const programSections: ProgramSection[] = [
  {
    title: 'Officiating Ministers',
    items: [
      {
        num: 1,
        title: 'Bro Isichei',
      },
      {
        num: 2,
        title: 'Bro Emmanuel Akinkugbe',
      },
    ],
  },

  {
    title: 'Order of Service',
    subtitle: 'Join us as we celebrate this special day',
    items: [
      {
        num: 1,
        title: 'Opening Song (131) and Prayer',
        icon: Church,
      },
      {
        num: 2,
        title: 'Wedding Discourse',
        icon: MessageSquare,
      },
      {
        num: 3,
        title: 'Exchange of Vows',
        icon: Heart,
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
      },
    ],
  },
]
