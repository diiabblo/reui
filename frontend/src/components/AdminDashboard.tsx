import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface QuestionSubmission {
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'Celo' | 'DeFi' | 'Web3' | 'GeneralCrypto' | 'NFTs' | 'DAOs';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
  submittedBy: string;
  submittedAt: string;
}

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<QuestionSubmission[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('questionSubmissions') || '[]');
    setSubmissions(stored);
  }, []);

  const approveQuestion = (index: number) => {
    // In real app, add to main questions database
    toast.success('Question approved! (Demo - not actually added)');
    // Remove from submissions
    const newSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(newSubmissions);
    localStorage.setItem('questionSubmissions', JSON.stringify(newSubmissions));
  };

  const rejectQuestion = (index: number) => {
    const newSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(newSubmissions);
    localStorage.setItem('questionSubmissions', JSON.stringify(newSubmissions));
    toast.success('Question rejected');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Question Review Dashboard</h2>

      <div className="grid gap-6">
        {submissions.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No submissions to review
          </div>
        ) : (
          submissions.map((submission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{submission.question}</h3>
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {submission.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                      {submission.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Submitted by {submission.submittedBy} on {new Date(submission.submittedAt).toLocaleDateString()}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Options:</h4>
                <ul className="space-y-1">
                  {submission.options.map((option, i) => (
                    <li key={i} className={`p-2 rounded ${i === submission.correctAnswer ? 'bg-green-100 border border-green-300' : 'bg-gray-50'}`}>
                      {i + 1}. {option} {i === submission.correctAnswer && '(Correct)'}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Explanation:</h4>
                <p className="text-gray-700">{submission.explanation}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => approveQuestion(index)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectQuestion(index)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Reject
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default AdminDashboard;