
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface WaitlistFormProps {
  onSubmit: () => void;
}

const WaitlistForm = ({ onSubmit }: WaitlistFormProps) => {
  const [userEmail, setUserEmail] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ userEmail: '', partnerEmail: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { userEmail: '', partnerEmail: '' };
    
    if (!validateEmail(userEmail)) {
      newErrors.userEmail = 'Please enter a valid email address';
    }
    
    if (!validateEmail(partnerEmail)) {
      newErrors.partnerEmail = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    
    if (!newErrors.userEmail && !newErrors.partnerEmail) {
      setIsSubmitted(true);
      
      // Simulate form submission
      setTimeout(() => {
        onSubmit();
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="bg-green-100 text-green-800 p-6 rounded-lg mb-6">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
          <p className="text-lg">Your details have been submitted successfully.</p>
        </div>
        <p className="text-gray-600">Redirecting you to the home page...</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center px-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
          <p className="text-gray-600">
            We are getting our next quiz reviewed. Join the waitlist to get notified.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Email */}
          <div>
            <Label htmlFor="userEmail" className="text-sm font-medium text-gray-700">
              Your email address
            </Label>
            <Input
              id="userEmail"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className={`mt-1 ${errors.userEmail ? 'border-red-500' : ''}`}
              placeholder="your.email@example.com"
              required
            />
            {errors.userEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.userEmail}</p>
            )}
          </div>

          {/* Partner Email */}
          <div>
            <Label htmlFor="partnerEmail" className="text-sm font-medium text-gray-700">
              Your partner's email address
            </Label>
            <Input
              id="partnerEmail"
              type="email"
              value={partnerEmail}
              onChange={(e) => setPartnerEmail(e.target.value)}
              className={`mt-1 ${errors.partnerEmail ? 'border-red-500' : ''}`}
              placeholder="partner.email@example.com"
              required
            />
            {errors.partnerEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.partnerEmail}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-200"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
