import { useState } from 'react';

interface PasswordProtectionProps {
  onSuccess: () => void;
}

export default function PasswordProtection({ onSuccess }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里使用一个简单的密码，实际应用中应该使用更安全的方式
    if (password === 'wpsai2025') {
      onSuccess();
      // 将验证状态存储在 localStorage 中，24小时内有效
      localStorage.setItem('wpsai_verified', 'true');
      localStorage.setItem('wpsai_verified_time', Date.now().toString());
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-md w-full space-y-8 p-12 bg-white rounded-2xl shadow-xl">
        <div>
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-2">
            WPS AI 2.0
          </h2>
          <p className="text-center text-lg text-gray-600">
            项目预览
          </p>
          <div className="mt-4 text-center text-sm text-gray-500">
            请输入密码以访问此页面
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-lg shadow-sm">
            <div>
              <label htmlFor="password" className="sr-only">
                密码
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-base"
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
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
            >
              验证
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 