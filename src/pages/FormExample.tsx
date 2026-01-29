import { useState } from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { Navbar } from '../components/Navbar';

interface FormData {
  text: string;
  email: string;
  password: string;
  number: string;
  tel: string;
  url: string;
  date: string;
  time: string;
  datetime: string;
  month: string;
  week: string;
  color: string;
  range: string;
  search: string;
  textarea: string;
  select: string;
  multiSelect: string[];
  radio: string;
  checkbox: boolean;
  file: string;
  switch: boolean;
}

export function FormExample() {
  const { goBack } = useAppNavigation();
  
  const [formData, setFormData] = useState<FormData>({
    text: '',
    email: '',
    password: '',
    number: '',
    tel: '',
    url: '',
    date: '',
    time: '',
    datetime: '',
    month: '',
    week: '',
    color: '#3B82F6',
    range: '50',
    search: '',
    textarea: '',
    select: '',
    multiSelect: [],
    radio: '',
    checkbox: false,
    file: '',
    switch: false,
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      multiSelect: prev.multiSelect.includes(value)
        ? prev.multiSelect.filter(item => item !== value)
        : [...prev.multiSelect, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
    goBack();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-black">
      {/* Navbar with custom actions */}
      <Navbar
        title="Form Example"
        showBackButton={false}
        rightAction={
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center px-4 py-2 bg-blue-600/90 dark:bg-blue-500/90 backdrop-blur-sm rounded-full shadow-lg transition-opacity no-select active:scale-95 transition-transform"
            aria-label="Submit"
          >
            <span className="text-white font-medium">Submit</span>
          </button>
        }
      />

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto scroll-area">
        <div className="p-4 space-y-6 safe-x">
          {/* Text Inputs */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Text Inputs</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Text Input
              </label>
              <input
                type="text"
                value={formData.text}
                onChange={(e) => handleInputChange('text', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Input
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password Input
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number Input
              </label>
              <input
                type="number"
                value={formData.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Input
              </label>
              <input
                type="tel"
                value={formData.tel}
                onChange={(e) => handleInputChange('tel', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL Input
              </label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search Input
              </label>
              <input
                type="search"
                value={formData.search}
                onChange={(e) => handleInputChange('search', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Date & Time Inputs */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Date & Time</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date Input
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Input
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Month Input
              </label>
              <input
                type="month"
                value={formData.month}
                onChange={(e) => handleInputChange('month', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Week Input
              </label>
              <input
                type="week"
                value={formData.week}
                onChange={(e) => handleInputChange('week', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Other Inputs */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Other Inputs</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Color Input
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={formData.color}
                  onChange={(e) => handleInputChange('color', e.target.value)}
                  className="h-12 w-20 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                />
                <span className="text-gray-900 dark:text-white">{formData.color}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Range Input: {formData.range}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.range}
                onChange={(e) => handleInputChange('range', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File Input
              </label>
              <input
                type="file"
                onChange={(e) => handleInputChange('file', e.target.files?.[0]?.name || '')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Textarea
              </label>
              <textarea
                value={formData.textarea}
                onChange={(e) => handleInputChange('textarea', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter longer text here..."
              />
            </div>
          </div>

          {/* Select Inputs */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Selection</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Dropdown
              </label>
              <select
                value={formData.select}
                onChange={(e) => handleInputChange('select', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Multi-Select Checkboxes
              </label>
              <div className="space-y-2">
                {['Option A', 'Option B', 'Option C'].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.multiSelect.includes(option)}
                      onChange={() => handleMultiSelectChange(option)}
                      className="w-5 h-5 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-900 dark:text-white">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Radio Buttons
              </label>
              <div className="space-y-2">
                {['Radio 1', 'Radio 2', 'Radio 3'].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="radio"
                      value={option}
                      checked={formData.radio === option}
                      onChange={(e) => handleInputChange('radio', e.target.value)}
                      className="w-5 h-5 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-900 dark:text-white">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Toggle Inputs */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Toggles</h2>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.checkbox}
                onChange={(e) => handleInputChange('checkbox', e.target.checked)}
                className="w-5 h-5 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-900 dark:text-white">Checkbox Option</span>
            </label>

            <div className="flex items-center justify-between">
              <span className="text-gray-900 dark:text-white">Switch Toggle</span>
              <button
                type="button"
                onClick={() => handleInputChange('switch', !formData.switch)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  formData.switch ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.switch ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Bottom padding */}
          <div className="h-20"></div>
        </div>
      </form>
    </div>
  );
}
