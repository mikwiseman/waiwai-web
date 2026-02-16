export const page = {
  title: 'AI and the Democratization of IT: How Digital Product Creation Is Changing',
  hypothesis: 'Our hypothesis: With the emergence of AI tools, product creation is no longer a monopoly of IT departments — but is held back not by technological, but by organizational and cultural barriers.',
  backLink: 'Back to home',
  submit: 'Submit',
  submitting: 'Submitting...',
  errorGeneric: 'An error occurred while submitting. Please try again.',
  otherPlaceholder: 'Please specify...',
  requiredMark: '*',
  otherLabel: 'Other:',
  errorRequired: 'Please answer the question',
  errorOtherRequired: 'Please specify your answer to the question',
}

export const thankYou = {
  title: 'Thank you!',
  message: 'Here is your 20% discount for the next WaiUni AI course with promo code',
  promoCode: 'AGI20',
  backToHome: 'Back to home',
  resultsTitle: 'Survey Results',
  respondents: 'responses',
  loading: 'Loading results...',
  errorStats: 'Could not load results.',
}

export const results = {
  heading: 'Survey Results',
  subheading: 'Here is how other respondents answered:',
  totalResponses: 'total responses',
  answeredLabel: 'answered this question',
  loadingText: 'Loading results...',
  errorText: 'Could not load results.',
}

export const questions = [
  {
    id: 'q1_ai_creation',
    required: true,
    text: 'With AI, products can be created not by IT specialists, but by domain experts. How much do you agree?',
    type: 'radio',
    options: [
      'Already happening',
      'Will happen in the next 2-3 years',
      'Won\'t happen soon (5+ years)',
      'Won\'t happen',
    ],
  },
  {
    id: 'q2_barrier',
    required: true,
    hasOther: true,
    text: 'What is the main barrier to AI adoption in your company?',
    type: 'radio',
    options: [
      'Information security',
      'Employee resistance',
      'Lack of methodology',
      'Unpredictable results',
      'Economics (expensive / unclear ROI)',
      'No barriers',
    ],
  },
  {
    id: 'q3_it_resistance',
    required: true,
    hasOther: true,
    text: 'Do you see resistance to AI adoption from the IT department?',
    type: 'radio',
    options: [
      'Yes, active resistance',
      'Some, but passive',
      'No',
    ],
  },
  {
    id: 'q4_dev_budgets',
    required: false,
    text: 'Will developer budgets increase or decrease because of AI?',
    type: 'radio',
    options: [
      'Increase',
      'Decrease',
      'Stay the same',
    ],
  },
  {
    id: 'q5_humanities',
    required: true,
    hasOther: true,
    text: 'Do you agree that humanities skills will become more important in digital product creation?',
    type: 'radio',
    options: [
      'Yes',
      'No',
      'Partially',
    ],
  },
  {
    id: 'q6_processes',
    required: true,
    hasOther: true,
    text: 'Do product creation processes need to change for AI?',
    type: 'radio',
    options: [
      'Yes, radically',
      'Yes, but gradually',
      'No, AI integrates well into current processes',
      'Not clear yet',
    ],
  },
  {
    id: 'q7_team_size',
    required: true,
    text: 'Will your team size change in the next 2-3 years due to AI?',
    type: 'radio',
    options: [
      'Significant reduction (>40%)',
      'Slight reduction',
      'Stay the same',
      'Grow',
    ],
  },
  {
    id: 'role_and_company',
    required: false,
    text: 'Your role and company / industry',
    type: 'text',
  },
  {
    id: 'company_size',
    required: false,
    text: 'Company size',
    type: 'radio',
    options: [
      'Up to 100 employees',
      '100-500 employees',
      '500-1,000 employees',
      '1,000-5,000 employees',
      'More than 5,000 employees',
    ],
  },
]
