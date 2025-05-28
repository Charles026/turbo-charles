import { useState } from 'react';

interface PasswordProtectionProps {
  onSuccess: () => void;
}

export default function PasswordProtection({ onSuccess }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'wpsai2025') {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <div>
        <div className="mt-2 mb-2 font-bold text-center text-gray-900 dark:text-white text-xl">
          请输入密码以访问此页面
        </div>
        <div className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400 ">
          此页面受密码保护，请征得同意后分享链接
        </div>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-lg">
          <div>
            <label htmlFor="password" className="sr-only">
              密码
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 focus:z-10 text-base dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center animate-shake">
            密码错误，请重试
          </div>
        )}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-gray-900 text-base font-medium rounded-lg text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            进入
          </button>
        </div>
      </form>
    </div>
  );
} 