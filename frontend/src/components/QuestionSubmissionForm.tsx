import React, { useState } from 'react';
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

const QuestionSubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: 0,
    category: 'Celo' as const,
    difficulty: 'Easy' as const,
    explanation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.question.trim()) {
      toast.error('Please enter a question');
      return;
    }

    if (!formData.option1.trim() || !formData.option2.trim() || !formData.option3.trim() || !formData.option4.trim()) {
      toast.error('Please fill all options');
      return;
    }

    if (!formData.explanation.trim()) {
      toast.error('Please provide an explanation');
      return;
    }

    const submission: QuestionSubmission = {
      question: formData.question,
      options: [formData.option1, formData.option2, formData.option3, formData.option4],
      correctAnswer: formData.correctAnswer,
      category: formData.category,
      difficulty: formData.difficulty,
      explanation: formData.explanation,
      submittedBy: 'Anonymous', // In real app, get from wallet
      submittedAt: new Date().toISOString(),
    };

    // Store in localStorage for demo
    const existing = JSON.parse(localStorage.getItem('questionSubmissions') || '[]');
    existing.push(submission);
    localStorage.setItem('questionSubmissions', JSON.stringify(existing));

    toast.success('Question submitted for review!');

    // Reset form
    setFormData({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correctAnswer: 0,
      category: 'Celo',
      difficulty: 'Easy',
      explanation: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Submit a Question</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question
          </label>
          <textarea
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={3}
            placeholder="Enter your trivia question..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="Celo">Celo</option>
              <option value="DeFi">DeFi</option>
              <option value="Web3">Web3</option>
              <option value="GeneralCrypto">General Crypto</option>
              <option value="NFTs">NFTs</option>
              <option value="DAOs">DAOs</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              value={formData.difficulty}
              onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Answer Options
          </label>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={formData.correctAnswer === num - 1}
                  onChange={() => setFormData({ ...formData, correctAnswer: num - 1 })}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <input
                  type="text"
                  value={formData[`option${num}` as keyof typeof formData] as string}
                  onChange={(e) => setFormData({ ...formData, [`option${num}`]: e.target.value })}
                  className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={`Option ${num}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Explanation
          </label>
          <textarea
            value={formData.explanation}
            onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={3}
            placeholder="Explain why this is the correct answer..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Submit Question
        </button>
      </form>
    </motion.div>
  );
};

export default QuestionSubmissionForm;