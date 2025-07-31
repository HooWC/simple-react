import { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <h1>欢迎来到React学习项目</h1>
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="请输入你的名字"
        />
        {name && <p>你好, {name}!</p>}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>这个项目包含以下React概念：</h2>
        <ul>
          <li>组件的创建和使用</li>
          <li>React Router的路由管理</li>
          <li>useState Hook的状态管理</li>
          <li>useEffect Hook的使用</li>
          <li>表单处理</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;