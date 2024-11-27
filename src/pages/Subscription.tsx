import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { subscriptionPlans } from '../data/subscriptionPlans';
import { useAuthStore } from '../store/authStore';

export function Subscription() {
  const navigate = useNavigate();
  const { upgradeToPremium } = useAuthStore();

  const handleSubscribe = async (planId: string) => {
    // In a real app, this would integrate with Stripe
    upgradeToPremium();
    navigate('/search');
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Select the perfect plan that suits your needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">₹{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/{plan.duration} month{plan.duration > 1 ? 's' : ''}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className="mt-8 w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}