import type { SubscriptionPlan } from '../types/subscription';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 499,
    duration: 1,
    features: [
      'View 10 profiles per day',
      'Basic search filters',
      'Send interest to 5 profiles per day'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 999,
    duration: 3,
    features: [
      'Unlimited profile views',
      'Advanced search filters',
      'View contact details',
      'Send unlimited interests',
      'Priority customer support'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 1499,
    duration: 6,
    features: [
      'All Premium features',
      'Profile highlight',
      'Personal relationship advisor',
      'Background verification',
      'Premium badge on profile'
    ]
  }
];