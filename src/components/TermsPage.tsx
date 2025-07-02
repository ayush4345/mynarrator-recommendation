
import React from 'react';
import { Button } from '@/components/ui/button';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage = ({ onBack }: TermsPageProps) => {
  return (
    <div className="h-screen flex flex-col px-6 py-8" style={{ backgroundColor: '#f8f8ff' }}>
      <div className="max-w-4xl mx-auto w-full flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          <Button
            onClick={onBack}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Back to Quiz
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="mb-8 text-gray-700 text-base leading-relaxed">
              By accessing and using our relationship quiz service ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              1. Nature of Service
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Our quiz is designed for entertainment and self-reflection purposes only. The results provided are:
            </p>
            <ul className="mb-8 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>Based on general behavioral patterns and common relationship dynamics</li>
              <li>Not personalized professional advice</li>
              <li>Not a substitute for professional counseling, therapy, or relationship guidance</li>
              <li>Intended to promote self-awareness and discussion, not to make definitive judgments about relationships</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              2. No Professional Advice
            </h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-semibold mb-3">
                IMPORTANT DISCLAIMER: Our Service does not provide:
              </p>
              <ul className="text-red-700 list-disc pl-6 space-y-1 leading-relaxed">
                <li>Professional relationship counseling</li>
                <li>Psychological or psychiatric advice</li>
                <li>Therapeutic services</li>
                <li>Medical advice</li>
                <li>Legal advice regarding relationships or personal matters</li>
              </ul>
            </div>
            <p className="mb-8 text-gray-700 leading-relaxed">
              The quiz results should not be used as the sole basis for making important relationship decisions.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              3. Limitation of Liability
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-semibold mb-3">
                YOU ACKNOWLEDGE AND AGREE THAT:
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800">3.1 Personal Responsibility</h3>
            <ul className="mb-6 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>You are solely responsible for your relationship decisions</li>
              <li>Any actions you take based on quiz results are entirely your own choice</li>
              <li>We are not responsible for any consequences arising from your interpretation or use of quiz results</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">3.2 No Liability for Relationship Outcomes</h3>
            <p className="mb-3 text-gray-700 font-medium">We shall not be liable for:</p>
            <ul className="mb-6 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>Relationship conflicts, arguments, or breakups</li>
              <li>Emotional distress caused by quiz results</li>
              <li>Misunderstandings between you and your partner</li>
              <li>Any relationship decisions made based on quiz results</li>
              <li>Loss of relationships or personal connections</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">3.3 Maximum Liability</h3>
            <p className="mb-8 text-gray-700 leading-relaxed">
              In no event shall our total liability exceed the amount you paid for the Service (if any). For free services, our liability is limited to $0.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              4. User Responsibilities
            </h2>
            <p className="mb-3 text-gray-700 font-medium">By using our Service, you agree to:</p>
            <ul className="mb-8 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>Use quiz results as general guidance only, not absolute truth</li>
              <li>Consider professional counseling for serious relationship concerns</li>
              <li>Not hold us responsible for relationship outcomes</li>
              <li>Understand that quiz results are based on limited information</li>
              <li>Use your own judgment in all relationship matters</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              5. Accuracy Disclaimer
            </h2>
            <p className="mb-3 text-gray-700 font-medium">While we strive to provide meaningful insights:</p>
            <ul className="mb-8 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>Quiz results may not reflect the full complexity of your relationship</li>
              <li>All relationships are unique and cannot be fully captured by any quiz</li>
              <li>Results are based on general patterns, not individual circumstances</li>
              <li>We make no guarantees about the accuracy or completeness of results</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              6. Privacy and Data
            </h2>
            <ul className="mb-8 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>We respect your privacy and handle data according to our Privacy Policy</li>
              <li>Quiz responses may be anonymized and used for service improvement</li>
              <li>We do not share personal information with third parties without consent</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              7. Age Restrictions
            </h2>
            <ul className="mb-8 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>Users must be at least 18 years old to use this Service</li>
              <li>By using the Service, you confirm you meet this age requirement</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              8. Modifications
            </h2>
            <p className="mb-3 text-gray-700 font-medium">We reserve the right to:</p>
            <ul className="mb-4 text-gray-700 list-disc pl-8 space-y-2 leading-relaxed">
              <li>Modify these Terms at any time</li>
              <li>Update quiz content and scoring</li>
              <li>Discontinue the Service with or without notice</li>
            </ul>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Continued use after modifications constitutes acceptance of updated Terms.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              9. Severability
            </h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
              If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              10. Governing Law
            </h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
              These Terms shall be governed by [YOUR JURISDICTION] law, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              11. Contact Information
            </h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
              For questions about these Terms, contact us at: [YOUR EMAIL]
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-blue-900 font-bold text-lg mb-4 text-center">
                ACCEPTANCE OF TERMS
              </p>
              <p className="text-blue-800 font-semibold mb-3 text-center">
                BY USING OUR SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
              </p>
              <div className="border-t border-blue-300 pt-4 mt-4">
                <p className="text-blue-700 font-medium text-center">
                  <strong>REMEMBER:</strong> This quiz is for entertainment and self-reflection. For serious relationship concerns, please consult qualified professionals such as licensed therapists, counselors, or relationship coaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
