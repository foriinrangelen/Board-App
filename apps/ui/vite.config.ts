import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 프록시 설정 , '/로 시작하는 모든 애들은 'http://localhost:3001'로 간다'
  server: {
    proxy: {
      '/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  }
})
